import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      {/* <footer className={styles.footer}>
        {' '}
        <p>© 2023 | All Rights Reserved |&nbsp;</p>
      </footer> */}
    </div>
  );
};

export default SharedLayout;
