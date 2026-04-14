import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={`glass-panel fade-in ${styles.heroCard}`}>
          <div className={styles.logoBadge}>MS</div>
          <h1 className={styles.title}>Mind Shield</h1>
          <p className={styles.subtitle}>
            Website Self Defense Berbasis Strategi Cognitive Behavioral Therapy <br/> 
            untuk Mengurangi Tindakan Self-Injury.
          </p>
          
          <div className={styles.actionGroup}>
            <Link href="/login" className="btn-primary">
              Mulai Konseling (Konseli)
            </Link>
            <Link href="/login" className={styles.btnOutline}>
              Portal Konselor / Admin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}