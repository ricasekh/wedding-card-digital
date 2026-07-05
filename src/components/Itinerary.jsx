import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Church, Wine, UtensilsCrossed, Sparkles, Music } from 'lucide-react';

export const Itinerary = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Church': return <Church size={22} />;
      case 'Wine': return <Wine size={22} />;
      case 'Utensils': return <UtensilsCrossed size={22} />;
      case 'Sparkles': return <Sparkles size={22} />;
      case 'Music': return <Music size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Order of Events</span>
        <h2 className="font-serif section-title">Wedding Itinerary</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="itinerary-timeline">
        {weddingConfig.itinerary.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-badge">
              {getIcon(event.icon)}
            </div>
            
            <div className="timeline-card glass-card">
              <span className="timeline-time">{event.time}</span>
              <h3 className="font-serif timeline-title">{event.title}</h3>
              <p className="timeline-desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .section-padding {
          padding: 4rem 1.25rem;
          max-width: 720px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-script {
          font-size: 2.2rem;
          color: var(--text-gold);
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 1px;
          margin-top: 0.2rem;
        }

        .itinerary-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .itinerary-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 2px;
          background: var(--gold-gradient);
          opacity: 0.4;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1.8rem;
          padding-left: 0.5rem;
        }

        .timeline-badge {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--accent-gold);
          color: var(--text-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .timeline-item:hover .timeline-badge {
          transform: scale(1.15) rotate(5deg);
          background: var(--gold-gradient);
          color: #1A1614;
        }

        .timeline-card {
          flex: 1;
          padding: 1.5rem 1.8rem;
          text-align: left;
        }

        .timeline-time {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-gold);
          text-transform: uppercase;
        }

        .timeline-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0.4rem 0 0.3rem 0;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .itinerary-timeline::before {
            left: 20px;
          }
          .timeline-badge {
            width: 40px;
            height: 40px;
          }
          .timeline-badge svg {
            width: 18px;
            height: 18px;
          }
          .timeline-card {
            padding: 1.2rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
