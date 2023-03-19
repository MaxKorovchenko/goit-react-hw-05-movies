import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

import Loader from 'components/Loader/Loader';

import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasReviews, setHasReviews] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovieReviews(movieId);
        setReviews(data.results);
        if (!data.results.length) {
          setHasReviews(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}
      {!hasReviews && <p>We don't have any reviews for this movie</p>}

      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p className={styles.author}>Author: {author}</p>
            <p className={styles.text}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
