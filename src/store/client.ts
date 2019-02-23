import { ApolloClient } from 'apollo-client';
import dotenv from 'dotenv';

import { createCache, createLink } from 'src/store'


/** types */
export interface AuthArgs {
  token: string;
  email: string;
  id: string;
};

/** globals */
dotenv.load()

async function createClient() {
  const cache = await createCache()
  const link = await createLink()

  const client = new ApolloClient({
    link,
    cache,
  })

  return client
}

export { createClient }
