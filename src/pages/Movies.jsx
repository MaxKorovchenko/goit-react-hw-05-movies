import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

import { fetchSerchingMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getSerchingMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchSerchingMovies(query);
        setMovies(data.results);

        if (!data.results.length) {
          toast.info('No results were found for your search!');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSerchingMovies();
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={setSearchParams} />

      {isLoading && <Loader />}
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}

      <MoviesList items={movies} />

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
};

export default Movies;
