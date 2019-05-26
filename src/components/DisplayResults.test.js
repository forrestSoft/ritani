import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import DisplayResults from './DisplayResults';

it('renders without crashing', () => {
  const displayResults = shallowToJson(shallow(<DisplayResults />))
  expect(displayResults).toMatchSnapshot();
});