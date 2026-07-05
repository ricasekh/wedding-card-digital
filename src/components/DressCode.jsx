import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Shirt, Sparkles } from 'lucide-react';

export const DressCode = () => {
  const { dressCode } = weddingConfig;

  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Attire Guide</span>
        <h2 className="font-serif section-title">Dress Code</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="dress-code-card glass-card">
        <div className="dress-code-icon-wrapper">
          <Shirt size={28} className="text-gold" />
        </div>

        <h3 className="font-serif dress-code-style">{dressCode.style}</h3>
        <p className="dress-code-desc">{dressCode.description}</p>

        <div className="palette-title">
          <Sparkles size={14} className="text-gold" />
          <span>Recommended Palette</span>
        </div>

        <div className="palette-swatches">
          {dressCode.palette.map((color, idx) => (
            <div key={idx} className="swatch-item">
              <div 
                className="swatch-circle" 
                style={{ backgroundColor: color.hex, border: color.hex === '#F3ECE1' ? '1px solid rgba(0,0,0,0.15)' : 'none' }}
                title={color.name}
              ></div>
              <span className="swatch-name">{color.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dress-code-card {
          padding: 3rem 2.5rem;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        .dress-code-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          box-shadow: var(--shadow-sm);
        }

        .dress-code-style {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .dress-code-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 2.5rem auto;
        }

        .palette-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .palette-swatches {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .swatch-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .swatch-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .swatch-circle:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        .swatch-name {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 80px;
          text-align: center;
        }
      `}</style>
    </section>
  );
};
