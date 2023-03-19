import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ query: e.target.search.value });
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="search movies"
        autoComplete="off"
        required
      />
      <button className={styles.button} type="submit">
        <FcSearch />
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
