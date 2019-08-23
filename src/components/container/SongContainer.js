import React, { Component } from 'react';
import List from '../common/List';
import Song from '../song/Song';
import PropTypes from 'prop-types';
import { getSongs } from '../services/musicBrainzApi';
import loadingStyles from '../common/LoadingSpinner.css';
 
export default class SongContainer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    songs: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    getSongs(this.props.match.params.id)
      .then(songs => {
        const withNameAndAlbum = songs.recordings.map(song => {
          return { ...song, name: this.props.match.params.name, album: this.props.match.params.album };
        });
        this.setState({ songs: withNameAndAlbum, loading: false });
      })
      .catch(err => this.setState({
        error: err,
        loading: false
      }));
  }

  render() {
    if(this.state.error) return <h1>Unable to load songs...</h1>;
    if(this.state.loading) return <img className={loadingStyles.Loading} src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />;
    return (
      <>
        <h1>Songs from {this.props.match.params.album}</h1>
        <List arr={this.state.songs} Comp={Song} />
      </>
    );
  }
}
