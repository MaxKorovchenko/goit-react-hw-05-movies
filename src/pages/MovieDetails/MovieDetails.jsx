import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await fetchMovieInfo(id);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieInfo();
  }, [id]);

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
    </main>
  );
};

export default MovieDetails;
