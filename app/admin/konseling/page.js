'use client';

import { useState } from 'react';
import { Search, Filter, Calendar, Users, FileText } from 'lucide-react';
import styles from './konseling.module.css';

const DUMMY_SESSIONS = [
  { id: 1, konseli: 'Ahmad Fauzi', konselor: 'Dr. Sarah', date: '2026-05-18', status: 'Selesai', type: 'Online' },
  { id: 2, konseli: 'Siti Nurhaliza', konselor: 'Bpk. Budi', date: '2026-05-19', status: 'Terjadwal', type: 'Offline' },
  { id: 3, konseli: 'Rizky Pratama', konselor: 'Dr. Sarah', date: '2026-05-20', status: 'Dibatalkan', type: 'Online' },
];

export default function AdminKonselingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Data Konseling</h1>
        <p>Kelola dan pantau semua sesi konseling di sistem</p>
      </div>

      <div className={styles.container}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><Calendar size={24} /></div>
            <div className={styles.statInfo}>
              <h3>Total Sesi</h3>
              <p className={styles.statValue}>156</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: '#dcfce7', color: '#166534' }}><Users size={24} /></div>
            <div className={styles.statInfo}>
              <h3>Konseli Aktif</h3>
              <p className={styles.statValue}>42</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: '#e0e7ff', color: '#4f46e5' }}><FileText size={24} /></div>
            <div className={styles.statInfo}>
              <h3>Laporan Selesai</h3>
              <p className={styles.statValue}>128</p>
            </div>
          </div>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Cari sesi konseling..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <button className={styles.filterBtn}>
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>ID Sesi</th>
                <th>Konseli</th>
                <th>Konselor</th>
                <th>Tanggal</th>
                <th>Tipe</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_SESSIONS.map(session => (
                <tr key={session.id}>
                  <td>#{session.id}</td>
                  <td>{session.konseli}</td>
                  <td>{session.konselor}</td>
                  <td>{session.date}</td>
                  <td>{session.type}</td>
                  <td>
                    <span className={`${styles.badge} ${
                      session.status === 'Selesai' ? styles.badgeSuccess : 
                      session.status === 'Terjadwal' ? styles.badgePending : 
                      styles.badgeDanger
                    }`}>
                      {session.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}