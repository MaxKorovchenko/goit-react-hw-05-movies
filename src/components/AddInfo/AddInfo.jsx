import { Link } from 'react-router-dom';

import styles from './AddInfo.module.css';

const AddInfo = () => {
  return (
    <section>
      <h2 className={styles.title}>Additional information</h2>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AddInfo;
