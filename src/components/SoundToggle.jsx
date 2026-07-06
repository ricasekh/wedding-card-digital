import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';

// Ambient music, on by default. Browsers block unmuted autoplay, so we
// try immediately and otherwise begin on the guest's first interaction
// (tap, scroll-touch, key) — always with a gentle fade-in. Pausing via
// the toggle is respected and never overridden.
export function SoundToggle({ autoPlay }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(0);
  const userPaused = useRef(false);
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

  const fadeTo = (target, ms = 2200) => {
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
    if (!audio || !audio.paused) return;
    audio
      .play()
      .then(() => {
        setPlaying(true);
        fadeTo(0.5);
      })
      .catch(() => setPlaying(false));
  };

  const pause = () => {
    setPlaying(false);
    fadeTo(0, 700);
  };

  // On by default: try right away; if blocked, first gesture starts it
  useEffect(() => {
    const kick = () => {
      if (!userPaused.current) play();
    };
    kick();
    window.addEventListener('pointerdown', kick, { passive: true });
    window.addEventListener('touchstart', kick, { passive: true });
    window.addEventListener('keydown', kick);
    return () => {
      window.removeEventListener('pointerdown', kick);
      window.removeEventListener('touchstart', kick);
      window.removeEventListener('keydown', kick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (autoPlay && !userPaused.current) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  const toggle = () => {
    if (playing) {
      userPaused.current = true;
      pause();
    } else {
      userPaused.current = false;
      play();
    }
  };

  return (
    <button
      className={`sound-toggle ${playing ? 'is-playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={weddingConfig.music.title}
    >
      <span className="sound-bars" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
    </button>
  );
}
