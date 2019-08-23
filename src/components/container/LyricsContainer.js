import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../lyrics/Lyrics';
import { getLyrics } from '../services/lyricsApi'; 
import loadingStyles from '../common/LoadingSpinner.css'; 

export default class LyricContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: '',
    loading: true,
    error: null
  }

  componentDidMount() {
    const artistName = this.props.match.params.name;
    const songTitle = this.props.match.params.title;
    getLyrics(artistName, songTitle)
      .then(res => {
        this.setState({ lyrics: res.lyrics, loading: false });
      })
      .catch(err => this.setState({
        error: err,
        loading: false
      }));
  }

  render() {
    if(this.state.error) return <h1>Unable to load lyrics...</h1>;
    if(this.state.loading) return <img className={loadingStyles.Loading} src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />;
    return (
      <>
        <Lyrics lyrics={this.state.lyrics} />
      </>
    );
  }
}
