import React from 'react';
import PropTypes from 'prop-types';

function Artist({ name, id }) {
  console.log(name);
  console.log(id);
  return (
    <section>
      <p>{name}</p>
      <p>{id}</p>
    </section>  
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
