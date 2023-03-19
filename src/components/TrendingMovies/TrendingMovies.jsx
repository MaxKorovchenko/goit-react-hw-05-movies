import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import { fetchTrendingMovies } from 'services/api';

import styles from './TrendingMovies.module.css';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}
      <MoviesList items={movies} />
    </>
  );
};

export default TrendingMovies;
