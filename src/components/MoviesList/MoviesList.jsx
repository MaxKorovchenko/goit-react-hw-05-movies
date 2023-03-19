import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import placeholder from '../../services/images/placeholder.jpg';

import styles from './MoviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const img_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul className={styles.list}>
      {items.map(({ id, title, poster_path }) => (
        <li className={styles.item} key={id}>
          <Link
            className={styles.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              className={styles.image}
              src={poster_path ? `${img_path}${poster_path}` : placeholder}
              alt={title}
              width="300"
              height="450"
            />
            <p className={styles.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.defaultProps = {
  list: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
