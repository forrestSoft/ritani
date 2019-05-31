import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import DisplayResults from './DisplayResults';
import staticState from '../staticState'

it('render matches snapshot', () => {
	const displayResults0 = shallowToJson(shallow(<DisplayResults selectedUser={'bob'} totalFollowers={3} users={staticState.slice(0,3)} />))
  expect(displayResults0).toMatchSnapshot();

  const displayResults1 = shallowToJson(shallow(<DisplayResults selectedUser={'bob'} totalFollowers={3} />))
  expect(displayResults1).toMatchSnapshot();

  const displayResults2 = shallowToJson(shallow(<DisplayResults selectedUser={'bob'}  />))
  expect(displayResults2).toMatchSnapshot();

  const displayResults3 = shallowToJson(shallow(<DisplayResults />))
  expect(displayResults3).toMatchSnapshot();
});

it('handles positive Moar button visibility', () => {
	const displayResults = shallow(<DisplayResults hasMoar={true} selectedUser={'bob'}/>)
	expect(displayResults.find('button').length).toBeTruthy()
})

it('handles negative Moar button visibility', () => {
	const displayResults = shallow(<DisplayResults hasMoar={false}/>)
	expect(displayResults.find('button').length).toBeFalsy()
})

it('calls passed handleClick on "onClick"', () => {
	const mock = jest.fn().mockReturnValue('default')
	const displayResults = shallow(<DisplayResults handleClick={mock} hasMoar={true} selectedUser={'bob'} />)
	displayResults.find('button').simulate('click')
	expect(mock).toBeCalled()
})