import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactCard from './ReactCard';
import styles from './ReactCardSlider.module.css';

const ReactCardSlider = (props) => {
  const slideLeft = () => {
    let slider = document.getElementById(`${styles.slider}`);

    const screen = window.innerWidth;
    let size;
    if (screen == 1440) {
      size = 500;
    } else if (screen >= 1024) {
      size = 350;
    } else if (screen >= 768) {
      size = 400;
    } else if (screen < 768 && screen >= 321) {
      size = 320;
    } else if (screen <= 320) {
      size = 270;
    }
    slider.scrollLeft = slider.scrollLeft - size;
  };

  const slideRight = () => {
    let slider = document.getElementById(`${styles.slider}`);

    const screen = window.innerWidth;
    let size;
    if (screen == 1440) {
      size = 500;
    } else if (screen >= 1024) {
      size = 350;
    } else if (screen >= 768) {
      size = 400;
    } else if (screen < 768 && screen >= 321) {
      size = 320;
    } else if (screen <= 320) {
      size = 270;
    }
    slider.scrollLeft = slider.scrollLeft + size;
  };

  return (
    <div className={styles.mainSliderContainer}>
      <BsChevronLeft size={40} className={`${styles.sliderIcon} ${styles.left}`} onClick={slideLeft} />
      <div id={styles.slider}>
        {props.services.map((service, index) => {
          const { cardBanner, title, notes, price, termsConditions } = service;
          return (
            <div className={styles.sliderCard} key={index}>
              <ReactCard image={cardBanner} price={price} title={title} terms={termsConditions} notes={notes} />
            </div>
          );
        })}
      </div>
      <BsChevronRight size={40} className={`${styles.sliderIcon} ${styles.right}`} onClick={slideRight} />
    </div>
  );
};

export default ReactCardSlider;
