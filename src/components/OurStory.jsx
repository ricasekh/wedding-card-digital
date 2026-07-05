import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart } from 'lucide-react';

export const OurStory = () => {
  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Our Journey</span>
        <h2 className="font-serif section-title">How It All Began</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="story-cards">
        {weddingConfig.ourStory.map((story, idx) => (
          <div key={idx} className="story-card glass-card">
            <div className="story-year-badge">
              <Heart size={12} className="text-gold" />
              <span>{story.year}</span>
            </div>
            
            <div className="story-content">
              <h3 className="font-serif story-title">{story.title}</h3>
              <p className="story-desc">{story.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .story-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .story-card {
          padding: 2.2rem 1.8rem;
          text-align: center;
          position: relative;
        }

        .story-year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-gold);
          margin-bottom: 1.2rem;
          box-shadow: var(--shadow-sm);
        }

        .story-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }

        .story-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
