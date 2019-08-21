import React, {  Component } from 'react';
import Artists from '../artist/Artists';

export default class ArtistsContainer extends Component {
  state = {
    artists: []
  }

  


  render() {
    return (
      <Artists artists={this.state.artists}/>
    );
  }
}
