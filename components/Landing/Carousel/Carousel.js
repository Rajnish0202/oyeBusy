/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './Carousel.module.css';

const Carousel = (props) => {
  const { title, cardItems } = props.carousel;

  const imageCard = cardItems.map((card, index) => {
    const { imgUrl, displayName, landingUrl } = card;
    return (
      <a href={landingUrl} key={index}>
        <img className={styles.image} src={imgUrl} alt={displayName} />
        <p>{displayName}</p>
      </a>
    );
  });

  return (
    <div className={styles.carousel}>
      <h1 className={styles.heading}>{title}</h1>
      <div className={styles.imageCard}>{imageCard}</div>
    </div>
  );
};

export default Carousel;
