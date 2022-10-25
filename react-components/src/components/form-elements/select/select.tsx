import React, { Component } from 'react';
import { SelectProps } from './types';

class Select extends Component<SelectProps> {
  render() {
    return (
      <label className="salary-label">
        {this.props.labelType}
        <select className="salary-select" ref={this.props.selectSalaryRef}>
          <option disabled>Please choose an option</option>
          <option value="less than 100$">less than 100$</option>
          <option value="100-199$">100-199$</option>
          <option value="200-299$">200-299$</option>
          <option value="300-399$">300-399$</option>
          <option value="400-499$">400-499$</option>
          <option value="over 500$">over 500$</option>
        </select>
      </label>
    );
  }
}

export default Select;
