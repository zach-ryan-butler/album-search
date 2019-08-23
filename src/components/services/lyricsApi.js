export const getLyrics = (artistName, songName) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
    .then(res => {
      if(!res.ok) throw 'Could not get lyrics';

      return res.json();
    });
};
