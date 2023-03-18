import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  //console.log(movie);
  const { title, poster_path, overview, genres, vote_average } = movie;
  const img_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <section>
      <img src={`${img_path}${poster_path}`} alt={title} width="300" />
      <h2>{title}</h2>
      <p>User score: {vote_average}</p>
      <p>Overview {overview}</p>
      <p>
        Genres:
        {genres?.map(({ id, name }) => (
          <span key={id}>{name}</span>
        ))}
      </p>
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
