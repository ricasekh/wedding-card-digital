import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const AudioPlayer = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Autoplay blocked by browser policy:', err));
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={weddingConfig.music.url} 
        loop 
        preload="auto" 
      />

      <button 
        className="audio-floating-btn"
        onClick={togglePlay}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <div className="sound-bars">
            <span className="sound-bar"></span>
            <span className="sound-bar"></span>
            <span className="sound-bar"></span>
            <span className="sound-bar"></span>
          </div>
        ) : (
          <Music size={20} />
        )}
      </button>
    </>
  );
};
