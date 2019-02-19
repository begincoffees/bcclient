import React from 'react';
import { Alert, Row } from 'antd';

import { BcContainer } from 'src/components';
import { useUserState } from 'src/store';
import { PayPalButton } from 'react-paypal-button'

function LandingPage(props: any) {
  const user = useUserState();
  return (
    <BcContainer>
      <Row style={{ margin: 'auto 3.75rem' }}>
        {user.isLoggedIn ? (
          <Alert
            type="success"
            message={`Welcome Back!`}
            banner={true}
            showIcon={false}
          />
        ) : (
            <Alert
              type="info"
              message={`Begin Coffees coming soon ...`}
              banner={true}
              showIcon={false}
            />)}
      </Row>
      <Row>
        <PayPalButton
          env='sandbox'
          amount={1.00}
          sandboxID='AWi1Yk1c7jzFlcNifMMiTAUHu7zEZelJodUVYfArCE3GxhprdwAbXZREQLzeKGPmPgI2pL6UUGWshiRB'
          currency='USD'
        />
      </Row>
    </BcContainer>
  )
}


{/*  */ }
export { LandingPage }