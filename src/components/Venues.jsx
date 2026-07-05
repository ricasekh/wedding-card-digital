import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';

export const Venues = () => {
  const { ceremony, reception } = weddingConfig.venues;

  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Locations</span>
        <h2 className="font-serif section-title">Where & When</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="venues-grid">
        {/* Ceremony Card */}
        <div className="venue-card glass-card">
          <div className="venue-image-wrapper">
            <img src={ceremony.image} alt={ceremony.title} className="venue-img" />
            <div className="venue-badge">Ceremony</div>
          </div>
          
          <div className="venue-body">
            <h3 className="font-serif venue-name">{ceremony.title}</h3>
            
            <div className="venue-info">
              <Clock size={16} className="text-gold" />
              <span>{ceremony.time}</span>
            </div>
            
            <div className="venue-info">
              <MapPin size={16} className="text-gold" />
              <span>{ceremony.address}</span>
            </div>

            <p className="venue-note">{ceremony.note}</p>

            <div className="venue-actions">
              <a href={ceremony.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold venue-btn">
                <Navigation size={14} />
                <span>Google Maps</span>
              </a>
              <a href={ceremony.appleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold venue-btn">
                <ExternalLink size={14} />
                <span>Apple Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reception Card */}
        <div className="venue-card glass-card">
          <div className="venue-image-wrapper">
            <img src={reception.image} alt={reception.title} className="venue-img" />
            <div className="venue-badge">Reception</div>
          </div>
          
          <div className="venue-body">
            <h3 className="font-serif venue-name">{reception.title}</h3>
            
            <div className="venue-info">
              <Clock size={16} className="text-gold" />
              <span>{reception.time}</span>
            </div>
            
            <div className="venue-info">
              <MapPin size={16} className="text-gold" />
              <span>{reception.address}</span>
            </div>

            <p className="venue-note">{reception.note}</p>

            <div className="venue-actions">
              <a href={reception.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold venue-btn">
                <Navigation size={14} />
                <span>Google Maps</span>
              </a>
              <a href={reception.appleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold venue-btn">
                <ExternalLink size={14} />
                <span>Apple Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 1rem;
        }

        .venue-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .venue-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .venue-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .venue-card:hover .venue-img {
          transform: scale(1.06);
        }

        .venue-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(26, 22, 20, 0.85);
          backdrop-filter: blur(8px);
          color: var(--text-gold);
          border: 1px solid var(--border-gold);
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .venue-body {
          padding: 2rem 1.8rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .venue-name {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .venue-info {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .venue-note {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--text-muted);
          margin: 1rem 0 1.5rem 0;
          flex: 1;
        }

        .venue-actions {
          display: flex;
          gap: 0.8rem;
        }

        .venue-btn {
          flex: 1;
          padding: 0.65rem 0.8rem;
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
};
