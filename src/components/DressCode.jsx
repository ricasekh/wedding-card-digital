import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Reveal } from './Reveal';

export function DressCode() {
  const { dressCode } = weddingConfig;

  return (
    <section className="section" id="dress">
      <div className="container">
        <div className="dress-wrap">
          <Reveal className="section-head" style={{ marginBottom: '1.6rem' }}>
            <div className="eyebrow">Attire</div>
            <h2 className="section-title">{dressCode.style}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="dress-desc">{dressCode.description}</p>
          </Reveal>

          <Reveal className="palette-row" delay={0.2}>
            {dressCode.palette.map((tone) => (
              <div className="swatch" key={tone.name}>
                <div className="swatch-dot" style={{ background: tone.hex }} />
                <span className="swatch-name">{tone.name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
