import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ props }) {
  return (
    <section>
      <Link to={`/albums/${props.name}/${props.id}`}>{props.name}</Link>
    </section>
  );
}

Artist.propTypes = {
  props: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
