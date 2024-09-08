import React from 'react';
import * as styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.buttonWrapper} {...props}>
      {children}
    </button>
  );
};

export default Button;
