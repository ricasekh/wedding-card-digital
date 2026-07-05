import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';

// Ambient music control. Autoplay is attempted only after the user's
// opening tap on the envelope (a valid gesture), with a gentle fade-in.
export function SoundToggle({ autoPlay }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingConfig.music.url);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;
    audioRef.current = audio;
    return () => {
      cancelAnimationFrame(fadeRef.current);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const fadeTo = (target, ms = 1800) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelAnimationFrame(fadeRef.current);
    const from = audio.volume;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / ms, 1);
      audio.volume = from + (target - from) * t;
      if (t < 1) fadeRef.current = requestAnimationFrame(step);
      else if (target === 0) audio.pause();
    };
    fadeRef.current = requestAnimationFrame(step);
  };

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => {
        setPlaying(true);
        fadeTo(0.55);
      })
      .catch(() => setPlaying(false));
  };

  const pause = () => {
    setPlaying(false);
    fadeTo(0, 700);
  };

  useEffect(() => {
    if (autoPlay) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  return (
    <button
      className={`sound-toggle ${playing ? 'is-playing' : ''}`}
      onClick={playing ? pause : play}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={weddingConfig.music.title}
    >
      <span className="sound-bars" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
    </button>
  );
}
