import React, { useState, useCallback } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Form, Card, Button } from 'antd';

import { formItemLayout } from 'src/components/constants';
import { useCheckout } from 'src/store';


const {Item: FormItem } = Form

function PaymentForm(props: any) {
  const [payment, update] = useState({})
  const [, dispatch] = useCheckout()

  const getPayment = useCallback(async (res) => {
    await props.stripe
      .createToken(res)
      .then(res => {
        dispatch.updateForm({token: res.token.id})
        dispatch.updateStepper({
          payment: true, 
          step: 2,
        })
      })
  }, [update])

  return (
    <Card>
      <FormItem {...formItemLayout}>
        <CardElement onChange={(e) => update(e)}/>
      </FormItem>

      <Button 
        type="primary" 
        onClick={() => getPayment(payment)}
      >
        Next
      </Button>
    </Card>

  );
}

export default injectStripe(PaymentForm)