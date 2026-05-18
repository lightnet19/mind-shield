'use client';

import { useState } from 'react';
import { Send, CheckCircle, User, Search } from 'lucide-react';
import styles from './kirim-umpan-balik.module.css';

// Dummy data konseli yang ditangani oleh konselor ini
const KONSELI_LIST = [
  { id: 'u1', name: 'Ahmad Fauzi', status: 'Aktif', lastSession: '15 Mei 2026', riskLevel: 'Rendah' },
  { id: 'u2', name: 'Siti Nurhaliza', status: 'Aktif', lastSession: '16 Mei 2026', riskLevel: 'Sedang' },
  { id: 'u3', name: 'Budi Santoso', status: 'Aktif', lastSession: '18 Mei 2026', riskLevel: 'Tinggi' },
];

const FEEDBACK_TYPES = [
  { value: 'tinjauan_screening', label: 'Tinjauan Hasil Screening' },
  { value: 'umpan_balik_sesi', label: 'Umpan Balik Pasca-Sesi' },
  { value: 'notifikasi', label: 'Pengingat / Notifikasi' },
  { value: 'safety_plan', label: 'Rencana Keamanan (Safety Plan)' },
];

const riskColor = {
  'Rendah': '#0e9f6e',
  'Sedang': '#f59e0b',
  'Tinggi': '#dc2626',
};

export default function KirimUmpanBalikPage() {
  const [selectedKonseli, setSelectedKonseli] = useState(null);
  const [feedbackType, setFeedbackType] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sentHistory, setSentHistory] = useState([]);

  const filteredKonseli = KONSELI_LIST.filter(k =>
    k.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();
    if (!selectedKonseli || !feedbackType || !subject || !message.trim()) return;
    setLoading(true);

    setTimeout(() => {
      const newFeedback = {
        id: Date.now(),
        to: selectedKonseli.name,
        type: feedbackType,
        subject,
        message,
        sentAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      };
      // Simpan ke localStorage (flat file prototype)
      try {
        const existing = JSON.parse(localStorage.getItem('sent_feedbacks') || '[]');
        localStorage.setItem('sent_feedbacks', JSON.stringify([newFeedback, ...existing]));
      } catch (_) {}
      setSentHistory(prev => [newFeedback, ...prev]);
      setSent(true);
      setLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSent(false);
    setSelectedKonseli(null);
    setFeedbackType('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Kirim Umpan Balik</h1>
        <p>Kirim tinjauan, catatan, atau pengingat langsung kepada konseli</p>
      </div>

      {sent ? (
        <div className={styles.successCard}>
          <CheckCircle size={48} color="#0e9f6e" />
          <h2>Umpan Balik Terkirim!</h2>
          <p>
            Pesan berhasil dikirim kepada <strong>{selectedKonseli?.name}</strong>.
            Konseli akan melihat pesan ini di halaman Umpan Balik mereka.
          </p>
          <div className={styles.successActions}>
            <button className="btn-primary" onClick={handleReset}>
              Kirim Umpan Balik Lain
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.layout}>
          {/* Kolom Kiri: Pilih Konseli */}
          <div className={styles.konseliPanel}>
            <h3 className={styles.panelTitle}>Pilih Konseli</h3>
            <div className={styles.searchBox}>
              <Search size={16} color="#9ca3af" />
              <input
                type="text"
                placeholder="Cari nama konseli..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.konseliList}>
              {filteredKonseli.map(k => (
                <button
                  key={k.id}
                  className={`${styles.konseliCard} ${selectedKonseli?.id === k.id ? styles.selected : ''}`}
                  onClick={() => setSelectedKonseli(k)}
                >
                  <div className={styles.konseliAvatar}>
                    <User size={18} />
                  </div>
                  <div className={styles.konseliInfo}>
                    <div className={styles.konseliName}>{k.name}</div>
                    <div className={styles.konseliMeta}>
                      Sesi terakhir: {k.lastSession}
                    </div>
                  </div>
                  <span
                    className={styles.riskBadge}
                    style={{ background: `${riskColor[k.riskLevel]}18`, color: riskColor[k.riskLevel] }}
                  >
                    {k.riskLevel}
                  </span>
                </button>
              ))}
              {filteredKonseli.length === 0 && (
                <div className={styles.emptySearch}>Konseli tidak ditemukan</div>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Form Pesan */}
          <div className={styles.formPanel}>
            <h3 className={styles.panelTitle}>
              Tulis Pesan
              {selectedKonseli && <span className={styles.targetName}> → {selectedKonseli.name}</span>}
            </h3>

            {!selectedKonseli ? (
              <div className={styles.selectPrompt}>
                <User size={40} color="#d1d5db" />
                <p>Pilih konseli dari daftar di sebelah kiri untuk mulai menulis umpan balik.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Jenis Umpan Balik</label>
                  <select
                    value={feedbackType}
                    onChange={e => setFeedbackType(e.target.value)}
                    required
                  >
                    <option value="">-- Pilih jenis --</option>
                    {FEEDBACK_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Subjek</label>
                  <input
                    type="text"
                    placeholder="Contoh: Tinjauan Hasil Screening ISAS"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Pesan</label>
                  <textarea
                    rows={7}
                    placeholder="Tulis pesan, catatan klinis, atau pengingat untuk konseli..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.sendBtn}
                  disabled={loading || !feedbackType || !subject || !message.trim()}
                >
                  {loading ? (
                    <span>Mengirim...</span>
                  ) : (
                    <><Send size={18} /> Kirim Umpan Balik</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Riwayat pengiriman */}
      {sentHistory.length > 0 && !sent && (
        <div className={styles.historySection}>
          <h3 className={styles.panelTitle}>Riwayat Terkirim (Sesi Ini)</h3>
          <div className={styles.historyList}>
            {sentHistory.map(h => (
              <div key={h.id} className={styles.historyItem}>
                <CheckCircle size={16} color="#0e9f6e" />
                <span><strong>{h.to}</strong> — {h.subject}</span>
                <span className={styles.historyTime}>{h.sentAt}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
