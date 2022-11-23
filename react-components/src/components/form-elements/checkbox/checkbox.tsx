import React from 'react';
import { CheckboxProps } from './types';

const Checkbox = (props: CheckboxProps) => {
  const { id, labelType, name, register, required } = props;
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        defaultChecked
        {...register(name)}
      />
      <label className="checkbox__label" htmlFor={id}>
        {labelType}
        {required && <i>*</i>}
      </label>
    </div>
  );
};

export default Checkbox;
