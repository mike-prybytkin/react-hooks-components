import React from 'react';
import { FileUploadProps } from './types';

const FileUpload = (props: FileUploadProps) => {
  const { id, required, labelType, name, register, type, validationSchema, errors } = props;
  return (
    <div className="file-upload">
      <label className="file-upload__label">
        <p className="file-upload__label-text">
          {labelType}
          {required && <i>*</i>}
        </p>
        <input
          className="file-upload__input"
          type={type}
          id={id}
          accept="image/*"
          {...register(name, validationSchema)}
        />
        {errors && errors[name]?.type === 'required' && (
          <span className="error">{errors[name]?.message}</span>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
