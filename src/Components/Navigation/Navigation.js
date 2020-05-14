import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={styles.link}
            activeClassName={styles.active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
