import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics }) {
  return (
    <p>{lyrics}</p>
  );
}

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
