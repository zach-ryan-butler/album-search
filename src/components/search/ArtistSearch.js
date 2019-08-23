import React from 'react';
import PropType from 'prop-types';

function ArtistSearch({ text, textHandler, submitHandler }) {

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text" 
        value={text} 
        placeholder="search.." 
        onChange={textHandler} /> 
      <button disabled={text === ''}>Search</button>
    </form>
  );
} 

ArtistSearch.propTypes = {
  text: PropType.string.isRequired,
  textHandler: PropType.func.isRequired,
  submitHandler: PropType.func.isRequired
};

export default ArtistSearch;
