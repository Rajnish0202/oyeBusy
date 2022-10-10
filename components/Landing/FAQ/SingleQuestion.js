import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import styles from './SingleQuestion.module.css';

const SingleQuestion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.question} onClick={() => setShow(!show)}>
        <span>{!show ? <BsPlusLg strokeWidth={1} /> : <FaMinus />}</span>
        <p>{question}</p>
      </div>
      <div className={show ? `${styles.answer} ${styles.show}` : `${styles.answer}`}>{show && <p>{answer}</p>}</div>
    </>
  );
};

export default SingleQuestion;
