'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Eye, ChevronRight, CheckCircle, FileText } from 'lucide-react';
import styles from './tinjau-evaluasi.module.css';

const DUMMY_EVALUATIONS = [
  {
    id: 'EVAL-001',
    patientName: 'Rina Wijaya',
    date: '17 Mei 2026',
    totalScore: 92,
    status: 'Reviewed',
    dimensions: {
      pengendalian: 15,
      selfWorth: 14,
      regulasi: 16,
      coping: 15,
      jaringan: 14,
      keseluruhan: 18
    }
  },
  {
    id: 'EVAL-002',
    patientName: 'Budi Santoso',
    date: '16 Mei 2026',
    totalScore: 68,
    status: 'Pending',
    dimensions: {
      pengendalian: 10,
      selfWorth: 12,
      regulasi: 11,
      coping: 10,
      jaringan: 13,
      keseluruhan: 12
    }
  },
  {
    id: 'EVAL-003',
    patientName: 'Siti Aminah',
    date: '15 Mei 2026',
    totalScore: 110,
    status: 'Reviewed',
    dimensions: {
      pengendalian: 19,
      selfWorth: 18,
      regulasi: 18,
      coping: 19,
      jaringan: 17,
      keseluruhan: 19
    }
  }
];

export default function TinjauEvaluasiPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEval, setSelectedEval] = useState(null);

  const filteredEvaluations = DUMMY_EVALUATIONS.filter(e => 
    e.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreStatus = (score) => {
    if (score >= 96) return { text: 'Perkembangan Sangat Baik', color: '#10B981', bg: '#D1FAE5' };
    if (score >= 72) return { text: 'Perkembangan Sedang', color: '#F59E0B', bg: '#FEF3C7' };
    return { text: 'Perlu Perhatian Khusus', color: '#EF4444', bg: '#FEE2E2' };
  };

  if (selectedEval) {
    const status = getScoreStatus(selectedEval.totalScore);
    
    return (
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <button className={styles.backBtn} onClick={() => setSelectedEval(null)}>
            Tinjau Evaluasi
          </button>
          <ChevronRight size={16} className={styles.breadcrumbIcon} />
          <span className={styles.breadcrumbCurrent}>{selectedEval.id}</span>
        </div>

        <header className={styles.detailHeader}>
          <div>
            <h1 className={styles.title}>Detail Evaluasi Konseling</h1>
            <p className={styles.subtitle}>{selectedEval.patientName} • {selectedEval.date}</p>
          </div>
          <div className={styles.statusBadge} style={{ color: status.color, backgroundColor: status.bg }}>
            {status.text} (Skor: {selectedEval.totalScore}/120)
          </div>
        </header>

        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Skor per Dimensi</h3>
            <div className={styles.dimensionList}>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Pengendalian Dorongan Self-Injury</span>
                  <span>{selectedEval.dimensions.pengendalian}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.pengendalian/20)*100}%` }}></div></div>
              </div>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Keyakinan Diri / Self-Worth</span>
                  <span>{selectedEval.dimensions.selfWorth}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.selfWorth/20)*100}%` }}></div></div>
              </div>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Regulasi Emosi</span>
                  <span>{selectedEval.dimensions.regulasi}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.regulasi/20)*100}%` }}></div></div>
              </div>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Strategi Coping</span>
                  <span>{selectedEval.dimensions.coping}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.coping/20)*100}%` }}></div></div>
              </div>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Jaringan Keselamatan</span>
                  <span>{selectedEval.dimensions.jaringan}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.jaringan/20)*100}%` }}></div></div>
              </div>
              <div className={styles.dimensionItem}>
                <div className={styles.dimensionLabel}>
                  <span>Evaluasi Keseluruhan</span>
                  <span>{selectedEval.dimensions.keseluruhan}/20</span>
                </div>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${(selectedEval.dimensions.keseluruhan/20)*100}%` }}></div></div>
              </div>
            </div>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Tindakan Lanjutan</h3>
            <p className={styles.cardText}>Berdasarkan hasil evaluasi, konseli menunjukkan {status.text.toLowerCase()}. Pertimbangkan untuk membahas hasil ini pada sesi konseling berikutnya.</p>
            
            <div className={styles.actionButtons}>
              <button className={styles.primaryBtn}>Buat Catatan Konselor</button>
              <button className={styles.secondaryBtn}>Kirim Pesan ke Konseli</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tinjau Evaluasi Konseling</h1>
        <p className={styles.subtitle}>Pantau umpan balik dan perkembangan konseli setelah sesi</p>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Cari nama konseli atau ID evaluasi..." 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className={styles.filterBtn}>
          <Filter size={20} /> Filter
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID Evaluasi</th>
              <th>Nama Konseli</th>
              <th>Tanggal Masuk</th>
              <th>Skor Total</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvaluations.length > 0 ? (
              filteredEvaluations.map((evalData) => (
                <tr key={evalData.id}>
                  <td className={styles.cellId}>{evalData.id}</td>
                  <td className={styles.cellName}>{evalData.patientName}</td>
                  <td>{evalData.date}</td>
                  <td>
                    <div className={styles.scoreCell}>
                      <span className={styles.scoreValue}>{evalData.totalScore}</span>
                      <span className={styles.scoreMax}>/120</span>
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.statusBadgeSmall} ${evalData.status === 'Reviewed' ? styles.statusReviewed : styles.statusPending}`}>
                      {evalData.status === 'Reviewed' ? <CheckCircle size={14} /> : <FileText size={14} />}
                      {evalData.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className={styles.viewBtn}
                      onClick={() => setSelectedEval(evalData)}
                    >
                      <Eye size={18} /> Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.emptyState}>
                  Tidak ada data evaluasi yang cocok dengan pencarian Anda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
