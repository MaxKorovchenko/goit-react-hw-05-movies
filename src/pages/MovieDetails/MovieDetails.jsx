import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await fetchMovieInfo(movieId);
        setMovie(data);
        // console.log(data);
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
      <section>
        <img src={`${img_path}${poster_path}`} alt={title} />
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

        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetails;
