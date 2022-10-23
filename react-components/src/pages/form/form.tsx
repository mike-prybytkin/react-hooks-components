import React, { Component } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/create-user-form/create-user-form';

export default class Form extends Component<FormProps> {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.heading}</h1>
        <CreateUserForm />
      </React.Fragment>
    );
  }
}
