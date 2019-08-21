import React from 'react';
import ArtistsContainer from './container/ArtistsContainer';
import AlbumContainer from './container/AlbumContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/songs/:name/:album/:id" component={}/> */}
        <Route path="/albums/:name/:id" component={AlbumContainer} />
        <Route path="/" component={ArtistsContainer}/>
      </Switch>
    </Router>
  );
}
