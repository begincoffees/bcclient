import React, { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooks } from 'react-apollo-hooks';

import { App, Loader } from 'src/components';
import { client } from 'src/store'
import 'src/styles/index.css';


function Root() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooks client={client}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </ApolloHooks>
    </ApolloProvider>
  )
}


export { Root }