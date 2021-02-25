import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/App';

test('renders learn react link', () => {
  const result = renderer.create(<App />).toJSON();
  expect(result).toMatchSnapshot();
});
