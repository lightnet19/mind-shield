'use client';

import { useState } from 'react';
import { MessageSquare, CheckCircle, Clock, Bell, ChevronDown, ChevronUp, User, Send } from 'lucide-react';
import styles from './umpan-balik.module.css';

// Data dummy umpan balik dari konselor (flat file / localStorage di produksi)
const DUMMY_FEEDBACKS = [
  {
    id: 1,
    from: 'Dr. Siti Aminah, M.Psi.',
    role: 'Konselor',
    date: '18 Mei 2026 · 09:15',
    subject: 'Tinjau Hasil Screening ISAS',
    message:
      'Halo! Saya sudah meninjau hasil screening ISAS kamu. Secara umum, hasilnya menunjukkan beberapa area yang perlu kita eksplorasi bersama dalam sesi konseling. Tidak perlu khawatir — ini adalah langkah awal yang baik. Saya sudah menjadwalkan sesi berikutnya untuk membahas ini lebih lanjut. Pastikan kamu sudah membaca panduan CBT di halaman materi ya.',
    type: 'tinjauan_screening',
    status: 'unread',
    attachments: [],
  },
  {
    id: 2,
    from: 'Dr. Siti Aminah, M.Psi.',
    role: 'Konselor',
    date: '16 Mei 2026 · 14:30',
    subject: 'Umpan Balik Sesi Konseling Pertama',
    message:
      'Terima kasih sudah bersemangat dalam sesi pertama kita! Kamu sudah menunjukkan keberanian yang luar biasa dengan mau berbicara tentang perasaanmu. Untuk persiapan sesi berikutnya, coba lakukan latihan pernapasan 4-7-8 setiap pagi. Jika ada hal yang ingin didiskusikan sebelum sesi, kamu bisa menghubungi saya melalui fitur pesan.',
    type: 'umpan_balik_sesi',
    status: 'read',
    attachments: ['Latihan Pernapasan 4-7-8.pdf'],
  },
  {
    id: 3,
    from: 'Sistem Mind Shield',
    role: 'Notifikasi',
    date: '15 Mei 2026 · 08:00',
    subject: 'Pengingat: Jadwal Sesi Konseling',
    message:
      'Kamu memiliki sesi konseling terjadwal pada Senin, 20 Mei 2026 pukul 10:00. Pastikan kamu sudah berada di tempat yang tenang dan koneksi internet stabil. Jangan lupa untuk mengisi penugasan terapeutik sebelum sesi dimulai.',
    type: 'notifikasi',
    status: 'read',
    attachments: [],
  },
];

const typeConfig = {
  tinjauan_screening: { label: 'Tinjauan Screening', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  umpan_balik_sesi: { label: 'Umpan Balik Sesi', color: '#0e9f6e', bg: 'rgba(14,159,110,0.1)' },
  notifikasi: { label: 'Notifikasi', color: '#1a56db', bg: 'rgba(26,86,219,0.1)' },
};

export default function UmpanBalikPage() {
  const [feedbacks, setFeedbacks] = useState(DUMMY_FEEDBACKS);
  const [expandedId, setExpandedId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [replySent, setReplySent] = useState({});

  const unreadCount = feedbacks.filter(f => f.status === 'unread').length;

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
    // Mark as read
    setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, status: 'read' } : f));
  };

  const handleReply = (id) => {
    if (!replyText.trim()) return;
    setReplySent(prev => ({ ...prev, [id]: replyText }));
    setReplyText('');
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <div className={styles.titleRow}>
          <h1>Umpan Balik Konselor</h1>
          {unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount} baru</span>
          )}
        </div>
        <p>Pesan, tinjauan, dan notifikasi dari konselor Anda</p>
      </div>

      {unreadCount > 0 && (
        <div className={styles.alertBanner}>
          <Bell size={18} />
          <span>Anda memiliki <strong>{unreadCount} pesan baru</strong> dari konselor. Klik untuk membaca.</span>
        </div>
      )}

      <div className={styles.feedbackList}>
        {feedbacks.map(fb => {
          const isExpanded = expandedId === fb.id;
          const tc = typeConfig[fb.type] || typeConfig.notifikasi;

          return (
            <div
              key={fb.id}
              className={`${styles.feedbackCard} ${fb.status === 'unread' ? styles.unread : ''}`}
            >
              {/* Card Header */}
              <div className={styles.cardHeader} onClick={() => toggleExpand(fb.id)}>
                <div className={styles.avatarWrap}>
                  <div className={styles.avatar}>
                    {fb.role === 'Notifikasi'
                      ? <Bell size={18} color="#1a56db" />
                      : <User size={18} color="#8b5cf6" />
                    }
                  </div>
                </div>

                <div className={styles.headerInfo}>
                  <div className={styles.headerTop}>
                    <span className={styles.senderName}>{fb.from}</span>
                    <span className={styles.dateText}>{fb.date}</span>
                  </div>
                  <div className={styles.subjectRow}>
                    <span className={styles.subject}>{fb.subject}</span>
                    <span className={styles.typeBadge} style={{ background: tc.bg, color: tc.color }}>
                      {tc.label}
                    </span>
                  </div>
                </div>

                <div className={styles.expandIcon}>
                  {fb.status === 'unread' && <div className={styles.unreadDot} />}
                  {isExpanded ? <ChevronUp size={18} color="#9ca3af" /> : <ChevronDown size={18} color="#9ca3af" />}
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className={styles.cardBody}>
                  <div className={styles.messageText}>{fb.message}</div>

                  {fb.attachments.length > 0 && (
                    <div className={styles.attachments}>
                      <span className={styles.attachLabel}>Lampiran:</span>
                      {fb.attachments.map((att, i) => (
                        <button key={i} className={styles.attachBtn}>{att}</button>
                      ))}
                    </div>
                  )}

                  {fb.role !== 'Notifikasi' && (
                    <div className={styles.replySection}>
                      {replySent[fb.id] ? (
                        <div className={styles.replyConfirm}>
                          <CheckCircle size={16} color="#0e9f6e" />
                          <span>Balasan terkirim: "{replySent[fb.id]}"</span>
                        </div>
                      ) : (
                        <div className={styles.replyBox}>
                          <textarea
                            rows={2}
                            placeholder="Tulis balasan untuk konselor..."
                            value={replyText}
                            onChange={e => setReplyText(e.target.value)}
                            className={styles.replyInput}
                          />
                          <button
                            className={styles.replyBtn}
                            onClick={() => handleReply(fb.id)}
                            disabled={!replyText.trim()}
                          >
                            <Send size={16} /> Kirim Balasan
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.emptyNote}>
        <Clock size={16} />
        <span>Pesan baru dari konselor akan muncul di halaman ini secara otomatis.</span>
      </div>
    </div>
  );
}
