import ApolloClient from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { ApolloCache } from 'apollo-cache';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import dotenv from 'dotenv';
import { withClientState } from 'apollo-link-state';


/** types */
export interface AuthArgs {
  token: string;
  email: string;
  id: string;
};

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
      token: '',
      role: ''
    },
    account: {
      __typename: 'Account',
      role: '',
      stripeId: '',
      purchases: [],
      sales: [],
      products: []
    }
  },
  resolvers: {
    Mutation: {
      loginUser: async (
        _link: ApolloLink,
        { id, email, token }: { id: string; email: string; token: string; },
        { cache }: { cache: ApolloCache<NormalizedCacheObject> }
      ) => {
        const data = {
          currentUser: {
            __typename: 'CurrentUser',
            id,
            email,
            isLoggedIn: !!id,
            token
          }
        }

        cache.writeData({ data })

        return null
      },
      logoutUser: async (
        _link: ApolloLink,
        _args: {},
        { cache }: { cache: ApolloCache<NormalizedCacheObject> }
      ) => {
        const data = {
          currentUser: {
            __typename: 'CurrentUser',
            isLoggedIn: false,
            id: '',
            email: '',
            token: '',
            role: '',
          },
          account: {
            __typename: 'Account',
            stripeId: '',
            purchases: [],
            sales: [],
            products: []
          }
        }

        await cache.writeData({ data })

        return null

      },
      updateNetworkStatus: (
        _link: ApolloLink,
        { isConnected }: { isConnected: boolean },
        { cache }: any
      ) => {

        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          },
        };
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