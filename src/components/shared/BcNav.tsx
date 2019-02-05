import React, { useCallback } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import { Link, navigate } from '@reach/router';

import { useUserState, useUserDispatch, useCart } from 'src/store';
import { navMenu } from '../constants';

const { Header } = Layout;

function BcNav(props: any) {
  const [cart,cartDispatch] = useCart()
  const user = useUserState();
  const userDispatch = useUserDispatch()
  
  const logout = useCallback(() => 
    userDispatch({
      type: 'UPDATE_USER',
      isLoggedIn: false,
    })
  ,[userDispatch]);

  return (
    <Header style={{background: 'transparent'}}>
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
            if(user.isLoggedIn){
              localStorage.removeItem('BC_AUTH')
              logout();

              if(cart.items.length){
                cartDispatch.clear()
              }

              navigate('/')
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

        <Menu.Item key="/random">
          <span>Random</span>
        </Menu.Item>

          <Menu.Item 
            key="/cart" 
            onClick={props.toggleCart}
          >
            <span>Cart {`(${cart.itemsCount})`}</span>
            <Icon type="shopping-cart"/>
          </Menu.Item>
      </Menu>
    </Header>
)}

export { BcNav }