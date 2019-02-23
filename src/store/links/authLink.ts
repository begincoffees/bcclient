import { ApolloLink } from "apollo-link";

const token = localStorage.getItem('BC_AUTH') || 'bigboi';

const authLink = new ApolloLink((operation, forward: any) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return forward(operation)
})

export { authLink }