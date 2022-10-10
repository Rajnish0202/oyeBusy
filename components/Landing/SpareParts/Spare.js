import { useState } from 'react';
import styles from './Spare.module.css';
import { BsChevronLeft, BsChevronRight, BsFillExclamationCircleFill } from 'react-icons/bs';

const Spare = (props) => {
  const [spare, setSpare] = useState(props.spare);

  const slideLeft = () => {
    let slider = document.getElementById('spare');
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
    let slider = document.getElementById('spare');
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

  const sparePart = spare.map((part, i) => {
    const { title, spareParts } = part;
    return (
      <div className={styles.spareCard} key={i}>
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.plans}>
            {spareParts.map((item, i) => {
              return (
                <li key={i} className={styles.list}>
                  <p className={styles.name}>{item.partName}</p>
                  <p className={styles.price}>{item.price}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.spareParts}>
      <h2>Spare Parts Price with Brands</h2>
      <div className={styles.mainSpare}>
        <BsChevronLeft size={40} className={`${styles.sliderIcon} ${styles.left}`} onClick={slideLeft} />
        <div className={styles.spare} id='spare'>
          {sparePart}
        </div>
        <BsChevronRight size={40} className={`${styles.sliderIcon} ${styles.right}`} onClick={slideRight} />
      </div>
    </div>
  );
};

export default Spare;
