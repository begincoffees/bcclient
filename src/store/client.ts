
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

async function configureClient() {
  const cache = await createCache()
  const link = await createLink()
  return { cache, link }
}

export { configureClient }
