import { weddingConfig } from '../config/weddingConfig';

// Builds and downloads an .ics calendar invite (works on iOS, Android, desktop).
export function downloadICS() {
  const { calendar } = weddingConfig;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rasekh & Maleeha//Wedding//EN',
    'BEGIN:VEVENT',
    `UID:rasekh-maleeha-2026@wedding`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '')}`,
    `DTSTART:${calendar.startUTC}`,
    `DTEND:${calendar.endUTC}`,
    `SUMMARY:${calendar.title}`,
    `DESCRIPTION:${calendar.description}`,
    `LOCATION:${calendar.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rasekh-maleeha-wedding.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
