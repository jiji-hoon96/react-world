import { useQuery } from '@tanstack/react-query';
import * as styles from './index.css';
import { v4 as uuidv4 } from 'uuid';

export default function TagList() {
  const { data } = useQuery(['tagList'], () =>
    fetch(`${import.meta.env.VITE_SERVER_API}tags`).then((res) => res.json())
  );
  return (
    <div className={styles.TagDiv}>
      <div className={styles.TagContainer}>
        <p className={styles.TagTitle}>Popular Tags</p>
        {data?.tags.map((x: string) => (
          <li key={uuidv4()} className={styles.TagItem}>
            {x}
          </li>
        ))}
      </div>
    </div>
  );
}
