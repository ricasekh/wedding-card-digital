import React, { useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { paperRustle, sealCrack } from '../lib/sfx';

// Scroll-driven opening act (Apple-style scrollytelling).
// The stage is pinned for ~4 viewports; scroll progress scrubs the film:
// the flap peels open with the wax seal riding on it → the card rises out
// of the envelope → the card travels toward the camera until its paper
// fills the screen, its printing fades, and the page appears on the same
// paper — a paper-to-page dissolve rather than a cut.

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

const baseUrl = import.meta.env.BASE_URL || './';

export function ScrollOpening({ onSealTap, onOpenedChange }) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const sceneryRef = useRef(null);
  const envRef = useRef(null);
  const flapRef = useRef(null);
  const flapShadowRef = useRef(null);
  const flapShadowOpenRef = useRef(null);
  const cardRef = useRef(null);
  const cardInnerRef = useRef(null);
  const hintRef = useRef(null);
  const addresseeRef = useRef(null);
  const tiltRef = useRef(null);
  const lastP = useRef(0);
  const forceP = useRef(null); // dev-only scrub override, see below
  const prevPhase = useRef(null); // { f, r, z } from the previous frame
  const lastRustle = useRef(0); // throttle for WebAudio calls
  const openedRef = useRef(false);
  const cancelAuto = useRef(null);
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
      // use the sticky stage's actual height rather than dynamic innerHeight
      // so that Android address-bar changes don't skew the animation math
      const stage = stageRef.current;
      const vh = stage ? stage.offsetHeight : window.innerHeight;
      const range = Math.max(wrap.offsetHeight - vh, 1);
      const p =
        forceP.current ?? clamp01((window.scrollY - wrap.offsetTop) / range);
      lastP.current = p;

      const f = ease(seg(p, 0.06, 0.3)); // flap peels open, seal riding it
      const r = ease(seg(p, 0.3, 0.56)); // card rises out
      const z = ease(seg(p, 0.54, 0.92)); // card travels to the camera
      const shellF = ease(seg(p, 0.58, 0.86)); // envelope falls away
      const inkFade = seg(p, 0.76, 0.88); // card's printing dissolves
      const fade = ease(seg(p, 0.9, 0.995)); // stage dissolve (paper→page)

      const flap = flapRef.current;
      flap.style.transform = `rotateX(${-178 * f}deg)`;
      // past 90° the flap lies folded back behind the envelope, so the
      // card must rise OVER it, not through it
      flap.style.zIndex = f > 0.5 ? '0' : '6';

      // the flap's contact shadow lifts away with it…
      const fs = flapShadowRef.current;
      fs.style.opacity = String(clamp01(1 - f * 2.5));
      fs.style.transform = `translateY(${3 + f * 18}px) scaleY(${1 + f * 0.08})`;
      // …and once folded past vertical, the flap casts its own shadow
      // up-and-behind onto the backdrop
      flapShadowOpenRef.current.style.opacity = String(clamp01((f - 0.55) * 2.2) * 0.8);

      // the card rises, then glides back to screen centre while it grows —
      // one continuous move toward the viewer, with a whisper of settle
      const card = cardRef.current;
      const ty = -104 * r * (1 - 0.6 * z);
      const scale = 1 + 0.05 * r + 5.2 * z;
      const rotZ = -1.6 * z * (1 - z) * 4; // 0 at both ends, ~-1.6° mid-flight
      card.style.transform = `translateZ(${24 * r}px) translateY(${ty}%) scale(${scale}) rotate(${rotZ}deg)`;
      card.style.boxShadow = `0 ${4 + 22 * r}px ${10 + 38 * r}px rgba(43, 29, 18, ${
        0.14 + 0.1 * r * (1 - z)
      })`;
      // once fully out, the card jumps the stack for the zoom-through
      // (it no longer overlaps the envelope at that point, so no seam)
      card.style.zIndex = z > 0.001 || r >= 0.99 ? '9' : '3';
      cardInnerRef.current.style.opacity = String(1 - inkFade);

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

      hintRef.current.style.opacity = String(1 - seg(p, 0.01, 0.06));
      const add = addresseeRef.current;
      add.style.opacity = String(1 - seg(p, 0.03, 0.14));
      add.style.transform = `translateY(${-34 * seg(p, 0.03, 0.14)}px)`;

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
        const now = performance.now();
        if (activity > 0.0008 && now - lastRustle.current > 40) {
          lastRustle.current = now;
          paperRustle(Math.min(0.4, activity * 6));
        }
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
    if (import.meta.env.DEV) {
      // lets tooling freeze the film at a given progress without scrolling
      window.__scrub = (v) => {
        forceP.current = v;
        apply();
      };
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (import.meta.env.DEV) delete window.__scrub;
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

  // Tapping the seal plays the whole film: a slow, cinematic auto-scroll
  // (~7s) that the guest can interrupt at any moment by scrolling
  const tapSeal = () => {
    if (navigator.vibrate) navigator.vibrate(50);
    onSealTap?.();
    cancelAuto.current?.();
    const wrap = wrapRef.current;
    const from = window.scrollY;
    const stageH = stageRef.current ? stageRef.current.offsetHeight : window.innerHeight;
    const to = wrap.offsetTop + wrap.offsetHeight - stageH;
    const dur = 7000;
    const t0 = performance.now();
    let raf = 0;
    const stop = () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
      cancelAuto.current = null;
    };
    cancelAuto.current = stop;
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    const step = (now) => {
      const t = Math.min((now - t0) / dur, 1);
      window.scrollTo(0, from + (to - from) * easeInOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(step);
      else stop();
    };
    raf = requestAnimationFrame(step);
  };

  return (
    <div className="opening" ref={wrapRef}>
      <div className="opening-sticky">
        <div className="stage-env" ref={stageRef}>
          <div className="stage-scenery" ref={sceneryRef} aria-hidden="true">
            <img src={`${baseUrl}images/kashmir_mountains.jpg`} alt="" draggable="false" />
          </div>
          <div className="stage-mist" aria-hidden="true" />

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
                    <div className="env-card-inner" ref={cardInnerRef}>
                      <div className="env-card-monogram">{couple.monogram}</div>
                      <div className="env-card-names">
                        {couple.groomShort} &amp; {couple.brideShort}
                      </div>
                      <div className="env-card-date">04 · 10 · 2026</div>
                    </div>
                  </div>

                  <div className="env-pocket env-fall" />
                  <div className="env-flap-shadow env-fall" ref={flapShadowRef} />
                  <div className="env-flap-shadow-open env-fall" ref={flapShadowOpenRef} />

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
            <span className="small-caps">Tap or scroll to open</span>
          </div>
        </div>
      </div>
    </div>
  );
}
