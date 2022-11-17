import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LiveSearch from './live-search';
import mockText from '../../mocks/text';
import { StoreProviderContext } from '../store/store-provider';

const setUp = () => {
  const onSearch = jest.fn();
  const updateQuery = jest.fn();
  return render(
    <StoreProviderContext.Provider value={{ onSearch, updateQuery }}>
      <LiveSearch placeholderText={mockText.searchPlaceholder} />
    </StoreProviderContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );
};

describe('Live Search component', () => {
  it('should correctly render input', () => {
    setUp();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should correctly render placeholder', () => {
    setUp();
    expect(
      screen.getByPlaceholderText(new RegExp(mockText.searchPlaceholder, 'i'))
    ).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should enter the given text', () => {
    setUp();
    const input = screen.getByLabelText('search-input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
