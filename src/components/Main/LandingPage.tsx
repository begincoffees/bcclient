import React from 'react';
import { Alert, Row } from 'antd';

import { BcContainer } from 'src/components';
import { useUserState  } from 'src/store';

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
        ):(
        <Alert 
          type="info" 
          message={`Begin Coffees coming soon ...`}
          banner={true}
          showIcon={false}
        />)}
      </Row>
    </BcContainer>
  )
}



export { LandingPage }  