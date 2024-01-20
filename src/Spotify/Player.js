// Player.js
import React from 'react';
import './Spotify.css'

const Player = ({ currentTrack, isPlaying, pauseTrack }) => {
  return (
    <div className="player">
      {currentTrack ? (
        <div className="player__info">
          <img src={currentTrack.image} alt={currentTrack.name} />
          <div className="player__infoText">
            <h4>{currentTrack.name}</h4>
            <p>{currentTrack.artist}</p>
          </div>
        </div>
      ) : (
        <p>No track selected</p>
      )}

      {currentTrack && (
        <div className="player__controls">
          <button onClick={pauseTrack}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      )}
    </div>
  );
};

export default Player;
