import React from 'react';
import { DateInputProps } from './types';

const DateInput = (props: DateInputProps) => {
  const { labelType, defaultValue, maxDate, minDate, inputDateRef, id } = props;
  return (
    <div className="date-input">
      <label className="date-input__label">
        {labelType}
        <input
          className="date-input__input"
          type="date"
          defaultValue={defaultValue}
          min={minDate}
          max={maxDate}
          ref={inputDateRef}
          id={id}
        />
      </label>
    </div>
  );
};

export default DateInput;
