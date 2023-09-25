import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { nav, navLogo, navLeftArea, navRightArea, navLink, navSelectLink } from './index.css';

const navItems = [
  { path: ROUTES.ROOT, text: 'Home' },
  { path: ROUTES.LOGIN, text: 'Sign in' },
  { path: ROUTES.REGISTER, text: 'Sign up' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={nav}>
      <div className={navLeftArea}>
        <Link to={ROUTES.ROOT} className={navLogo}>
          conduit
        </Link>
      </div>
      <div className={navRightArea}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? navSelectLink : navLink}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
