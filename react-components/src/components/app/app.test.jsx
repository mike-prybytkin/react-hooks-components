import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { mockCards } from '../../mocks/cards';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockCards }),
  })
);

describe('App', () => {
  it('renders links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkHome = screen.getByText(/home/i);
    const linkAbout = screen.getByText(/about/i);

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
  });

  it('renders hello correctly', async () => {
    const { findByTestId, asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const appNode = await findByTestId('app');
    expect(appNode.children).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
    expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
  });
});
