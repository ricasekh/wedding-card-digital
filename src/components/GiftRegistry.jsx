import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { Gift, Copy, Check, Heart } from 'lucide-react';

export const GiftRegistry = () => {
  const { giftRegistry } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(giftRegistry.iban);
    setCopied(true);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FCF6BA', '#FFFFFF']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Gift Registry</span>
        <h2 className="font-serif section-title">Honeymoon Fund</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="gift-card glass-card">
        <div className="gift-icon-wrapper">
          <Gift size={28} className="text-gold" />
        </div>

        <p className="gift-message">{giftRegistry.message}</p>

        <div className="iban-box">
          <div className="iban-label">Bank Account Details</div>
          <div className="iban-bank">{giftRegistry.bankName}</div>
          <div className="iban-number">{giftRegistry.iban}</div>
          <div className="iban-swift">SWIFT / BIC: {giftRegistry.swift}</div>

          <button className="btn-gold copy-btn" onClick={handleCopyIBAN}>
            {copied ? (
              <>
                <Check size={16} />
                <span>IBAN Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy IBAN Account</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .gift-card {
          padding: 3rem 2.5rem;
          text-align: center;
          max-width: 620px;
          margin: 0 auto;
        }

        .gift-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          box-shadow: var(--shadow-sm);
        }

        .gift-message {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 2rem auto;
        }

        .iban-box {
          background: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 16px;
          padding: 1.8rem;
          margin-top: 1.5rem;
        }

        .iban-label {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .iban-bank {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .iban-number {
          font-family: monospace;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-gold);
          letter-spacing: 1px;
          margin: 0.8rem 0 0.4rem 0;
        }

        .iban-swift {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .copy-btn {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};
