import { ROUTES } from '@/routes';
import { header, logo, headerLeft, headerRight } from './index.css';

export default function Navbar() {
  return (
    <header className={header}>
      <div className={headerLeft}>
        <a href={ROUTES.ROOT} className={logo}>
          conduit
        </a>
      </div>
      <div className={headerRight}>
        <a href={ROUTES.ROOT}>Home</a>
        <a href={ROUTES.LOGIN}>Sign in</a>
        <a href={ROUTES.REGISTER}>Sign up</a>
      </div>
    </header>
  );
}
