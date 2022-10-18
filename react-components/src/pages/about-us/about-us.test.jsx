import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './about-us';
import mockText from '../../mocks/text';

describe('About Us component', () => {
  it('should correctly render heading and create snapshot', () => {
    const { asFragment } = render(<AboutUs heading={mockText.headingAboutUs} />);
    const aboutUsHeading = screen.getByText(new RegExp(mockText.headingAboutUs, 'i'));

    expect(aboutUsHeading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
