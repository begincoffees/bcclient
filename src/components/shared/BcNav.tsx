import React from 'react';
import { Mutation } from 'react-apollo';
import { Layout, Menu, Icon } from 'antd';
import { Link, navigate } from '@reach/router';

import { navMenu } from 'src/components';
import { useCart, logoutUser } from 'src/store';
import { CurrentUser } from 'src/types';

const { Header } = Layout;

export type NavArgs = {
  [key: string]: any
  cartOpen: boolean;
  toggleCart: () => void;
  user: CurrentUser;
}

function BcNav({ cartOpen, toggleCart, user, ...props }: NavArgs) {
  const [cart,] = useCart();
  return (
    <Mutation mutation={logoutUser}>
      {(logoutUser, { data }) => {
        return (
          <Header style={{ background: 'transparent' }}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={[props.location]}
              style={navMenu}
              onClick={() => cartOpen && toggleCart()}
            >
              <Menu.Item
                key="/"
              >
                <Link to="/">
                  <span>Home</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/shop">
                <Link to="/shop">
                  <span>Shop</span>
                </Link>
              </Menu.Item>

              <Menu.Item
                key="/login"
                onClick={() => {
                  if (user.isLoggedIn) {
                    logoutUser()
                  } else {
                    navigate('/login')
                  }
                }}
              >
                <span>{user.isLoggedIn ? 'Sign Out' : 'Sign In'}</span>
              </Menu.Item>

              <Menu.Item key="/account">
                <Link to="/account">
                  <span>Account</span>
                </Link>
              </Menu.Item>

              <Menu.Item
                key="/cart"
                onClick={toggleCart}
              >
                <span>Cart {`(${cart.itemsCount})`}</span>
                <Icon type="shopping-cart" />
              </Menu.Item>
            </Menu>
          </Header>
        )
      }}
    </Mutation>
  )
}



export { BcNav }