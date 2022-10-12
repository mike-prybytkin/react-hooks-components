import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LiveSearch from './live-search';
import { mockCards } from '../../mocks/cards';

describe('Live Search', () => {
  it('render input', () => {
    render(<LiveSearch cards={mockCards} onSearch={mockCards} />, { wrapper: MemoryRouter });

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
});
