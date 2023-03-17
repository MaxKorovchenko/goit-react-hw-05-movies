import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieCast();
  }, [movieId]);

  const img_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img src={`${img_path}${profile_path}`} alt={name} width="240" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
