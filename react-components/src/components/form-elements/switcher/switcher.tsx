import React, { Component } from 'react';
import { SwitcherProps } from './types';

class Switcher extends Component<SwitcherProps> {
  render() {
    return (
      <div className="switcher-wrapper">
        <p className="switcher-header">{this.props.switcherType}</p>
        <div className="switch-field">
          <input
            type="radio"
            id="radio-male"
            name="switch-one"
            value={this.props.optionOne}
            ref={this.props.SwitcherRef}
            defaultChecked
          />
          <label htmlFor="radio-male">{this.props.optionOne}</label>

          <input type="radio" id="radio-female" name="switch-one" value={this.props.optionTwo} />
          <label htmlFor="radio-female">{this.props.optionTwo}</label>
        </div>
      </div>
    );
  }
}

export default Switcher;
