import React, { Component } from 'react';
import { ModalWindowProps } from './types';

export default class ModalWindow extends Component<ModalWindowProps> {
  render() {
    return (
      <div className="modal-overlay" onClick={this.props.onModalWindow}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          <button className="modal-window__close" onClick={this.props.onModalWindow}>
            &#10007;
          </button>
          <div className="modal-window__body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
