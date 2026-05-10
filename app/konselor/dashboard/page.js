'use client';
import Link from 'next/link';
import styles from './dashboard.module.css';
import { AlertTriangle, UserCheck, ClipboardList, TrendingUp, Calendar, Video, FileBarChart, Users, Clock } from 'lucide-react';

const stats = [
  { label: 'Konseli Aktif', value: '14', icon: Users, color: '#1a56db', bg: 'rgba(26,86,219,0.1)' },
  { label: 'Screening Baru', value: '3', icon: ClipboardList, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { label: 'Sesi Hari Ini', value: '5', icon: Video, color: '#0e9f6e', bg: 'rgba(14,159,110,0.1)' },
  { label: 'Risiko Tinggi', value: '2', icon: AlertTriangle, color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
];

const upcomingSessions = [
  { name: 'Andi Pratama', time: '10:00', type: 'Sesi Ke-3', status: 'terjadwal' },
  { name: 'Budi Santoso', time: '13:00', type: 'Sesi Ke-1', status: 'terjadwal' },
  { name: 'Rina Lestari', time: '15:30', type: 'Sesi Ke-5', status: 'menunggu' },
];

const newScreenings = [
  { name: 'Dewi Ayu', score: 'Risiko Tinggi', date: '10 Mei 2026', urgent: true },
  { name: 'Fajar M.', score: 'Risiko Sedang', date: '10 Mei 2026', urgent: false },
  { name: 'Siti N.', score: 'Risiko Rendah', date: '9 Mei 2026', urgent: false },
];

const quickLinks = [
  { href: '/konselor/tinjau-screening', label: 'Tinjau Screening', icon: FileBarChart },
  { href: '/konselor/pasien', label: 'Daftar Konseli', icon: Users },
  { href: '/konselor/jadwal', label: 'Jadwal Sesi', icon: Calendar },
  { href: '/konselor/sesi', label: 'Ruang Konseling', icon: Video },
];

export default function KonselorDashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Konselor</h1>
          <p className={styles.subtitle}>Selamat datang! Berikut ringkasan layanan hari ini.</p>
        </div>
        <div className={styles.badge}><UserCheck size={16}/> Konselor Aktif</div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: s.bg, color: s.color }}>
              <s.icon size={22}/>
            </div>
            <div>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* Sesi Hari Ini */}
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}><Clock size={17}/> Sesi Hari Ini</h2>
            <Link href="/konselor/jadwal" className={styles.cardLink}>Lihat semua</Link>
          </div>
          {upcomingSessions.map((s, i) => (
            <div key={i} className={styles.sessionRow}>
              <div className={styles.avatar}>{s.name[0]}</div>
              <div className={styles.sessionInfo}>
                <span className={styles.sessionName}>{s.name}</span>
                <span className={styles.sessionType}>{s.type}</span>
              </div>
              <div className={styles.sessionRight}>
                <span className={styles.sessionTime}>{s.time}</span>
                <span className={`${styles.sessBadge} ${s.status === 'terjadwal' ? styles.sessGreen : styles.sessYellow}`}>
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Screening Baru */}
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}><ClipboardList size={17}/> Screening Baru</h2>
            <Link href="/konselor/tinjau-screening" className={styles.cardLink}>Tinjau semua</Link>
          </div>
          {newScreenings.map((s, i) => (
            <div key={i} className={`${styles.screeningRow} ${s.urgent ? styles.screeningUrgent : ''}`}>
              <div className={styles.avatar}>{s.name[0]}</div>
              <div className={styles.screeningInfo}>
                <span className={styles.screeningName}>{s.name}</span>
                <span className={styles.screeningDate}>{s.date}</span>
              </div>
              <span className={`${styles.riskBadge} ${s.urgent ? styles.riskHigh : styles.riskMed}`}>
                {s.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className={styles.quickGrid}>
        {quickLinks.map((q, i) => (
          <Link key={i} href={q.href} className={styles.quickCard}>
            <q.icon size={22} className={styles.quickIcon}/>
            <span className={styles.quickLabel}>{q.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
