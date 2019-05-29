import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import App from './App';

it('render matches snapshot', () => {
  const app = shallowToJson(shallow(<App />))
  expect(app).toMatchSnapshot();
});
