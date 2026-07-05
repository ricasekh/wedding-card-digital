import React, { useEffect, useState } from 'react';
import { Minus, Plus, Send, X } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

// RSVP composes a WhatsApp message to the family — no backend needed.
export function RSVPModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(true);
  const [guests, setGuests] = useState(1);
  const [note, setNote] = useState('');
  const { rsvp, couple } = weddingConfig;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const send = (e) => {
    e.preventDefault();
    const lines = [
      `RSVP — Wedding of ${couple.groomShort} & ${couple.brideShort}`,
      `Name: ${name || '—'}`,
      `Attending: ${attending ? 'Yes, with pleasure' : 'Regretfully, no'}`,
      attending ? `Guests: ${guests}` : null,
      note ? `Message: ${note}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="RSVP"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        <div className="modal-head">
          <div className="eyebrow">Kindly Respond</div>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
            Will you join us?
          </h2>
        </div>

        <form onSubmit={send}>
          <div className="field">
            <label htmlFor="rsvp-name">Your name</label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

          <div className="field">
            <label>Attendance</label>
            <div className="segmented">
              <button
                type="button"
                className={attending ? 'is-active' : ''}
                onClick={() => setAttending(true)}
              >
                Joyfully accept
              </button>
              <button
                type="button"
                className={!attending ? 'is-active' : ''}
                onClick={() => setAttending(false)}
              >
                Regretfully decline
              </button>
            </div>
          </div>

          {attending && (
            <div className="field">
              <label>Number of guests</label>
              <div className="stepper">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  aria-label="Fewer guests"
                >
                  <Minus size={15} />
                </button>
                <span>{guests}</span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(12, g + 1))}
                  aria-label="More guests"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
          )}

          <div className="field">
            <label htmlFor="rsvp-note">A word for the couple (optional)</label>
            <textarea
              id="rsvp-note"
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Your blessings…"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            <Send size={13} />
            Send via WhatsApp
          </button>
        </form>

        <p className="modal-foot">
          Kindly respond before {rsvp.deadline}
          <br />
          {rsvp.contactPerson} · {rsvp.contactPhone}
        </p>
      </div>
    </div>
  );
}
