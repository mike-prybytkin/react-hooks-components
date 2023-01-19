import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ProductCard from './product-card';
import { mockCards } from '../../mocks/cards';

const card = mockCards[0];
const setUp = () => render(<ProductCard card={card} buttonText="button" />);

describe('ProductCard component', () => {
  it('should render Product Card', () => {
    setUp();
    expect(screen.getByText(`${card.name}`)).toBeInTheDocument();
  });

  it('should open and close modal window with card content', () => {
    setUp();
    fireEvent.click(screen.getByText(/button/i));
    waitFor(() => expect(screen.findByText(/✗/i)).toBeInTheDocument());
    fireEvent.click(screen.getByText(/✗/i));
    waitFor(() => expect(screen.findByText(/button/i)).toBeInTheDocument());
  });

  it('create modal window snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
