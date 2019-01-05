import React from 'react';
import { Form, Input, Button, Card } from 'antd'

import { formItemLayout } from 'src/components/constants';
import { useCheckout } from 'src/store/reducers/CheckoutState';

function ShippingForm() {
  const [, dispatch]: any = useCheckout()
  return (
    <Card>
      <Form.Item {...formItemLayout}>
        <Input 
          onInput={(e) => dispatch.updateForm({street: e.currentTarget.value})} 
          placeholder="Street Address" 
        />
      </Form.Item>

      <Form.Item {...formItemLayout}>
        <Input 
          onInput={(e) => dispatch.updateForm({city: e.currentTarget.value})} 
          placeholder="City" 
        />
      </Form.Item>

      <Form.Item {...formItemLayout} >
        <Input 
          onInput={(e) => dispatch.updateForm({state: e.currentTarget.value})}  
          placeholder="State" 
        />
      </Form.Item>

      <Form.Item {...formItemLayout}>
        <Input
          onInput={(e) => dispatch.updateForm({zip: e.currentTarget.value})}  
          placeholder="Zip" 
        />
      </Form.Item>
      <Button 
        type="primary" 
        onClick={() => dispatch.updateStepper({
          shipping: true,
          step: 3
        })}
      >
        Next
      </Button>
    </Card>
  );
}

export { ShippingForm }