import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import BackLink from 'components/BackLink/BackLink';
import MovieCard from 'components/MovieCard/MovieCard';
import AddInfo from 'components/AddInfo/AddInfo';
import Loader from 'components/Loader/Loader';

import { fetchMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await fetchMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovieInfo();
  }, [movieId]);

  return (
    <main style={{ width: 900, margin: '0 auto' }}>
      <BackLink to={backLinkRef.current}>GO BACK</BackLink>

      {error && <p>Ooooops... something went wrong 😥 {error}</p>}
      <MovieCard movie={movie} />
      <AddInfo />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
