import React from 'react';
import * as styles from './style.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Добавьте возможность передавать метку
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <>
      {label && label}
      <input className={styles.inputContainer} {...props} />
    </>
  );
};

export default Input;
