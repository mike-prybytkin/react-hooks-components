import React, { Component } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/user-creating-form/user-creating-form';
import UserCardList from 'components/user-card-list/user-card-list';
// import { mockUserCards } from 'mocks/user-cards';
import { getItemLocalSrorage } from 'utils/localStorage/locatStorage';

export default class Form extends Component<FormProps> {
  state = {
    userCards: [],
  };

  componentDidMount() {
    // setItemLocalSrorage('createdUsers', mockUserCards[0]);
    this.setState({
      userCards: getItemLocalSrorage('createdUsers'),
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-content-header">{this.props.heading}</h1>
        <div className="form-content-wrapper">
          <CreateUserForm />

          {this.state.userCards && this.state.userCards.length > 0 ? (
            <UserCardList cards={this.state.userCards} />
          ) : (
            <p className="form-content-message"> Sorry, no users have been created yet... </p>
          )}
        </div>
      </div>
    );
  }
}
