// Paper sound effects, synthesized with WebAudio — no downloads.
// unlockAudio() must be called from a user gesture (pointerdown/keydown);
// afterwards paperRustle()/sealCrack() are safe to call from scroll frames.

let ctx = null;
let master = null;
let rustleGain = null;
let rustleFilter = null;
let noiseBuf = null;

export function unlockAudio() {
  if (ctx) {
    if (ctx.state === 'suspended') ctx.resume();
    return;
  }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();

  master = ctx.createGain();
  master.gain.value = 0.7;
  master.connect(ctx.destination);

  // 2s of white noise, reused for both the rustle loop and the cracks
  const len = ctx.sampleRate * 2;
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;

  rustleFilter = ctx.createBiquadFilter();
  rustleFilter.type = 'bandpass';
  rustleFilter.frequency.value = 1700;
  rustleFilter.Q.value = 0.7;

  rustleGain = ctx.createGain();
  rustleGain.gain.value = 0;

  src.connect(rustleFilter);
  rustleFilter.connect(rustleGain);
  rustleGain.connect(master);
  src.start();
}

// Short burst of paper friction; intensity follows scrub velocity.
export function paperRustle(intensity = 0.2) {
  if (!ctx || ctx.state !== 'running') return;
  const t = ctx.currentTime;
  rustleFilter.frequency.setTargetAtTime(900 + Math.random() * 2200, t, 0.08);
  const g = rustleGain.gain;
  g.cancelScheduledValues(t);
  g.setTargetAtTime(Math.min(0.4, intensity), t, 0.02);
  g.setTargetAtTime(0.0001, t + 0.06, 0.15);
}

// Brittle wax-seal crack: a few snappy bandpassed noise ticks.
export function sealCrack(vol = 1) {
  if (!ctx || ctx.state !== 'running') return;
  const t0 = ctx.currentTime;
  for (let i = 0; i < 4; i++) {
    const t = t0 + i * 0.028 + Math.random() * 0.012;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.playbackRate.value = 0.7 + Math.random() * 0.6;

    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 900 + i * 900 + Math.random() * 400;
    f.Q.value = 2.5;

    const g = ctx.createGain();
    const peak = Math.max((0.5 - i * 0.09) * vol, 0.02);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

    src.connect(f);
    f.connect(g);
    g.connect(master);
    src.start(t, Math.random() * 1.5);
    src.stop(t + 0.09);
  }
}
