
import React from 'react';
import { Router } from '@reach/router';

import {
  AccountsPage,
  CheckoutPage,
  LandingPage,
  LoginPage,
  LogoutPage,
  RegisterPage,
  ShopPage,
  ProductPage
} from 'src/components'

function Routes(props: any) {
  return (
    <Router>
      <LandingPage path="/" {...props} /> 
      <LoginPage path="/login" />
      <LogoutPage path="/logout"/>
      <ProductPage path="/product" />
      <RegisterPage path="/register" {...props} />
      <AccountsPage path="/account" {...props} />
      <CheckoutPage path="/checkout" {...props} />
      <ShopPage path="/shop" {...props} />
    </Router>
  )
}

export { Routes }
