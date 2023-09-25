import * as styles from './index.css';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Real World</h1>
      <p className={styles.subTitle}>A place to share your knowledge.</p>
    </div>
  );
}
