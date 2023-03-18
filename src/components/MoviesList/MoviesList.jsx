import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
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
    }).isRequired
  ).isRequired,
};
