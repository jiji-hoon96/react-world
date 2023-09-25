import { footer, footerContainer, footerLogo, footerSpan, footerTag } from './index.css';

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <a href="/" className={footerLogo}>
          conduit
        </a>
        <span className={footerSpan}>
          An interactive learning project from{' '}
          <a href="https://thinkster.io" className={footerTag}>
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
