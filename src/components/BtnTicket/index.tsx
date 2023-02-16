import React from 'react';
import clsx from 'clsx'
import styles from './BtnTicket.module.scss'

type BtnTicketPropsType = {
    id: number
    departTime: string
    timeOfStay: string
    className: string
    onClick: () => void
}

const BtnTicket: React.FC<BtnTicketPropsType> = ({ departTime, timeOfStay, className, onClick}) => {

  return (
    <button
      className={clsx(styles.btn, styles.btnTicket, className, {
        [styles.activeBtn]: className.includes('activeBtn')
      })}
      onClick={onClick}
    >
      <span className={styles.large}>{departTime}</span> - {timeOfStay}
    </button>
  );
};

export default BtnTicket;
