import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImArrowLeft } from 'react-icons/im';

import styles from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link className={styles.link} to={to}>
      <ImArrowLeft />
      {children}
    </Link>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  children: PropTypes.node,
};
