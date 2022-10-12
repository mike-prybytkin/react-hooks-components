import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import { mockCards } from '../../mocks/cards';

describe('Header', () => {
  it('render header', () => {
    render(<Header cards={mockCards} onSearch={mockCards} />, { wrapper: MemoryRouter });

    const linkHome = screen.getByText(/home/i);
    const linkAbout = screen.getByText(/about/i);

    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
  });
});
