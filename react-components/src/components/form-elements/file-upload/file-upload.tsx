import React, { Component } from 'react';
import { FileUploadProps } from './types';

class FileUpload extends Component<FileUploadProps> {
  render() {
    return (
      <label className="avatar-label">
        <input
          className="avatar-input"
          type="file"
          id="user-avatar"
          name="user-avatar"
          accept=".jpg, .jpeg, .png"
          ref={this.props.addAvatarRef}
        />
        {this.props.labelType}
      </label>
    );
  }
}

export default FileUpload;
