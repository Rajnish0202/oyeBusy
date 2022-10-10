/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Brands.module.css';

const Brands = (props) => {
  const brand = props.brands.map((brand, i) => {
    return <img src={brand} key={i} alt={brand} className={styles.image} />;
  });

  return (
    <div className={styles.brands}>
      <div className={styles.container}>
        <h4>trusted services provider</h4>
        <div className={styles.brand}>{brand}</div>
      </div>
    </div>
  );
};

export default Brands;
