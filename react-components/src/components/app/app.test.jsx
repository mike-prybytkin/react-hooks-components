import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockCards }),
  })
);

const setUp = () => render(<App />, { wrapper: BrowserRouter });

describe('App', () => {
  it('should render links', () => {
    setUp();
    const linkHome = screen.getByText(new RegExp(mockText.homeLink, 'i'));
    const linkAbout = screen.getByText(new RegExp(mockText.aboutLink, 'i'));

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
  });

  it('should correctly render the heading of the homepage', async () => {
    const { findByTestId, asFragment } = setUp();

    const appNode = await findByTestId('app');
    expect(appNode.children).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
    expect(await screen.findByText(new RegExp(mockText.headingMain, 'i'))).toBeInTheDocument();
  });
});
