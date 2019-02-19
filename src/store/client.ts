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
import gql from 'graphql-tag';

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
  typeDefs: gql`
    type CurrentUser {
      isLoggedIn: Boolean,
      id: String,
      email: String,
      stripeId: String,
      role: String
    }

    type Invoice {
      id: String
      createdAt: DateTime
      updatedAt: DateTime
      amount: String
      email: String
      stripePaymentId: String
      stripeCustomerId: String
      status: String
      shippingAddress: ShippingAddress
    }

    type ShippingAddress {
      id: ID! @unique
      createdAt: DateTime!
      updatedAt: DateTime!
      recipient: String!
      street: String!
      city: String!
      state: String!
      zip: String!
      user: User @unique
      invoices: [Invoice!]!
    }

    type Product {
      id: ID! @unique
      name: String
      price: String
      description: String
      varietal: String
      vendor: User
    }

    type User {
      id: String
      role: String
      email: String
      firstName: String
      lastName: String
      bizName: String
      password: String
      stripeId: String @unique
      shippingAddresses: [ShippingAddress]
    }

    type Account {
      products: [Product]
      purchases: [Invoice]
      sales: [Invoice]
    }

  `,
  defaults: {
    currentUser: {
      __typename: 'CurrentUser',
      isLoggedIn: false,
      id: '',
      email: '',
      stripeId: '',
      role: ''
    },
    account: {
      __typename: 'Account',
      purchases: [],
      sales: [],
      products: [],
    }
  },
  resolvers: {
    Mutation: {
      setCurrentUser: async (_link: any, { id, email, isLoggedIn, stripeId = '' }: any, { cache }: any) => {
        try {
          const prevState = await cache.readQuery({ query: currentUser })

          const data = {
            currentUser: {
              __typename: 'CurrentUser',
              ...prevState,
              id,
              email,
              isLoggedIn,
              stripeId,
            }
          }

          console.log({ id, email, isLoggedIn, stripeId })

          await cache.writeQuery({ query: currentUser, data })

          return ({
            __typename: 'CurrentUser',
            id,
            email,
            isLoggedIn,
            stripeId,
          })
        } catch (err) {
          console.log(err)
          return
        }
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