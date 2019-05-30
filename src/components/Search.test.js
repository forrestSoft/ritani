import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'
import Search from './Search'

it('render matches snapshot', () => {
  const search = shallowToJson(shallow(<Search />))
  expect(search).toMatchSnapshot();
});

// it('calls passed handleChange on "onChange"', () => {
// 	const mock = jest.fn().mockReturnValue('default')
// 	const search = shallow(<Search handleChange={mock}/>)
// 	search.find('input').simulate('change')
// 	expect(mock).toBeCalled()
// })