import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Layout, Menu, Icon } from 'antd';
import { Link, navigate } from '@reach/router';

import { Loader, navMenu } from 'src/components';
import { useCart, currentUser, logoutUser } from 'src/store';

const { Header } = Layout;

export type NavArgs = {
  [key: string]: any
  cartOpen: boolean;
  toggleCart: () => void;
}

function BcNav({ cartOpen, toggleCart, ...props }: NavArgs) {
  const [cart,] = useCart()
  return (
    <Mutation mutation={logoutUser}>
      {(logoutUser, { data }) => {
        return (
          <Query query={currentUser}>
            {({ data, loading }) => {

              if (loading || !data) { return <Loader /> }
              const loginText =
                data && data.currentUser && data.currentUser.isLoggedIn === true
                  ? 'Sign Out'
                  : 'Sign In'
                ;

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
                        if (data.currentUser.isLoggedIn) {
                          logoutUser()
                        } else {
                          navigate('/login')
                        }
                      }}
                    >
                      <span>{loginText}</span>
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
          </Query>
        )
      }}
    </Mutation>
  )
}

export { BcNav }