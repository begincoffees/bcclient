import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';

async function createCache() {
  const cache = new InMemoryCache()

  await persistCache({
    cache,
    storage: window.localStorage
  })

  return cache
}

export { createCache }
