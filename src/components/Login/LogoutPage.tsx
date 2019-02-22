import React from 'react';
import { Loader } from 'src';
import { logoutUser } from 'src/store';
import { Mutation } from 'react-apollo';
import { Menu } from 'antd';

const MenuItem = Menu.Item;

function LogoutButton() {
  return (
    <Mutation mutation={logoutUser}>
      {(logoutUser, { data }) => {
        return (
          <MenuItem
            key="/"
            onClick={() => logoutUser()}
          >
            Logout
          </MenuItem>
        )
      }}
    </Mutation>
  )
}

function LogoutPage() {
  return <Loader />
}

export { LogoutPage, LogoutButton }