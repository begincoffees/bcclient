import React from 'react';

import { AccountsContainer } from './AccountsContainer';
import { Query } from 'react-apollo';
import { currentUser } from 'src';
import { Loader, BcContainer } from '..';
import { Alert } from 'antd';


function AccountsPage() {
  return (
    <Query query={currentUser}>
      {({ data, loading }) => {
        console.log(data)
        if (loading || !data) {
          return <Loader />
        }

        if (!loading && data && data.currentUser.id) {
          return (
            <AccountsContainer user={data.currentUser} />
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
