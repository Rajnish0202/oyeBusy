import styles from './TabButton.module.css';

const TabButton = (props) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}>{props.home}</div>
      <div className={styles.tab}>{props.location}</div>
      <div className={styles.tab}>{props.service}</div>
    </div>
  );
};

export default TabButton;
