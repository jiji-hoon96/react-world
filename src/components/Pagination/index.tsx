import * as styles from './index.css';
import { homeLayout } from '../../app.css';

export default function Pagination() {
  return (
    <nav className={homeLayout}>
      <ul className={styles.PaginationUl}>
        <li>페이지 페이지</li>
        <li>페이지 페이지</li>
        <li>페이지 페이지</li>
      </ul>
    </nav>
  );
}
