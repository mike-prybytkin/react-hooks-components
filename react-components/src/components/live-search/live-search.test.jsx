import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LiveSearch from './live-search';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

describe('Live Search component', () => {
  it('should correctly render input and create snapshot', () => {
    const { asFragment } = render(
      <LiveSearch
        cards={mockCards}
        onSearch={mockCards}
        placeholderText={mockText.searchPlaceholder}
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(new RegExp(mockText.searchPlaceholder, 'i'))
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
