import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'
import Avatar from './Avatar'

// shallow render and check props are working
it('render matches snapshot', () => {
	const url = "https://avatars2.githubusercontent.com/u/1555350?v=4"
  const avatar = shallowToJson(shallow(<Avatar url={url} />))
  expect(avatar).toMatchSnapshot();
})
