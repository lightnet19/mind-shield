'use client';

import { useState } from 'react';
import s from '../../shared.module.css';

const pastEntries = [
  { date: '12 Apr 2026', mood: '😐 Biasa', content: 'Hari ini cukup tenang. Saya mencoba teknik grounding saat mulai merasa cemas di sore hari. Berhasil menenangkan diri selama 15 menit.', feedback: 'Bagus Sarah! Teknik grounding semakin efektif. Coba tambahkan deep breathing 4-7-8 sebelum tidur.' },
  { date: '10 Apr 2026', mood: '😟 Cemas', content: 'Saya merasa sangat overwhelmed dengan tugas kuliah. Pikiran negatif muncul lagi: "Saya tidak akan pernah berhasil." Saya mencoba menuliskannya di sini sebagai latihan.', feedback: 'Terima kasih sudah jujur. Pikiran "tidak akan pernah berhasil" adalah contoh distorsi kognitif all-or-nothing. Kita akan bahas di sesi berikutnya.' }
];

export default function Jurnal() {
  const [submitted, setSubmitted] = useState(false);
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Jurnal Perkembangan & Tugas Rumah</h1>
      <p className={s.pageDesc}>Catat perasaan dan pengalaman Anda setiap hari sebagai bagian dari terapi CBT.</p>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
        <div>
          <div className="card">
            <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>📝 Tulis Jurnal Hari Ini</h3>

            {submitted && (
              <div className={`${s.alertBox} ${s.alertSuccess}`}>
                ✅ Jurnal berhasil disimpan! Konselor Anda akan memberi tanggapan.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={s.formGroup}>
                <label>Bagaimana suasana hati Anda hari ini?</label>
                <select className={s.select} value={mood} onChange={(e) => setMood(e.target.value)} required>
                  <option value="">-- Pilih --</option>
                  <option value="happy">😊 Bahagia</option>
                  <option value="neutral">😐 Biasa</option>
                  <option value="sad">😢 Sedih</option>
                  <option value="anxious">😟 Cemas</option>
                  <option value="angry">😠 Marah</option>
                  <option value="calm">🧘 Tenang</option>
                </select>
              </div>

              <div className={s.formGroup}>
                <label>Ceritakan hari Anda:</label>
                <textarea className={s.textarea} placeholder="Apa yang terjadi hari ini? Bagaimana perasaan Anda? Apakah ada pikiran negatif yang muncul?" required />
              </div>

              <div className={s.formGroup}>
                <label>Apakah Anda mengerjakan tugas CBT dari konselor? (Opsional)</label>
                <textarea className={s.textarea} placeholder="Contoh: Saya mencoba teknik grounding, deep breathing, atau menuliskan automatic thoughts..." style={{minHeight: 80}} />
              </div>

              <button type="submit" className="btn-primary" disabled={submitted}
                style={{padding: '12px 32px', opacity: submitted ? 0.5 : 1}}>
                {submitted ? 'Tersimpan ✓' : 'Simpan Jurnal'}
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>📚 Riwayat Jurnal</h3>
          {pastEntries.map((entry, i) => (
            <div key={i} className={s.journalEntry}>
              <div className={s.journalDate}>{entry.date} — {entry.mood}</div>
              <div className={s.journalContent}>{entry.content}</div>
              {entry.feedback && (
                <div className={`${s.alertBox} ${s.alertSuccess}`} style={{marginTop: 12, marginBottom: 0}}>
                  <strong>💬 Tanggapan Konselor:</strong><br />{entry.feedback}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}