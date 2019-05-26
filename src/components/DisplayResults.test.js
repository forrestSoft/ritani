import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResults from './DisplayResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});
