export const getArtists = (name, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get artists';

      return res.json();
    })
    .then(json => ({
      artists: json.artists,
      count: json.count,
      created: json.created,
      offset: json.offset,
      totalPages: Math.ceil(json.count / 25)
    }));
};

export const getAlbums = (id, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get albums';

      return res.json();
    })
    .then(json => ({
      ['release-count']: json['release-count'],
      ['release-offset']: json['release-offset'],
      releases: json.releases,
      totalPages: Math.ceil(json['release-count'] / 25)
    }));
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
