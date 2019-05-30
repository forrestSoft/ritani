import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'
import Autosuggest from './Autosuggest'

it('render matches snapshot', () => {
  const autosuggest = shallowToJson(shallow(<Autosuggest />))
  expect(autosuggest).toMatchSnapshot();
});

it('calls passed onChange on "onChange"', () => {
	const mock = jest.fn().mockReturnValue('default')
	const autosuggest = shallow(<Autosuggest onChange={mock}/>)
	autosuggest.find('input').simulate('change')
	expect(mock).toBeCalled()
})

// it('calls passed onClick on "onClick"', () => {
// 	const mock = jest.fn().mockReturnValue('default')
// 	const autosuggest = shallow(<Autosuggest open={true} onClick={mock}/>)
// 	autosuggest.find('p').simulate('click')
// 	expect(mock).toBeCalled()
// })

// onChange={props.handleChange}
// 				onClick={props.handleClick}
// 				autocomplete_total={props.autocomplete_total}
// 				autocomplete_users={props.autocomplete_users}
// 				value={props.autocomplete_value}
// 				open={props.autocomplete_open}  />