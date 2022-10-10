/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './AboutUrban.module.css';

const AboutUrban = (props) => {
  const { banner4: banner } = props.city[0];

  const image = banner.imgs.map((el) => {
    return <img src={el} key={el} alt={el} />;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutUrban}>
        <div className={styles.urbanAbout}>
          <p className={styles.title}>{banner.title}</p>
          <p className={styles.desc}>{banner.description}</p>
        </div>
        <div className={styles.urbanImage}>{image}</div>
      </div>
    </div>
  );
};

export default AboutUrban;
