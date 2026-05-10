'use client';

import styles from './laporan.module.css';
import { FileText, Calendar, Download, CheckCircle, Clock } from 'lucide-react';

const laporanData = [
  {
    id: 1,
    date: '10 Mei 2026',
    konselor: 'Sinta M.Psi',
    topik: 'Manajemen Stres Akademik',
    status: 'Selesai',
    catatan: 'Konseli menunjukkan progres yang baik dalam mengenali pemicu stres (tugas akhir). Telah diberikan teknik relaksasi 4-7-8.',
    tindakLanjut: 'Lanjutkan latihan relaksasi harian. Sesi berikutnya akan membahas restrukturisasi kognitif.',
  },
  {
    id: 2,
    date: '3 Mei 2026',
    konselor: 'Sinta M.Psi',
    topik: 'Identifikasi Pikiran Negatif',
    status: 'Selesai',
    catatan: 'Membahas hasil screening awal. Ditemukan kecenderungan overthinking terkait penilaian orang lain.',
    tindakLanjut: 'Penugasan: mengisi jurnal harian setiap kali muncul pikiran negatif.',
  }
];

export default function LaporanKonseli() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Laporan Konseling</h1>
        <p>Rekam jejak sesi konseling dan catatan perkembangan Anda</p>
      </div>

      <div className={styles.container}>
        <div className={styles.infoBox}>
          <FileText size={24} className={styles.infoIcon} />
          <p>
            Berikut adalah catatan laporan dari setiap sesi konseling Anda. 
            Gunakan catatan ini sebagai panduan untuk latihan mandiri dan melihat kemajuan Anda.
          </p>
        </div>

        <div className={styles.laporanList}>
          {laporanData.map((laporan) => (
            <div key={laporan.id} className={styles.laporanCard}>
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <div className={styles.dateBadge}>
                    <Calendar size={16} />
                    {laporan.date}
                  </div>
                  <h3 className={styles.topik}>{laporan.topik}</h3>
                </div>
                <div className={styles.statusBadge}>
                  <CheckCircle size={16} />
                  {laporan.status}
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.infoRow}>
                  <span className={styles.label}>Konselor:</span>
                  <span className={styles.value}>{laporan.konselor}</span>
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
                <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  <Download size={16} style={{ marginRight: '8px' }} />
                  Unduh PDF
                </button>
              </div>
            </div>
          ))}

          {laporanData.length === 0 && (
            <div className={styles.emptyState}>
              <Clock size={48} color="var(--text-muted)" />
              <h3>Belum Ada Laporan</h3>
              <p>Laporan konseling akan muncul di sini setelah Anda menyelesaikan sesi konseling.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
