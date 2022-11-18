import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockUserCards } from '../../mocks/user-cards';
import UserCard from './user-card';

const user = mockUserCards[0];
const setUp = (props) => render(<UserCard card={props} />);

describe('UserCard component', () => {
  it('should correctly render heading', () => {
    setUp(user);
    expect(screen.queryAllByRole('heading', { level: 3 })).toMatchSnapshot();
  });

  it('should correctly render user name', () => {
    setUp(user);
    const userName = screen.getByText(new RegExp(user.name, 'i'));
    expect(userName).toBeInTheDocument();
  });

  it('create card list snapshot with data', () => {
    const { asFragment } = setUp(user);
    expect(asFragment()).toMatchSnapshot();
  });
});
