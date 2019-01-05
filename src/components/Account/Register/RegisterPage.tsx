import React from 'react';
import { RegisterForm } from '../..';
import {BcModal} from '../..'

function RegisterPage(props: any) {
  return (
    <BcModal
      {...props}
      title={'Create an Account'}
      component={() => <RegisterForm />}
    />
  )
}

export { RegisterPage }