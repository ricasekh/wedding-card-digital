import React, { useEffect, useState } from 'react';
import { ScrollOpening } from './components/ScrollOpening';
import { LeafCanvas } from './components/LeafCanvas';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Schedule } from './components/Schedule';
import { Venues } from './components/Venues';
import { DressCode } from './components/DressCode';
import { RSVPModal } from './components/RSVPModal';
import { SoundToggle } from './components/SoundToggle';
import { Reveal } from './components/Reveal';
import { weddingConfig } from './config/weddingConfig';
import { unlockAudio } from './lib/sfx';
import { Heart } from 'lucide-react';

export default function App() {
  const [opened, setOpened] = useState(false); // envelope scrubbed fully open
  const [musicOn, setMusicOn] = useState(false); // set on seal tap (user gesture)
  const [isRSVPOpen, setRSVPOpen] = useState(false);
  const { couple, rsvp } = weddingConfig;

  // Expose the real paper texture & Kashmir artwork to CSS with the base URL
  useEffect(() => {
    const base = import.meta.env.BASE_URL || './';
    const root = document.documentElement.style;
    root.setProperty('--paper-tex', `url(${base}images/real_paper_texture.jpg)`);
    root.setProperty('--scenery', `url(${base}images/kashmir_mountains.jpg)`);
  }, []);

  // WebAudio needs one real user gesture before paper sounds may play
  useEffect(() => {
    const unlock = () => unlockAudio();
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  // Scroll parallax for [data-parallax] imagery
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return;
    let raf = 0;

    const tick = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      for (const el of els) {
        const frame = el.parentElement.getBoundingClientRect();
        if (frame.bottom < -120 || frame.top > window.innerHeight + 120) continue;
        const drift = (frame.top + frame.height / 2 - mid) * -parseFloat(el.dataset.parallax || 0.1);
        el.style.transform = `translateY(${drift.toFixed(1)}px) scale(1.14)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <LeafCanvas />
      <div className="grain" aria-hidden="true" />

      <header className={`site-header ${opened ? 'is-on' : ''}`}>
        <span className="header-monogram">{couple.monogram}</span>
        <button className="header-rsvp" onClick={() => setRSVPOpen(true)}>
          RSVP
        </button>
      </header>

      <ScrollOpening onSealTap={() => setMusicOn(true)} onOpenedChange={setOpened} />

      <div className="site">
        <main>
          <Hero onOpenRSVP={() => setRSVPOpen(true)} />
          <Story />
          <Schedule />
          <Venues />
          <DressCode />

          <section className="section" id="rsvp">
            <div className="container">
              <Reveal className="rsvp-banner">
                <div className="eyebrow">We Can't Wait</div>
                <h2 className="section-title">Join Us in Srinagar</h2>
                <p>
                  Your presence and prayers are the most treasured blessings. Kindly
                  confirm your attendance so the family may welcome you properly.
                </p>
                <button className="btn btn-primary" onClick={() => setRSVPOpen(true)}>
                  <Heart size={13} strokeWidth={2.2} />
                  Confirm RSVP
                </button>
                <p className="rsvp-deadline">Before {rsvp.deadline}</p>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-monogram">{couple.monogram}</div>
          <p className="footer-names">
            {couple.groomShort} &amp; {couple.brideShort}
          </p>
          <p className="footer-date">{couple.formattedDate}</p>
          <span className="footer-hashtag">{couple.hashtag}</span>
          <p className="footer-contact">
            With love, {couple.hosts}
            <br />
            {rsvp.contactPerson} · {rsvp.contactPhone}
          </p>
          <p className="footer-credit">{weddingConfig.music.credit}</p>
        </footer>
      </div>

      <SoundToggle autoPlay={musicOn} />
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setRSVPOpen(false)} />
    </>
  );
}
