'use client';

import s from '../../shared.module.css';
import { Shield, Lock, Eye } from 'lucide-react';

const logs = [
  { time: '14 Apr 2026, 09:15', event: 'Login Admin berhasil', user: 'admin@mindshield.id', level: 'Info' },
  { time: '14 Apr 2026, 08:30', event: 'Sesi konseling #45 dienkripsi end-to-end', user: 'System', level: 'Info' },
  { time: '14 Apr 2026, 01:00', event: 'Backup harian otomatis selesai', user: 'System', level: 'Success' },
  { time: '13 Apr 2026, 22:10', event: 'Percobaan login gagal (3x) dari IP 103.xx.xx.xx', user: 'unknown@mail.com', level: 'Warning' },
  { time: '13 Apr 2026, 18:45', event: 'Data screening konseli #1029 diakses oleh Konselor Budi H.', user: 'budi@email.com', level: 'Info' },
  { time: '13 Apr 2026, 14:00', event: 'Sesi video konseling #44 direkam & dienkripsi', user: 'System', level: 'Info' },
  { time: '12 Apr 2026, 01:00', event: 'Backup harian otomatis selesai', user: 'System', level: 'Success' },
];

function levelBadge(level) {
  if (level === 'Warning') return `${s.badge} ${s.badgeRed}`;
  if (level === 'Success') return `${s.badge} ${s.badgeGreen}`;
  return `${s.badge} ${s.badgeBlue}`;
}

export default function Keamanan() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Privasi & Keamanan Sistem</h1>
      <p className={s.pageDesc}>Monitor log akses data, enkripsi, dan keamanan platform Mind Shield.</p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24}}>
        <div className="card" style={{textAlign: 'center'}}>
          <Shield size={32} color="var(--success)" style={{marginBottom: 12}} />
          <h4 style={{marginBottom: 4}}>Enkripsi Data</h4>
          <p style={{color: 'var(--success)', fontWeight: 600}}>AES-256 Aktif ✓</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <Lock size={32} color="var(--primary)" style={{marginBottom: 12}} />
          <h4 style={{marginBottom: 4}}>Row Level Security</h4>
          <p style={{color: 'var(--primary)', fontWeight: 600}}>Supabase RLS Aktif ✓</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <Eye size={32} color="var(--secondary)" style={{marginBottom: 12}} />
          <h4 style={{marginBottom: 4}}>Akses Terakhir</h4>
          <p style={{color: 'var(--secondary)', fontWeight: 600}}>0 Breach Terdeteksi</p>
        </div>
      </div>

      <div className="card">
        <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>📜 Log Aktivitas & Keamanan</h3>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Waktu</th>
              <th>Event</th>
              <th>User/Source</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i}>
                <td style={{whiteSpace: 'nowrap', fontSize: '0.9rem'}}>{log.time}</td>
                <td>{log.event}</td>
                <td style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{log.user}</td>
                <td><span className={levelBadge(log.level)}>{log.level}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}