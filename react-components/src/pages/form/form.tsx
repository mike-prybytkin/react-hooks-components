import React, { useState } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/user-creating-form/user-creating-form';
import UserCardList from 'components/user-card-list/user-card-list';
import { getItemLocalSrorage, setItemLocalSrorage } from 'utils/localStorage/locatStorage';
import { IUserCard } from 'share/types';

const Form = (props: FormProps) => {
  const [userCards, setUserCards] = useState<IUserCard[]>(getItemLocalSrorage('createdUsers'));

  const onForm = (newUser: IUserCard) => {
    setItemLocalSrorage('createdUsers', newUser);
    setUserCards(getItemLocalSrorage('createdUsers'));
  };

  const hasUserCards = userCards && userCards.length > 0;
  return (
    <div className="form-wrapper">
      <h1 className="form-content-header">{props.heading}</h1>
      <div className="form-content-wrapper">
        <CreateUserForm onForm={onForm} />

        {hasUserCards ? (
          <UserCardList cards={userCards} />
        ) : (
          <p className="form-content-message">{props.noCreatedUserMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Form;
