import React, { Component } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/create-user-form/create-user-form';

export default class Form extends Component<FormProps> {
  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-content-header">{this.props.heading}</h1>
        <div className="form-content-wrapper">
          <CreateUserForm />
        </div>
      </div>
    );
  }
}
