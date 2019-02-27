import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import { App, Loader } from 'src/components';
import { configureClient } from 'src/store'
import 'src/styles/index.css';
import { persistCache } from 'apollo-cache-persist';

interface RootState {
  loaded: boolean;
  client: ApolloClient<NormalizedCacheObject> | null;
  empty: boolean;
}


/**
 * this entire page of code is because of Apollo's ridiculously buggy cache
 */

class Root extends React.Component<{}, RootState> {
  state = {
    loaded: false,
    client: null,
    empty: false,
  }

  async componentDidMount() {
    const { link, cache } = await configureClient();
    await persistCache({
      cache,
      storage: window.localStorage
    })

    const client = new ApolloClient({
      link,
      cache
    })
    this.setState({ client })
  }

  componentDidUpdate(prevState: RootState) {
    if (prevState.client !== this.state.client) {

      if (this.state.client && !this.state.loaded && !this.state.empty) {
        this.setState({ loaded: true })
      }
    }
  }

  render() {

    const { loaded, client, empty } = this.state;

    if (!loaded || empty) {
      return <Loader />
    }

    return client !== null && loaded && (
      <ApolloProvider client={client}>
        <App {...this.state} />
      </ApolloProvider>
    )

  }
}


export { Root }