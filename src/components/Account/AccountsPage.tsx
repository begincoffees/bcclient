import React, { Suspense } from 'react';

import { AccountsContainer } from './AccountsContainer';
import { Query } from 'react-apollo';
import { currentUser } from 'src';
import { Loader, BcContainer } from 'src/components';
import { Alert } from 'antd';


function AccountsPage() {
  return (
    <Query query={currentUser} >
      {({ data, loading }) => {
        if (loading || !data) {
          return <Loader />
        }

        if (!loading && data && data.currentUser.isLoggedIn) {
          return (
            <Suspense fallback={<Loader />}>
              <AccountsContainer user={data.currentUser} />
            </Suspense>
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


export { AccountsPage }
