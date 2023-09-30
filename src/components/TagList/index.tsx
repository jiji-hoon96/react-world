import { useQuery } from '@tanstack/react-query';
import * as styles from './index.css';

export default function TagList() {
  const { data } = useQuery(['tagList'], () =>
    fetch('https://api.realworld.io/api/tags').then((res) => res.json())
  );
  console.log(data);
  return (
    <div className={styles.TagContainer}>
      <p className={styles.TagTitle}>Popular Tags</p>
      {data?.tags.map((x: string) => <li className={styles.TagItem}>{x}</li>)}
    </div>
  );
}
