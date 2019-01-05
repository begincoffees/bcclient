import React, { useState } from 'react';
import { Layout } from 'antd';
import { BcContainer, BcNav, CartPage } from 'src/components';

function BcMenu(props: any) {
  const [cartOpen, toggleCart] = useState(false)
  return (
    <>
      <Layout style={{background: 'transparent'}}>
        {cartOpen && 
          <BcContainer margin="0.5rem 5rem" padding="0rem">
            <CartPage toggleCart={() => toggleCart(!cartOpen)}/>
          </BcContainer>
        }

        <BcNav
          cartOpen={cartOpen}
          toggleCart={() => toggleCart(!cartOpen)}
        />
      </Layout>
      {props.children}
    </>
  )
}

export { BcMenu }