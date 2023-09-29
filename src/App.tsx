import { useQuery } from '@tanstack/react-query';
import Banner from './components/Banner';
import * as styles from './app.css';

export default function App() {
  const { data } = useQuery(['articleData'], () =>
    fetch('https://api.realworld.io/api/articles').then((res) => res.json())
  );
  console.log(data);
  return (
    <div>
      <Banner />
      <div className={styles.homeLayout}>
        <div className={styles.homeLeftLayout}>여기는 왼쪽 구역</div>
        <div className={styles.homeRightLayout}>여기는 오른쪽 구역</div>
      </div>
    </div>
  );
}
