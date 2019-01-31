import ApolloClient from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import dotenv from 'dotenv';

dotenv.load()
const cache = new InMemoryCache();
const token = localStorage.getItem('BC_AUTH') || 'bigboi';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL}/bcgraph`, 
})

const query = `?headers={Authorization:Bearer ${process.env.REACT_APP_PRISMA_WEB_SOCKET_TOKEN}}`
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_PRISMA_WEB_SOCKET_LINK + query
});

const authLink = new ApolloLink((operation, forward: any) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return forward(operation)
})

const link = split(({ query }) => {
  const { kind, ...rest } = getMainDefinition(query);
  return (
    kind === 'OperationDefinition' &&
    (rest as OperationDefinitionNode).operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink)
);

persistCache({
  cache,
  storage: window.localStorage
})

const client = new ApolloClient({
  link,
  cache,
})



export { client }