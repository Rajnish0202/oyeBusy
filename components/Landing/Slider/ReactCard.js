import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import Notes from '../../Notes/Notes';
import PriceDetails from '../PriceDetails/PriceDetails';
import styles from './ReactCard.module.css';

const ReactCard = ({ image, title, notes, price, terms }) => {
  return (
    <>
      <div className={styles.cardImage} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <ul style={{ width: '100%' }}>
          <Notes notes={notes} Icon={BsCheck2} iconCheck={styles.checkIcon} noteStyle={styles.notes} />
        </ul>
        <PriceDetails price={price} terms={terms} />
      </div>
    </>
  );
};

export default ReactCard;
