import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { Reveal } from './Reveal';

export function Venues() {
  return (
    <section className="section" id="venue">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">The Venue</div>
          <h2 className="section-title">Where We Gather</h2>
        </Reveal>

        {weddingConfig.venues.map((venue) => (
          <Reveal className="venue-card" key={venue.title}>
            <div className="venue-media">
              <img src={venue.image} alt={venue.title} loading="lazy" data-parallax="0.08" />
            </div>
            <div className="venue-body">
              <div className="venue-label">{venue.label}</div>
              <h3 className="venue-title">{venue.title}</h3>
              <p className="venue-meta">
                {venue.address}
                <br />
                {venue.time}
              </p>
              <p className="venue-note">{venue.note}</p>
              <div className="venue-actions">
                <a
                  className="btn btn-primary"
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={12} />
                  Google Maps
                </a>
                <a
                  className="btn btn-ghost"
                  href={venue.appleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={12} />
                  Apple Maps
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
