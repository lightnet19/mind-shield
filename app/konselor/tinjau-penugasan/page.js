'use client';

import { useState } from 'react';
import { Search, Eye, Filter, User, Calendar, FileText, CheckCircle } from 'lucide-react';
import styles from './tinjau.module.css';

const DUMMY_TASKS = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    date: "18 Mei 2026",
    status: "Menunggu Tinjauan",
    taskType: "Jurnal Harian",
    riskLevel: "Rendah"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    date: "17 Mei 2026",
    status: "Sudah Ditinjau",
    taskType: "Latihan Grounding",
    riskLevel: "Sedang"
  },
  {
    id: 3,
    name: "Budi Santoso",
    date: "16 Mei 2026",
    status: "Menunggu Tinjauan",
    taskType: "Identifikasi Core Beliefs",
    riskLevel: "Tinggi"
  }
];

export default function TinjauPenugasanPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Tinjau Penugasan</h1>
        <p>Lihat dan berikan umpan balik pada tugas terapeutik konseli</p>
      </div>

      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Cari nama konseli..." 
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
          <table className={styles.taskTable}>
            <thead>
              <tr>
                <th>Nama Konseli</th>
                <th>Tanggal Pengumpulan</th>
                <th>Jenis Tugas</th>
                <th>Status</th>
                <th>Risiko</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_TASKS.map(task => (
                <tr key={task.id}>
                  <td>
                    <div className={styles.clientInfo}>
                      <div className={styles.avatar}><User size={16} /></div>
                      <span className={styles.clientName}>{task.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.dateInfo}>
                      <Calendar size={14} />
                      <span>{task.date}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.taskTypeInfo}>
                      <FileText size={14} />
                      <span>{task.taskType}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${task.status === 'Sudah Ditinjau' ? styles.badgeSuccess : styles.badgePending}`}>
                      {task.status}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${
                      task.riskLevel === 'Tinggi' ? styles.badgeDanger : 
                      task.riskLevel === 'Sedang' ? styles.badgeWarning : 
                      styles.badgeSuccess
                    }`}>
                      {task.riskLevel}
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn} title="Lihat Detail">
                      <Eye size={18} />
                    </button>
                    {task.status === 'Menunggu Tinjauan' && (
                      <button className={styles.actionBtnCheck} title="Tandai Selesai Ditinjau">
                        <CheckCircle size={18} />
                      </button>
                    )}
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