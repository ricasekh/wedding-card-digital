import React, { useState, useEffect } from 'react';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Itinerary } from './components/Itinerary';
import { Venues } from './components/Venues';
import { Gallery } from './components/Gallery';
import { DressCode } from './components/DressCode';
import { GiftRegistry } from './components/GiftRegistry';
import { AudioPlayer } from './components/AudioPlayer';
import { RSVPModal } from './components/RSVPModal';
import { AdminDashboard } from './components/AdminDashboard';
import { ThemeSelector } from './components/ThemeSelector';
import { weddingConfig } from './config/weddingConfig';
import { Heart, Lock } from 'lucide-react';

export default function App() {
  const [isMusicActive, setIsMusicActive] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [theme, setTheme] = useState('maison');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const handleFirstScroll = () => {
      if (window.scrollY > 50) {
        setIsMusicActive(true);
      }
    };

    window.addEventListener('scroll', handleFirstScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleFirstScroll);
  }, [theme]);

  return (
    <div className="app-main-container">
      {/* Floating Rose Petals Particle System */}
      <div className="petal-container">
        <div className="petal" style={{ left: '10%', width: '14px', height: '14px', animationDelay: '0s' }}></div>
        <div className="petal" style={{ left: '25%', width: '18px', height: '18px', animationDelay: '3s' }}></div>
        <div className="petal" style={{ left: '45%', width: '12px', height: '12px', animationDelay: '6s' }}></div>
        <div className="petal" style={{ left: '70%', width: '16px', height: '16px', animationDelay: '1.5s' }}></div>
        <div className="petal" style={{ left: '85%', width: '20px', height: '20px', animationDelay: '4.5s' }}></div>
      </div>

      {/* Header Navigation */}
      <header className="site-header glass-pill">
        <div className="header-monogram">{weddingConfig.couple.monogram}</div>
        <button className="header-rsvp-btn" onClick={() => setIsRSVPOpen(true)}>
          <Heart size={14} className="text-gold" />
          <span>RSVP</span>
        </button>
      </header>

      {/* Apple-Style Scroll-Driven 3D Envelope Stage */}
      <Envelope />

      {/* Main Digital Invitation Website Content Flow */}
      <div className="invitation-site-flow">
        <main className="main-content-flow">
          <Hero onOpenRSVP={() => setIsRSVPOpen(true)} />
          <OurStory />
          <Itinerary />
          <Venues />
          <Gallery />
          <DressCode />
          <GiftRegistry />

          {/* Bottom RSVP Banner */}
          <section className="section-padding text-center">
            <div className="glass-card rsvp-banner">
              <span className="font-script section-script">We Can't Wait</span>
              <h2 className="font-serif section-title">Join Us in Srinagar</h2>
              <p className="rsvp-banner-text">Please confirm your attendance so we can finalize our arrangements.</p>
              <button className="btn-gold mt-6" onClick={() => setIsRSVPOpen(true)}>
                <Heart size={16} />
                <span>Confirm RSVP Now</span>
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-monogram font-serif">{weddingConfig.couple.monogram}</div>
          <p className="footer-names">{weddingConfig.couple.groomShort} & {weddingConfig.couple.brideShort}</p>
          <p className="footer-date">{weddingConfig.couple.formattedDate}</p>

          <button className="admin-footer-link" onClick={() => setIsAdminOpen(true)}>
            <Lock size={12} />
            <span>Couple Admin Login</span>
          </button>
        </footer>
      </div>

      {/* Floating Audio & Theme Controls */}
      <AudioPlayer autoPlayTrigger={isMusicActive} />
      <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />

      {/* Modals */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <style>{`
        .app-main-container {
          min-height: 100vh;
          position: relative;
        }

        .invitation-site-flow {
          position: relative;
          z-index: 60;
          margin-top: 100px;
        }

        .site-header {
          position: fixed;
          top: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 90;
          padding: 0.5rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.8rem;
          box-shadow: var(--shadow-sm);
        }

        .header-monogram {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 2px;
          color: var(--text-gold);
        }

        .header-rsvp-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
        }

        .header-rsvp-btn:hover {
          color: var(--text-gold);
        }

        .main-content-flow {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .rsvp-banner {
          padding: 3.5rem 2rem;
          max-width: 580px;
          margin: 0 auto;
        }

        .rsvp-banner-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.6rem;
        }

        .site-footer {
          text-align: center;
          padding: 3rem 1rem 5rem 1rem;
          border-top: 1px solid var(--border-light);
          background: var(--bg-secondary);
        }

        .footer-monogram {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-gold);
        }

        .footer-names {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-primary);
          margin: 0.4rem 0;
        }

        .footer-date {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .admin-footer-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.8rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .admin-footer-link:hover {
          color: var(--text-gold);
        }
      `}</style>
    </div>
  );
}
