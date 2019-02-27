
import { CachePersistor } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';

const persistor = new CachePersistor({
  cache: new InMemoryCache(),
  storage: window.localStorage
})

export const configureResources = async () => {
  const prevCache = localStorage.getItem('apollo-cache-persist')
  const data = await persistor.cache.restore(prevCache)

  return data
}

export const resource = configureResources()

