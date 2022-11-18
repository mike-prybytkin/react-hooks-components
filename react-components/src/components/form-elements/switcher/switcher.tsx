import React from 'react';
import { SwitcherProps } from './types';

const Switcher = (props: SwitcherProps) => {
  const { switcherType, idRadioOne, optionOne, switcherRef, idRadioTwo, optionTwo } = props;
  return (
    <div className="switcher-wrapper">
      <p className="switcher-wrapper__header">{switcherType}</p>
      <div className="switcher-wrapper__field">
        <input
          type="radio"
          id={idRadioOne}
          name="switch-one"
          value={optionOne}
          ref={switcherRef}
          defaultChecked
        />
        <label htmlFor={idRadioOne}>{optionOne}</label>

        <input type="radio" id={idRadioTwo} name="switch-one" value={optionTwo} />
        <label htmlFor={idRadioTwo}>{optionTwo}</label>
      </div>
    </div>
  );
};

export default Switcher;
