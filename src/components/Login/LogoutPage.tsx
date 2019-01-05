import React from 'react';
import { Redirect } from '@reach/router';

function LogoutPage(props: any) {
  return <Redirect from="/logout" to="/" />
}

export { LogoutPage }