import Link from "next/link";
import { Shield, User, HeartPulse, UserCog } from "lucide-react";
import styles from "./dashboard.module.css";

export default function DashboardPortal() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Shield size={40} className={styles.iconBlue} />
          </div>
          <h1 className={styles.title}>Portal Mind Shield</h1>
          <p className={styles.subtitle}>Silakan pilih akses masuk sesuai dengan peran Anda di platform ini.</p>
        </div>

        <div className={styles.cards}>
          <Link href="/konseli/dashboard" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.bgGreen}`}>
              <HeartPulse size={32} />
            </div>
            <h2 className={styles.cardTitle}>Masuk sebagai Konseli</h2>
            <p className={styles.cardDesc}>Akses modul screening, jurnal CBT, dan sesi konseling untuk pelajar.</p>
          </Link>

          <Link href="/konselor/dashboard" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.bgBlue}`}>
              <User size={32} />
            </div>
            <h2 className={styles.cardTitle}>Masuk sebagai Konselor</h2>
            <p className={styles.cardDesc}>Kelola jadwal sesi, tinjau hasil screening, dan berikan evaluasi konseli.</p>
          </Link>

          <Link href="/admin/dashboard" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.bgGray}`}>
              <UserCog size={32} />
            </div>
            <h2 className={styles.cardTitle}>Masuk sebagai Admin</h2>
            <p className={styles.cardDesc}>Atur pengguna, pantau statistik sistem, dan kelola platform secara keseluruhan.</p>
          </Link>
        </div>
        
        <div className={styles.footer}>
          <Link href="/" className={styles.backLink}>Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}