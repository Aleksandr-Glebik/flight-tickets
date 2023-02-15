import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx'

type ButtonPropsType = {
  children: string;
  className: string
  isDisabled: boolean
};

const Button: React.FC<ButtonPropsType> = ({ children, className, isDisabled }) => {
  return (
  <button
    disabled={isDisabled}
    className={clsx(styles.btn, styles.button, className, {
      [styles.button__disabled]: isDisabled,
    })}
  >{children}</button>)

};

export default Button;
