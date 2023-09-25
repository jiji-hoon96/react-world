import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes';
import * as styles from './index.css';

const navItems = [
  { path: ROUTES.ROOT, text: 'Home' },
  { path: ROUTES.LOGIN, text: 'Sign in' },
  { path: ROUTES.REGISTER, text: 'Sign up' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeftArea}>
        <Link to={ROUTES.ROOT} className={styles.navLogo}>
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
