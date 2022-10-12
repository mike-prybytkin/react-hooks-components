import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockCards } from '../../mocks/cards';
import Main from './main';

describe('Main', () => {
  it('render main heading', () => {
    render(<Main cards={mockCards} />, { wrapper: MemoryRouter });
    const mainHeading = screen.getByText(/Welcome to our store/i);

    expect(mainHeading).toBeInTheDocument();
  });
});
