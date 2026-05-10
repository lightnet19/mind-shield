'use client';

import styles from './laporan.module.css';
import { FileText, Calendar, Search, Filter, Plus, Edit, Download } from 'lucide-react';
import { useState } from 'react';

const laporanKonseliData = [
  {
    id: 1,
    konseli: 'Dewi Ayu',
    date: '10 Mei 2026',
    topik: 'Manajemen Stres Akademik',
    status: 'Selesai',
    catatan: 'Konseli menunjukkan progres yang baik dalam mengenali pemicu stres (tugas akhir). Telah diberikan teknik relaksasi 4-7-8.',
    tindakLanjut: 'Lanjutkan latihan relaksasi harian. Sesi berikutnya akan membahas restrukturisasi kognitif.',
    risk: 'Sedang'
  },
  {
    id: 2,
    konseli: 'Fajar Maulana',
    date: '9 Mei 2026',
    topik: 'Eksplorasi Core Beliefs',
    status: 'Selesai',
    catatan: 'Membahas hasil ISAS dan Core Beliefs. Ditemukan kecenderungan overthinking.',
    tindakLanjut: 'Penugasan Terapeutik: mengisi jurnal harian setiap kali muncul pikiran negatif.',
    risk: 'Rendah'
  }
];

export default function LaporanKonselor() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = laporanKonseliData.filter(l => 
    l.konseli.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.topik.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Laporan Konseling</h1>
          <p className={styles.subtitle}>Kelola catatan laporan setiap sesi konseling dengan pasien.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} /> Buat Laporan Baru
        </button>
      </div>

      <div className={styles.controlsRow}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Cari nama konseli atau topik..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <button className={styles.filterBtn}>
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className={styles.laporanList}>
        {filteredData.map((laporan) => (
          <div key={laporan.id} className={styles.laporanCard}>
            <div className={styles.cardHeader}>
              <div className={styles.headerInfo}>
                <div className={styles.avatar}>{laporan.konseli.charAt(0)}</div>
                <div>
                  <h3 className={styles.konseliName}>{laporan.konseli}</h3>
                  <div className={styles.dateInfo}>
                    <Calendar size={14} /> {laporan.date}
                  </div>
                </div>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.iconBtn} title="Edit Laporan"><Edit size={16} /></button>
                <button className={styles.iconBtn} title="Unduh PDF"><Download size={16} /></button>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Topik Sesi:</span>
                <span className={styles.value}>{laporan.topik}</span>
              </div>
              
              <div className={styles.contentSection}>
                <h4>Catatan Sesi</h4>
                <p>{laporan.catatan}</p>
              </div>

              <div className={styles.contentSection}>
                <h4>Tindak Lanjut / Tugas</h4>
                <p>{laporan.tindakLanjut}</p>
              </div>
            </div>
            
            <div className={styles.cardFooter}>
              <span className={styles.statusBadge}>{laporan.status}</span>
              <span className={styles.riskBadge}>Risiko: {laporan.risk}</span>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className={styles.emptyState}>
            <FileText size={48} color="var(--text-muted)" />
            <h3>Tidak ada laporan ditemukan</h3>
            <p>Coba gunakan kata kunci lain dalam pencarian.</p>
          </div>
        )}
      </div>
    </div>
  );
}
