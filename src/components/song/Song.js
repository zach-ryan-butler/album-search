import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ obj }) {
  return (
    <section>
      <Link to={`/lyrics/${obj.name}/${obj.album}/${obj.title}/${obj.id}`}>{obj.title}</Link>
    </section>
  );
}

Song.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
};

export default Song;
