/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/footer.css';

export default function Footer() {

  return (
    <div>
      <nav className={styles.footerContainer}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <NavLink className="link" to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 