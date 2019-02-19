import ApolloClient from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import dotenv from 'dotenv';
import { withClientState } from 'apollo-link-state';

import { initialUserState } from 'src/store';
import { AccountData } from 'src/types';
import { currentUser } from './queries';

/** globals */
dotenv.load()
const cache = new InMemoryCache();
const token = localStorage.getItem('BC_AUTH') || 'bigboi';

/** Links */
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

const stateLink = withClientState({
  cache,
  defaults: {
    currentUser: {
      __typename: 'CurrentUser',
      isLoggedIn: false,
      id: '',
      email: '',
      stripeId: '',
      purchases: [],
      sales: [],
      products: [],
      role: ''
    }
  },
  resolvers: {
    Mutation: {
      setCurrentUser: async (_link: any, { ...nextState }: AccountData, { cache }: any) => {
        const prevState = await cache.readQuery({ query: currentUser })
        console.log({ setCurrentUserPrevState: prevState })
        cache.writeQuery({
          __typename: 'CurrentUser',
          ...nextState
        })

        return null
      },
      getAccountsQuery: async (_link: any, { ...nextState }: AccountData, { cache }: any) => {
        const res = await cache.readQuery({ query: currentUser })
        return res
      },
      clearAccountsQuery: (_link: any, { ...nextState }: AccountData, { cache }: any) => {
        const data = {
          currentUser: {
            __typename: 'CurrentUser',
            ...initialUserState
          }
        }
        cache.writeData({ data })
        return null
      },
      updateNetworkStatus: (_link: any, { isConnected }: any, { cache }: any) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          },
        };

        console.log(data)
        cache.writeData({ data });
        return null;
      },
    },
  }
});

const link = split(({ query }) => {
  const { kind, ...rest } = getMainDefinition(query);
  return (
    kind === 'OperationDefinition' &&
    (rest as OperationDefinitionNode).operation === 'subscription'
  )
},
  wsLink,
  authLink.concat(stateLink.concat(httpLink))
);


/** cache and client */
persistCache({
  cache,
  storage: window.localStorage
})

const client = new ApolloClient({
  link,
  cache,
})



export { client }