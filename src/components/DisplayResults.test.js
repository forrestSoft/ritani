import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import DisplayResults from './DisplayResults';

it('render matches snapshot', () => {
  const displayResults = shallowToJson(shallow(<DisplayResults />))
  expect(displayResults).toMatchSnapshot();
});