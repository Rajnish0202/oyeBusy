import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import styles from './Faq.module.css';
import SingleQuestion from './SingleQuestion';

const Faq = (props) => {
  const [questions, setQuestions] = useState(props.faq);
  return (
    <div className={styles.faq}>
      <div className={styles.faqcontainer}>
        <h3 className={styles.subheading}>Frequently Asked Questions?</h3>
        {questions.map((question, index) => {
          return <SingleQuestion key={index} {...question} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
