import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './pagination';
import { StoreProviderContext } from '../store/store-provider';

const setUp = (page, allPages) => {
  const updateQuery = jest.fn();
  return render(
    <StoreProviderContext.Provider value={{ updateQuery, queryPage: page, allPages: allPages }}>
      <Pagination />
    </StoreProviderContext.Provider>
  );
};

describe('Pagination component', () => {
  it('pagination should not render if one page is rendered', () => {
    const { container } = setUp(1, 1);
    expect(container.firstChild).toBeNull();
  });

  it('pagination should render if two pages are rendered', () => {
    const { container } = setUp(1, 2);
    expect(container.getElementsByClassName('numerical-button').length).toBe(2);
  });

  it('the first button should be active if the first page is rendered', () => {
    const { container } = setUp(1, 2);
    expect(container.getElementsByClassName('numerical-button')[0]).toHaveClass('active');
  });

  it('the PREV button should be disabled if the FIRST button is active', () => {
    const { container } = setUp(1, 2);
    expect(container.getElementsByClassName('pagination-prev-button')[0]).toHaveProperty(
      'disabled',
      true
    );
  });

  it('create pagination snapshot with buttons', () => {
    const { asFragment } = setUp(1, 5);
    expect(asFragment()).toMatchSnapshot();
  });
});
