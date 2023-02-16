import React, {useState} from 'react'
import '../../../scss/app.scss';

import styles from './ItemTicket.module.scss'
import logoSrc from '../../../assets/img/logo.jpg';
import pathSrc from '../../../assets/img/pathImg.png';
import luggageSrc from '../../../assets/img/luggageImg.png';
import BtnTicket from '../../../components/BtnTicket';

const timeFlight = [
  {
    id: 1,
    departTime: '09:20',
    timeOfStay: '11:05',
  },
  {
    id: 2,
    departTime: '10:20',
    timeOfStay: '12:05',
  },
  {
    id: 3,
    departTime: '11:20',
    timeOfStay: '13:05',
  },
];

type ItemTicketPropsType = {
  dataInformation: {
    date: string,
    from: string,
    to: string
  }
}

const ItemTicket: React.FC<ItemTicketPropsType> = ({dataInformation}) => {
  const [activeIndBtn, setActiveIndBtn] = useState(1);

  const DepartTime = timeFlight.find((el) => el.id === activeIndBtn)?.departTime;
  const TimeOfStay = timeFlight.find((el) => el.id === activeIndBtn)?.timeOfStay;

  const handlerBtnTicketActive = (ind: number) => {
    setActiveIndBtn(ind + 1);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__imgBlock}>
        <div className={styles.item__imgBlock_text}>Невозвратный</div>
        <img src={logoSrc} alt="brand-img" className={styles.item__imgBlock_img} />
        <div className={styles.item__imgBlock_title}>S7 Airlines</div>
      </div>
      <div className={styles.item__infoBlock}>
        <div className={styles.item__infoBlock_content}>
          <div className={styles.item__infoBlock_content_textBlock}>
            <h2 className={styles.item__infoBlock_content_textBlock_time}>{DepartTime}</h2>
            <p className={styles.item__infoBlock_content_textBlock_city}>
              {dataInformation.from}
            </p>
            <p className={styles.item__infoBlock_content_textBlock_date}>
              {dataInformation.date}
            </p>
          </div>
          <img
            src={pathSrc}
            alt="img-path"
            className={styles.item__infoBlock_content_imgPath}
          />
          <div className={styles.item__infoBlock_content_textBlock}>
            <h2 className={styles.item__infoBlock_content_textBlock_time}>{TimeOfStay}</h2>
            <p className={styles.item__infoBlock_content_textBlock_city}>
              {dataInformation.to}
            </p>
            <p className={styles.item__infoBlock_content_textBlock_date}>
              {dataInformation.date}
            </p>
          </div>
          <img
            src={luggageSrc}
            alt="img-luggage"
            className={styles.item__infoBlock_content_imgLuggages}
          />
        </div>
        <div className={styles.item__infoBlock_btnContainer}>
          {timeFlight.map((el, ind: number) => (
            <BtnTicket
              key={`${el.id}_${ind}`}
              className={activeIndBtn === el.id ? 'activeBtn' : ''}
              onClick={() => handlerBtnTicketActive(ind)}
              {...el}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemTicket