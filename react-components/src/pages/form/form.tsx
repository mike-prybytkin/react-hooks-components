import React, { Component } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/user-creating-form/user-creating-form';
import UserCardList from 'components/user-card-list/user-card-list';
import { mockUserCards } from 'mocks/user-cards';

export default class Form extends Component<FormProps> {
  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-content-header">{this.props.heading}</h1>
        <div className="form-content-wrapper">
          <CreateUserForm />
          <UserCardList cards={mockUserCards} />
        </div>
      </div>
    );
  }
}
