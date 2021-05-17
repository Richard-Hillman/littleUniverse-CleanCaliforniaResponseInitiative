/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/navigation.css;


export default function Navigation() {
    
  return (
    <div>
      {
          <div>
            <nav className={styles.navContainer}>
              <div className={styles.logo}>
                <NavLink to="/">CCRI</NavLink>
              </div>
              <ul className={styles.navList}>

                <li className={styles.navItem}>
                  <NavLink to="/partners">Partners</NavLink>
                </li>

                <li className={styles.navItem}>
                  <NavLink to="/benefits">Browse the Benefits</NavLink>
                </li>

                <li className={styles.navItem}>
                  <NavLink to="/about">About the Site</NavLink>
                </li>

                <li className={styles.navItem}>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>

              </ul>
            </nav>
          </div>
      }
    </div>
  );
}
