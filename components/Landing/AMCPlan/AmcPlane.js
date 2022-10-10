import React from 'react';
import PriceDetails from '../PriceDetails/PriceDetails';
import styles from './AmcPlane.module.css';
import { GiCheckMark } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight, BsFillExclamationCircleFill } from 'react-icons/bs';

const AmcPlane = (props) => {
  // console.log(props.services);

  const slideLeft = () => {
    let slider = document.getElementById('amc');
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
    let slider = document.getElementById('amc');
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

  const service = props.services.map((plan, index) => {
    const { title, price, cardBanner, termsConditions, covers } = plan;
    return (
      <div className={styles.amcCard} key={index}>
        <div className={styles.container} style={{ backgroundImage: `url(${cardBanner})` }}></div>
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.plans}>
            {covers.map((cover, i) => {
              return (
                <li key={i} className={styles.list}>
                  <p className={styles.name}>{cover.slice(0).split(':')[0]}</p>
                  <div>
                    <span>
                      {cover.includes(true) ? (
                        <GiCheckMark size={20} fill={'#04a80b'} />
                      ) : (
                        <MdClose size={20} fill={'#f20404'} />
                      )}
                    </span>
                    <p className={styles.include}>{cover.includes(true) ? 'Include' : 'Exclude'}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.caution}>
            <span>
              <BsFillExclamationCircleFill size={12} />
            </span>
            <p className={styles.alert}>Note : Spare Parts Will be used in AIMC Plans</p>
          </div>
          <PriceDetails price={price} terms={termsConditions} />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.amcPlane}>
      <h2>Browse AMC Plans</h2>
      <div className={styles.mainAmc}>
        <BsChevronLeft size={40} className={`${styles.sliderIcon} ${styles.left}`} onClick={slideLeft} />
        <div className={styles.amc} id='amc'>
          {service}
        </div>
        <BsChevronRight size={40} className={`${styles.sliderIcon} ${styles.right}`} onClick={slideRight} />
      </div>
    </div>
  );
};

export default AmcPlane;
