import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setMovies(data.results);
        //console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
