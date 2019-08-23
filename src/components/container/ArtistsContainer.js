import React, {  Component } from 'react';
import List from '../common/List';
import ArtistSearch from '../search/ArtistSearch';
import Artist from '../artist/Artist';
import Pagination from '../pagination/Pagination';
import { getArtists } from '../services/musicBrainzApi';
import loadingStyles from '../common/LoadingSpinner.css';
import PropTypes from 'prop-types';

export default class ArtistsContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired
  }

  state = {
    text: '',
    artists: [],
    page: 1,
    totalPages: 0,
    loading: false,
    error: null
  }

  componentDidMount() {
    const searchArtist = new URLSearchParams(this.props.location.search);
    const artist = searchArtist.get('search');
    const page = parseInt(searchArtist.get('page')) || 1;
    if(artist) {
      this.setState({ text: artist, page: page }, () => {
        this.fetchArtists();
      });
    }
  }

  textHandler = ({ target }) => {
    this.setState({ text: target.value });
  }

  fetchArtists = () => {
    this.setState({ loading: true }); 
    const offset = (this.state.page - 1) * 25;
    getArtists(this.state.text, offset)
      .then(res => {
        this.setState({ artists: res.artists, totalPages: res.totalPages, loading: false });
      })
      .catch(err => this.setState({
        error: err,
        loading: false
      }));
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({ page: 1 }, () => {
      this.props.history.push(`?search=${this.state.text}&page=${this.state.page}`);
      this.fetchArtists();
    });
  }

  pageUp = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.history.push(`?search=${this.state.text}&page=${this.state.page}`);
      this.fetchArtists();
    });
  }

  pageDown = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.props.history.push(`?search=${this.state.text}&page=${this.state.page}`);
      this.fetchArtists();
    });
  }

  render() {
    if(this.state.error) return <h1>Unable to load artists...</h1>;
    if(this.state.loading) return (
      <>
        <h1>Search for an artist</h1>
        <ArtistSearch 
          text={this.state.text} 
          textHandler={this.textHandler} 
          submitHandler={this.submitHandler} />
        <img className={loadingStyles.Loading} src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />
      </>
    );
    return (
      <>
        <h1>Search for an artist</h1>
        <ArtistSearch 
          text={this.state.text} 
          textHandler={this.textHandler} 
          submitHandler={this.submitHandler} />
          <Pagination
            totalPages={this.state.totalPages}
            page={this.state.page}
            pageUp={this.pageUp}
            pageDown={this.pageDown} />
        <List arr={this.state.artists} Comp={Artist} />  
      </>
    );
  }
}
