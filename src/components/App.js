import React from 'react';
import ArtistsContainer from './container/ArtistsContainer';
import AlbumContainer from './container/AlbumContainer';
import SongContainer from './container/SongContainer';
import LyricsContainer from './container/LyricsContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lyrics/:name/:album/:title/:id" component={LyricsContainer} />
        <Route path="/songs/:name/:album/:id" component={SongContainer} />
        <Route path="/albums/:name/:id" component={AlbumContainer} />
        <Route path="/" component={ArtistsContainer} />
      </Switch>
    </Router>
  );
}
