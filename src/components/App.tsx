import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import {
  BcMenu,
  Routes,
} from 'src/components'
import { CartProvider, CheckoutProvider } from 'src/store'

const Stripe = StripeProvider as any

function App(props: any) {
  return (
    <Stripe apiKey={process.env.REACT_APP_STRIPE_TOKEN}>
      <Elements>
        <CartProvider>
          <CheckoutProvider>
            <BcMenu {...props}>
              <Routes {...props} />
            </BcMenu>
          </CheckoutProvider>
        </CartProvider>
      </Elements>
    </Stripe>
  )
}


export { App }
