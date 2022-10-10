import React from 'react';
import styles from './ShareLinks.module.css';
import ShareLink from './ShareLink';

const ShareLinks = (props) => {
  const { servingAreas, alsoAvailableIn } = props.serveLinks;
  return (
    <section className={styles.quickLinks}>
      <h2>Quick Links</h2>
      <ShareLink data={servingAreas} heading='Serving in' />
      <ShareLink data={alsoAvailableIn} heading='Also avilable in' />
    </section>
  );
};

export default ShareLinks;
