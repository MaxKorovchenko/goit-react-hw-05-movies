import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6b54f8bf57e01fb03b792219232215b2';

export const fetchTrendingMovies = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return data;
};

export const fetchSerchingMovies = async query => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data;
};

export const fetchMovieInfo = async id => {
  const data = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

  return data;
};

export const fetchMovieCast = async id => {
  const data = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

  return data;
};

export const fetchMovieReviews = async id => {
  const data = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

  return data;
};
