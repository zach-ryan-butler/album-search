import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artists }) {
  const artistList = artists.map(({ name, id }) => (
    <li key={id}>
      <Artist name={name} id={id} />
    </li>
  ));

  return (
    <ul>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Artists;
