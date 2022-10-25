import React, { Component } from 'react';
import { DateInputProps } from './types';

class DateInput extends Component<DateInputProps> {
  render() {
    return (
      <label className="user-birthday__label">
        {this.props.labelType}
        <input
          className="user-birthday__input"
          type="date"
          defaultValue={this.props.defaultValue}
          min={this.props.minDate}
          max={this.props.maxDate}
          ref={this.props.inputDateRef}
        />
      </label>
    );
  }
}

export default DateInput;
