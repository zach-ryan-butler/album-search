import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.css';
import { Link } from 'react-router-dom';

function Album({ obj }) {
  const coverArt = obj['cover-art-archive'].count ? `http://coverartarchive.org/release/${obj.id}/front` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCe_V81Br1ClM5ezpV5aJkoq23Y1ecEcz-5b68AAfPE9Xw95w5Gg';
  return (
    <section className={styles.Album}>
      <Link to={`/songs/${obj.name}/${obj.title}/${obj.id}`}>{obj.title}</Link>
      <img src={coverArt} />
    </section>
  );
}

Album.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    ['cover-art-archive']: PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default Album;
