import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

describe('Main component', () => {
  it('should correctly render heading and create snapshot', () => {
    const { asFragment } = render(<Main cards={mockCards} heading={mockText.headingMain} />, {
      wrapper: BrowserRouter,
    });
    const mainHeading = screen.getByText(new RegExp(mockText.headingMain, 'i'));

    expect(mainHeading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
