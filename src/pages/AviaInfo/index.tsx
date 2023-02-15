import React from 'react'
import '../../scss/app.scss'
import clsx from 'clsx'
import styles from './AviaInfo.module.scss'
import logoSrc from '../../assets/img/logo.jpg'
import pathSrc from '../../assets/img/pathImg.png'
import luggageSrc from '../../assets/img/luggageImg.png'

import {getDataFromLS} from '../../utils/getDataFromLC'
import {dataType} from '../../utils/setDataToLC'

const dataFlight: dataType = getDataFromLS()

const AviaInfo: React.FC = () => {

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.tickets}>
          <div className={styles.item}>
            <div className={styles.item__imgBlock}>
              <div className={styles.item__imgBlock_text}>
                Невозвратный
              </div>
              <img src={logoSrc} alt='brand-img' className={styles.item__imgBlock_img} />
              <div className={styles.item__imgBlock_title}>
                S7 Airlines
              </div>
            </div>
            <div className={styles.item__infoBlock}>
              <div className={styles.item__infoBlock_content}>
                <div className={styles.item__infoBlock_content_textBlock}>
                  <h2 className={styles.item__infoBlock_content_textBlock_time}>09:20</h2>
                  <p className={styles.item__infoBlock_content_textBlock_city}>{dataFlight.departCity}</p>
                  <p className={styles.item__infoBlock_content_textBlock_date}>{dataFlight.dateToGoCity}</p>
                </div>
                <img src={pathSrc} alt='img-path' className={styles.item__infoBlock_content_imgPath}/>
                <div className={styles.item__infoBlock_content_textBlock}>
                  <h2 className={styles.item__infoBlock_content_textBlock_time}>09:20</h2>
                  <p className={styles.item__infoBlock_content_textBlock_city}>{dataFlight.arrivCity}</p>
                  <p className={styles.item__infoBlock_content_textBlock_date}>{dataFlight.dateToGoCity}</p>
                </div>
                <img src={luggageSrc} alt='img-luggage' className={styles.item__infoBlock_content_imgLuggages}/>
              </div>
              <div className={styles.item__infoBlock_btn}>
                <button className={clsx(styles.item__infoBlock_btn_button)}>09:20 - 11:05</button>
                <button className={styles.item__infoBlock_btn_button}>10:20 - 12:05</button>
                <button className={styles.item__infoBlock_btn_button}>11:20 - 13:05</button>
              </div>
            </div>
          </div>
          {/* <div className={styles.item}>
            <div className={styles.item__imgBlock}>
              <div className={styles.item__imgBlock_text}>
                Невозвратный
              </div>
              <img src={logoSrc} alt='brand-img' className={styles.item__imgBlock_img} />
              <div className={styles.item__imgBlock_title}>
                S7 Airlines
              </div>
            </div>
            <div className={styles.item__infoBlock}>
              <div className={styles.item__infoBlock_content}>
                <div className={styles.item__infoBlock_content_textBlock}>
                  <h2 className={styles.item__infoBlock_content_textBlock_time}>09:20</h2>
                  <p className={styles.item__infoBlock_content_textBlock_city}>{dataFlight.departCity}</p>
                  <p className={styles.item__infoBlock_content_textBlock_date}>{dataFlight.dateToGoCity}</p>
                </div>
                <img src={pathSrc} alt='img-path' className={styles.item__infoBlock_content_imgPath}/>
                <div className={styles.item__infoBlock_content_textBlock}>
                  <h2 className={styles.item__infoBlock_content_textBlock_time}>09:20</h2>
                  <p className={styles.item__infoBlock_content_textBlock_city}>{dataFlight.arrivCity}</p>
                  <p className={styles.item__infoBlock_content_textBlock_date}>{dataFlight.dateToGoCity}</p>
                </div>
                <img src={luggageSrc} alt='img-luggage' className={styles.item__infoBlock_content_imgLuggages}/>
              </div>
              <div className={styles.item__infoBlock_btn}>
                <button className={clsx(styles.item__infoBlock_btn_button)}>09:20 - 11:05</button>
                <button className={styles.item__infoBlock_btn_button}>10:20 - 12:05</button>
                <button className={styles.item__infoBlock_btn_button}>11:20 - 13:05</button>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.price}>
          4 150 ₽
        </div>
      </div>
    </div>
  )
}

export default AviaInfo