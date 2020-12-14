import React from 'react';
import style from './modal.module.scss';

function Modal({ onClose, children }) {
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
