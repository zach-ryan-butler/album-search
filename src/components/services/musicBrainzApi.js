export const getArtists = (name) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not save note';

      return res.json();
    });
};
