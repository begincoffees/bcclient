import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { ApolloCache } from 'apollo-cache';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

const stateLink = withClientState({
  defaults: {
    CurrentUser: {
      __typename: 'CurrentUser',
      isLoggedIn: false,
      id: '',
      email: '',
      token: '',
      role: '',
      stripeId: '',
      purchases: [],
      sales: [],
      products: []
    },
    Account: {
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

        cache.writeData({ data })

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

export { stateLink }