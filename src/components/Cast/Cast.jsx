import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

import Loader from 'components/Loader/Loader';

import placeholder from '../../services/images/placeholder.jpg';

import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  const img_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}

      <ul className={styles.list}>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? `${img_path}${profile_path}` : placeholder}
              alt={name}
              width="240"
              height="320"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
