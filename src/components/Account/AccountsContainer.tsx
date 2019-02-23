import React from 'react';
import { Query } from 'react-apollo';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo,
  Loader,
} from 'src/components';
import { accountQuery } from 'src/store';
import { CurrentUser } from 'src/types';

function AccountsContainer({ user }: { user: CurrentUser }) {
  return (
    <Query
      query={accountQuery}
      variables={{ id: user.id }}
    >
      {({ data, loading }) => {

        const isVendor = user.role === 'VENDOR';
        const account = data && data.viewer.me;

        if (loading || !data) {
          return <Loader />
        }

        return (
          <BcContainer margin="auto 3.5rem">
            <UserInfo me={user} />
            <SalesList isVendor={isVendor} sales={account.sales} />
            <InventoryList isVendor={isVendor} products={account.products} />
            <PurchaseList purchases={account.purchases} />
          </BcContainer>
        )
      }}
    </Query>
  )
}


export { AccountsContainer }