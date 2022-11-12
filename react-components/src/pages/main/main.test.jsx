import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';
import { AppContext } from '../../components/app/App';

const setUp = () => {
  const updateQuery = jest.fn();
  return render(
    <AppContext.Provider value={{ updateQuery }}>
      <Main cards={mockCards} heading={mockText.headingMain} />
    </AppContext.Provider>,
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
