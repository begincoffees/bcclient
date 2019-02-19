import React from 'react';
import { Link } from '@reach/router';

import { LoginForm, BcModal } from 'src/components';

function LoginPage(props: any) {
  return (
    <BcModal
      title={'Welcome to Begin Coffees'}
      component={modalProps =>
        <LoginForm
          closeModal={modalProps.closeModal}
          {...props}
        />
      }
      footer={
        <Link to="/register">
          Create an Account
        </Link>
      }
      {...props}
    />
  )
}

export { LoginPage }