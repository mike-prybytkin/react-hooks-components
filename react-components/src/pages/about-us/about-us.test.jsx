import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './about-us';

describe('About Us', () => {
  it('render About Us heading', () => {
    render(<AboutUs />);
    const aboutUsHeading = screen.getByText(/About Us/i);

    expect(aboutUsHeading).toBeInTheDocument();
  });
});
