import React from 'react';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
  const {
    type,
    name,
    id,
    labelType,
    placeholderText,
    errors,
    register,
    validationSchema,
    required,
  } = props;
  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={name}>
        {labelType}
        {required && <i>*</i>}
        <input
          className="text-input__input"
          type={type}
          placeholder={placeholderText}
          id={id}
          {...register(name, validationSchema)}
        />
        {errors && errors[name]?.type === 'required' && (
          <span className="error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'minLength' && (
          <span className="error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'maxLength' && (
          <span className="error">{errors[name]?.message}</span>
        )}
      </label>
    </div>
  );
};

export default TextInput;
