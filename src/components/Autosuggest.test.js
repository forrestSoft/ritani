import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'
import Autosuggest from './Autosuggest'
import staticState from '../staticState'

it('render matches snapshot', () => {
  const autosuggest = shallowToJson(shallow(<Autosuggest users={staticState.slice(0,3)} open={true} onClick={()=>{}} total={10} />)) 
  expect(autosuggest).toMatchSnapshot();
});

it('calls passed onChange on "onChange"', () => {
	const mock = jest.fn().mockReturnValue('default')
	const autosuggest = shallow(<Autosuggest onChange={mock}/>)
	autosuggest.find('input').simulate('change')
	expect(mock).toBeCalled()
})

it('calls passed onClick on "onClick"', () => {
	const mock = jest.fn().mockReturnValue('default')
	const autosuggest = shallow(<Autosuggest open={true} onClick={mock} users={[{login:'boo', html_url: 'https://github.com/blah'}]} />)
	autosuggest.find('input').simulate('change')
	autosuggest.find('li').simulate('click')
	expect(mock).toBeCalled()
})
