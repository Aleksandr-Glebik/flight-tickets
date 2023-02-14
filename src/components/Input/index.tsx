import React from 'react'
import styles from './Input.module.scss'

type InputPropsType = {
    type: string
    value: string
    name: string
    placeholder: string
    onChangeHandler: (str: string) => void
}

const Input: React.FC<InputPropsType> = ({type, value, name, onChangeHandler, placeholder}) => {
  console.log('value', value);

  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => onChangeHandler(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
  )
}

export default Input