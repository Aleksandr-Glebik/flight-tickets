import React from 'react'
import styles from './Input.module.scss'

type InputPropsType = {
    title: string
    type: string
    value: string
    name: string
    placeholder: string
    onChangeHandler: (str: string) => void
}

const Input: React.FC<InputPropsType> = ({title, type, value, name, onChangeHandler, placeholder}) => {

  return (
    <div className={styles.container}>
      <label className={styles.title}>{title}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  )
}

export default Input