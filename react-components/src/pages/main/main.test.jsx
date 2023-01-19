import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import mockText from '../../mocks/text';
import { StoreProviderContext } from '../../components/store/store-provider';
import { mockCards } from '../../mocks/cards';

const setUp = () => {
  const updateQuery = jest.fn();
  return render(
    <StoreProviderContext.Provider value={{ updateQuery, data: mockCards }}>
      <Main heading={mockText.headingMain} />
    </StoreProviderContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );
};

describe('Main component', () => {
  it('should correctly render heading', () => {
    setUp();
    const mainHeading = screen.getByText(new RegExp(mockText.headingMain, 'i'));
    expect(mainHeading).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
