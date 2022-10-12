import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from './404';

describe('Page 404', () => {
  it('render Page 404 heading', () => {
    render(<Page404 />, { wrapper: MemoryRouter });
    const page404Heading = screen.getByText(/Error 404/i);
    const linkHome = screen.getByText(/Back to home page/i);

    expect(linkHome).toBeInTheDocument();
    expect(page404Heading).toBeInTheDocument();
  });
});
