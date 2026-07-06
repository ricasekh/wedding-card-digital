import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { unlockAudio } from '../lib/sfx';

// Ambient music that begins once the envelope has been opened — during
// the opening itself the paper sounds are the focus.
//
// phase: 'idle'  → silent, nothing playing
//        'warm'  → seal was tapped (a real gesture): start playback at
//                  volume 0 so mobile autoplay policy is satisfied while
//                  the film plays with paper sounds only
//        'on'    → envelope is open: fade the music up. If playback was
//                  never unlocked (scroll-openers on mobile), retry on
//                  the next touch — the guest is actively scrolling, so
//                  this lands within a moment.
export function SoundToggle({ phase }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(0);
  const userPaused = useRef(false);
  const [audible, setAudible] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0;
    return () => {
      cancelAnimationFrame(fadeRef.current);
    };
  }, []);

  const fadeTo = (target, ms = 2000) => {
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

  // Starts (or resumes) playback; resolves true when actually playing.
  const ensurePlaying = () => {
    const audio = audioRef.current;
    if (!audio) return Promise.resolve(false);
    unlockAudio();
    if (!audio.paused) return Promise.resolve(true);
    const promise = audio.play();
    if (promise === undefined) return Promise.resolve(true);
    return promise.then(
      () => true,
      () => false
    );
  };

  const becomeAudible = () => {
    if (userPaused.current) return;
    ensurePlaying().then((ok) => {
      if (ok && !userPaused.current) {
        setAudible(true);
        fadeTo(0.5, 2000);
      }
    });
  };

  const unlockedRef = useRef(false);

  useEffect(() => {
    const kick = () => {
      if (unlockedRef.current || userPaused.current) return;
      ensurePlaying().then((ok) => {
        if (ok) {
          unlockedRef.current = true;
          // If unlocked late (after envelope is open), fade up immediately
          if (phase === 'on' && !userPaused.current) {
            becomeAudible();
          }
        }
      });
    };

    const gestures = ['touchstart', 'touchmove', 'touchend', 'pointerdown', 'click', 'keydown', 'scroll', 'wheel'];
    const options = { passive: true, capture: true };
    gestures.forEach((evt) => window.addEventListener(evt, kick, options));

    // Try immediately for desktop browsers that allow autoplay
    kick();

    return () => {
      gestures.forEach((evt) => window.removeEventListener(evt, kick, options));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    if (phase === 'on') {
      becomeAudible();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const toggle = () => {
    if (audible) {
      userPaused.current = true;
      setAudible(false);
      fadeTo(0, 700);
    } else {
      userPaused.current = false;
      becomeAudible();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.url} loop preload="auto" />
      <button
        className={`sound-toggle ${audible ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={audible ? 'Pause music' : 'Play music'}
        title={weddingConfig.music.title}
      >
        <span className="sound-bars" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
      </button>
    </>
  );
}
