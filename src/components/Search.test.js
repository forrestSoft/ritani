import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import Search from './Search';

it('renders without crashing', () => {
  const search = shallowToJson(shallow(<Search />))
  expect(search).toMatchSnapshot();
});