import React from 'react';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
  const { labelType, placeholderText, minTextLength, maxTextLength, required, inputTextRef, id } =
    props;
  return (
    <div className="text-input">
      <label className="text-input__label">
        {labelType}
        <input
          className="text-input__input"
          type="text"
          placeholder={placeholderText}
          minLength={+minTextLength}
          maxLength={+maxTextLength}
          required={required}
          ref={inputTextRef}
          id={id}
        />
      </label>
    </div>
  );
};

export default TextInput;
