export * from './types';
export * from './utils';
export * from './store';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import { Root } from './components';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);


