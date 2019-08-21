import React from 'react';
import Artists from './artist/Artists';
import ArtistSearch from './search/ArtistSearch';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return <ArtistSearch text="Nirvana" />;
}
