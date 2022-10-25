import React, { Component } from 'react';
import { SwitcherProps } from './types';

class Switcher extends Component<SwitcherProps> {
  render() {
    return (
      <div className="switcher-wrapper">
        <p className="switcher-header">{this.props.switcherType}</p>
        <div className="switch-field" ref={this.props.SwitcherRef}>
          <input
            type="radio"
            id="radio-one"
            name="switch-one"
            value={this.props.optionOne}
            checked
          />
          <label htmlFor="radio-one">{this.props.optionOne}</label>
          <input type="radio" id="radio-two" name="switch-one" value={this.props.optionTwo} />
          <label htmlFor="radio-two">{this.props.optionTwo}</label>
        </div>
      </div>
    );
  }
}

export default Switcher;
