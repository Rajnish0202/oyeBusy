/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from './ChooseUs.module.css';

const ChooseUs = (props) => {
  const { webImg, mobImg, altText } = props.choose;
  return (
    <div className={styles.choose}>
      <img src={webImg} alt={altText} className={styles.web} />
      <img src={mobImg} alt={altText} className={styles.mob} />
    </div>
  );
};

export default ChooseUs;
