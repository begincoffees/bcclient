import gql from 'graphql-tag'

export const productsQuery = gql`
  query {
    viewer {
      me {
        products {
          id
          name
          price
          description
          varietal
        }
      }
    }
  }
`

export const purchasesQuery = gql`
  query {
    viewer {
      me {
        purchases {
          id
          amount
          createdAt
          items {
            name
            price
          }
        }
      }
    }
  }
`

export const salesQuery = gql`
  query {
    viewer {
      me {
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
export const addProduct = gql`
  mutation(
    $name: String!
    $varietal: String!
    $price: String!,
    $description: String!
  ){
    createNewProduct (
      name: $name
      varietal: $varietal
      price: $price
      description: $description
    ) {
      success
    }
  }
`
export const vendorSignup = gql`
  mutation($name: String! $email: String! $password: String!){
    vendorSignup ( name: $name email: $email password: $password ) {
      token
      user {
        id
      }
    }
  }
`

export const customerSignup = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ){
    customerSignup (
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
       token
       user {
         id
       }
    }
  }
`

export const setAccountsQuery = gql`
  {
    mutation {
      setAccountsQuery @client
    }
  }
`

export const getAccountsQuery = gql`
  query {
    viewer {
      me @client {
        id
        email
        stripeId
        purchases
        sales
        products
        role
      }
    }
  }
`

export const currentUser = gql`
{
    currentUser @client {
      loading
      isLoggedIn
      id
      email
      stripeId
      purchases
      sales
      products
      role
    }
}
`