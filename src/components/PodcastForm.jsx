import React, { useState, useRef } from 'react';
import logo from '../Icons/1w.png'; // Update the path to your logo
import '../PodcastForm.css';

function PodcastForm({ onGenerate, audioUrl, transcript }) {
  const [city, setCity] = useState('');
  const username = localStorage.getItem('username') || 'Guest';
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ city });
  };

  const handleToggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="podcast-form-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="company-logo" />
      </div>

      <div className="greeting">
        Hello, {username}!
      </div>

      <form onSubmit={handleSubmit} className="podcast-form">
        <label className="input-label">
          Enter City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="enhanced-input"
            placeholder="Type a city name..."
          />
        </label>
        <button type="submit" className="generate-button">
          Generate Podcast
        </button>
      </form>

      {audioUrl && (
        <div className="audio-player-wrapper">
          <div className="audio-player-container">
            <audio
              ref={audioRef}
              src={audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="custom-audio-player">
              <button className="play-button" onClick={togglePlayback}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${(currentTime / duration) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <a
              className="download-link"
              href={audioUrl}
              download="podcast.mp3"
            >
              Download Podcast
            </a>
            <button
              className="transcript-button"
              onClick={handleToggleTranscript}
            >
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </button>
            {showTranscript && (
              <div className="transcript-box">
                <h3>Podcast Transcript</h3>
                <p>{transcript || 'Transcript will appear here.'}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PodcastForm;
