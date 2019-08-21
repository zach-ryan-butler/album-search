import React from 'react';
import PropTypes from 'prop-types';

function List({ arr, Comp }) {
  const artistList = arr.map(obj => (
    <li key={obj.id}>
      <Comp props={obj} />
    </li>
  ));

  return (
    <ul>
      {artistList}
    </ul>
  );
}

List.propTypes = {
  arr: PropTypes.array.isRequired,
  Comp: PropTypes.func.isRequired
};

export default List;
