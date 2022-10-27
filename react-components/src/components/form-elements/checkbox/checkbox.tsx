import React, { Component } from 'react';
import { CheckboxProps } from './types';

class Checkbox extends Component<CheckboxProps> {
  render() {
    return (
      <div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          id="checkbox_mailing"
          ref={this.props.checkMailingRef}
          defaultChecked
        />
        <label className="checkbox__label" htmlFor="checkbox_mailing">
          {this.props.labelType}
        </label>
      </div>
    );
  }
}

export default Checkbox;
