import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';

function remaining() {
  const diff = new Date(weddingConfig.couple.weddingDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

const pad = (n) => String(n).padStart(2, '0');

export function Countdown() {
  const [time, setTime] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return <div className="eyebrow" style={{ marginTop: '2rem' }}>The celebration has begun</div>;
  }

  const cells = [
    [time.days, 'Days'],
    [time.hours, 'Hours'],
    [time.minutes, 'Minutes'],
    [time.seconds, 'Seconds'],
  ];

  return (
    <div className="countdown" role="timer" aria-label="Countdown to the wedding">
      {cells.map(([value, label], i) => (
        <React.Fragment key={label}>
          {i > 0 && <span className="count-sep" aria-hidden="true">·</span>}
          <div className="count-cell">
            <span className="count-num">{pad(value)}</span>
            <span className="count-label">{label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
