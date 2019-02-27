import React from 'react';
import { Mutation } from 'react-apollo';
import { Layout, Menu, Icon } from 'antd';
import { Link, navigate } from '@reach/router';

import { navMenu } from 'src/components';
import { useCart, logoutUser, accountQuery } from 'src/store';
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
      {mutate => {
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
                onClick={async () => {
                  try {
                    if (user.isLoggedIn) {
                      mutate({
                        update: (store, { data: { currentUser } }) => {
                          const prevState = store.readQuery({ query: currentUser })
                          const prevAccount = store.readQuery({ query: accountQuery })
                          console.log(prevAccount)
                          const me = {
                            __typename: 'User',
                            id: '',
                            firstName: '',
                            lastName: '',
                            bizName: '',
                            stripeId: '',
                            purchases: [],
                            sales: [],
                            products: []
                          }
                          store.writeQuery({
                            query: currentUser,
                            data: {
                              ...prevState,
                              isLoggedIn: false,
                              __typename: 'CurrentUser'
                            }
                          });
                          store.writeQuery({
                            query: accountQuery,
                            data: {
                              viewer: {
                                __typename: 'Viewer',
                                me
                              }
                            }
                          });
                        }
                      });
                      navigate('/')
                    } else {
                      navigate('/login')
                    }
                  } catch (err) {
                    console.log({ logoutErr: err.message })
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