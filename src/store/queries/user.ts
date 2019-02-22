import gql from 'graphql-tag';


export const accountQuery = gql`{
  account @client {
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
}`



