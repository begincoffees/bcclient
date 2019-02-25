import React from 'react';
import { shallow } from './setupTests';
import { App } from 'src/components'

it('renders something without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

