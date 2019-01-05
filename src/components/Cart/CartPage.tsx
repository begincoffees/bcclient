import React, { ReactElement, Suspense } from 'react';
import { Layout, Button } from 'antd';
import { Link } from '@reach/router';

import { CartItems, Loader, } from 'src/components'
import { useCart } from 'src/store'

const { Sider, Header, Content } = Layout;

interface CartPageProps {
  readonly toggleCart: () => void;
}

function CartPage(props: CartPageProps): ReactElement<CartPageProps> {
  const [cart] = useCart()
  return (
    <Layout>
      <Suspense fallback={<Loader />}>

      <Content>
        <CartItems footer={true} {...cart} />
      </Content>

        <Sider theme="dark">
          <Header style={{textAlign: 'center'}}>
            <h4 style={{color: 'white'}}>
              Total: ${cart.totalPrice}
            </h4>

            <Button type="default">
              <Link to="/checkout" onClick={props.toggleCart}>
                Checkout
              </Link>
            </Button>
          </Header>
        </Sider>
    
      </Suspense>
    </Layout>
  )
}

export { CartPage }
