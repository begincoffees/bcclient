export * from './components';
export * from './types';
export * from './utils';
export * from './store'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from 'src/components';
import './styles/index.css';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);


