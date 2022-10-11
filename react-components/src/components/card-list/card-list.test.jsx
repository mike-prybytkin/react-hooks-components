import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './card-list';
import mockCards from '../../mocks/cards';

describe('Card list', () => {
  it('render without data', () => {
    render(<CardList cards={[]} />);

    expect(screen.queryByRole('list')).toBeNull();
  });

  it('render cards', () => {
    render(<CardList cards={mockCards} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Fjallraven/i)).toBeInTheDocument();
  });

  it('List snapshot', () => {
    const list = render(<CardList cards={mockCards} />);

    expect(list).toMatchSnapshot();
  });
});
