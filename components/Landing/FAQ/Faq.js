import styles from './Faq.module.css';
import SingleQuestion from './SingleQuestion';

const Faq = (props) => {
  return (
    <div className={styles.faq}>
      <div className={styles.faqcontainer}>
        <h3 className={styles.subheading}>Frequently Asked Questions?</h3>
        {props.faq.map((question, index) => {
          return <SingleQuestion key={index} {...question} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
