import gql from 'graphql-tag'

const feed = gql`
  query {
    feed {
      id
      name
      description
      price
      vendor {
        id
      }
    }
  }
`
export { feed }