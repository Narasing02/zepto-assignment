// App.js
import React, { useState } from 'react';
import Player from './Player';
import TrackList from './TrackList';
import './Spotify.css'

const Spotify = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  return (
    <div className="app">
      <h1>React Spotify</h1>
      <div className="app__body">
        <TrackList playTrack={playTrack} />
        <Player currentTrack={currentTrack} isPlaying={isPlaying} pauseTrack={pauseTrack} />
      </div>
    </div>
  );
};

export default Spotify;
