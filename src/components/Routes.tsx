
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
  ProductPage,
} from 'src/components'

function Routes(props: any) {
  return (
    <Router>
      <LandingPage path="/" {...props} />
      <LoginPage path="/login" {...props} />
      <LogoutPage path="/logout" {...props} />
      <ProductPage path="/product" {...props} />
      <RegisterPage path="/register" {...props} />
      <AccountsPage path="/account" {...props} />
      <CheckoutPage path="/checkout" {...props} />
      <ShopPage path="/shop" {...props} />
    </Router>
  )
}

export { Routes }
