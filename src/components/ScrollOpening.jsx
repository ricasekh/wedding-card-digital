import React, { useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingConfig';

// Scroll-driven opening act (Apple-style scrollytelling).
// The stage is pinned for ~3 viewports; scroll progress scrubs the
// animation: seal breaks → flap unfolds → card rises → card flies
// through the camera while the hero slides in beneath.

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

const baseUrl = import.meta.env.BASE_URL || './';

export function ScrollOpening({ onSealTap, onOpenedChange }) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const shellRef = useRef(null);
  const flapRef = useRef(null);
  const sealRef = useRef(null);
  const cardRef = useRef(null);
  const hintRef = useRef(null);
  const addresseeRef = useRef(null);
  const tiltRef = useRef(null);
  const lastP = useRef(0);
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

      const s = ease(seg(p, 0.04, 0.2)); // seal breaks off
      const f = ease(seg(p, 0.16, 0.44)); // flap unfolds
      const r = ease(seg(p, 0.42, 0.68)); // card rises
      const z = ease(seg(p, 0.68, 0.96)); // card flies through camera
      const fade = ease(seg(p, 0.78, 0.97)); // stage dissolve

      const seal = sealRef.current;
      seal.style.opacity = String(1 - s);
      seal.style.transform = `translate(-50%, -50%) translateZ(${6 + 90 * s}px) translateY(${
        s * 130
      }%) rotate(${s * 24}deg)`;
      seal.style.pointerEvents = s > 0.02 ? 'none' : 'auto';

      flapRef.current.style.transform = `rotateX(${-178 * f}deg) translateZ(3px)`;

      cardRef.current.style.transform = `translateZ(${1 + 29 * r}px) translateY(${
        -96 * r
      }%) scale(${1 + 0.06 * r + 3.6 * z})`;

      const shell = shellRef.current;
      if (z > 0) {
        shell.style.transform = `translateY(${z * vh * 0.45}px) rotateX(${z * 14}deg)`;
        shell.style.opacity = String(clamp01(1 - z * 1.2));
      } else {
        // keep the shell property-free while closed so the browser doesn't
        // group it into a flat layer (which would paint the card on top)
        shell.style.transform = '';
        shell.style.opacity = '';
      }

      // envelope straightens slightly as it opens (unless pointer-tilting)
      if (p > 0.02) {
        tiltRef.current.style.transform = `rotateX(${8 - 5 * f}deg)`;
      }

      hintRef.current.style.opacity = String(1 - seg(p, 0.01, 0.07));
      const add = addresseeRef.current;
      add.style.opacity = String(1 - seg(p, 0.03, 0.16));
      add.style.transform = `translateY(${-34 * seg(p, 0.03, 0.16)}px)`;

      const stage = stageRef.current;
      stage.style.opacity = String(1 - fade);
      stage.style.visibility = fade >= 1 ? 'hidden' : 'visible';
      stage.style.pointerEvents = p > 0.6 ? 'none' : 'auto';

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
          <div className="env-addressee" ref={addresseeRef}>
            <div className="small-caps">You are graciously invited</div>
            <div className="eyebrow">
              {couple.groomShort} &amp; {couple.brideShort}
            </div>
          </div>

          <div className="env-scene">
            <div className="env-float">
              <div className="env-tilt" ref={tiltRef} style={{ transform: 'rotateX(8deg)' }}>
                <div className="env">
                  <div className="env-shell" ref={shellRef}>
                    <div className="env-shadow" />
                    <div className="env-back" />
                    <div className="env-inside" />
                    <div className="env-pocket" />
                    <div className="env-flap" ref={flapRef}>
                      <div className="flap-face front" />
                      <div className="flap-face back" />
                    </div>
                    <button
                      type="button"
                      className="env-seal"
                      ref={sealRef}
                      onClick={tapSeal}
                      aria-label="Open the invitation"
                    >
                      <img src={`${baseUrl}images/wax_seal.png`} alt="" draggable="false" />
                    </button>
                  </div>

                  <div className="env-card" ref={cardRef}>
                    <div className="env-card-monogram">{couple.monogram}</div>
                    <div className="env-card-names">
                      {couple.groomShort} &amp; {couple.brideShort}
                    </div>
                    <div className="env-card-date">04 · 10 · 2026</div>
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
