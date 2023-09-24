import { footer, footerContainer, footerLogo } from './index.css';

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <a href="/" className={footerLogo}>
          conduit
        </a>
        <span>
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
          &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
