import Link from 'next/link';
import styles from './MainNavigation.module.css';
import { BsChevronDown, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { RiPhoneFill, RiWhatsappFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const MainNavigation = () => {
  const [showBar, setShowBar] = useState(false);

  const barHandler = () => {
    setShowBar(!showBar);
    console.log('hello');
  };

  return (
    <header className={styles.header}>
      <nav>
        <button className={styles.bar} onClick={barHandler}>
          <FaBars />
        </button>
        <ul className={!showBar ? `${styles.list} ${styles.active}` : `${styles.list}`}>
          <li>
            <Link href='/'>Appliances</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Home</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Gadget</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Handyman</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Beauty</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Fitness</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Business</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>All Services</Link>
            <BsChevronDown />
          </li>
          <li>
            <Link href='/'>Blog</Link>
            <BsChevronDown />
          </li>
        </ul>
        <div className={styles.call}>
          <button className={styles.contact}>
            <p>
              <BsTelephoneFill /> Service Helpline
            </p>
            <p>7627621417</p>
          </button>
          <button className={styles.whatsapp}>
            <RiWhatsappFill />
          </button>
          <button className={styles.phone}>
            <RiPhoneFill />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
