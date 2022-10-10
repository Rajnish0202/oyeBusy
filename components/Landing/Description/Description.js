import React from 'react';
import styles from './Description.module.css';
import parse from 'html-react-parser';

const Description = (props) => {
  const { desc } = props;
  const description = <div>{parse(desc)}</div>;
  return (
    <div className={styles.description}>
      <div className={styles.desc}>
        <h1>Top 10 House Cleaning Services in Delhi NCR:</h1>
        {description}
      </div>
    </div>
  );
};

export default Description;
