import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, navigate } from '@reach/router';

import { useUserState, useCart } from 'src/store';
import { navMenu } from '../constants';

const { Header } = Layout;

function BcNav(props: any) {
  const [cart,] = useCart()
  const user = useUserState();


  return (
    <Header style={{ background: 'transparent' }}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[props.location]}
        style={navMenu}
        onClick={() => props.cartOpen && props.toggleCart()}
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
              navigate('/logout')
            } else {
              navigate('/login')
            }
          }}
        >
          <span>
            {user.isLoggedIn === true ? 'Sign Out' : 'Sign In'}
          </span>
        </Menu.Item>

        <Menu.Item key="/account">
          <Link to="/account">
            <span>Account</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="/cart"
          onClick={props.toggleCart}
        >
          <span>Cart {`(${cart.itemsCount})`}</span>
          <Icon type="shopping-cart" />
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export { BcNav }