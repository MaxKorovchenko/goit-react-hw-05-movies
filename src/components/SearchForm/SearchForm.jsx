import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ query: e.target.search.value });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="search movies"
        autoComplete="off"
        required
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
