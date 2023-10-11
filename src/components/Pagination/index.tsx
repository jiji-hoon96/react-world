import * as styles from './index.css';
import { homeLayout } from '../../app.css';
import { ARTICLE_COUNTER } from '@/constants/page';
import { Link } from 'react-router-dom';

interface Props {
  page: number;
  articlesCount: number;
}

export default function Pagination({ page, articlesCount }: Props) {
  const totalPage = Math.ceil(articlesCount / ARTICLE_COUNTER);
  return (
    <nav className={homeLayout}>
      <ul className={styles.PaginationUl}>
        {Array(totalPage)
          .fill(null)
          .map((_, idx) => (
            <li key={`page--${idx}`}>
              <Link className={styles.PaginationLink} onClick={() => console.log(idx)}>
                {idx + 1}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
