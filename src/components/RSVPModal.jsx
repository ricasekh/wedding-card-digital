import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { X, Send, Heart, Check, Users, MessageSquare } from 'lucide-react';

export const RSVPModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    attending: 'yes',
    guestCount: 1,
    dietary: '',
    songRequest: '',
    transport: 'no'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Save to localStorage database
    const existingRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('wedding_rsvps', JSON.stringify([...existingRSVPs, newRSVP]));

    // 2. Trigger confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FCF6BA', '#FFFFFF', '#E8D3C8']
    });

    setSubmitted(true);

    // 3. Format WhatsApp message
    const waText = encodeURIComponent(
      `💌 *RSVP CONFIRMATION - ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom}'s Wedding*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `✨ *Attending:* ${formData.attending === 'yes' ? '✅ Joyfully Accepts' : '❌ Regretfully Declines'}\n` +
      `👥 *Number of Guests:* ${formData.guestCount}\n` +
      `🥗 *Dietary Requirements:* ${formData.dietary || 'None'}\n` +
      `🎵 *Song Request:* ${formData.songRequest || 'Surprise us!'}\n` +
      `🚌 *Need Shuttle Bus:* ${formData.transport === 'yes' ? 'Yes' : 'No'}`
    );

    const whatsappUrl = `https://wa.me/${weddingConfig.rsvp.whatsappNumber}?text=${waText}`;

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="font-script section-script">RSVP</span>
              <h2 className="font-serif section-title">Confirm Attendance</h2>
              <p className="rsvp-deadline">Kindly respond by {weddingConfig.rsvp.deadline}</p>
            </div>

            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="e.g. Eleanor & Lucas Vance" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Will you join us? *</label>
                <div className="radio-group">
                  <label className={`radio-card ${formData.attending === 'yes' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="attending" 
                      value="yes" 
                      checked={formData.attending === 'yes'}
                      onChange={handleChange} 
                    />
                    <span>🎉 Joyfully Accept</span>
                  </label>

                  <label className={`radio-card ${formData.attending === 'no' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="attending" 
                      value="no" 
                      checked={formData.attending === 'no'}
                      onChange={handleChange} 
                    />
                    <span>💔 Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {formData.attending === 'yes' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Number of Attending Guests</label>
                    <select 
                      name="guestCount" 
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value={1}>1 Guest (Just me)</option>
                      <option value={2}>2 Guests (Plus One)</option>
                      <option value={3}>3 Guests (Family)</option>
                      <option value={4}>4 Guests (Family)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Dietary Restrictions / Allergies</label>
                    <input 
                      type="text" 
                      name="dietary"
                      placeholder="e.g. Vegetarian, Gluten-Free, Nut Allergy" 
                      value={formData.dietary}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Song Request for the DJ</label>
                    <input 
                      type="text" 
                      name="songRequest"
                      placeholder="What song will get you on the dance floor?" 
                      value={formData.songRequest}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </>
              )}

              <button type="submit" className="btn-gold w-full mt-4">
                <Send size={16} />
                <span>Submit RSVP via WhatsApp</span>
              </button>
            </form>
          </>
        ) : (
          <div className="rsvp-success-box text-center">
            <div className="success-icon-wrapper">
              <Check size={32} className="text-gold" />
            </div>
            <h3 className="font-serif success-title">Thank You!</h3>
            <p className="success-message">
              Your RSVP has been recorded. Opening WhatsApp to send your confirmation details...
            </p>
            <button className="btn-gold mt-6" onClick={onClose}>
              Close Window
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-gold);
          transform: scale(1.1);
        }

        .rsvp-deadline {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
          letter-spacing: 1px;
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          text-align: left;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          border: 1px solid var(--border-gold);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--text-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        .radio-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .radio-card {
          padding: 0.85rem;
          border-radius: 12px;
          border: 1px solid var(--border-gold);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .radio-card input {
          display: none;
        }

        .radio-card.selected {
          background: var(--gold-gradient);
          color: #1A1614;
          font-weight: 600;
          box-shadow: var(--shadow-gold);
        }

        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .success-title {
          font-size: 2.2rem;
          color: var(--text-primary);
        }

        .success-message {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
