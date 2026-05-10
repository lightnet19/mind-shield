'use client';
import styles from './dashboard.module.css';
import { Users, Shield, Activity, Database, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Pengguna', value: '128', icon: Users, color: '#1a56db', bg: 'rgba(26,86,219,0.1)' },
  { label: 'Konselor Aktif', value: '12', icon: Shield, color: '#0e9f6e', bg: 'rgba(14,159,110,0.1)' },
  { label: 'Sesi Bulan Ini', value: '87', icon: Activity, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { label: 'Risiko Tinggi', value: '5', icon: AlertTriangle, color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
];

const recentUsers = [
  { name: 'Andi Pratama', role: 'Konseli', status: 'Menunggu Verifikasi', time: '5 mnt lalu' },
  { name: 'Dr. Sari W.', role: 'Konselor', status: 'Aktif', time: '1 jam lalu' },
  { name: 'Budi Santoso', role: 'Konseli', status: 'Aktif', time: '2 jam lalu' },
  { name: 'Rina Lestari', role: 'Konseli', status: 'Menunggu Verifikasi', time: '3 jam lalu' },
];

const quickLinks = [
  { href: '/admin/users', label: 'Kelola Akun & Verifikasi', icon: Users, desc: 'Verifikasi & kelola pengguna baru' },
  { href: '/admin/monitoring', label: 'Monitoring Sistem', icon: Activity, desc: 'Pantau aktivitas & statistik' },
  { href: '/admin/panduan', label: 'Kelola Panduan', icon: CheckCircle, desc: 'Edit konten panduan aplikasi' },
  { href: '/admin/keamanan', label: 'Privasi & Keamanan', icon: Shield, desc: 'Pengaturan keamanan sistem' },
];

export default function AdminDashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Admin</h1>
          <p className={styles.subtitle}>Selamat datang! Pantau dan kelola seluruh sistem Mind Shield.</p>
        </div>
        <div className={styles.badge}><Shield size={16} /> Super Admin</div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statIcon} style={{ backgroundColor: s.bg, color: s.color }}>
              <s.icon size={24} />
            </div>
            <div>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* Recent Users */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}><Users size={18} /> Aktivitas Pengguna Terbaru</h2>
            <Link href="/admin/users" className={styles.cardLink}>Lihat semua</Link>
          </div>
          <div className={styles.userList}>
            {recentUsers.map((u, i) => (
              <div key={i} className={styles.userItem}>
                <div className={styles.userAvatar}>{u.name[0]}</div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{u.name}</span>
                  <span className={styles.userRole}>{u.role}</span>
                </div>
                <div className={styles.userRight}>
                  <span className={`${styles.statusBadge} ${u.status === 'Aktif' ? styles.statusAktif : styles.statusPending}`}>
                    {u.status}
                  </span>
                  <span className={styles.userTime}>{u.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}><TrendingUp size={18} /> Akses Cepat</h2>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map((q, i) => (
              <Link key={i} href={q.href} className={styles.quickCard}>
                <q.icon size={22} className={styles.quickIcon} />
                <div>
                  <div className={styles.quickLabel}>{q.label}</div>
                  <div className={styles.quickDesc}>{q.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}