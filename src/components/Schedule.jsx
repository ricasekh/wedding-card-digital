import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Reveal } from './Reveal';

export function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">The Day</div>
          <h2 className="section-title">Order of Celebration</h2>
        </Reveal>

        <div className="schedule-list">
          {weddingConfig.schedule.map((item, i) => (
            <Reveal className="schedule-item" key={item.title} delay={i * 0.12}>
              <div className="schedule-time">
                {item.time}
                <small>{item.meridiem}</small>
              </div>
              <div>
                <h3 className="schedule-title">{item.title}</h3>
                <p className="schedule-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
