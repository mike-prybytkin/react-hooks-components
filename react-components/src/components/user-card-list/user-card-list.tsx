import React from 'react';
import UserCard from 'components/user-card/user-card';
import { UserCardListProps } from './types';

const UserCardList = (props: UserCardListProps) => {
  const renderCards = () => {
    return props.cards.map((card, i) => (
      <UserCard card={card} key={card.name + card.birthday + i} />
    ));
  };

  return (
    <div className="user-cards-wrapper" data-testid="user-cards-wrapper">
      {renderCards()}
    </div>
  );
};

export default UserCardList;
