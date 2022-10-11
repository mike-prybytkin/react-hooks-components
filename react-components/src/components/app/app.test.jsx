import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

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
});

// expect(screen.queryByText(/$/i)).not.toBeInTheDocument();
// expect(await screen.findByText(/$/i)).toBeInTheDocument();
