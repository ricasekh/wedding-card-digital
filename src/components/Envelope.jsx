import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, Heart } from 'lucide-react';

export const Envelope = ({ onComplete }) => {
  const [stage, setStage] = useState('sealed'); 
  // 'sealed' -> 'cracking' -> 'flap-opening' -> 'letter-sliding' -> 'unfolded'

  const handleOpenEnvelope = () => {
    if (stage !== 'sealed') return;

    // 1. Crack Seal (0ms - 500ms)
    setStage('cracking');

    // 2. Rotate Flap 180deg in 3D (500ms - 2500ms)
    setTimeout(() => {
      setStage('flap-opening');
    }, 450);

    // 3. Slide Letter out of pocket (2500ms - 4500ms)
    setTimeout(() => {
      setStage('letter-sliding');

      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#1B4332', '#1D3557', '#FCF6BA', '#FFF8DC'],
        disableForReducedMotion: true
      });
    }, 2300);

    // 4. Expand letter & handoff to main app (4500ms - 5500ms)
    setTimeout(() => {
      setStage('unfolded');
      onComplete();
    }, 4200);
  };

  const baseUrl = import.meta.env.BASE_URL || './';

  return (
    <div className={`envelope-hero-stage ${stage}`}>
      <div className="envelope-3d-container">
        <div className="envelope-physical-box" onClick={handleOpenEnvelope}>
          
          {/* Back Pocket Wall */}
          <div className="pocket-back">
            <div className="pocket-silk-grid"></div>
            <div className="pocket-monogram font-serif">{weddingConfig.couple.monogram}</div>
          </div>

          {/* Letter Card inside Pocket (Hidden when sealed, slides up when opened) */}
          <div className={`letter-card-inside ${stage}`}>
            <div className="card-header-art">
              <img 
                src={weddingConfig.couple.artwork} 
                alt="Kashmir Mountains Artwork" 
                className="art-img"
              />
              <div className="art-overlay-fade"></div>
            </div>

            <div className="card-content-body">
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

          {/* Front Left, Right, & Bottom Envelope Flaps */}
          <div className="flap-left"></div>
          <div className="flap-right"></div>
          <div className="flap-bottom"></div>

          {/* Top V-shaped Flap (Covering the pocket when sealed, flips 180deg up when opened) */}
          <div className={`flap-top-3d ${stage}`}>
            <div className="top-flap-shape">
              <div className="top-flap-gold-line"></div>
            </div>

            {/* Photorealistic R&M Wax Seal Positioned Dead-Centered at Top Flap Tip */}
            <div className={`nano-seal-wrapper ${stage}`}>
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

          {/* Tap Prompt Hint */}
          {stage === 'sealed' && (
            <div className="seal-tap-badge">
              <Sparkles size={14} className="sparkle-gold" />
              <span>Tap Wax Seal to Open Invitation</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .envelope-hero-stage {
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          overflow: hidden;
          transition: opacity 1s ease, transform 1s ease;
        }

        .envelope-hero-stage.unfolded {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        .envelope-3d-container {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
        }

        .envelope-physical-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 35px 90px rgba(26, 22, 20, 0.35), 0 12px 30px rgba(212, 175, 55, 0.2);
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .envelope-physical-box:hover {
          transform: translate3d(0, -6px, 0) scale3d(1.01, 1.01, 1);
          box-shadow: 0 45px 110px rgba(212, 175, 55, 0.4);
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

        /* Letter Inside Pocket */
        .letter-card-inside {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.14);
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          z-index: 3;
          will-change: transform;
          transition: transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 2.2s ease;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        .card-header-art {
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

        .card-content-body {
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

        /* Smooth 60FPS Letter Slide Out */
        .letter-card-inside.letter-sliding,
        .letter-card-inside.unfolded {
          transform: translate3d(0, -320px, 80px) scale3d(1.06, 1.06, 1);
          box-shadow: 0 45px 110px rgba(212, 175, 55, 0.5);
          z-index: 15;
        }

        /* Front Envelope Flaps */
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

        /* Top 3D V-Flap */
        .flap-top-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          transition: transform 2.5s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 6;
          will-change: transform;
          backface-visibility: hidden;
          transform: rotateX(0deg); /* 100% CLOSED WHEN SEALED! */
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

        /* 3D Hinge Flap rotates 180deg up when opening */
        .flap-top-3d.flap-opening,
        .flap-top-3d.letter-sliding,
        .flap-top-3d.unfolded {
          transform: rotateX(180deg);
          z-index: 2;
        }

        /* Photorealistic R&M Wax Seal Positioned Dead-Centered at Top Flap Tip */
        .nano-seal-wrapper {
          position: absolute;
          top: 210px;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 106px;
          height: 106px;
          z-index: 25;
          pointer-events: auto;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 1s ease;
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

        .nano-seal-wrapper.cracking {
          animation: nanoShake 0.5s ease;
        }

        @keyframes nanoShake {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          30% { transform: translate(-50%, -50%) scale(1.1) rotate(-5deg); }
          70% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
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
          animation: badgeFloat 2s ease-in-out infinite;
          z-index: 30;
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -6px); }
        }

        @media (max-width: 640px) {
          .envelope-3d-container {
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
          .letter-card-inside { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};
