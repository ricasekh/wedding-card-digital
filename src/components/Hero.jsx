import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Countdown } from './Countdown';
import { Calendar, Heart, MapPin, Sparkles, Phone } from 'lucide-react';

export const Hero = ({ onOpenRSVP }) => {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}'s Wedding`);
    const details = encodeURIComponent(`${weddingConfig.couple.bismillah}\n\n${weddingConfig.couple.invitationMessage}`);
    const location = encodeURIComponent(`${weddingConfig.venues.ceremony.title}, ${weddingConfig.venues.ceremony.address}`);
    
    // Sunday 04 October 2026 at 12:00 Noon
    const startDate = "20261004T120000Z";
    const endDate = "20261004T150000Z";
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-card kashmir-paper-card">
        {/* Kashmir Mountains Artwork Header */}
        <div className="hero-artwork-banner">
          <img 
            src={weddingConfig.couple.artwork} 
            alt="Kashmir Mountains Watercolor" 
            className="hero-artwork-img"
          />
          <div className="hero-artwork-fade"></div>
        </div>

        <div className="hero-inner-body">
          {/* Bismillah Header */}
          <p className="bismillah-header font-serif">
            {weddingConfig.couple.bismillah}
          </p>

          {/* Hosts */}
          <h2 className="font-serif hosts-title text-emerald">
            {weddingConfig.couple.hosts}
          </h2>

          <p className="invitation-line font-serif">
            {weddingConfig.couple.invitationMessage}
          </p>

          <div className="daughter-word font-script">
            Daughter
          </div>

          {/* Couple Names */}
          <div className="couple-headline">
            <h1 className="font-serif bride-title">{weddingConfig.couple.bride}</h1>
            <div className="and-symbol font-script">&</div>
            <h1 className="font-serif groom-title">{weddingConfig.couple.groom}</h1>
          </div>

          {/* Date & Time */}
          <div className="hero-event-details">
            <div className="event-date-large font-serif text-emerald">
              {weddingConfig.couple.formattedDate}
            </div>
            <div className="event-time-large font-serif text-blue">
              {weddingConfig.couple.formattedTime}
            </div>
            
            <div className="venue-address-box">
              <MapPin size={16} className="text-gold" />
              <span className="font-serif venue-text text-emerald">
                {weddingConfig.venues.ceremony.title}, {weddingConfig.venues.ceremony.address}
              </span>
            </div>
          </div>

          {/* Schedule / Buffet Note */}
          <div className="buffet-note-banner">
            <p className="font-serif text-emerald note-italic">
              (For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)
            </p>
            <p className="rsvp-phone-number text-blue">
              <Phone size={14} className="inline-icon" />
              RSVP: {weddingConfig.rsvp.whatsappNumber.slice(2)}
            </p>
          </div>

          {/* Live Countdown */}
          <Countdown targetDate={weddingConfig.couple.weddingDate} />

          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn-gold" onClick={onOpenRSVP}>
              <Heart size={16} />
              <span>Confirm RSVP</span>
            </button>
            
            <button className="btn-outline-gold" onClick={handleAddToCalendar}>
              <Calendar size={16} />
              <span>Save To Calendar</span>
            </button>
          </div>

          <p className="hero-hashtag">{weddingConfig.couple.hashtag}</p>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 3rem 1.25rem 2rem 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .kashmir-paper-card {
          width: 100%;
          max-width: 640px;
          position: relative;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(26, 22, 20, 0.2), 0 12px 35px rgba(212, 175, 55, 0.18);
          border: 1px solid rgba(212, 175, 55, 0.45);
        }

        .hero-artwork-banner {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .hero-artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-artwork-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, #FFFFFF 100%);
        }

        .hero-inner-body {
          padding: 1.5rem 2.5rem 3.5rem 2.5rem;
          text-align: center;
        }

        .bismillah-header {
          font-size: 1.05rem;
          color: #1D3557;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .hosts-title {
          font-size: 2.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .invitation-line {
          font-size: 1.1rem;
          color: #1D3557;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .daughter-word {
          font-size: 3.2rem;
          color: #1D3557;
          margin: 0.8rem 0 0.8rem 0;
        }

        .couple-headline {
          margin: 1.2rem 0;
        }

        .bride-title, .groom-title {
          font-size: 2.6rem;
          font-weight: 600;
          color: #1B4332;
          line-height: 1.15;
        }

        .and-symbol {
          font-size: 2.8rem;
          color: #D4AF37;
          margin: 0.2rem 0;
        }

        .hero-event-details {
          margin: 2rem 0;
        }

        .event-date-large {
          font-size: 2.1rem;
          font-weight: 700;
        }

        .event-time-large {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 0.4rem 0 1rem 0;
        }

        .venue-address-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          max-width: 480px;
          margin: 0 auto;
        }

        .venue-text {
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .buffet-note-banner {
          background: #FAF6F0;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 16px;
          padding: 1.2rem;
          margin: 2rem 0;
        }

        .note-italic {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .rsvp-phone-number {
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .inline-icon {
          display: inline-block;
        }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .hero-hashtag {
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2.5rem;
        }

        @media (max-width: 640px) {
          .hero-inner-body {
            padding: 1.5rem 1.25rem 2.5rem 1.25rem;
          }
          .hosts-title { font-size: 1.6rem; }
          .bride-title, .groom-title { font-size: 2rem; }
          .daughter-word { font-size: 2.5rem; }
          .event-date-large { font-size: 1.6rem; }
          .venue-text { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};
