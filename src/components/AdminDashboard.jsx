import React, { useState, useEffect } from 'react';
import { X, Lock, Download, Users, CheckCircle, XCircle, Music } from 'lucide-react';

export const AdminDashboard = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rsvps, setRsvps] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadRSVPs();
    }
  }, [isOpen, isAuthenticated]);

  const loadRSVPs = () => {
    const data = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    setRsvps(data);
  };

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1234' || passcode === 'admin') {
      setIsAuthenticated(true);
      setError('');
      loadRSVPs();
    } else {
      setError('Incorrect PIN. Default PIN is 1234');
    }
  };

  const exportCSV = () => {
    if (rsvps.length === 0) return;
    
    const headers = ['Full Name', 'Attending', 'Guests', 'Dietary Restrictions', 'Song Request', 'Submitted At'];
    const rows = rsvps.map(r => [
      `"${r.fullName}"`,
      r.attending === 'yes' ? 'Attending' : 'Declined',
      r.guestCount,
      `"${r.dietary || 'None'}"`,
      `"${r.songRequest || 'None'}"`,
      `"${new Date(r.submittedAt).toLocaleString()}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `wedding_rsvps_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const attendingCount = rsvps.filter(r => r.attending === 'yes').reduce((sum, r) => sum + Number(r.guestCount), 0);
  const declinedCount = rsvps.filter(r => r.attending === 'no').length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card admin-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!isAuthenticated ? (
          <div className="admin-login-box text-center">
            <div className="admin-lock-icon">
              <Lock size={28} className="text-gold" />
            </div>
            <h3 className="font-serif admin-title">Couple Dashboard</h3>
            <p className="admin-subtitle">Enter passcode to view RSVPs (PIN: 1234)</p>

            <form onSubmit={handleLogin} className="admin-form">
              <input 
                type="password" 
                placeholder="Enter PIN (1234)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="form-input text-center"
              />
              {error && <p className="error-text">{error}</p>}
              <button type="submit" className="btn-gold mt-4">
                Unlock Dashboard
              </button>
            </form>
          </div>
        ) : (
          <div className="admin-dashboard-view">
            <div className="admin-header">
              <h2 className="font-serif admin-main-title">RSVP Management</h2>
              <button className="btn-outline-gold export-btn" onClick={exportCSV}>
                <Download size={14} />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Summary Statistics */}
            <div className="admin-stats-grid">
              <div className="stat-card">
                <Users size={20} className="text-gold" />
                <div className="stat-num">{attendingCount}</div>
                <div className="stat-label">Total Attending Guests</div>
              </div>
              <div className="stat-card">
                <XCircle size={20} style={{ color: '#E53E3E' }} />
                <div className="stat-num">{declinedCount}</div>
                <div className="stat-label">Declined Invites</div>
              </div>
            </div>

            {/* RSVPs Table */}
            <div className="admin-table-wrapper">
              {rsvps.length === 0 ? (
                <p className="empty-msg">No RSVPs recorded yet. Test by submitting an RSVP!</p>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Guest Name</th>
                      <th>Status</th>
                      <th>Count</th>
                      <th>Dietary Notes</th>
                      <th>Song Request</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rsvps.map((rsvp) => (
                      <tr key={rsvp.id}>
                        <td className="fw-600">{rsvp.fullName}</td>
                        <td>
                          <span className={`status-pill ${rsvp.attending === 'yes' ? 'attending' : 'declined'}`}>
                            {rsvp.attending === 'yes' ? 'Attending' : 'Declined'}
                          </span>
                        </td>
                        <td>{rsvp.guestCount}</td>
                        <td className="text-muted">{rsvp.dietary || '-'}</td>
                        <td className="text-muted">{rsvp.songRequest || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .admin-modal {
          max-width: 720px;
        }

        .admin-lock-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .admin-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .admin-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .admin-form {
          max-width: 280px;
          margin: 0 auto;
        }

        .error-text {
          font-size: 0.8rem;
          color: #E53E3E;
          margin-top: 0.5rem;
        }

        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .admin-main-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .export-btn {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
        }

        .admin-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 14px;
          padding: 1.2rem;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 1px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .admin-table-wrapper {
          max-height: 320px;
          overflow-y: auto;
          border: 1px solid var(--border-gold);
          border-radius: 12px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }

        .admin-table th, .admin-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .admin-table th {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 600;
        }

        .status-pill {
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .status-pill.attending {
          background: rgba(72, 187, 120, 0.15);
          color: #276749;
        }

        .status-pill.declined {
          background: rgba(229, 62, 62, 0.15);
          color: #9B2C2C;
        }

        .fw-600 { font-weight: 600; }
        .empty-msg {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
