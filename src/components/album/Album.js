import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Album({ props }) {
  return (
    <section>
      <Link to={`/songs/${props.name}/${props.title}/${props.id}`}>{props.title}</Link>
    </section>
  );
}

Album.propTypes = {
  props: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Album;
