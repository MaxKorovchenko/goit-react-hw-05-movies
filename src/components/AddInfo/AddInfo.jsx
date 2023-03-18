import { Link } from 'react-router-dom';

const AddInfo = () => {
  return (
    <section>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </section>
  );
};

export default AddInfo;
