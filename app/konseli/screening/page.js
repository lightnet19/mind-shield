'use client';
import { useState } from 'react';
import styles from './screening.module.css';
import { ClipboardList, Brain, ChevronRight, CheckCircle, Lock, Shield, AlertTriangle, X } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    id: 1, title: 'ISAS Seksi I & II — Perilaku Self-Injury', icon: ClipboardList, color: '#f59e0b',
    desc: '20 item frekuensi perilaku self-injury + 39 pernyataan fungsi (skala 0–2).',
    status: 'aktif', href: '/konseli/screening/isas',
  },
  {
    id: 2, title: 'Core Beliefs', icon: Brain, color: '#8b5cf6',
    desc: '24 pernyataan tentang keyakinan inti diri dan orang lain (skala 0–4).',
    status: 'terkunci', href: null,
  },
  {
    id: 3, title: 'Pola Pikir', icon: Brain, color: '#0e9f6e',
    desc: 'Identifikasi distorsi kognitif dan pola pikir negatif.',
    status: 'terkunci', href: null,
  },
];

const statusStyle = {
  selesai: { bg: 'rgba(14,159,110,.1)', color: '#0e9f6e', label: 'Selesai' },
  aktif: { bg: 'rgba(245,158,11,.1)', color: '#d97706', label: 'Mulai' },
  terkunci: { bg: '#f3f4f6', color: '#9ca3af', label: 'Terkunci' },
};

// Informed Consent Modal
function ConsentModal({ onAccept, onDecline }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <div className={styles.modalHeader}>
          <Shield size={28} color="#1a56db" />
          <h2>Persetujuan Layanan & Informed Consent</h2>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalIntro}>
            Sebelum memulai proses screening, mohon baca dan pahami pernyataan berikut dengan seksama.
          </p>

          <div className={styles.consentSection}>
            <h3>1. Tujuan Layanan</h3>
            <p>Screening ini dirancang untuk membantu konselor memahami kondisi psikologis Anda secara lebih mendalam. Data yang Anda berikan akan digunakan semata-mata untuk keperluan intervensi terapeutik berbasis CBT.</p>
          </div>

          <div className={styles.consentSection}>
            <h3>2. Kerahasiaan Data</h3>
            <p>Seluruh informasi yang Anda berikan bersifat <strong>rahasia</strong> dan hanya dapat diakses oleh konselor yang bertugas. Data tidak akan disebarkan kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi darurat keselamatan jiwa.</p>
          </div>

          <div className={styles.consentSection}>
            <h3>3. Hak Anda</h3>
            <p>Anda berhak untuk <strong>menghentikan</strong> proses screening kapan saja. Anda berhak bertanya kepada konselor mengenai hasil dan tindak lanjut layanan.</p>
          </div>

          <div className={styles.consentSection}>
            <h3>4. Kondisi Darurat</h3>
            <div className={styles.warningBox}>
              <AlertTriangle size={18} color="#92400e" />
              <p>Jika hasil screening menunjukkan risiko tinggi, konselor akan segera menghubungi Anda. Dalam kondisi krisis, <strong>hubungi orang dewasa terdekat atau layanan darurat</strong>.</p>
            </div>
          </div>

          <div className={styles.consentSection}>
            <h3>5. Partisipasi Sukarela</h3>
            <p>Keikutsertaan Anda dalam screening ini bersifat <strong>sukarela</strong>. Tidak ada paksaan dalam bentuk apapun.</p>
          </div>

          <label className={styles.consentCheck}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>
              Saya telah membaca, memahami, dan <strong>menyetujui</strong> seluruh pernyataan di atas. Saya bersedia mengikuti proses screening secara jujur dan sukarela.
            </span>
          </label>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.btnDecline} onClick={onDecline}>
            <X size={16} /> Tolak & Kembali
          </button>
          <button
            className={styles.btnAccept}
            disabled={!checked}
            onClick={onAccept}
          >
            <CheckCircle size={16} /> Saya Setuju, Mulai Screening
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ScreeningOverview() {
  const [consentStatus, setConsentStatus] = useState('pending'); // 'pending' | 'accepted' | 'declined'
  const [showModal, setShowModal] = useState(true);

  if (consentStatus === 'declined') {
    return (
      <div className={styles.page}>
        <div className={styles.declinedState}>
          <X size={48} color="#ef4444" />
          <h2>Anda Memilih Tidak Melanjutkan</h2>
          <p>Tidak apa-apa. Anda dapat kembali dan memulai screening kapan saja saat Anda siap.</p>
          <Link href="/konseli/dashboard" className={styles.btnBack}>
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {consentStatus === 'pending' && showModal && (
        <ConsentModal
          onAccept={() => { setConsentStatus('accepted'); setShowModal(false); }}
          onDecline={() => setConsentStatus('declined')}
        />
      )}

      <div className={styles.header}>
        <h1 className={styles.title}>Screening CBT</h1>
        <p className={styles.subtitle}>Selesaikan semua tahap screening secara berurutan. Hasil akan ditinjau oleh konselor Anda.</p>
      </div>

      {consentStatus === 'accepted' && (
        <div className={styles.consentBadge}>
          <CheckCircle size={16} color="#0e9f6e" />
          <span>Informed Consent telah disetujui</span>
        </div>
      )}

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '0%' }} />
        <span className={styles.progressText}>0 dari 3 tahap selesai</span>
      </div>

      <div className={styles.stepList}>
        {steps.map((s, i) => {
          const st = statusStyle[s.status];
          const isLocked = s.status === 'terkunci' || consentStatus !== 'accepted';
          const isLockedByConsent = consentStatus !== 'accepted';
          const href = isLocked ? null : s.href;
          const Wrapper = href ? Link : 'div';
          const colorMap = {
            '#f59e0b': '245,158,11',
            '#8b5cf6': '139,92,246',
            '#0e9f6e': '14,159,110',
          };
          return (
            <Wrapper key={s.id} href={href || '#'} className={`${styles.stepCard} ${isLocked ? styles.stepLocked : ''}`}>
              <div className={styles.stepLeft}>
                <div
                  className={styles.stepNum}
                  style={{
                    background: isLocked ? '#f3f4f6' : `rgba(${colorMap[s.color] || '26,86,219'},.12)`,
                    color: isLocked ? '#d1d5db' : s.color
                  }}
                >
                  {s.status === 'selesai' ? <CheckCircle size={20} /> : isLocked ? <Lock size={18} /> : i + 1}
                </div>
              </div>
              <div className={styles.stepIcon} style={{ color: isLocked ? '#d1d5db' : s.color }}>
                <s.icon size={22} />
              </div>
              <div className={styles.stepInfo}>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
                {isLockedByConsent && s.status !== 'selesai' && (
                  <div className={styles.consentNote}>⚠️ Setujui informed consent terlebih dahulu</div>
                )}
              </div>
              <span
                className={styles.stepBadge}
                style={{ background: isLockedByConsent ? '#f3f4f6' : st.bg, color: isLockedByConsent ? '#9ca3af' : st.color }}
              >
                {isLockedByConsent ? 'Terkunci' : st.label}
              </span>
              {!isLocked && <ChevronRight size={18} className={styles.chevron} />}
            </Wrapper>
          );
        })}
      </div>

      <div className={styles.note}>
        💡 <strong>Penting:</strong> Jawab setiap pertanyaan dengan jujur. Tidak ada jawaban benar atau salah. Informasi ini membantu konselor memahami kondisi Anda dengan lebih baik.
      </div>
    </div>
  );
}
