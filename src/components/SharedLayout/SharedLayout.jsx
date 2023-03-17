import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
