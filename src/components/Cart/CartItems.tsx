import React from 'react';

import { ItemsTable } from 'src/components';
import { useCart } from 'src/store';

function CartItems(props: any){
  const [cart, ] = useCart()
  return (
    <div style={{minHeight: 'auto'}}>
      <ItemsTable 
        items={cart.items}
        total={cart.totalPrice}
        {...props}
      />
    </div>
)
}

export { CartItems }