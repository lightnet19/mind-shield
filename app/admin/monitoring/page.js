'use client';
import styles from './monitoring.module.css';
import { Activity, Users, MessageSquare, AlertTriangle, TrendingUp } from 'lucide-react';

const logs = [
  { time: '09:12', user: 'Andi Pratama', action: 'Mengisi screening ISAS', type: 'info' },
  { time: '09:05', user: 'Dr. Sari W.', action: 'Membuka sesi konseling #34', type: 'info' },
  { time: '08:58', user: 'Budi Santoso', action: 'Risiko tinggi terdeteksi!', type: 'alert' },
  { time: '08:44', user: 'Rina Lestari', action: 'Pendaftaran akun baru', type: 'info' },
  { time: '08:30', user: 'Sistem', action: 'Backup otomatis selesai', type: 'success' },
];

const stats = [
  { label: 'Pengguna Aktif Hari Ini', value: '43', icon: Users, color: '#1a56db' },
  { label: 'Sesi Konseling', value: '18', icon: Activity, color: '#0e9f6e' },
  { label: 'Pesan Chatbot', value: '127', icon: MessageSquare, color: '#f59e0b' },
  { label: 'Insiden Risiko', value: '2', icon: AlertTriangle, color: '#ef4444' },
];

export default function AdminMonitoring() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Monitoring Sistem</h1>
      <p className={styles.subtitle}>Pantau aktivitas real-time seluruh layanan Mind Shield.</p>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <s.icon size={22} style={{ color: s.color }} />
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}><TrendingUp size={18} /> Log Aktivitas Terkini</h2>
        <div className={styles.logList}>
          {logs.map((l, i) => (
            <div key={i} className={`${styles.logItem} ${styles['log_' + l.type]}`}>
              <span className={styles.logTime}>{l.time}</span>
              <span className={styles.logUser}>{l.user}</span>
              <span className={styles.logAction}>{l.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}