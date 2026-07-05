import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const AudioPlayer = ({ autoPlayTrigger, isInline = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
        className={isInline ? "audio-footer-btn" : "audio-floating-btn"}
        onClick={togglePlay}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <div className="sound-bars-flex">
            <Volume2 size={16} className="text-gold" />
            <span>Pause Music</span>
          </div>
        ) : (
          <div className="sound-bars-flex">
            <VolumeX size={16} />
            <span>Play Music</span>
          </div>
        )}
      </button>

      <style>{`
        .audio-footer-btn {
          background: rgba(26, 22, 20, 0.06);
          border: 1px solid var(--border-gold);
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .audio-footer-btn:hover {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }

        .sound-bars-flex {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `}</style>
    </>
  );
};
