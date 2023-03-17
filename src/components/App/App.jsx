import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

import styles from '../App/App.module.css';

export const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={null} />
          <Route path="reviews" element={null} />
        </Route>
      </Routes>
    </div>
  );
};
