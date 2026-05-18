'use client';

import { useState } from 'react';
import { Database, Download, Upload, RefreshCw, AlertTriangle } from 'lucide-react';
import styles from './database.module.css';

export default function AdminDatabasePage() {
  const [isBackingUp, setIsBackingUp] = useState(false);

  const handleBackup = () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
      alert('Backup berhasil diselesaikan!');
    }, 2000);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Cadangan Data</h1>
        <p>Kelola backup dan pemulihan database sistem</p>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Database size={24} className={styles.iconPrimary} />
            <h2>Status Database</h2>
          </div>
          <div className={styles.statusGrid}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Koneksi</span>
              <span className={styles.statusValueSuccess}>Terhubung</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Ukuran Data</span>
              <span className={styles.statusValue}>1.2 GB</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Backup Terakhir</span>
              <span className={styles.statusValue}>18 Mei 2026, 02:00 WIB</span>
            </div>
          </div>
        </div>

        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
            <h3>Buat Cadangan Baru</h3>
            <p>Buat salinan data sistem terbaru untuk mencegah kehilangan data.</p>
            <button 
              className={styles.primaryBtn} 
              onClick={handleBackup}
              disabled={isBackingUp}
            >
              {isBackingUp ? <RefreshCw size={18} className={styles.spin} /> : <Download size={18} />}
              {isBackingUp ? 'Memproses...' : 'Backup Sekarang'}
            </button>
          </div>

          <div className={styles.actionCard}>
            <h3>Pulihkan Data</h3>
            <p>Kembalikan sistem ke versi backup sebelumnya.</p>
            <button className={styles.secondaryBtn}>
              <Upload size={18} />
              Pilih File Backup
            </button>
          </div>
        </div>

        <div className={styles.warningCard}>
          <AlertTriangle size={24} className={styles.iconWarning} />
          <div>
            <h4>Peringalan Penting</h4>
            <p>Memulihkan database akan menimpa semua data yang ada saat ini. Pastikan Anda telah membuat cadangan terbaru sebelum melakukan pemulihan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}