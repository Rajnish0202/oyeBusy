import styles from './Location.module.css';

const Location = () => {
  return (
    <section className={styles.locations}>
      <div className={styles.contact}>
        <h4 className={styles.contactHeading}>top location</h4>
        <div className={styles.cityName}>
          <p className={styles.name}>
            Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore •
            Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior •
            Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana •
            Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune •
            Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam
          </p>
        </div>
      </div>
      <div className={styles.contact}>
        <h4 className={styles.contactHeading}>Contact us</h4>
        <div className={styles.contactDetails}>
          <p>Phone : +91 782 762 1417</p>
          <p>Email : support@roservicecenter.live</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
