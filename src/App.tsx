import { useQuery } from '@tanstack/react-query';
import Banner from './components/Banner';
import * as styles from './app.css';
import TagList from './components/TagList';
import FeedToggle from './components/Feed/Toggle';
import Feed from './components/Feed';

export default function App() {
  const { data } = useQuery(['articleData'], () =>
    fetch(`${import.meta.env.VITE_SERVER_API}articles`).then((res) => res.json())
  );

  console.log(data);
  return (
    <div>
      <Banner />
      <div className={styles.homeLayout}>
        <div className={styles.homeLeftLayout}>
          <FeedToggle />
          <Feed />
        </div>
        <div className={styles.homeRightLayout}>
          <TagList />
        </div>
      </div>
    </div>
  );
}
