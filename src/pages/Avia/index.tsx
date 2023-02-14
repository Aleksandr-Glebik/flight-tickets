import React, {useState} from 'react'
import '../../scss/app.scss'
import style from './Avia.module.scss'
import Input from '../../components/Input'

const Avia: React.FC = () => {
  const [departCity, setDepartCity] = useState('')
  const [arrivCity, setArrivCity] = useState('')

  const changeDepartCity = (str: string) => {
    setDepartCity(str)
  }
  const changeArrivCity = (str: string) => {
    setArrivCity(str)
  }

  return (
    <div className="wrapper">
      <main className={style.container}>
        <form className={style.formContent}>
          <Input
            type={'text'}
            name={'from'}
            value={departCity}
            onChangeHandler={changeDepartCity}
            placeholder={'Город вылета'}
          />
          <Input
            type={'text'}
            name={'from'}
            value={arrivCity}
            onChangeHandler={changeArrivCity}
            placeholder={'Город прилета'}
          />
        </form>
        <div className={style.formAction}>a</div>
      </main>
    </div>
  )
}

export default Avia