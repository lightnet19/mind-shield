'use client';
import styles from './screening.module.css';
import { ClipboardList, Brain, ChevronRight, CheckCircle, Lock } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    id: 1, title: 'Informed Consent', icon: ClipboardList, color: '#1a56db',
    desc: 'Baca dan setujui syarat layanan sebelum memulai screening.',
    status: 'selesai', href: '/konseli/panduan',
  },
  {
    id: 2, title: 'ISAS Seksi I — Perilaku Self-Injury', icon: ClipboardList, color: '#f59e0b',
    desc: '20 item tentang frekuensi dan bentuk perilaku self-injury yang pernah dilakukan.',
    status: 'aktif', href: '/konseli/screening/self-injury',
  },
  {
    id: 3, title: 'ISAS Seksi II — Fungsi Perilaku', icon: Brain, color: '#8b5cf6',
    desc: '39 pernyataan tentang fungsi-fungsi yang mendasari perilaku self-injury (skala 0–2).',
    status: 'terkunci', href: null,
  },
  {
    id: 4, title: 'Core Beliefs', icon: Brain, color: '#0e9f6e',
    desc: '24 pernyataan tentang keyakinan inti diri dan orang lain (skala 0–4).',
    status: 'terkunci', href: null,
  },
];

const statusStyle = {
  selesai: { bg: 'rgba(14,159,110,.1)', color: '#0e9f6e', label: 'Selesai' },
  aktif: { bg: 'rgba(26,86,219,.1)', color: '#1a56db', label: 'Mulai' },
  terkunci: { bg: '#f3f4f6', color: '#9ca3af', label: 'Terkunci' },
};

export default function ScreeningOverview() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Screening CBT</h1>
        <p className={styles.subtitle}>Selesaikan semua tahap screening secara berurutan. Hasil akan ditinjau oleh konselor Anda.</p>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '25%' }}/>
        <span className={styles.progressText}>1 dari 4 tahap selesai</span>
      </div>

      <div className={styles.stepList}>
        {steps.map((s, i) => {
          const st = statusStyle[s.status];
          const isLocked = s.status === 'terkunci';
          const Wrapper = s.href ? Link : 'div';
          return (
            <Wrapper key={s.id} href={s.href || '#'} className={`${styles.stepCard} ${isLocked ? styles.stepLocked : ''}`}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum} style={{ background: isLocked ? '#f3f4f6' : `rgba(${s.color === '#1a56db' ? '26,86,219' : s.color === '#f59e0b' ? '245,158,11' : s.color === '#8b5cf6' ? '139,92,246' : '14,159,110'},.12)`, color: isLocked ? '#d1d5db' : s.color }}>
                  {s.status === 'selesai' ? <CheckCircle size={20}/> : isLocked ? <Lock size={18}/> : i + 1}
                </div>
              </div>
              <div className={styles.stepIcon} style={{ color: isLocked ? '#d1d5db' : s.color }}>
                <s.icon size={22}/>
              </div>
              <div className={styles.stepInfo}>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
              </div>
              <span className={styles.stepBadge} style={{ background: st.bg, color: st.color }}>{st.label}</span>
              {!isLocked && <ChevronRight size={18} className={styles.chevron}/>}
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
