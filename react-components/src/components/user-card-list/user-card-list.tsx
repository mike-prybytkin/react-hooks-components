import React from 'react';
import UserCard from 'components/user-card/user-card';
import { UserCardListProps } from './types';

const UserCardList = (props: UserCardListProps) => {
  const renderCards = () => {
    return props.cards.map((card) => <UserCard card={card} key={card.avatarPath.slice(30, 70)} />);
  };

  return (
    <div className="user-cards-wrapper" data-testid="user-cards-wrapper">
      {renderCards()}
    </div>
  );
};

export default UserCardList;
