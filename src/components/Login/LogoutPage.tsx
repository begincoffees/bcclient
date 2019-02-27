import React from 'react';
import { Mutation } from 'react-apollo';
import { Menu } from 'antd';

import { Loader } from 'src/components';
import { logoutUser } from 'src/store';

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