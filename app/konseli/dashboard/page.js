'use client';
import styles from './dashboard.module.css';
import { ShieldCheck, Activity, CalendarClock, Video, FileText, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const statusCards = [
  { label: 'Status Layanan', value: 'Aktif', icon: ShieldCheck, color: '#0e9f6e', bg: 'rgba(14,159,110,0.1)', href: null },
  { label: 'Sesi Berikutnya', value: 'Senin, 13 Mei · 10:00', icon: CalendarClock, color: '#1a56db', bg: 'rgba(26,86,219,0.1)', href: '/konseli/jadwal' },
  { label: 'Screening', value: 'Sudah Diisi', icon: Activity, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', href: '/konseli/screening' },
  { label: 'Sesi Online', value: 'Tersedia', icon: Video, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', href: '/konseli/sesi' },
];

const menuItems = [
  { href: '/konseli/panduan', label: 'Panduan & Informed Consent', icon: Info, desc: 'Baca panduan dan lengkapi persetujuan layanan', done: true },
  { href: '/konseli/screening', label: 'Screening CBT', icon: FileText, desc: 'Isi kuesioner ISAS dan Core Beliefs', done: true },
  { href: '/konseli/jadwal', label: 'Jadwal Konseling', icon: CalendarClock, desc: 'Lihat dan ajukan jadwal sesi bersama konselor', done: false },
  { href: '/konseli/sesi', label: 'Sesi Online', icon: Video, desc: 'Masuk ke ruang konseling video', done: false },
];

export default function KonseliDashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Konseli</h1>
          <p className={styles.subtitle}>Selamat datang! Berikut perkembangan layanan Anda.</p>
        </div>
        <div className={styles.safetyBtn}>
          <AlertTriangle size={16}/> Panduan Darurat
        </div>
      </div>

      {/* Status Cards */}
      <div className={styles.statsGrid}>
        {statusCards.map((s, i) => (
          <div key={i} className={styles.statCard} style={{ borderTop: `3px solid ${s.color}` }}>
            <div className={styles.statIcon} style={{ background: s.bg, color: s.color }}>
              <s.icon size={20}/>
            </div>
            <div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statValue}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Menu */}
      <div className={styles.sectionTitle}>Alur Layanan</div>
      <div className={styles.menuList}>
        {menuItems.map((m, i) => (
          <Link key={i} href={m.href} className={styles.menuCard}>
            <div className={styles.stepNum} style={{ background: m.done ? '#0e9f6e' : '#e5e7eb', color: m.done ? '#fff' : '#9ca3af' }}>
              {m.done ? <CheckCircle size={18}/> : i + 1}
            </div>
            <div className={styles.menuIcon} ><m.icon size={20}/></div>
            <div className={styles.menuInfo}>
              <div className={styles.menuLabel}>{m.label}</div>
              <div className={styles.menuDesc}>{m.desc}</div>
            </div>
            <span className={`${styles.menuStatus} ${m.done ? styles.menuDone : styles.menuPending}`}>
              {m.done ? 'Selesai' : 'Belum'}
            </span>
          </Link>
        ))}
      </div>

      {/* Info Box */}
      <div className={styles.infoBox}>
        <ShieldCheck size={20} className={styles.infoIcon}/>
        <div>
          <div className={styles.infoTitle}>Data Anda Terlindungi</div>
          <div className={styles.infoText}>Semua informasi yang Anda berikan bersifat rahasia dan hanya dapat diakses oleh konselor yang ditugaskan.</div>
        </div>
      </div>
    </div>
  );
}
