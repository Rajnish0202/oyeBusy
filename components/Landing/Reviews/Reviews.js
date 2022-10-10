import { useState } from 'react';
import Rating from './Rating';
import styles from './Reviews.module.css';

const Reviews = (props) => {
  const [reviews, setReviews] = useState(props.reviews);

  let today = new Date();
  const date = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = date + '/' + month + '/' + year;

  const reviewsHtml = reviews.map((review, index) => {
    return (
      <div className={styles.review} key={index}>
        <div className={styles.details}>
          <strong>{review.custName}</strong>
          <p className={styles.date}>{today}</p>
          <p className={styles.rating}>{<Rating {...review.rating} />}</p>
          <span className={styles.count}>(230)</span>
        </div>
        <div className={styles.views}>
          <p>{review.review}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewContainer}>
        <h4 className={styles.subheading}>Customers Talks</h4>
        {reviewsHtml}
      </div>
    </div>
  );
};

export default Reviews;
