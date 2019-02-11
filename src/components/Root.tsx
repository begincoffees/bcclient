import React, { Suspense } from 'react';
import { ApolloProvider as ApolloHooks } from 'react-apollo-hooks';

import { App, Loader } from 'src/components';
import { client } from 'src/store'
import 'src/styles/index.css';


function Root() {
  return (
    <ApolloHooks client={client}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ApolloHooks>
  )
}


export { Root }