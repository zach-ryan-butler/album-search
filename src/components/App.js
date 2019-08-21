import React from 'react';
import Artists from './artist/Artists';

export default function App() {
  const artistArr = [
    {
      name: 'bob',
      id: '123'
    },
    {
      name: 'zach',
      id: '456'
    },
    {
      name: 'bill',
      id: '989'
    }
  ];

  return <Artists artists={artistArr} />;
}
