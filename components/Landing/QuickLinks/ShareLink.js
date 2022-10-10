import Link from 'next/link';
import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import styles from './ShareLink.module.css';

const ShareLink = (props) => {
  const [shareLink, setShareLink] = useState(props.data);
  const [seeMore, setSeeMore] = useState(10);
  const { heading } = props;

  const showMoreItems = () => {
    setSeeMore((prevState) => prevState + 10);
  };

  const backItems = () => {
    if (seeMore === 10) {
      return;
    }
    setSeeMore((prevState) => prevState - 10);
  };

  return (
    <div className={styles.serving}>
      <h4 className={styles.subheading}>{heading}</h4>
      <div className={styles.container}>
        {shareLink.slice(0, seeMore).flatMap((item, index) => {
          const { anchorText, link } = item;
          return (
            <Link href={link} key={index}>
              <p className={styles.link}>
                <BsDot />
                {anchorText}
              </p>
            </Link>
          );
        })}
        <div className={styles.area}>
          <button onClick={showMoreItems}> See more</button>
          {seeMore > 10 && <button onClick={backItems}> Back</button>}
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
