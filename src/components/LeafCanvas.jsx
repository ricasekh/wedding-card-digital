import React, { useEffect, useRef } from 'react';

// Falling chinar/maple leaves — canvas particle system with depth,
// tumble (3D flip illusion) and slow wind gusts.

const COLORS = [
  '#C97B2E', '#B3541E', '#D9A441', '#8C3B24', '#A64B2A', '#E0B252', '#7d5a2b',
];

// Stylized five-lobed chinar leaf, unit space [-50, 50]
const CHINAR =
  'M0 -50 L8 -28 L26 -36 L20 -14 L42 -18 L30 0 L48 8 L28 14 L34 34 L12 26 L6 44 L2 44 L2 58 L-2 58 L-2 44 L-6 44 L-12 26 L-34 34 L-28 14 L-48 8 L-30 0 L-42 -18 L-20 -14 L-26 -36 L-8 -28 Z';

// Simple ovate leaf with stem
const OVATE =
  'M0 -48 C 24 -26 24 12 0 46 C -24 12 -24 -26 0 -48 Z M-1.5 44 L1.5 44 L1.5 58 L-1.5 58 Z';

export function LeafCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const paths = [new Path2D(CHINAR), new Path2D(OVATE)];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let leaves = [];
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;

    const rand = (a, b) => a + Math.random() * (b - a);

    function makeLeaf(spawnAnywhere) {
      const z = rand(0.3, 1); // depth: 0 far, 1 near
      return {
        x: rand(-40, width + 40),
        y: spawnAnywhere ? rand(-height * 0.2, height) : rand(-140, -30),
        z,
        size: (9 + 21 * z) * rand(0.85, 1.15),
        vy: 22 + 46 * z,
        rot: rand(0, Math.PI * 2),
        rotSpeed: rand(-0.9, 0.9),
        tumble: rand(0, Math.PI * 2),
        tumbleSpeed: rand(0.6, 1.7),
        swayPhase: rand(0, Math.PI * 2),
        swaySpeed: rand(0.4, 0.9),
        swayAmp: 14 + 26 * z,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        path: paths[(Math.random() * paths.length) | 0],
        alpha: 0.3 + 0.45 * z,
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      const target = Math.round(Math.min(30, Math.max(14, (width * height) / 42000)));
      if (leaves.length === 0) {
        leaves = Array.from({ length: target }, () => makeLeaf(true));
      } else if (leaves.length > target) {
        leaves.length = target;
      } else {
        while (leaves.length < target) leaves.push(makeLeaf(true));
      }
    }

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += dt;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Slow, layered wind gusts (px/s)
      const wind = Math.sin(elapsed * 0.13) * 18 + Math.sin(elapsed * 0.31) * 9;

      for (const leaf of leaves) {
        leaf.y += leaf.vy * dt;
        leaf.swayPhase += leaf.swaySpeed * dt;
        leaf.x += (wind * leaf.z + Math.cos(leaf.swayPhase) * leaf.swayAmp * 0.6) * dt * 2.2;
        leaf.rot += leaf.rotSpeed * dt;
        leaf.tumble += leaf.tumbleSpeed * dt;

        if (leaf.y > height + 80) {
          Object.assign(leaf, makeLeaf(false));
          continue;
        }
        if (leaf.x < -80) leaf.x = width + 60;
        if (leaf.x > width + 80) leaf.x = -60;

        const flip = 0.3 + 0.7 * Math.abs(Math.cos(leaf.tumble));
        const s = leaf.size / 100;

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rot + Math.sin(leaf.swayPhase) * 0.35);
        ctx.scale(s, s * flip);
        ctx.globalAlpha = leaf.alpha * (0.75 + 0.25 * flip);
        ctx.fillStyle = leaf.color;
        ctx.fill(leaf.path);
        ctx.restore();
      }

      raf = requestAnimationFrame(frame);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="leaf-canvas" aria-hidden="true" />;
}
