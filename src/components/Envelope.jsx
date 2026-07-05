import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Envelope = ({ onUnfoldComplete }) => {
  const [scrollY, setScrollY] = useState(0);
  const [confettiFired, setConfettiFired] = useState(false);
  const touchStartY = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          // Trigger confetti when letter slides up
          if (currentY > 600 && !confettiFired) {
            setConfettiFired(true);
            confetti({
              particleCount: 95,
              spread: 100,
              origin: { y: 0.5 },
              colors: ['#D4AF37', '#1B4332', '#1D3557', '#FCF6BA', '#FFF8DC'],
              disableForReducedMotion: true
            });
          }

          // Complete entrance transition when scrolled past 900px
          if (currentY >= 900) {
            onUnfoldComplete();
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [confettiFired, onUnfoldComplete]);

  // Touch Swipe & Mouse Drag Fallback Handlers
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStartY.current) return;
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;

    if (deltaY > 15) {
      window.scrollBy(0, deltaY * 1.5);
      touchStartY.current = currentY;
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      window.scrollBy(0, e.deltaY);
    }
  };

  const forceUnfold = () => {
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };

  // Dedicated 900px scroll distance for envelope unfolding
  const totalRunway = 900;
  const rawProgress = Math.min(Math.max(scrollY / totalRunway, 0), 1);

  // 1. Crack Seal: 0% to 20% scroll
  const crackProgress = Math.min(rawProgress / 0.20, 1);
  const sealOpacity = Math.max(1 - crackProgress * 1.5, 0);

  // 2. Rotate 3D Flap (0° to 180°): 10% to 55% scroll
  const flapProgress = Math.min(Math.max((rawProgress - 0.10) / 0.45, 0), 1);
  const flapAngle = 180 * flapProgress;

  // 3. Letter Slide & Scale: 35% to 85% scroll
  const letterProgress = Math.min(Math.max((rawProgress - 0.35) / 0.50, 0), 1);
  const letterTranslateY = -340 * letterProgress;
  const letterScale = 1 + (0.08 * letterProgress);

  // 4. Envelope Box Dissolve: 75% to 100% scroll
  const fadeProgress = Math.min(Math.max((rawProgress - 0.75) / 0.25, 0), 1);
  const stageOpacity = Math.max(1 - fadeProgress, 0);

  const baseUrl = import.meta.env.BASE_URL || './';

  return (
    <div className="entrance-envelope-wrapper">
      {/* 1200px Dedicated Entrance Runway Spacer for Window Scrolling */}
      <div className="envelope-scroll-track-spacer"></div>

      {/* Fixed Viewport for 3D Envelope Unfolding */}
      <div 
        className="envelope-sticky-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
        style={{ 
          opacity: stageOpacity,
          pointerEvents: stageOpacity < 0.05 ? 'none' : 'auto'
        }}
      >
        <div className="envelope-3d-stage">
          <div className="envelope-real-box" onClick={forceUnfold}>
            
            {/* Inner Pocket */}
            <div className="pocket-back">
              <div className="pocket-silk-grid"></div>
              <div className="pocket-monogram font-serif">{weddingConfig.couple.monogram}</div>
            </div>

            {/* Kashmir Wedding Letter Card */}
            <div 
              className="letter-real-card"
              style={{
                transform: `translate3d(0, ${letterTranslateY}px, ${letterProgress * 70}px) scale3d(${letterScale}, ${letterScale}, 1)`,
                boxShadow: `0 ${15 + letterProgress * 35}px ${40 + letterProgress * 70}px rgba(212, 175, 55, ${0.15 + letterProgress * 0.4})`
              }}
            >
              <div className="card-art-header">
                <img 
                  src={weddingConfig.couple.artwork} 
                  alt="Kashmir Mountains Artwork" 
                  className="art-img"
                />
                <div className="art-overlay-fade"></div>
              </div>

              <div className="card-body">
                <p className="bismillah-text font-serif">
                  {weddingConfig.couple.bismillah}
                </p>

                <h2 className="hosts-name font-serif text-emerald">
                  {weddingConfig.couple.hosts}
                </h2>

                <p className="invitation-text font-serif">
                  {weddingConfig.couple.invitationMessage}
                </p>

                <div className="daughter-title font-script">
                  Daughter
                </div>

                <div className="event-date font-serif text-emerald">
                  {weddingConfig.couple.formattedDate}
                </div>

                <div className="event-time font-serif text-blue">
                  {weddingConfig.couple.formattedTime}
                </div>

                <div className="venue-text font-serif text-emerald">
                  {weddingConfig.venues.ceremony.title}, {weddingConfig.venues.ceremony.address}
                </div>

                <div className="note-text font-serif text-emerald">
                  (For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)
                </div>
                <div className="rsvp-text text-blue">
                  RSVP: {weddingConfig.rsvp.whatsappNumber.slice(2)}
                </div>
              </div>
            </div>

            {/* Envelope Flaps */}
            <div className="flap-left"></div>
            <div className="flap-right"></div>
            <div className="flap-bottom"></div>

            {/* Top 3D V-Flap */}
            <div 
              className="flap-top-3d"
              style={{
                transform: `rotateX(${flapAngle}deg)`,
                zIndex: flapAngle > 90 ? 2 : 6
              }}
            >
              <div className="top-flap-shape">
                <div className="top-flap-gold-line"></div>
              </div>

              {/* Photorealistic Wax Seal Positioned Dead-Centered at Top Flap Tip */}
              <div 
                className="nano-seal-wrapper"
                style={{
                  opacity: sealOpacity,
                  transform: `translate(-50%, -50%) scale(${1 - crackProgress * 0.15})`
                }}
              >
                <div className="seal-drop-shadow-wrapper">
                  <div className="seal-circular-mask">
                    <img 
                      src={`${baseUrl}images/real_wax_seal_rm.jpg`} 
                      alt="Photorealistic R&M Gold Wax Seal" 
                      className="nano-seal-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Initial Scroll Prompt */}
            {rawProgress < 0.10 && (
              <div className="scroll-hint-badge">
                <Sparkles size={14} className="sparkle-gold" />
                <span>Scroll down to open</span>
                <ChevronDown size={18} className="scroll-bounce-icon" />
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .entrance-envelope-wrapper {
          position: relative;
          width: 100%;
          z-index: 40;
        }

        .envelope-scroll-track-spacer {
          height: 1200px;
          pointer-events: none;
        }

        .envelope-sticky-viewport {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          z-index: 50;
          will-change: opacity, transform;
          touch-action: pan-y;
        }

        .envelope-3d-stage {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
        }

        .envelope-real-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 35px 90px rgba(26, 22, 20, 0.35), 0 12px 30px rgba(212, 175, 55, 0.2);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        /* Inner Pocket */
        .pocket-back {
          position: absolute;
          inset: 0;
          background: #EDE3D5;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pocket-silk-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.18) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }

        .pocket-monogram {
          font-size: 4.5rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.25);
          letter-spacing: 6px;
        }

        /* Letter Inside Envelope */
        .letter-real-card {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          z-index: 3;
          will-change: transform;
          backface-visibility: hidden;
        }

        .card-art-header {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }

        .art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .art-overlay-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, #FFFFFF 100%);
        }

        .card-body {
          padding: 0.8rem 1.4rem 1.8rem 1.4rem;
          text-align: center;
        }

        .bismillah-text { font-size: 0.82rem; color: #1D3557; font-weight: 600; margin-bottom: 0.4rem; }
        .hosts-name { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.3rem; }
        .invitation-text { font-size: 0.9rem; color: #1D3557; line-height: 1.35; }
        .daughter-title { font-size: 2.2rem; color: #1D3557; margin: 0.3rem 0 0.4rem 0; }
        .event-date { font-size: 1.35rem; font-weight: 700; margin-top: 0.2rem; }
        .event-time { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.4rem; }
        .venue-text { font-size: 1.1rem; font-weight: 600; }
        .note-text { font-size: 0.8rem; font-style: italic; margin-top: 0.8rem; }
        .rsvp-text { font-size: 0.85rem; font-weight: 700; margin-top: 0.3rem; }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        /* Flaps */
        .flap-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 195px solid transparent;
          border-bottom: 195px solid transparent;
          border-left: 295px solid #F5EFEB;
          border-radius: 16px 0 0 16px;
          z-index: 4;
          filter: drop-shadow(4px 0 8px rgba(0,0,0,0.06));
        }

        .flap-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top: 195px solid transparent;
          border-bottom: 195px solid transparent;
          border-right: 295px solid #EFE6DA;
          border-radius: 0 16px 16px 0;
          z-index: 4;
          filter: drop-shadow(-4px 0 8px rgba(0,0,0,0.06));
        }

        .flap-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-bottom: 205px solid #FAF6F0;
          border-radius: 0 0 16px 16px;
          z-index: 5;
          filter: drop-shadow(0 -5px 10px rgba(0,0,0,0.08));
        }

        .flap-top-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
        }

        .top-flap-shape {
          position: relative;
          width: 0;
          height: 0;
          margin: 0 auto;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-top: 210px solid #FAF6F0;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.14));
          transform-style: preserve-3d;
        }

        .top-flap-gold-line {
          position: absolute;
          top: -205px;
          left: -280px;
          width: 560px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        .nano-seal-wrapper {
          position: absolute;
          top: 210px;
          left: 50%;
          width: 106px;
          height: 106px;
          z-index: 25;
          pointer-events: auto;
          transform-style: preserve-3d;
          will-change: opacity, transform;
        }

        .seal-drop-shadow-wrapper {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.45));
        }

        .seal-circular-mask {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          clip-path: circle(44.5% at 50% 50%);
        }

        .nano-seal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.15);
          border-radius: 50%;
        }

        .scroll-hint-badge {
          position: absolute;
          bottom: -54px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(26, 22, 20, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.7);
          color: #FCF6BA;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.55rem 1.4rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          z-index: 30;
        }

        .sparkle-gold { color: #D4AF37; }

        .scroll-bounce-icon {
          animation: bounceIcon 1.6s ease-in-out infinite;
        }

        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 640px) {
          .envelope-3d-stage {
            max-width: 350px;
            height: 260px;
          }
          .flap-left {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-left-width: 180px;
          }
          .flap-right {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-right-width: 180px;
          }
          .flap-bottom {
            border-left-width: 175px;
            border-right-width: 175px;
            border-bottom-width: 140px;
          }
          .flap-top-3d { height: 140px; }
          .top-flap-shape {
            border-left-width: 175px;
            border-right-width: 175px;
            border-top-width: 140px;
          }
          .nano-seal-wrapper {
            top: 140px;
            width: 86px;
            height: 86px;
          }
          .letter-real-card { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};
