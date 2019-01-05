import * as React from 'react';
import * as ReactDOM from 'react-dom';

it('renders something without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div />, div);
  ReactDOM.unmountComponentAtNode(div);
});
