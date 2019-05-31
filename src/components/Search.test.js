import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'
import Search from './Search'

it('render matches snapshot', () => {
  const search = shallowToJson(shallow(<Search />))
  expect(search).toMatchSnapshot();
});

it('handles onChange', () => {
	const search = shallow(<Search />)
	
	search.instance().handleChange({
		target: {
			value: 'eee'
		}
	})

	expect(search.instance().state.inputValue).toBe('eee')
})
