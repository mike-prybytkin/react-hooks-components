import React from 'react';
import { CheckboxProps } from './types';

const Checkbox = (props: CheckboxProps) => {
  const { id, checkboxRef, labelType } = props;
  return (
    <div className="checkbox">
      <input className="checkbox__input" type="checkbox" id={id} ref={checkboxRef} defaultChecked />
      <label className="checkbox__label" htmlFor={id}>
        {labelType}
      </label>
    </div>
  );
};

export default Checkbox;
