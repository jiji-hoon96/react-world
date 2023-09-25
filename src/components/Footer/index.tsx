import * as styles from './index.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a href="/" className={styles.footerLogo}>
          conduit
        </a>
        <span className={styles.footerSpan}>
          An interactive learning project from{' '}
          <a href="https://thinkster.io" className={styles.footerTag}>
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
