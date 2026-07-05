import React from 'react';
import { CalendarPlus, Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { Countdown } from './Countdown';
import { downloadICS } from '../lib/calendar';

const baseUrl = import.meta.env.BASE_URL || './';

export function Hero({ onOpenRSVP }) {
  const { couple } = weddingConfig;

  return (
    <section className="hero">
      <div className="hero-scenery" aria-hidden="true">
        <img
          src={`${baseUrl}images/kashmir_mountains.jpg`}
          alt=""
          data-parallax="0.06"
          draggable="false"
        />
      </div>

      <p className="hero-bismillah">{couple.bismillah}</p>

      <div className="ornament" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2Z" />
        </svg>
      </div>

      <p className="hero-invite">{couple.invitationMessage}</p>

      <h1 className="hero-names">
        {couple.brideShort}
        <span className="amp">and</span>
        {couple.groomShort}
      </h1>

      <p className="hero-fullnames">
        {couple.bride} &nbsp;·&nbsp; {couple.groom}
      </p>

      <div className="hero-dateline">
        <span className="small-caps">{couple.formattedDate}</span>
        <span className="sep" aria-hidden="true" />
        <span className="small-caps">{couple.formattedTime}</span>
        <span className="sep" aria-hidden="true" />
        <span className="small-caps">{couple.city}</span>
      </div>

      <Countdown />

      <div className="hero-actions">
        <button className="btn btn-primary" onClick={onOpenRSVP}>
          <Heart size={13} strokeWidth={2.2} />
          RSVP
        </button>
        <button className="btn btn-ghost" onClick={downloadICS}>
          <CalendarPlus size={14} strokeWidth={1.8} />
          Add to calendar
        </button>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="small-caps" style={{ fontSize: '0.58rem' }}>Scroll</span>
      </div>
    </section>
  );
}
