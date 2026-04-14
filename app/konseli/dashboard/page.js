import Link from 'next/link';
import styles from './dashboard.module.css';
import { ShieldCheck, Activity, CalendarClock, PenTool } from 'lucide-react';

export default function KonseliDashboard() {
  return (
    <div className="fade-in">
      <header className={styles.header}>
        <div>
          <h1>Halo, Sarah</h1>
          <p className="text-muted">Selamat datang di Ruang Aman Anda hari ini.</p>
        </div>
        <div className={styles.dateBadge}>
          14 April 2026
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(6, 214, 160, 0.1)', color: 'var(--success)'}}>
            <ShieldCheck size={24} />
          </div>
          <h3>Status Screening</h3>
          <p>Selesai - Risiko Terpantau</p>
        </div>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(144, 194, 231, 0.2)', color: 'var(--secondary)'}}>
            <Activity size={24} />
          </div>
          <h3>Sesi CBT Ke</h3>
          <p>Sesi 2 dari 6</p>
        </div>
        <div className="card">
          <div className={styles.statIcon} style={{backgroundColor: 'rgba(239, 71, 111, 0.1)', color: 'var(--alert)'}}>
            <PenTool size={24} />
          </div>
          <h3>Jurnal Mingguan</h3>
          <p>Belum Diisi</p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.journeyCol}>
          <h2 className={styles.sectionTitle}>Perjalanan Pemulihan CBT</h2>
          <div className="card">
            <ul className={styles.timeline}>
              <li className={`${styles.timelineItem} ${styles.completed}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Persetujuan & Informed Consent</h4>
                  <p>Disetujui pada 10 Apr</p>
                </div>
              </li>
              <li className={`${styles.timelineItem} ${styles.completed}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Screening Awal Self-Injury</h4>
                  <p>Risiko Menengah - Ditugaskan ke Konselor Budi</p>
                </div>
              </li>
              <li className={`${styles.timelineItem} ${styles.active}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Identifikasi Automatic Thoughts</h4>
                  <p>Langkah saat ini: Mengenali pola pikir negatif otomatis.</p>
                  <Link href="/konseli/screening" className="btn-primary" style={{display: 'inline-block', marginTop: '10px'}}>
                    Lanjutkan Lembar Kerja
                  </Link>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Identifikasi Core Belief</h4>
                  <p>Menyelami keyakinan dasar.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.asideCol}>
          <h2 className={styles.sectionTitle}>Sesi Terdekat</h2>
          <div className="card">
            <div className={styles.upcomingSession}>
              <CalendarClock size={32} color="var(--primary)" />
              <div className={styles.sessionInfo}>
                <h4>Restrukturisasi Kognitif</h4>
                <p>Bersama Konselor Budi H.</p>
                <div className={styles.sessionTime}>16 Apr 2026, 14:00 WIB</div>
              </div>
            </div>
            <Link href="/konseli/sesi" className={`btn-primary ${styles.fullWidthBtn}`} style={{marginTop: '20px', textAlign: 'center'}}>
              Masuk Ruang Sesi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}