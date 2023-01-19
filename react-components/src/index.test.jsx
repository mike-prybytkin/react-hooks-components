import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './components/app/app';
import { StoreProvider } from './components/store/store-provider';

describe('Testing Application', () => {
  it('should renders correctly application', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <StoreProvider>
            <App />
          </StoreProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
