import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const { data } = await fetchMovieReviews(movieId);
        console.log(data);
        //setReviews(reviews => [...reviews, ...data.results]);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
