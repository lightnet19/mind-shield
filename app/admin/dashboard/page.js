import Link from 'next/link';
import styles from '../../konseli/dashboard/dashboard.module.css'; // Reusing dashboard styles
import { Users, Server, ShieldCheck, Activity } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="fade-in">
      <header className={styles.header}>
        <div>
          <h1 style={{color: '#2b2d42'}}>System Administration</h1>
          <p className="text-muted">Mind Shield Portal Management</p>
        </div>
        <div className={styles.dateBadge} style={{color: '#2b2d42'}}>
          Server Status: Online
        </div>
      </header>

      <section className={styles.statsGrid} style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(79, 138, 139, 0.1)', color: 'var(--primary)'}}>
            <Users size={24} />
          </div>
          <h3>Total Pengguna</h3>
          <p>145 Konseli, 12 Konselor</p>
        </div>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(239, 71, 111, 0.1)', color: 'var(--alert)'}}>
            <ShieldCheck size={24} />
          </div>
          <h3>Verifikasi Tertunda</h3>
          <p style={{color: 'var(--alert)'}}>3 Registrasi Baru</p>
        </div>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(6, 214, 160, 0.1)', color: 'var(--success)'}}>
            <Server size={24} />
          </div>
          <h3>Uptime Database</h3>
          <p>99.98%</p>
        </div>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(144, 194, 231, 0.2)', color: 'var(--secondary)'}}>
            <Activity size={24} />
          </div>
          <h3>Aktivitas Hari Ini</h3>
          <p>42 Login, 8 Sesi</p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.journeyCol}>
          <h2 className={styles.sectionTitle}>Log Keamanan & Verifikasi</h2>
          <div className="card">
            <ul className={styles.timeline}>
              <li className={`${styles.timelineItem} ${styles.active}`}>
                <div className={styles.timelineDot} style={{borderColor: 'var(--alert)'}}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Verifikasi Pendaftaran Konselor Baru</h4>
                  <p>Dr. Anita M. submit SIP untuk verifikasi. Menunggu persetujuan hak akses Admin.</p>
                  <button className="btn-primary" style={{marginTop: '10px', backgroundColor: '#2b2d42'}}>
                    Tinjau Dokumen
                  </button>
                </div>
              </li>
              <li className={`${styles.timelineItem}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Peringatan Privasi (Auto-Audit)</h4>
                  <p>Sistem enkripsi end-to-end berjalan normal untuk 8 sesi hari ini. Tidak ada kebocoran (breach) terdeteksi.</p>
                </div>
              </li>
              <li className={`${styles.timelineItem}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Backup Harian</h4>
                  <p>Berhasil di-backup ke secure cloud storage pada 01:00 WIB.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.asideCol}>
          <h2 className={styles.sectionTitle}>Kelola Cepat</h2>
          <div className="card" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
             <Link href="/admin/users" className="btn-primary" style={{textAlign: 'center', backgroundColor: '#e2e8f0', color: '#2b2d42'}}>Kelola Akun</Link>
             <Link href="/admin/jadwal" className="btn-primary" style={{textAlign: 'center', backgroundColor: '#e2e8f0', color: '#2b2d42'}}>Master Jadwal</Link>
             <Link href="/admin/pengaturan" className="btn-primary" style={{textAlign: 'center', backgroundColor: '#2b2d42', color: 'white'}}>Audit Keamanan Log</Link>
          </div>
        </div>
      </section>
    </div>
  );
}