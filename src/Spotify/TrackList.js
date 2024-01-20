// TrackList.js
import React from 'react';

import './Spotify.css'

const tracks = [
  {
    id: 1,
    name: 'Song 1',
    artist: 'Artist 1',
    image: 'https://placekitten.com/80/80',
  },
  {
    id: 2,
    name: 'Song 2',
    artist: 'Artist 2',
    image: 'https://placekitten.com/81/81',
  },
  // Add more tracks as needed
];

const TrackList = ({ playTrack }) => {
  return (
    <div className="trackList">
      <h2>Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} onClick={() => playTrack(track)}>
            <img src={track.image} alt={track.name} />
            <div>
              <h4>{track.name}</h4>
              <p>{track.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
