import React, { useCallback } from 'react';
import { Redirect } from '@reach/router';
import { Layout, message, Button, Card, Steps, Form } from 'antd';

import {
  ItemsTable,
  ShippingForm,
  AuthorizeForm,
} from 'src/components';
import {
  checkoutMutation,
  useCart,
  useUserState,
  useCheckout,
} from 'src/store';
import PaymentForm from './PaymentForm';
import { ApolloConsumer } from 'react-apollo';

const Step = Steps.Step

function CheckoutPage() {
  return (
    <ApolloConsumer>
      {client => <CheckoutContainer client={client} />}
    </ApolloConsumer>
  )
}

function CheckoutContainer(props: any) {
  /** state */
  const [cart, cartDispatch] = useCart();
  const [checkout, checkoutDispatch] = useCheckout()
  const user = useUserState();

  /** constants */
  const vendors = cart.items.map(i => ({ id: i.product.vendor.id }))
  const items = cart.items.map(i => ({ id: i.product.id }))
  const invoice = {
    amount: cart.totalPrice + '00',
    items: items,
    stripeId: user.stripeId,
    vendors: vendors
  }

  /** methods */
  const completePayment = useCallback((formData) => {
    const email = user.email || formData.email;
    const { city, state, street, zip } = formData;

    props.client.mutate({
      mutation: checkoutMutation,
      variables: {
        ...invoice,
        email,
        city,
        state,
        street,
        zip,
        token: formData.token
      }
    }).then(res => res)

    checkoutDispatch.updateStepper({ userAuthorized: true, done: true })
    cartDispatch.clear()
    message.info('Thanks for your purchase!')

  }, [checkout.form.token]);

  /** render */
  if (checkout.stepper.done) {
    return (
      <Redirect
        from="/checkout"
        to="/"
        noThrow
      />
    )
  }
  return (
    <Layout.Content>
      {checkout.stepper.step === 0 &&
        <Card>
          <ItemsTable
            hideHeadings={true}
            style={{ height: 'auto', margin: '0.5rem 3rem 1rem 3rem' }}
            footer={false}
          />
          <section style={{ width: '15%', margin: '1px auto' }}>
            {
              <Button
                type="primary"
                onClick={() => checkoutDispatch.updateStepper({ items: true, step: 1 })}
                disabled={!cart.items.length}
              >
                Confirm Items
              </Button>
            }
          </section>
        </Card>
      }

      {checkout.stepper.items && !checkout.stepper.done &&
        <>
          <Card type="inner" style={{ width: '70%', margin: '0.5rem auto' }} bordered={false}>
            <Steps current={checkout.stepper.step - 1}>
              <Step title="Add Billing" />
              <Step title="Add Shipping" />
              <Step title="Complete Purchase" />
            </Steps>
          </Card>

          <Card type="inner" bordered={false}>
            <Form layout="horizontal">
              {checkout.stepper.step === 1 &&
                <PaymentForm />
              }
              {checkout.stepper.step === 2 &&
                <ShippingForm />
              }
              {checkout.stepper.step === 3 && !checkout.stepper.userAuthorized &&
                <AuthorizeForm
                  {...props}
                  updateField={() => completePayment(checkout.form)}
                />
              }
            </Form>
          </Card>
        </>
      }
    </Layout.Content>
  )
}

export { CheckoutPage }