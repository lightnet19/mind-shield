import Link from 'next/link';
import styles from '../../konseli/dashboard/dashboard.module.css'; // Reusing dashboard styles for consistency
import { AlertCircle, UserCheck, ClipboardList, TrendingUp } from 'lucide-react';

export default function KonselorDashboard() {
  return (
    <div className="fade-in">
      <header className={styles.header}>
        <div>
          <h1 style={{color: 'var(--secondary)'}}>Portal Konselor</h1>
          <p className="text-muted">Selamat bertugas, Budi H. (S.Psi., M.Psi., Psikolog)</p>
        </div>
        <div className={styles.dateBadge}>
          14 April 2026
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card" style={{borderLeft: '4px solid var(--alert)'}}>
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(239, 71, 111, 0.1)', color: 'var(--alert)'}}>
            <AlertCircle size={24} />
          </div>
          <h3>Risiko Tinggi (Action Required)</h3>
          <p style={{color: 'var(--alert)'}}>2 Konseli</p>
        </div>
        <div className="card" style={{borderLeft: '4px solid var(--primary)'}}>
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(79, 138, 139, 0.1)', color: 'var(--primary)'}}>
            <ClipboardList size={24} />
          </div>
          <h3>Screening Baru Butuh Tinjauan</h3>
          <p>5 Form</p>
        </div>
        <div className="card" style={{borderLeft: '4px solid var(--success)'}}>
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(6, 214, 160, 0.1)', color: 'var(--success)'}}>
            <UserCheck size={24} />
          </div>
          <h3>Konseling Aktif (Minggu ini)</h3>
          <p>12 Sesi Terjadwal</p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.journeyCol}>
          <h2 className={styles.sectionTitle}>Tugas Mendesak</h2>
          <div className="card">
            <ul className={styles.timeline}>
              <li className={`${styles.timelineItem} ${styles.active}`}>
                <div className={styles.timelineDot} style={{borderColor: 'var(--alert)'}}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Respons Krisis & Referral!</h4>
                  <p>Pasien "Andi T." (ID #1029) terdeteksi risiko tinggi self-injury dari form screening terakhir.</p>
                  <button className="btn-primary" style={{backgroundColor: 'var(--alert)', marginTop: '10px'}}>
                    Hubungi Pasien / Proses Referral
                  </button>
                </div>
              </li>
              <li className={`${styles.timelineItem}`}>
                <div className={styles.timelineDot} style={{borderColor: 'var(--primary)'}}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Analisis Core Belief</h4>
                  <p>Pasien "Sarah" men-submit hasil identifikasi Automatic Thoughts.</p>
                  <Link href="/konselor/tinjau" className="btn-primary" style={{display: 'inline-block', marginTop: '10px', backgroundColor: 'var(--secondary)'}}>
                    Susun Formulasi Intervensi CBT
                  </Link>
                </div>
              </li>
              <li className={`${styles.timelineItem}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4 style={{color: 'var(--text-main)'}}>Monitoring Jurnal Perkembangan</h4>
                  <p>3 pasien mengumpulkan jurnal tugas rumah CBT.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.asideCol}>
          <h2 className={styles.sectionTitle}>Jadwal Sesi Hari Ini</h2>
          <div className="card">
            <div className={styles.upcomingSession} style={{borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '16px'}}>
              <div className={styles.sessionInfo}>
                <div className={styles.sessionTime} style={{marginBottom: '8px'}}>10:00 - 11:00 WIB</div>
                <h4>Sesi 3 CBT: Restrukturisasi</h4>
                <p>Konseli: Dika M.</p>
              </div>
            </div>
            <div className={styles.upcomingSession}>
              <div className={styles.sessionInfo}>
                <div className={styles.sessionTime} style={{marginBottom: '8px'}}>14:00 - 15:00 WIB</div>
                <h4>Sesi 2 CBT: Identifikasi</h4>
                <p>Konseli: Sarah.</p>
              </div>
            </div>
            <Link href="/konselor/sesi" className={`btn-primary ${styles.fullWidthBtn}`} style={{marginTop: '20px', textAlign: 'center'}}>
              Buka Gateway Sesi Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}