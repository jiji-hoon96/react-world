import { useQuery } from '@tanstack/react-query';
import * as styles from './index.css';
import { v4 as uuidv4 } from 'uuid';
import { Article } from '@/types/Article';

export default function Feed() {
  const {
    data: { articles },
  } = useQuery(['articleList'], () =>
    fetch(`${import.meta.env.VITE_SERVER_API}articles`).then((res) => res.json())
  );

  return (
    <div>
      {articles.map((article: Article) => (
        <div key={uuidv4()} className={styles.FeedContainer}>
          <div>
            <a>{article.author.image}</a>
            <div>
              <a>{article.author.username}</a>
              <span>{article.createdAt}</span>
            </div>
            <button>{article.favoritesCount}</button>
          </div>
          <a>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>

            <ul>
              {article.tagList.map((x: string) => (
                <li key={uuidv4()}>{x}</li>
              ))}
            </ul>
          </a>
        </div>
      ))}
    </div>
  );
}
