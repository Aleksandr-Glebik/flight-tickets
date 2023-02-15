import React, {useState, useEffect} from 'react'
import '../../scss/app.scss'
import style from './Avia.module.scss'
import Input from '../../components/Input'
import {getDate} from '../../utils/getDate'

const Avia: React.FC = () => {
  const [departCity, setDepartCity] = useState('')
  const [arrivCity, setArrivCity] = useState('')

  useEffect( () => {
    let dateNow = getDate()
    setDateToGoCity(dateNow)
  }, [])

  const [dateToGoCity, setDateToGoCity] = useState('')
  const [dateOfReturnTrip, setDateOfReturnTrip] = useState('')

  const changeDepartCity = (str: string) => {
    setDepartCity(str)
  }
  const changeArrivCity = (str: string) => {
    setArrivCity(str)
  }
  const changeDateToGoCity = (str: string) => {
    setDateToGoCity(str)
  }
  const changeDateOfReturnTrip = (str: string) => {
    setDateOfReturnTrip(str)
  }

  return (
    <div className="wrapper">
      <main className={style.container}>
        <form className={style.formContent}>
          <Input
            title={'Откуда'}
            type={'text'}
            name={'from'}
            value={departCity}
            onChangeHandler={changeDepartCity}
            placeholder={'Город вылета'}
          />
          <Input
            title={'Куда'}
            type={'text'}
            name={'to'}
            value={arrivCity}
            onChangeHandler={changeArrivCity}
            placeholder={'Город прилета'}
          />
          <Input
            title={'Туда'}
            type={'date'}
            name={'dateReturn'}
            value={dateToGoCity}
            onChangeHandler={changeDateToGoCity}
            placeholder={'Город прилета'}
          />
          <Input
            title={'Обратно'}
            type={'date'}
            name={'dateTo'}
            value={dateOfReturnTrip}
            onChangeHandler={changeDateOfReturnTrip}
            placeholder={'Город прилета'}
          />
        </form>
        <div className={style.formAction}>a</div>
      </main>
    </div>
  )
}

export default Avia