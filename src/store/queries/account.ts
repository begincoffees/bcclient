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

export const currentUser = gql`{
    currentUser @client {
      isLoggedIn
      id
      email
      stripeId
      role
    }
  }`

export const setCurrentUser = gql`
  mutation setCurrentUser(
    $isLoggedIn: Boolean
    $id: String
    $email: String
    $stripeId: String
    $role: String
  ) {
    setCurrentUser(
      id: $id
      isLoggedIn: $isLoggedIn
      email: $email
      stripeId: $stripeId
      role: $role
    ) @client {
      id
      isLoggedIn
      email
      stripeId
      role
    }
  }
`