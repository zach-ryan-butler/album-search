import React, { Component } from 'react';
import List from '../common/List';
import Album from '../album/Album';
import PropTypes from 'prop-types';
import { getAlbums } from '../services/musicBrainzApi';

export default class AlbumContainer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    albums: []
  }

  componentDidMount() {
    getAlbums(this.props.match.params.id)
      .then(albums => {
        const withName = albums.releases.map(album => {
          return { ...album, name: this.props.match.params.name };
        });
        this.setState({ albums: withName });
      });
  }

  render() {
    return (
      <>
        <List arr={this.state.albums} Comp={Album} />
      </>
    );
  }
}
