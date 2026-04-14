'use client';

import { useState } from 'react';
import s from '../../shared.module.css';

export default function Jadwal() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Jadwal Konseling Online</h1>
      <p className={s.pageDesc}>Ajukan jadwal sesi konseling CBT bersama konselor Anda.</p>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
        <div className={`card ${s.formCard}`}>
          <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>Ajukan Jadwal Baru</h3>

          {submitted && (
            <div className={`${s.alertBox} ${s.alertSuccess}`}>
              ✅ Pengajuan jadwal berhasil dikirim! Menunggu konfirmasi konselor.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={s.formGroup}>
              <label>Pilih Tanggal</label>
              <input type="date" className={s.input} value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className={s.formGroup}>
              <label>Pilih Waktu</label>
              <select className={s.select} value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">-- Pilih Slot Waktu --</option>
                <option value="09:00">09:00 - 10:00 WIB</option>
                <option value="10:00">10:00 - 11:00 WIB</option>
                <option value="13:00">13:00 - 14:00 WIB</option>
                <option value="14:00">14:00 - 15:00 WIB</option>
                <option value="15:00">15:00 - 16:00 WIB</option>
              </select>
            </div>
            <div className={s.formGroup}>
              <label>Catatan untuk Konselor (Opsional)</label>
              <textarea className={s.textarea} placeholder="Tulis hal yang ingin dibahas..." style={{minHeight: 80}} />
            </div>
            <button type="submit" className="btn-primary" disabled={submitted}
              style={{padding: '12px 32px', opacity: submitted ? 0.5 : 1}}>
              {submitted ? 'Terkirim ✓' : 'Ajukan Jadwal'}
            </button>
          </form>
        </div>

        <div>
          <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>Riwayat Jadwal</h3>
          <div className={s.scheduleGrid} style={{gridTemplateColumns: '1fr'}}>
            <div className={s.scheduleCard}>
              <div className={s.scheduleTime}>16 Apr 2026 • 14:00 WIB</div>
              <h4>Sesi 2: Restrukturisasi Kognitif</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0'}}>Konselor: Budi H., S.Psi.</p>
              <span className={`${s.badge} ${s.badgeGreen}`}>Dikonfirmasi</span>
            </div>
            <div className={s.scheduleCard}>
              <div className={s.scheduleTime}>10 Apr 2026 • 10:00 WIB</div>
              <h4>Sesi 1: Screening & Pengenalan CBT</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0'}}>Konselor: Budi H., S.Psi.</p>
              <span className={`${s.badge} ${s.badgeGray}`}>Selesai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}