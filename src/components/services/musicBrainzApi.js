export const getArtists = (name) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get artists';

      return res.json();
    });
};

export const getAlbums = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get albums';

      return res.json();
    });
};

export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get albums';

      return res.json();
    });
};
