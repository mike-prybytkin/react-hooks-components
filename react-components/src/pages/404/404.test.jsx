import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './404';
import mockText from '../../mocks/text';

describe('Page 404 component', () => {
  it('should correctly render heading, link and create snapshot', () => {
    const { asFragment } = render(
      <Page404 heading={mockText.heading404} backToHomelinkText={mockText.linkBackToHome} />,
      {
        wrapper: BrowserRouter,
      }
    );
    const page404Heading = screen.getByText(new RegExp(mockText.heading404, 'i'));
    const linkHome = screen.getByText(new RegExp(mockText.linkBackToHome, 'i'));

    expect(linkHome).toBeInTheDocument();
    expect(page404Heading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
