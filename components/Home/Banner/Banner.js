/* eslint-disable @next/next/no-img-element */
import styles from './Banner.module.css';

const Banner = (props) => {
  const { banner5: banner } = props.city[0];

  return (
    <div className={styles.banner}>
      <img className={styles.webImg} src={banner.webImg} alt={banner.altText} />
      <img className={styles.mobImg} src={banner.mobImg} alt={banner.altText} />
    </div>
  );
};

export default Banner;
