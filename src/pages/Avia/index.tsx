import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../scss/app.scss'
import style from './Avia.module.scss'
import Input from '../../components/Input'
import {getDate} from '../../utils/getDate'
import { checkForLength } from '../../utils/checkForLength'
import Button from '../../components/Button'

const Avia: React.FC = () => {
  const [departCity, setDepartCity] = useState('')
  const [arrivCity, setArrivCity] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [roundTripFlight, setRoundTripFlight] = useState(false)
  console.log('roundTripFlight', roundTripFlight);

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

  useEffect( () => {
    if (checkForLength(departCity) && checkForLength(arrivCity) && checkForLength(dateToGoCity)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }

    if (checkForLength(dateOfReturnTrip)) {
      setRoundTripFlight(true)
    } else {
      setRoundTripFlight(false)
    }

  }, [departCity, arrivCity, dateToGoCity, dateOfReturnTrip])

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
        <div className={style.formAction}>
          <Link to='/avia/info'>
            <Button
              className='button__disabled'
              isDisabled={isDisabled}
              >
              Найти билеты
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Avia