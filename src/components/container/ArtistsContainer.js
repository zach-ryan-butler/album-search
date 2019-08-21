import React, {  Component } from 'react';
import List from '../common/List';
import ArtistSearch from '../search/ArtistSearch';
import Artist from '../artist/Artist';
import { getArtists } from '../services/musicBrainzApi';

export default class ArtistsContainer extends Component {
  state = {
    text: '',
    artists: []
  }

  textHandler = ({ target }) => {
    this.setState({ text: target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    getArtists(this.state.text)
      .then(res => {
        this.setState({ artists: res.artists });
      })
      .catch(console.log('we got issues'));
  }
  


  render() {
    return (
      <>
        <ArtistSearch 
          text={this.state.text} 
          textHandler={this.textHandler} 
          submitHandler={this.submitHandler} />
        <List arr={this.state.artists} Comp={Artist} />  
      </>
    );
  }
}
