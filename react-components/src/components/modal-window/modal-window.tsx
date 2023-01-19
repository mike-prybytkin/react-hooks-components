import React from 'react';
import { ModalWindowProps } from './types';

const ModalWindow = (props: ModalWindowProps) => {
  const { onModalWindow } = props;
  return (
    <div className="modal-overlay" onClick={onModalWindow}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-window__close" onClick={onModalWindow}>
          &#10007;
        </button>
        <div className="modal-window__body">{props.children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
