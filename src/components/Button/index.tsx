import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx'

type ButtonPropsType = {
  children: string
  className: string
  isDisabled: boolean
  onClick: () => void
};

const Button: React.FC<ButtonPropsType> = ({ children, className, isDisabled, onClick }) => {
  return (
  <button
    disabled={isDisabled}
    className={clsx(styles.btn, styles.button, className, {
      [styles.button__disabled]: isDisabled,
    })}
    onClick={onClick}
  >{children}</button>)

};

export default Button;
