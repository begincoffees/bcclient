import gql from 'graphql-tag';

export const checkoutMutation = gql`
  mutation(
    $amount: String, 
    $email: String, 
    $items: [ProductWhereInput], 
    $vendors: [UserWhereInput],
    $token: String!,
    $stripeId: String
    $city: String!,
    $state: String!,
    $zip: String!,
    $street: String!,
  ) {
    checkout(
      amount: $amount,
      email: $email,
      items: $items,
      token: $token,
      stripeId: $stripeId
      vendors: $vendors,
      city: $city,
      state: $state,
      zip: $zip,
      street: $street,
      ){
      success
    }
  }
`