import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

describe('Header component', () => {
  it('should render links and create snapshop', () => {
    const { asFragment } = render(<Header cards={mockCards} onSearch={mockCards} />, {
      wrapper: BrowserRouter,
    });

    const linkHome = screen.getByText(new RegExp(mockText.homeLink, 'i'));
    const linkAbout = screen.getByText(new RegExp(mockText.aboutLink, 'i'));

    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
