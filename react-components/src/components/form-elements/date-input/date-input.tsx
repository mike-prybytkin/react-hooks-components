import React from 'react';
import { DateInputProps } from './types';

const DateInput = (props: DateInputProps) => {
  const { type, name, id, labelType, register, defaultValue, minDate, maxDate, required } = props;
  return (
    <div className="date-input">
      <label className="date-input__label" htmlFor={name}>
        {labelType}
        {required && <i>*</i>}
        <input
          className="date-input__input"
          type={type}
          defaultValue={defaultValue}
          min={minDate}
          max={maxDate}
          id={id}
          {...register(name)}
        />
      </label>
    </div>
  );
};

export default DateInput;
