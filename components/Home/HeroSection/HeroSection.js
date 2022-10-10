/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import CityForm from '../CityForm/CityForm';
import styles from './HeroSection.module.css';

const HeroSection = (props) => {
  const [city, setCity] = useState(props.city[0]);
  const { heroSection } = city;

  return (
    <section className={styles.hero}>
      <img src={heroSection.webBanner} alt={heroSection.title} className={styles.web} />
      <img src={heroSection.mobBanner} alt={heroSection.title} className={styles.mob} />
      <div className={styles.heroBox}>
        <h3 className={styles.title}>{heroSection.title}</h3>
        <h1 className={styles.heading}>{heroSection.heading}</h1>
        <p className={styles.description}>{heroSection.description}</p>
        <CityForm selectCity={heroSection.form} />
      </div>
    </section>
  );
};

export default HeroSection;
