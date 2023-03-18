import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImArrowLeft } from 'react-icons/im';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <ImArrowLeft />
      {children}
    </Link>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node,
};
