import React, { useEffect } from 'react';
import { Button, message } from 'antd';

import { useCart } from 'src/store';

export function AddItemButton(item: any) {
  const [submitted, dispatch] = useCart()
  useEffect(() => {setTimeout(() => message.destroy(), 1700)}, [submitted])
  return (
    <Button 
      htmlType="button" 
      type="default"
      onClick={() => {
        dispatch.addItem(item)
        message.success('Added to Cart')
      }}
    >
      Add to Cart
    </Button>
  )
}
