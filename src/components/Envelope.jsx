import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles } from 'lucide-react';

export const Envelope = ({ onOpen }) => {
  const [stage, setStage] = useState('idle'); 
  // 'idle' -> 'cracking' -> 'opening-flap' -> 'sliding-letter' -> 'expanding-fullscreen'

  const handleOpenEnvelope = (e) => {
    e.stopPropagation();
    if (stage !== 'idle') return;

    // Stage 1: Wax Seal Crack (0ms - 600ms)
    setStage('cracking');

    // Stage 2: Top Flap 3D Hinge Flip (600ms - 2600ms)
    setTimeout(() => {
      setStage('opening-flap');
    }, 550);

    // Stage 3: Letter slides out with GPU 3D transform (2600ms - 4600ms)
    setTimeout(() => {
      setStage('sliding-letter');

      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#1B4332', '#1D3557', '#FCF6BA', '#FFF8DC'],
        disableForReducedMotion: true
      });
    }, 2400);

    // Stage 4: Seamless transition to full website view (4600ms - 5800ms)
    setTimeout(() => {
      setStage('expanding-fullscreen');
    }, 4400);

    // Stage 5: Finalize handoff to main app
    setTimeout(() => {
      onOpen();
    }, 5600);
  };

  return (
    <div className={`envelope-gpu-viewport ${stage}`}>
      <div className={`envelope-3d-stage ${stage}`}>
        <div className="envelope-3d-box" onClick={handleOpenEnvelope}>
          
          {/* Inner Pocket Lining */}
          <div className="pocket-back-wall">
            <div className="pocket-pattern-overlay"></div>
            <div className="pocket-gold-crest font-serif">{weddingConfig.couple.monogram}</div>
          </div>

          {/* Kashmir Wedding Letter Inside Pocket */}
          <div className={`letter-3d-card ${stage}`}>
            {/* Kashmir Mountains Artwork */}
            <div className="letter-header-art">
              <img 
                src={weddingConfig.couple.artwork} 
                alt="Kashmir Mountains Watercolor" 
                className="art-img"
              />
              <div className="art-gradient-fade"></div>
            </div>

            {/* Letter Body Content */}
            <div className="letter-card-body">
              <p className="bismillah-text font-serif">
                {weddingConfig.couple.bismillah}
              </p>

              <h2 className="hosts-name font-serif text-emerald">
                {weddingConfig.couple.hosts}
              </h2>

              <p className="invitation-text font-serif">
                {weddingConfig.couple.invitationMessage}
              </p>

              <div className="daughter-word font-script">
                Daughter
              </div>

              <p className="on-text font-serif">on</p>

              <div className="event-date font-serif text-emerald">
                {weddingConfig.couple.formattedDate}
              </div>

              <div className="event-time font-serif text-blue">
                {weddingConfig.couple.formattedTime}
              </div>

              <div className="venue-text font-serif text-emerald">
                {weddingConfig.venues.ceremony.title}, {weddingConfig.venues.ceremony.address}
              </div>

              <div className="note-box font-serif text-emerald">
                (For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)
              </div>
              <div className="rsvp-phone-text text-blue">
                RSVP: {weddingConfig.rsvp.whatsappNumber.slice(2)}
              </div>
            </div>
          </div>

          {/* Left & Right Flaps */}
          <div className="flap-side-left"></div>
          <div className="flap-side-right"></div>
          <div className="flap-side-bottom"></div>

          {/* Top 3D Flap carrying the 100% Transparent SVG Wax Seal */}
          <div className={`flap-top-3d ${stage}`}>
            <div className="top-flap-paper">
              <div className="top-flap-gold-accent"></div>

              {/* 100% Transparent 3D Metallic Gold SVG Wax Seal */}
              <div className={`wax-seal-svg-container ${stage}`}>
                <div className="seal-pulse-glow"></div>
                
                <svg viewBox="0 0 100 100" className="wax-seal-svg-element">
                  <defs>
                    <radialGradient id="goldWaxGrad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#FFF2B2" />
                      <stop offset="25%" stopColor="#E5C158" />
                      <stop offset="60%" stopColor="#B38728" />
                      <stop offset="90%" stopColor="#664606" />
                      <stop offset="100%" stopColor="#3B2800" />
                    </radialGradient>
                    
                    <filter id="real3dDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1A1614" floodOpacity="0.45" />
                    </filter>
                  </defs>

                  {/* Organic Melted Wax Outer Shape */}
                  <path 
                    d="M 50,4 C 67,2 85,10 92,27 C 99,44 95,66 86,81 C 77,96 56,98 40,94 C 24,90 8,82 4,66 C 0,50 6,32 17,18 C 28,4 33,6 50,4 Z" 
                    fill="url(#goldWaxGrad)" 
                    filter="url(#real3dDropShadow)"
                  />

                  {/* Embossed Ring & Laurel Wreath */}
                  <circle cx="50" cy="50" r="36" fill="none" stroke="#FFF8DC" strokeWidth="1.8" strokeDasharray="3 2" opacity="0.85" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#7A5E0B" strokeWidth="1.5" />

                  {/* Monogram R & M Text */}
                  <text 
                    x="50" 
                    y="57" 
                    textAnchor="middle" 
                    fontFamily="Cormorant Garamond, Georgia, serif" 
                    fontWeight="700" 
                    fontSize="22" 
                    fill="#2A1D00"
                    style={{ textShadow: '0 1px 1px rgba(255,248,220,0.7)' }}
                  >
                    R & M
                  </text>
                </svg>

                {/* Left Crack Half */}
                <div className="seal-crack-half crack-left"></div>
                {/* Right Crack Half */}
                <div className="seal-crack-half crack-right"></div>
              </div>
            </div>
          </div>

          {/* Tap Hint */}
          {stage === 'idle' && (
            <div className="seal-tap-badge">
              <Sparkles size={13} className="sparkle-gold" />
              <span>Tap Wax Seal to Open</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .envelope-gpu-viewport {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          overflow: hidden;
          transition: opacity 1s ease, transform 1s ease;
        }

        .envelope-gpu-viewport.expanding-fullscreen {
          opacity: 0.95;
        }

        .envelope-3d-stage {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .envelope-3d-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 30px 80px rgba(26, 22, 20, 0.32), 0 10px 30px rgba(212, 175, 55, 0.2);
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          will-change: transform;
        }

        .envelope-3d-box:hover {
          transform: translate3d(0, -6px, 0) scale3d(1.01, 1.01, 1);
          box-shadow: 0 45px 100px rgba(212, 175, 55, 0.35);
        }

        /* Inner Pocket Backing */
        .pocket-back-wall {
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

        .pocket-pattern-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.18) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }

        .pocket-gold-crest {
          font-size: 4.5rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.22);
          letter-spacing: 6px;
        }

        /* Letter inside Pocket (Hardware Accelerated 3D Transform) */
        .letter-3d-card {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          z-index: 3;
          will-change: transform, opacity;
          transition: transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 2.2s ease;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        .letter-header-art {
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

        .art-gradient-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, #FFFFFF 100%);
        }

        .letter-card-body {
          padding: 0.8rem 1.4rem 1.8rem 1.4rem;
          text-align: center;
        }

        .bismillah-text { font-size: 0.82rem; color: #1D3557; font-weight: 600; margin-bottom: 0.4rem; }
        .hosts-name { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.3rem; }
        .invitation-text { font-size: 0.9rem; color: #1D3557; line-height: 1.35; }
        .daughter-word { font-size: 2.2rem; color: #1D3557; margin: 0.3rem 0 0.1rem 0; }
        .on-text { font-size: 0.8rem; color: #6B5E55; }
        .event-date { font-size: 1.35rem; font-weight: 700; margin-top: 0.2rem; }
        .event-time { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.4rem; }
        .venue-text { font-size: 1.1rem; font-weight: 600; }
        .note-box { font-size: 0.8rem; font-style: italic; margin-top: 0.8rem; }
        .rsvp-phone-text { font-size: 0.85rem; font-weight: 700; margin-top: 0.3rem; }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        /* Smooth 60FPS Letter Slide Out */
        .letter-3d-card.sliding-letter {
          transform: translate3d(0, -300px, 60px) scale3d(1.05, 1.05, 1);
          box-shadow: 0 40px 100px rgba(212, 175, 55, 0.45);
          z-index: 15;
        }

        .letter-3d-card.expanding-fullscreen {
          transform: translate3d(0, -340px, 120px) scale3d(1.12, 1.12, 1);
          box-shadow: 0 50px 130px rgba(212, 175, 55, 0.6);
          z-index: 25;
        }

        /* Front Side & Bottom Flaps */
        .flap-side-left {
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

        .flap-side-right {
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

        .flap-side-bottom {
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

        /* Top 3D Hinge Flap */
        .flap-top-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          transition: transform 2.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 6;
          will-change: transform;
          backface-visibility: hidden;
        }

        .top-flap-paper {
          position: relative;
          width: 0;
          height: 0;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-top: 210px solid #FAF6F0;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.14));
          transform-style: preserve-3d;
        }

        .top-flap-gold-accent {
          position: absolute;
          top: -205px;
          left: -280px;
          width: 560px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        /* 3D Flap Rotates 180deg carrying the transparent SVG seal in 3D! */
        .flap-top-3d.opening-flap,
        .flap-top-3d.sliding-letter,
        .flap-top-3d.expanding-fullscreen {
          transform: rotateX(180deg);
          z-index: 2;
        }

        /* 100% Transparent SVG Wax Seal Container (ZERO White Background Box!) */
        .wax-seal-svg-container {
          position: absolute;
          top: -215px; /* Positioned precisely at V-flap apex tip */
          left: -48px;
          width: 96px;
          height: 96px;
          z-index: 20;
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .seal-pulse-glow {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, transparent 70%);
          animation: sealGlowAnim 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes sealGlowAnim {
          0%, 100% { transform: scale(0.92); opacity: 0.6; }
          50% { transform: scale(1.25); opacity: 0.95; }
        }

        .wax-seal-svg-element {
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.35));
          transition: transform 1.2s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 1.2s ease;
        }

        /* Seal Crack Animation */
        .wax-seal-svg-container.cracking .wax-seal-svg-element {
          animation: crackShake 0.5s ease;
        }

        @keyframes crackShake {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(1.1) rotate(-6deg); }
          70% { transform: scale(1.1) rotate(6deg); }
        }

        .wax-seal-svg-container.opening-flap .wax-seal-svg-element,
        .wax-seal-svg-container.sliding-letter .wax-seal-svg-element {
          opacity: 0.9;
        }

        .seal-tap-badge {
          position: absolute;
          bottom: -54px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(26, 22, 20, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.7);
          color: #FCF6BA;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          animation: hintFloatAnim 2s ease-in-out infinite;
          z-index: 30;
        }

        @keyframes hintFloatAnim {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -6px); }
        }

        @media (max-width: 640px) {
          .envelope-3d-stage {
            max-width: 350px;
            height: 260px;
          }
          .flap-side-left {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-left-width: 180px;
          }
          .flap-side-right {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-right-width: 180px;
          }
          .flap-side-bottom {
            border-left-width: 175px;
            border-right-width: 175px;
            border-bottom-width: 140px;
          }
          .flap-top-3d { height: 140px; }
          .top-flap-paper {
            border-left-width: 175px;
            border-right-width: 175px;
            border-top-width: 140px;
          }
          .wax-seal-svg-container {
            top: -145px;
            left: -40px;
            width: 80px;
            height: 80px;
          }
          .letter-3d-card { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};
