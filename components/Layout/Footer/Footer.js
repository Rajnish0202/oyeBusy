import Link from 'next/link';
import styles from './Footer.module.css';
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

const Footer = (props) => {
  const { background, color, title, phone, email } = props;
  return (
    <footer className={styles.footer} style={{ background: `${background}`, color: `${color}` }}>
      <div className={styles.links}>
        <Link href='/' className={styles.link}>
          about us
        </Link>
        <Link href='/' className={styles.link}>
          blog
        </Link>
        <Link href='/' className={styles.link}>
          near me
        </Link>
        <Link href='/' className={styles.link}>
          terms & conditions
        </Link>
        <Link href='/' className={styles.link}>
          privacy policy
        </Link>
        <Link href='/' className={styles.link}>
          contact Us
        </Link>
      </div>
      <div className={styles.contact}>
        <p className={styles.title}>{title}</p>
        <p className={styles.phone}>{phone}</p>
        <p className={styles.phone}>{email}</p>
      </div>
      <div className={styles.linkIcon}>
        <RiInstagramFill />
        <RiTwitterFill />
        <RiLinkedinBoxFill />
        <RiFacebookBoxFill />
        <RiYoutubeFill />
        <RiPinterestFill />
      </div>
      <div className={styles.copyright}>&copy; 2021 OyeBusy Technologies Pvt. Ltd.</div>
    </footer>
  );
};

export default Footer;
