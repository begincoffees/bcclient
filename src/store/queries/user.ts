import gql from 'graphql-tag';


export const accountQuery = gql`
  query{
    viewer {
      me {
        id
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



