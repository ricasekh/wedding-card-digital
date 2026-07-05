import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

export const ThemeSelector = ({ currentTheme, onThemeChange, isInline = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'maison', name: 'Maison Dorée', color: '#D4AF37' },
    { id: 'royal', name: 'Royal Navy', color: '#1B263B' },
    { id: 'sage', name: 'Botanical Sage', color: '#9AB09E' },
    { id: 'terracotta', name: 'Terracotta Sunset', color: '#C86D51' }
  ];

  return (
    <div className={isInline ? "theme-inline-wrapper" : "theme-switcher-wrapper"}>
      {isOpen && (
        <div className="theme-menu glass-card">
          <div className="theme-menu-title">Select Theme Style</div>
          <div className="theme-options">
            {themes.map((t) => (
              <button 
                key={t.id}
                className={`theme-option-btn ${currentTheme === t.id ? 'active' : ''}`}
                onClick={() => {
                  onThemeChange(t.id);
                  setIsOpen(false);
                }}
              >
                <span className="theme-dot" style={{ backgroundColor: t.color }}></span>
                <span>{t.name}</span>
                {currentTheme === t.id && <Check size={14} className="text-gold ms-auto" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button 
        className={isInline ? "theme-footer-btn" : "audio-floating-btn theme-floating-btn"}
        onClick={() => setIsOpen(!isOpen)}
        title="Change Aesthetic Theme"
        aria-label="Toggle theme selector"
      >
        <Palette size={16} className="text-gold" />
        <span>Theme Palette</span>
      </button>

      <style>{`
        .theme-inline-wrapper {
          position: relative;
          display: inline-block;
        }

        .theme-footer-btn {
          background: rgba(26, 22, 20, 0.06);
          border: 1px solid var(--border-gold);
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-footer-btn:hover {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }

        .theme-menu {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 210px;
          padding: 1rem;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
        }

        .theme-menu-title {
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .theme-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .theme-option-btn {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 0.55rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .theme-option-btn:hover, .theme-option-btn.active {
          background: var(--bg-primary);
          border-color: var(--border-gold);
        }

        .theme-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .ms-auto { margin-left: auto; }
      `}</style>
    </div>
  );
};
