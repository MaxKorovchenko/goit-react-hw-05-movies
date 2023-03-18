import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const { data } = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}

      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
