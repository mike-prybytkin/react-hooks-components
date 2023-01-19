import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from './form';
import mockText from '../../mocks/text';
import { mockUserCards } from '../../mocks/user-cards';
import { setItemLocalSrorage } from '../../utils/localStorage/locatStorage';

const setUp = () =>
  render(
    <Form heading={mockText.headingForm} noCreatedUserMessage={mockText.notCreatedUserInForm} />,
    {
      wrapper: BrowserRouter,
    }
  );

describe('Page Form component', () => {
  it('should correctly render heading', () => {
    setUp();
    const pageFormHeading = screen.getByText(new RegExp(mockText.headingForm, 'i'));
    expect(pageFormHeading).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render user after save in local storage', () => {
    const { findByTestId } = setUp();
    const userCardsWrapper = findByTestId('user-cards-wrapper');
    waitFor(() => expect(userCardsWrapper).toBe(undefined));
    setItemLocalSrorage('createdUsers', mockUserCards[0]);
    setItemLocalSrorage('createdUsers', mockUserCards[1]);
    waitFor(() => expect(userCardsWrapper.children).toHaveLength(2));
  });

  it('should render user after save in local storage', () => {
    const user1 = mockUserCards[0];
    const user2 = mockUserCards[1];
    setItemLocalSrorage('createdUsers', user1);
    setUp();
    waitFor(() => expect(screen.findByText(new RegExp(user1.name, 'i'))).toBeInTheDocument());
    waitFor(() => expect(screen.findByText(new RegExp(user2.name, 'i'))).toBeNull());
  });
});
