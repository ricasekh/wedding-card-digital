import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles } from 'lucide-react';

export const Envelope = ({ onOpen }) => {
  const [openingStage, setOpeningStage] = useState('idle'); 
  // 'idle' -> 'cracking' -> 'flap-3d-open' -> 'paper-slide-out' -> 'fullscreen-reveal'

  const handleOpenEnvelope = (e) => {
    e.stopPropagation();
    if (openingStage !== 'idle') return;

    // Stage 1: Wax Seal Crack (0ms - 800ms)
    setOpeningStage('cracking');

    // Stage 2: Top Flap & Wax Seal rotate together in 3D (800ms - 3200ms)
    setTimeout(() => {
      setOpeningStage('flap-3d-open');
    }, 750);

    // Stage 3: Letter paper slides out of pocket & expands (3200ms - 5400ms)
    setTimeout(() => {
      setOpeningStage('paper-slide-out');

      confetti({
        particleCount: 85,
        spread: 95,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#1B4332', '#1D3557', '#FCF6BA', '#FFF8DC'],
        disableForReducedMotion: true
      });
    }, 3000);

    // Stage 4: Smooth transition to fullscreen invitation
    setTimeout(() => {
      setOpeningStage('fullscreen-reveal');
    }, 5200);

    // Stage 5: Final handoff to main app
    setTimeout(() => {
      onOpen();
    }, 6600);
  };

  return (
    <div className="envelope-3d-viewport">
      <div className={`envelope-stage-box ${openingStage}`}>
        {/* Main 3D Envelope Body */}
        <div className="envelope-physical-body" onClick={handleOpenEnvelope}>
          {/* Inner Pocket Background with Kashmir Motif */}
          <div className="envelope-pocket-bg">
            <div className="pocket-silk-texture"></div>
            <div className="pocket-monogram-gold font-serif">{weddingConfig.couple.monogram}</div>
          </div>

          {/* Real Wedding Letter Card (Inside Envelope Pocket) */}
          <div className={`kashmir-invitation-card ${openingStage}`}>
            {/* Kashmir Mountains Watercolor Artwork */}
            <div className="card-artwork-header">
              <img 
                src={weddingConfig.couple.artwork} 
                alt="Kashmir Mountains Watercolor" 
                className="artwork-img"
              />
              <div className="artwork-overlay"></div>
            </div>

            {/* Invitation Text Content matching exact provided card */}
            <div className="card-body-content">
              <div className="bismillah-text font-serif">
                {weddingConfig.couple.bismillah}
              </div>

              <div className="hosts-name font-serif text-emerald">
                {weddingConfig.couple.hosts}
              </div>

              <div className="invitation-request font-serif">
                {weddingConfig.couple.invitationMessage}
              </div>

              <div className="daughter-title font-script">
                Daughter
              </div>

              <div className="on-word font-serif">on</div>

              <div className="event-day font-serif text-emerald">
                {weddingConfig.couple.formattedDate}
              </div>

              <div className="event-time font-serif text-blue">
                {weddingConfig.couple.formattedTime}
              </div>

              <div className="venue-name font-serif text-emerald">
                {weddingConfig.venues.ceremony.title}, {weddingConfig.venues.ceremony.address}
              </div>

              <div className="notes-box">
                <p className="note-text text-emerald font-serif">
                  (For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)
                </p>
                <p className="rsvp-text text-blue">
                  RSVP: {weddingConfig.rsvp.whatsappNumber.slice(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Side & Bottom Envelope Flaps */}
          <div className="envelope-flap-left"></div>
          <div className="envelope-flap-right"></div>
          <div className="envelope-flap-bottom"></div>

          {/* Top V-shaped Flap that opens in 3D WITH the wax seal attached */}
          <div className={`envelope-top-flap-3d ${openingStage}`}>
            <div className="top-flap-outer-shape">
              <div className="top-flap-gold-line"></div>
              
              {/* Wax Seal ATTACHED to the tip of top flap so it opens WITH the flap in 3D! */}
              <div className={`top-flap-wax-seal ${openingStage}`}>
                {/* Clean circular seal with 0% background box */}
                <div className="seal-clip-circle">
                  <img 
                    src="/images/real_wax_seal_rm.jpg" 
                    alt="R & M Wax Seal" 
                    className="seal-img-clean"
                  />
                  {/* Left Half Split */}
                  <div className="seal-split-half seal-left-half"></div>
                  {/* Right Half Split */}
                  <div className="seal-split-half seal-right-half"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tap Hint */}
          {openingStage === 'idle' && (
            <div className="seal-tap-hint">
              <Sparkles size={13} className="sparkle-gold" />
              <span>Tap Seal to Open Invitation</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .envelope-3d-viewport {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          overflow: hidden;
        }

        .envelope-stage-box {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
          transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .envelope-physical-body {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 35px 90px rgba(26, 22, 20, 0.35), 0 12px 35px rgba(212, 175, 55, 0.2);
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .envelope-physical-body:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 45px 110px rgba(212, 175, 55, 0.4);
        }

        /* Inner Pocket */
        .envelope-pocket-bg {
          position: absolute;
          inset: 0;
          background: #EDE3D5;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pocket-silk-texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.2) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }

        .pocket-monogram-gold {
          font-size: 4.5rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.25);
          letter-spacing: 6px;
        }

        /* Kashmir Watercolor Card inside Pocket */
        .kashmir-invitation-card {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow-y: auto;
          z-index: 3;
          transition: transform 2.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 2.8s ease, width 2.5s ease, height 2.5s ease;
          transform: translateY(0);
        }

        .card-artwork-header {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }

        .artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .artwork-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, #FFFFFF 100%);
        }

        .card-body-content {
          padding: 1.2rem 1.5rem 2rem 1.5rem;
          text-align: center;
        }

        .bismillah-text {
          font-size: 0.85rem;
          color: #1D3557;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .hosts-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .invitation-request {
          font-size: 0.95rem;
          color: #1D3557;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .daughter-title {
          font-size: 2.4rem;
          color: #1D3557;
          margin: 0.4rem 0 0.1rem 0;
        }

        .on-word {
          font-size: 0.85rem;
          color: #6B5E55;
          margin-bottom: 0.3rem;
        }

        .event-day {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .event-time {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0.2rem 0 0.8rem 0;
        }

        .venue-name {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .notes-box {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.3);
        }

        .note-text {
          font-size: 0.85rem;
          font-style: italic;
          margin-bottom: 0.4rem;
        }

        .rsvp-text {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        /* Card Motion Physics: Slides Out and Expands smoothly */
        .kashmir-invitation-card.paper-slide-out {
          transform: translateY(-290px) scale(1.04);
          box-shadow: 0 35px 95px rgba(212, 175, 55, 0.45);
          z-index: 15;
        }

        .kashmir-invitation-card.fullscreen-reveal {
          transform: translateY(-330px) scale(1.08);
          box-shadow: 0 45px 120px rgba(212, 175, 55, 0.6);
          z-index: 25;
        }

        /* Front Envelope Flaps */
        .envelope-flap-left {
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
          filter: drop-shadow(4px 0 10px rgba(0,0,0,0.08));
        }

        .envelope-flap-right {
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
          filter: drop-shadow(-4px 0 10px rgba(0,0,0,0.08));
        }

        .envelope-flap-bottom {
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
          filter: drop-shadow(0 -5px 12px rgba(0,0,0,0.1));
        }

        /* Top 3D V-Shaped Flap */
        .envelope-top-flap-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          transition: transform 2.8s cubic-bezier(0.33, 1, 0.68, 1);
          z-index: 6;
        }

        .top-flap-outer-shape {
          position: relative;
          width: 0;
          height: 0;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-top: 210px solid #FAF6F0;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.16));
        }

        .top-flap-gold-line {
          position: absolute;
          top: -205px;
          left: -280px;
          width: 560px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        /* 3D Flap Rotates Upward 180deg carrying the Seal WITH IT! */
        .envelope-top-flap-3d.flap-3d-open,
        .envelope-top-flap-3d.paper-slide-out,
        .envelope-top-flap-3d.fullscreen-reveal {
          transform: rotateX(180deg);
          z-index: 2;
        }

        /* Wax Seal ATTACHED to Top Flap Tip (No background box!) */
        .top-flap-wax-seal {
          position: absolute;
          top: -25px; /* Positioned exactly at V-apex tip of top flap */
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          pointer-events: auto;
          z-index: 20;
          transition: transform 1.5s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .seal-clip-circle {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          clip-path: circle(49% at 50% 50%);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        .seal-img-clean {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Seal crack split animation */
        .seal-split-half {
          position: absolute;
          inset: 0;
          background: transparent;
          transition: transform 1.5s ease, opacity 1.5s ease;
        }

        .top-flap-wax-seal.cracking .seal-clip-circle {
          animation: sealCrackShake 0.6s ease;
        }

        @keyframes sealCrackShake {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.08) rotate(-4deg); }
          75% { transform: scale(1.08) rotate(4deg); }
        }

        .seal-tap-hint {
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
          animation: floatHintAnim 2s ease-in-out infinite;
          z-index: 30;
        }

        @keyframes floatHintAnim {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -6px); }
        }

        @media (max-width: 640px) {
          .envelope-stage-box {
            max-width: 350px;
            height: 260px;
          }
          .envelope-flap-left {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-left-width: 180px;
          }
          .envelope-flap-right {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-right-width: 180px;
          }
          .envelope-flap-bottom {
            border-left-width: 175px;
            border-right-width: 175px;
            border-bottom-width: 140px;
          }
          .envelope-top-flap-3d { height: 140px; }
          .top-flap-outer-shape {
            border-left-width: 175px;
            border-right-width: 175px;
            border-top-width: 140px;
          }
          .top-flap-wax-seal {
            top: -20px;
            width: 80px;
            height: 80px;
          }
          .seal-clip-circle {
            width: 80px;
            height: 80px;
          }
          .kashmir-invitation-card { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
          .event-day { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};
