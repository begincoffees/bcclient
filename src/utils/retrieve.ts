import { store } from 'reducers';
import { AttachmentErrors } from 'services';
import { Attachment } from 'types';
import {
  API_REQUEST_RETRY_INTERVAL,
  CLOUD_FILES_URL,
  DEVELOPMENT_HEADER_TYPE,
  DEVELOPMENT_MODE,
  PRODUCTION_HEADER_TYPE,
  READYSTATE_DONE,
  TIMING_EVENT,
} from 'appConstants';

enum httpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

enum httpStatusCode {
  CREATED = 201,
  FORBIDDEN = 403,
  NO_CONTENT = 204,
  OK = 200,
  RATE_LIMIT = 429,
}

class ApiError extends Error {
  status: number;
  statusText: string;

  constructor({ status = 0, statusText = '' }: Response) {
    super(`${status}: ${statusText}`);
    this.statusText = statusText;
    this.status = status;
  }
}

interface CancellablePromise extends Promise<{}> {
  cancel?: () => void;
}

interface RequestOptions {
  /**
   * Specifies a function to execute if request and/or retry result in an error.
   */
  onError?: (error: {}) => void;

  /**
   * Specifies a function to execute each time request attempts a retry.
   * Callback is provided a method that will cancel the current delay and make
   * the next attempt immediately when executed.
   */
  onRetry?: (retryNow: () => void, wait: number) => void;

  /**
   * Specifies a function to execute when the request is successful.
   */
  onSuccess?: (response: {}) => void;

  /**
   * Specifies number of request retry that will be made before finally
   * throwing an error. Defaults to 1.
   *
   * Each request will have a delay increasing by 5 seconds each retry, i.e. 5,
   * then 10, then 15, etc.
   */
  retries?: number;

  /**
   * Takes the parsed http response and applies a transformed state prior to
   * resolving. Request will use transformed response for onSuccess and return.
   */
  transform?: (response: {}) => {};
}

/**
 * Creates a promise that will resolve after the specified duration and cache
 * to a local dict with capability to end delay early
 */
const delay = (ms: number): CancellablePromise => {
  let resolveFn: Function;
  let timeoutId: number;

  const promise: CancellablePromise = new Promise((resolve) => {
    resolveFn = resolve;
    timeoutId = window.setTimeout(resolve, ms || 0);
  });

  promise.cancel = () => {
    resolveFn();
    clearTimeout(timeoutId);
  };

  return promise;
};

/**
 * Make API Request using cached configuration, returning a parsed JSON object
 */
class Retrieve {
  private reqConfig = process.env.NODE_ENV !== DEVELOPMENT_MODE
    ? {
        Accept: PRODUCTION_HEADER_TYPE,
        'Content-Type': PRODUCTION_HEADER_TYPE,
      }
    : {
        Accept: DEVELOPMENT_HEADER_TYPE,
        'Content-Type': DEVELOPMENT_HEADER_TYPE,
      };

  private requestConfig = {
    credentials: <RequestCredentials>'same-origin',
    headers: new Headers(this.reqConfig),
  };

  /** Makes GET request to the specified URL */
  get(url: string, options?: RequestOptions) {
    return this.makeRequest(httpMethod.GET, url, undefined, options);
  }

  delete(url: string, options?: RequestOptions) {
    return this.makeRequest(httpMethod.DELETE, url, undefined, options);
  }

  /** Makes PATCH request to the specified URL using the given payload */
  patch(url: string, payload: {}, options?: RequestOptions) {
    return this.makeRequest(httpMethod.PATCH, url, payload, options);
  }

  /** Makes PUT request to the specified URL using the given payload */
  put(url: string, payload: {}, options?: RequestOptions) {
    return this.makeRequest(httpMethod.PUT, url, payload, options);
  }

  /** Makes POST request to the specified URL using the given payload */
  post(url: string, payload: {}, options?: RequestOptions) {
    return this.makeRequest(httpMethod.POST, url, payload, options);
  }

  /** Uploads a file with callback on upload progress event */
  async upload(
    attachment: Attachment,
    body: FormData,
    url: string,
    onUpdate: (attachment: Attachment) => void,
  ) {
    const xhr = new XMLHttpRequest();
    xhr.open(httpMethod.POST, CLOUD_FILES_URL + `${url}`, true);

    const onProgress = (e: ProgressEvent) => {
      if (e.lengthComputable) {
        const progress = (e.loaded / e.total * 100).toFixed();
        onUpdate({ ...attachment, status: { progress } });
      }
    };
    const onFailure = (e: ProgressEvent) => {
      onUpdate({
        ...attachment,
        errors: new Set([AttachmentErrors.UPLOAD_FAILURE]),
      });
    };

    xhr.upload.addEventListener('progress', onProgress);
    xhr.upload.addEventListener('error', onFailure);
    xhr.upload.addEventListener('abort', onFailure);

    xhr.onreadystatechange = () => {
      const { readyState, status } = xhr;
      const isComplete =
        readyState === READYSTATE_DONE &&
        (status === httpStatusCode.CREATED || status === httpStatusCode.OK);

      if (isComplete) {
        onUpdate({
          ...attachment,
          errors: new Set([]),
          status: { complete: true },
        });
      }
    };

    xhr.send(body);
  }

  /**
   * Handles logic for executing API call and applying config, attempts, etc.
   */
  private async makeRequest(
    method: httpMethod,
    url: string,
    payload?: {},
    options: RequestOptions = {},
  ) {
    const updateConfig = Object.assign(
      { method: method },
      method !== httpMethod.GET && method !== httpMethod.DELETE
        ? { body: JSON.stringify(payload) }
        : {},
      this.requestConfig,
    );

    const maxAttempts = options.retries ? options.retries + 1 : 1;
    let wait = 0;

    // Strip out potential trailing slash
    url = url.replace(/\/$/, '');

    let error = new ApiError({} as Response);
    for (let i = 0; i < maxAttempts; i++) {
      try {
        // If in a retry, execute the callback before starting delay
        if (i > 0 && options.onRetry) {
          // Delay increases by 5 seconds each loop (configurable)
          const delayPromise = delay(wait);

          // Pass the cancel function to the retry callback
          options.onRetry(delayPromise.cancel!, wait / 1000);

          // Wait for the delay
          await delayPromise;
        }
        const startTime = Date.now();
        const responseResource = await fetch(url, updateConfig);

        const { pathname } = new URL(url, location.href);
        store.dispatch({
          type: TIMING_EVENT,
          method,
          url: pathname,
          time: Date.now() - startTime,
        });

        if (!responseResource.ok) {
          throw new ApiError(responseResource);
        }

        let response =
          responseResource.status === httpStatusCode.NO_CONTENT
            ? ''
            : await responseResource.json();

        if (response && options.transform) {
          response = options.transform(response);
        }

        if (options.onSuccess) {
          options.onSuccess(response);
        }

        return response;
      } catch (err) {
        error = err;

        // If forbidden don't bother retrying
        if (
          error.status === httpStatusCode.FORBIDDEN ||
          error.status === httpStatusCode.RATE_LIMIT
        ) {
          break;
        }

        wait += API_REQUEST_RETRY_INTERVAL;
      }
    }

    if (options.onError) {
      options.onError(error);
      return;
    }
    throw error;
  }
}

const RetrieveSingleton = new Retrieve();
export { RetrieveSingleton as Retrieve };
