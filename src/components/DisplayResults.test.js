import React from 'react';
import {shallow} from 'enzyme';
import shallowToJson from 'enzyme-to-json'
import DisplayResults from './DisplayResults';

it('render matches snapshot', () => {
  const displayResults = shallowToJson(shallow(<DisplayResults />))
  expect(displayResults).toMatchSnapshot();
});

it('handles positive Moar button visibility', () => {
	const displayResults = shallow(<DisplayResults hasMoar={true}/>)
	expect(displayResults.find('button').length).toBeTruthy()
})

it('handles negative Moar button visibility', () => {
	const displayResults = shallow(<DisplayResults hasMoar={false}/>)
	expect(displayResults.find('button').length).toBeFalsy()
})

it('calls passed handleClick on "onClick"', () => {
	const mock = jest.fn().mockReturnValue('default')
	const displayResults = shallow(<DisplayResults handleClick={mock} hasMoar={true} />)
	displayResults.find('button').simulate('click')
	expect(mock).toBeCalled()
})