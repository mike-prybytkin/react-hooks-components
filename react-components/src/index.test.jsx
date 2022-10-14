import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './components/app/app';

describe('Testing Application', () => {
  it('renders correctly when there are no items', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
