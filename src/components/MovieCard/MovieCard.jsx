import PropTypes from 'prop-types';

import placeholder from '../../services/images/placeholder.jpg';

import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  //console.log(movie);
  const { title, poster_path, overview, genres, vote_average } = movie;
  const img_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <section className={styles.container}>
      <img
        src={poster_path ? `${img_path}${poster_path}` : placeholder}
        alt={title}
        width="300"
        height="450"
      />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.score}>User score: {vote_average}</p>
        <p className={styles.wrapper}>
          <span className={styles.divider}>Overview</span> {overview}
        </p>
        <div className={styles.wrapper}>
          <span className={styles.divider}>Genres</span>
          <p>
            {genres?.map(({ id, name }) => (
              <span key={id} className={styles.span}>
                {name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
