import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
      <div id="modal-wrapper">
          {children}
      </div>,
      document.querySelector('body'),
  )
}

export default Modal;
