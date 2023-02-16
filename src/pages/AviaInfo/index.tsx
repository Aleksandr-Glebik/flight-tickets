import React from 'react';
import {Link} from 'react-router-dom'

import styles from './AviaInfo.module.scss';
import { getDataFromLS } from '../../utils/getDataFromLC';
import { dataType } from '../../utils/setDataToLC';

import ItemTicket from './Item/ItemTicket';

const AviaInfo: React.FC = () => {
  let dataFlight: dataType = getDataFromLS();

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.tickets}>
          {dataFlight.roundTripFlight
           ? (<>
           <ItemTicket dataInformation={{date: dataFlight.dateToGoCity, from: dataFlight.departCity, to: dataFlight.arrivCity}}/>
           <ItemTicket dataInformation={{date: dataFlight.dateOfReturnTrip, from: dataFlight.arrivCity, to: dataFlight.departCity}}/>
           </>)
           : <ItemTicket dataInformation={{date: dataFlight.dateToGoCity, from: dataFlight.departCity, to: dataFlight.arrivCity}}/>
          }
        </div>
        <div className={styles.price}>
          {dataFlight.roundTripFlight ? '8 300 ₽': '4 150 ₽'}
        </div>
      </div>
      <div className={styles.linkReturn}>
      <Link to='/avia' >
        <button className={styles.button}>
          вернуться назад
        </button>
      </Link>
      </div>
    </div>
  );
};

export default AviaInfo;
