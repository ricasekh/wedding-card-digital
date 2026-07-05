import React, { useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { paperRustle, sealCrack } from '../lib/sfx';

// Scroll-driven opening act (Apple-style scrollytelling).
// The stage is pinned for ~3.5 viewports; scroll progress scrubs the film:
// the flap peels open with the wax seal riding on it → the card rises out
// of the envelope → the card travels toward the camera and becomes the
// page while the envelope falls away beneath it.

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

const baseUrl = import.meta.env.BASE_URL || './';

export function ScrollOpening({ onSealTap, onOpenedChange }) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const sceneryRef = useRef(null);
  const envRef = useRef(null);
  const flapRef = useRef(null);
  const cardRef = useRef(null);
  const hintRef = useRef(null);
  const addresseeRef = useRef(null);
  const tiltRef = useRef(null);
  const lastP = useRef(0);
  const prevPhase = useRef(null); // { f, r, z } from the previous frame
  const openedRef = useRef(false);
  const { couple } = weddingConfig;

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion: skip the act entirely, site is simply open.
  useEffect(() => {
    if (reduced) onOpenedChange?.(true);
  }, [reduced, onOpenedChange]);

  // Scroll scrubbing
  useEffect(() => {
    if (reduced) return;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const vh = window.innerHeight;
      const range = Math.max(wrap.offsetHeight - vh, 1);
      const p = clamp01((window.scrollY - wrap.offsetTop) / range);
      lastP.current = p;

      const f = ease(seg(p, 0.05, 0.34)); // flap peels open, seal riding it
      const r = ease(seg(p, 0.32, 0.58)); // card rises out
      const z = ease(seg(p, 0.56, 0.95)); // card travels to the camera
      const shellF = ease(seg(p, 0.6, 0.88)); // envelope falls away
      const fade = ease(seg(p, 0.88, 0.995)); // stage dissolve into the hero

      flapRef.current.style.transform = `rotateX(${-178 * f}deg)`;

      // the card rises, then glides back to screen centre while it grows —
      // one continuous move toward the viewer, no jump
      const card = cardRef.current;
      const ty = -102 * r * (1 - 0.55 * z);
      const scale = 1 + 0.05 * r + 4.5 * z;
      card.style.transform = `translateZ(${24 * r}px) translateY(${ty}%) scale(${scale})`;
      // once fully out, the card jumps the stack for the zoom-through
      // (it no longer overlaps the envelope at that point, so no seam)
      card.style.zIndex = z > 0.001 || r >= 0.99 ? '6' : '3';

      // the emptied envelope sinks and fades away beneath the growing card;
      // `translate` composes with each piece's own `transform`
      const fallY = shellF * vh * 0.5;
      for (const el of envRef.current.querySelectorAll('.env-fall')) {
        if (shellF > 0) {
          el.style.translate = `0 ${fallY}px`;
          el.style.opacity = String(clamp01(1 - shellF * 1.05));
        } else {
          el.style.translate = '';
          el.style.opacity = '';
        }
      }

      // the whole scene straightens to face the camera as the card arrives
      if (p > 0.02) {
        tiltRef.current.style.transform = `rotateX(${8 * (1 - z)}deg)`;
      }

      // Kashmir horizon drifts and swells slightly as we travel forward
      sceneryRef.current.style.transform = `translateY(${p * 42}px) scale(${1.04 + p * 0.1})`;

      hintRef.current.style.opacity = String(1 - seg(p, 0.01, 0.07));
      const add = addresseeRef.current;
      add.style.opacity = String(1 - seg(p, 0.03, 0.16));
      add.style.transform = `translateY(${-34 * seg(p, 0.03, 0.16)}px)`;

      const stage = stageRef.current;
      stage.style.opacity = String(1 - fade);
      stage.style.visibility = fade >= 1 ? 'hidden' : 'visible';
      stage.style.pointerEvents = p > 0.6 ? 'none' : 'auto';

      // --- paper sounds, synced to the scrub ---------------------------
      const prev = prevPhase.current;
      if (prev) {
        if (prev.f < 0.02 && f >= 0.02) sealCrack(1); // wax gives way
        if (prev.f > 0.02 && f <= 0.02) sealCrack(0.4); // re-sealing on the way up
        const activity =
          Math.abs(f - prev.f) * 2 + Math.abs(r - prev.r) * 2.5 + Math.abs(z - prev.z);
        if (activity > 0.0008) paperRustle(Math.min(0.4, activity * 6));
      }
      prevPhase.current = { f, r, z };

      const opened = p > 0.92;
      if (opened !== openedRef.current) {
        openedRef.current = opened;
        onOpenedChange?.(opened);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  // Gentle pointer-follow tilt while the envelope is still sealed
  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e) => {
      if (lastP.current > 0.02) return;
      const el = tiltRef.current;
      if (!el) return;
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      el.style.transform = `rotateY(${dx * 10}deg) rotateX(${8 - dy * 10}deg)`;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  if (reduced) return null;

  // Tapping the seal plays the whole sequence via smooth scroll
  const tapSeal = () => {
    onSealTap?.();
    const wrap = wrapRef.current;
    window.scrollTo({
      top: wrap.offsetTop + wrap.offsetHeight - window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="opening" ref={wrapRef}>
      <div className="opening-sticky">
        <div className="stage-env" ref={stageRef}>
          <div className="stage-scenery" ref={sceneryRef} aria-hidden="true">
            <img src={`${baseUrl}images/kashmir_mountains.jpg`} alt="" draggable="false" />
          </div>

          <div className="env-addressee" ref={addresseeRef}>
            <div className="small-caps">You are graciously invited</div>
            <div className="eyebrow">
              {couple.groomShort} &amp; {couple.brideShort}
            </div>
          </div>

          <div className="env-scene">
            <div className="env-float">
              <div className="env-tilt" ref={tiltRef} style={{ transform: 'rotateX(8deg)' }}>
                <div className="env" ref={envRef}>
                  <div className="env-shadow env-fall" />
                  <div className="env-back env-fall" />
                  <div className="env-inside env-fall" />

                  <div className="env-card" ref={cardRef}>
                    <div className="env-card-monogram">{couple.monogram}</div>
                    <div className="env-card-names">
                      {couple.groomShort} &amp; {couple.brideShort}
                    </div>
                    <div className="env-card-date">04 · 10 · 2026</div>
                  </div>

                  <div className="env-pocket env-fall" />

                  <div className="env-flap env-fall" ref={flapRef}>
                    <div className="flap-face front" />
                    <div className="flap-face back" />
                    {/* the seal stays glued to the flap tip and peels
                        open with it, hiding once the flap turns away */}
                    <button
                      type="button"
                      className="env-seal"
                      onClick={tapSeal}
                      aria-label="Open the invitation"
                    >
                      <img src={`${baseUrl}images/wax_seal.png`} alt="" draggable="false" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="env-hint" ref={hintRef}>
            <span className="small-caps">Scroll to open</span>
          </div>
        </div>
      </div>
    </div>
  );
}
