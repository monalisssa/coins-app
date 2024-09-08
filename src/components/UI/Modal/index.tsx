import React from 'react';
import { Modal as AntModal } from 'antd';
import { ModalProps } from '../../../types/name';

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children, onOk }) => {
  const handleOk = () => {
    if (onOk) {
      onOk();
    }
    onClose();
  };

  return (
    <AntModal title={title} open={isOpen} onOk={handleOk} onCancel={onClose}>
      {children}
    </AntModal>
  );
};

export default Modal;
