import React from 'react';
import { FileUploadProps } from './types';

const FileUpload = (props: FileUploadProps) => {
  const { id, fileUploadRef, required, labelType } = props;
  return (
    <div className="file-upload">
      <label className="file-upload__label">
        <input
          className="file-upload__input"
          type="file"
          id={id}
          name={id}
          accept="image/*"
          ref={fileUploadRef}
          required={required}
        />
        {labelType}
      </label>
    </div>
  );
};

export default FileUpload;
