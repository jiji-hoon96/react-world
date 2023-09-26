import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as styles from './index.css';
import { ROUTES } from '@/utils/routes';

const navItems = [
  { path: ROUTES.HOME, text: 'Home' },
  { path: ROUTES.LOGIN, text: 'Sign in' },
  { path: ROUTES.REGISTER, text: 'Sign up' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeftArea}>
        <Link to={ROUTES.HOME} className={styles.navLogo}>
          conduit
        </Link>
      </div>
      <div className={styles.navRightArea}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? styles.navSelectLink : styles.navLink}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
