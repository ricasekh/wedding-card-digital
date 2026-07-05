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
  const [scrollY, setScrollY] = useState(0);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [theme, setTheme] = useState('maison');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          if (currentY > 100 && !autoPlayMusic) {
            setAutoPlayMusic(true);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme, autoPlayMusic]);

  const baseUrl = import.meta.env.BASE_URL || './';

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

      {/* Kashmir Artwork & Chinar Leaf Parallax Background Layers (Active from scrollY = 0) */}
      <div className="kashmir-parallax-bg-wrapper">
        {/* Parallax Layer 1: Soft Kashmir Mountain Watercolors */}
        <div 
          className="parallax-layer layer-artwork"
          style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
        >
          <img 
            src={`${baseUrl}images/kashmir_mountains.jpg`} 
            alt="Kashmir Parallax Background" 
            className="parallax-artwork-img"
          />
        </div>

        {/* Parallax Layer 2: Floating Golden Chinar Leaf & Botanical Motifs */}
        <div 
          className="parallax-layer layer-patterns"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <div className="chinar-leaf leaf-1">🍁</div>
          <div className="chinar-leaf leaf-2">🍁</div>
          <div className="chinar-leaf leaf-3">🍁</div>
          <div className="chinar-leaf leaf-4">🍁</div>
        </div>
      </div>

      {/* Header Navigation Bar */}
      <header 
        className="site-header glass-pill"
        style={{ 
          opacity: Math.min(Math.max((scrollY - 600) / 300, 0), 1),
          pointerEvents: scrollY > 600 ? 'auto' : 'none'
        }}
      >
        <div className="header-monogram">{weddingConfig.couple.monogram}</div>
        <button className="header-rsvp-btn" onClick={() => setIsRSVPOpen(true)}>
          <Heart size={14} className="text-gold" />
          <span>RSVP</span>
        </button>
      </header>

      {/* Continuous 100% Scroll-Driven 3D Envelope Stage */}
      <Envelope scrollY={scrollY} />

      {/* Full Digital Invitation Web App Content Flow */}
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
      <AudioPlayer autoPlayTrigger={autoPlayMusic} />
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

        /* Kashmir Artwork & Patterns Parallax Background */
        .kashmir-parallax-bg-wrapper {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 120%;
          will-change: transform;
        }

        .layer-artwork {
          opacity: 0.16;
          filter: blur(2px);
        }

        .parallax-artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .layer-patterns {
          opacity: 0.22;
        }

        .chinar-leaf {
          position: absolute;
          font-size: 2.2rem;
          filter: drop-shadow(0 4px 10px rgba(212, 175, 55, 0.4));
        }

        .leaf-1 { top: 15%; left: 8%; }
        .leaf-2 { top: 40%; right: 10%; font-size: 3rem; }
        .leaf-3 { top: 70%; left: 12%; }
        .leaf-4 { top: 88%; right: 15%; font-size: 2.5rem; }

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
          transition: opacity 0.4s ease;
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
