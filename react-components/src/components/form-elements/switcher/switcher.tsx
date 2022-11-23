import React from 'react';
import { SwitcherProps } from './types';

const Switcher = (props: SwitcherProps) => {
  const { switcherType, idRadioOne, optionOne, idRadioTwo, optionTwo, register, name, required } =
    props;
  return (
    <div className="switcher-wrapper">
      <p className="switcher-wrapper__header">
        {switcherType}
        {required && <i>*</i>}
      </p>
      <div className="switcher-wrapper__field">
        <input type="radio" id={idRadioOne} value={optionOne} defaultChecked {...register(name)} />
        <label htmlFor={idRadioOne}>{optionOne}</label>

        <input type="radio" id={idRadioTwo} {...register(name)} value={optionTwo} />
        <label htmlFor={idRadioTwo}>{optionTwo}</label>
      </div>
    </div>
  );
};

export default Switcher;
