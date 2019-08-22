import React, { Component } from 'react';
import List from '../common/List';
import Album from '../album/Album';
import PropTypes from 'prop-types';
import Pagination from '../pagination/Pagination';
import { getAlbums } from '../services/musicBrainzApi';
import loadingStyles from '../common/LoadingSpinner.css';

export default class AlbumContainer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    albums: [],
    coverArt: [],
    page: 1,
    totalPages: 0,
    loading: true,
    error: null
  }

  fetchAlbums = () => {
    this.setState({ loading: true });
    const offset = (this.state.page - 1) * 25;
    getAlbums(this.props.match.params.id, offset)
      .then(albums => {
        const withName = albums.releases.map(album => {
          return { ...album, name: this.props.match.params.name };
        });
        this.setState({ albums: withName, totalPages: albums.totalPages, loading: false });
      })
      .catch(err => this.setState({
        error: err,
        loading: false
      }));
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  pageUp = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchAlbums();
    });
  }

  pageDown = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchAlbums();
    });
  }

  render() {
    if(this.state.error) return <h1>Unable to load albums...</h1>;
    if(this.state.loading) return (
      <>
        <h1>Releases by {this.props.match.params.name}</h1>
        <img className={loadingStyles.Loading} src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />
      </>
    );
    return (
      <>
        <h1>Releases by {this.props.match.params.name}</h1>
        <Pagination
          totalPages={this.state.totalPages}
          page={this.state.page}
          pageUp={this.pageUp}
          pageDown={this.pageDown} />
        <List arr={this.state.albums} Comp={Album} />
      </>
    );
  }
}
