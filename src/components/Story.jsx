import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Reveal } from './Reveal';

export function Story() {
  return (
    <section className="section" id="story">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Our Story</div>
          <h2 className="section-title">Written in Autumn</h2>
        </Reveal>

        <div className="story-track">
          {weddingConfig.story.map((chapter, i) => (
            <Reveal className="story-item" key={chapter.year} delay={i * 0.1}>
              <div className="story-media">
                <img src={chapter.image} alt={chapter.title} loading="lazy" data-parallax="0.1" />
              </div>
              <div className="story-text">
                <div className="story-year">{chapter.year}</div>
                <h3 className="story-title">{chapter.title}</h3>
                <p className="story-desc">{chapter.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
