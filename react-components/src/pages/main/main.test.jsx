import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/app/app';

describe('Main', () => {
  it('render main heading', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const mainHeading = screen.getByText(/Welcome to our store/i);

    expect(mainHeading).toBeInTheDocument();
  });
});
