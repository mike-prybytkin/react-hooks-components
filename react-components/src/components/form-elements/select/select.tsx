import React from 'react';
import { SelectProps } from './types';

const Select = (props: SelectProps) => {
  const { labelType, id, children, name, register, required } = props;
  return (
    <div className="select">
      <label className="select__label">
        {labelType}
        {required && <i>*</i>}
        <select className="select__select" id={id} {...register(name)}>
          {children}
        </select>
      </label>
    </div>
  );
};

export default Select;
