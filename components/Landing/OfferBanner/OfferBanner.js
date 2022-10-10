/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './OfferBanner.module.css';

const OfferBanner = (props) => {
  const offers = props.offerBanner.map((offer, index) => {
    return (
      <Link href={offer.landingUrl} key={index}>
        <img src={offer.imgUrl} alt={offer.imgUrl} className={styles.offer} />
      </Link>
    );
  });

  return (
    <section className={styles.offerBanner}>
      <div className={styles.offerContainer}>
        <div className={styles.overFlow}>{offers}</div>
      </div>
    </section>
  );
};

export default OfferBanner;
