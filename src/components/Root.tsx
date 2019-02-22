import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { App } from 'src/components';
import { client } from 'src/store'
import 'src/styles/index.css';


function Root() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}


export { Root }