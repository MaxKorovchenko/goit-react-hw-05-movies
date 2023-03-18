import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/home');

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await fetchMovieInfo(movieId);
        setMovie(prevState => ({ ...prevState, ...data }));
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieInfo();
  }, [movieId]);

  const { title, poster_path, overview, genres, vote_average } = movie;
  const img_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <main>
      <Link to={backLinkRef.current}>go back</Link>

      <section>
        <img src={`${img_path}${poster_path}`} alt={title} width="300" />
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <p>Overview {overview}</p>
        <p>Genres {genres?.map(genre => genre.name)}</p>
      </section>

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

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetails;
