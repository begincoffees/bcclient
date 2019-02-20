import React from 'react';
import { Alert } from 'antd';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo,
  Loader,
} from 'src/components';
import { currentUser } from 'src/store';
import { AccountData } from 'src/types';
import { Query } from 'react-apollo';

function AccountsContainer() {
  return (
    <Query query={currentUser}>
      {({ data, loading }) => {
        const user = data && data.currentUser
        console.log(user)
        if (loading || !data) {
          return <Loader />
        }

        if (user && user.id) {
          return (
            <Accounts user={user} />
          )
        }

        return (
          <BcContainer>
            <Alert
              type="warning"
              message="Please Log In to View Your Account"
            />
          </BcContainer>
        )
      }}
    </Query>
  )
}

function Accounts({ user }: { user: AccountData }) {
  const { products, role, purchases, sales, ...me } = user;
  const isVendor = user.role === 'VENDOR';

  return (
    <BcContainer margin="auto 3.5rem">
      <UserInfo me={me} />
      <SalesList isVendor={isVendor} sales={sales} />
      <InventoryList isVendor={isVendor} products={products} />
      <PurchaseList purchases={purchases} />
    </BcContainer>
  )
}

export { Accounts, AccountsContainer }