import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ obj }) {
  return (
    <section>
      <Link to={`/albums/${obj.name}/${obj.id}`}>{obj.name}</Link>
    </section>
  );
}

Artist.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
};

export default Artist;
