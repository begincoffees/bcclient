import gql from 'graphql-tag';


export const accountQuery = gql`
query($id: ID) {
  viewer {
    me(id: $id) {
      role
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
}`



