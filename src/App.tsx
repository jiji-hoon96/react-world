import Banner from './components/Banner';
import * as styles from './app.css';
import TagList from './components/TagList';
import FeedToggle from './components/Feed/Toggle';
import Feed from './components/Feed';

export default function App() {
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
