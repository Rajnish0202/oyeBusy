import React from 'react';
import styles from './PriceDetails.module.css';

const PriceDetails = (props) => {
  return (
    <div className={styles.price}>
      <big>Rs. {props.price}</big>
      <small title={props.terms}>*T&C Apply</small>
      <button className={styles.btn}>Book Now</button>
    </div>
  );
};

export default PriceDetails;
