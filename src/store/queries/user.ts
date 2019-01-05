import  gql  from 'graphql-tag';

export const userQuery = gql`
  query {
    viewer {
      me {
        id
        email
        role
        firstName
        lastName
        bizName
        stripeId
        products {
          id
          name
          price
          description
          varietal
        }
        purchases {
          id
          amount
          createdAt
          items {
            name
            price
          }
          shippingAddress {
            id
            zip
          }
        }
        sales {
          id
          amount
          email
          createdAt
          items {
            id
          }
        }
      }
    }
  }
`

export const LOG_IN = gql `
  mutation($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user {
        id
        email
        stripeId
      }
    }
  }
`




