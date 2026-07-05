import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-unit">
        <div className="countdown-card">
          <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
        </div>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-unit">
        <div className="countdown-card">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
        </div>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-unit">
        <div className="countdown-card">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
        </div>
        <span className="countdown-label">Mins</span>
      </div>
      <div className="countdown-colon">:</div>
      <div className="countdown-unit">
        <div className="countdown-card">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        <span className="countdown-label">Secs</span>
      </div>

      <style>{`
        .countdown-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin: 2rem 0;
        }

        .countdown-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-gold);
          border-radius: 14px;
          min-width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        .countdown-number {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .countdown-label {
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 0.5rem;
          font-weight: 600;
        }

        .countdown-colon {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--text-gold);
          margin-bottom: 1.4rem;
        }

        @media (max-width: 480px) {
          .countdown-card {
            min-width: 52px;
            height: 54px;
          }
          .countdown-number {
            font-size: 1.35rem;
          }
          .countdown-container {
            gap: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};
