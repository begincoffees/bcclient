import React from 'react';
import { Card, Button, Form, Input } from 'antd';

import { useCheckout } from 'src/store';
import { formItemLayout } from 'src/components/constants';

function AuthorizeForm(props: any) {
  const [, dispatch] = useCheckout();
  return (
    <Card>
      <Form.Item {...formItemLayout}>
        <Input 
          onInput={(e) => dispatch.updateForm({email: e.currentTarget.value})} 
          placeholder="Email" 
        />
      </Form.Item>

      <Button type="primary" onClick={props.updateField}>
        Complete Purchase
      </Button>
    </Card>
  )
}

export { AuthorizeForm }