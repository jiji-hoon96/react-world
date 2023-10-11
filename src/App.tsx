import Banner from './components/Banner';
import * as styles from './app.css';
import TagList from './components/TagList';
import FeedToggle from './components/Feed/Toggle';
import Feed from './components/Feed';
import Pagination from './components/Pagination';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState<number>(0);

  const { data, isLoading } = useQuery(['articleList'], () =>
    fetch(`${import.meta.env.VITE_SERVER_API}articles?limit=10&offset=${page}`).then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <Banner />
      {isLoading ? (
        <div> 로딩중</div>
      ) : (
        <>
          <div className={styles.homeLayout}>
            <div className={styles.homeLeftLayout}>
              <FeedToggle />
              <Feed article={data} />
            </div>
            <div className={styles.homeRightLayout}>
              <TagList />
            </div>
          </div>
          <Pagination page={page} articlesCount={data.articlesCount} />
        </>
      )}
    </div>
  );
}
