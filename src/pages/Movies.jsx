import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { fetchSerchingMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const getSerchingMovies = async () => {
      try {
        const { data } = await fetchSerchingMovies(query);
        setMovies(data.results);
        //console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getSerchingMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
    e.target.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
