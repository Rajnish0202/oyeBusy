/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './LandingBanner.module.css';

const LandingBanner = (props) => {
  const [data, setData] = useState(props.heroSection);
  const { heading, mobBanner, notes, webBanner } = data;

  const note = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  return (
    <section className={styles.heroSection}>
      <img src={webBanner} alt={heading} className={styles.webBanner} />
      <img src={mobBanner} alt={heading} className={styles.mobBanner} />
      <div className={styles.details}>
        <h1>{heading}</h1>
        <ul>{note}</ul>
      </div>
    </section>
  );
};

export default LandingBanner;
