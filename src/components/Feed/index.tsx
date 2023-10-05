import { useQuery } from '@tanstack/react-query';
import * as styles from './index.css';
import { v4 as uuidv4 } from 'uuid';
import { Article } from '@/types/Article';

export default function Feed() {
  const { data } = useQuery(['articleList'], () =>
    fetch(`${import.meta.env.VITE_SERVER_API}articles`).then((res) => res.json())
  );

  return (
    <div>
      {data?.articles.map((article: Article) => (
        <div key={uuidv4()} className={styles.FeedContainer}>
          <div className={styles.FeedTitleContainer}>
            <a>
              <img className={styles.FeedImage} src={article.author.image} />
            </a>
            <div className={styles.FeedInfo}>
              <a className={styles.FeedAuthor}>{article.author.username}</a>
              <span className={styles.FeedDate}>{article.createdAt}</span>
            </div>
            <div className={styles.FeedTitleRightArea}>
              <button className={styles.FeedFavBtn}>{article.favoritesCount}</button>
            </div>
          </div>
          <a className={styles.FeedLink}>
            <h1 className={styles.FeedTitle}>{article.title}</h1>
            <p className={styles.FeedDescription}>{article.description}</p>
            <span className={styles.FeedExpand}>Read more...</span>
          </a>
          <ul className={styles.FeedUl}>
            {article.tagList.map((tag: string) => (
              <li className={styles.FeedLi} key={uuidv4()}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
