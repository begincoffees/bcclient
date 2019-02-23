import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL}/bcgraph`,
})

export { httpLink }