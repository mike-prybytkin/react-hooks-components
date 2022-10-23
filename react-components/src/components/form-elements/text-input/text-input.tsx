import React, { Component } from 'react';
import { TextInputProps } from './types';

class TextInput extends Component<TextInputProps> {
  render() {
    return (
      <label className="user-name__label">
        {this.props.labelType}
        <input
          className="user-name__input"
          type="text"
          placeholder={this.props.placeholderText}
          ref={this.props.inputNameRef}
        />
      </label>
    );
  }
}

export default TextInput;
