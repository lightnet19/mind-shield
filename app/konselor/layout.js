import Link from 'next/link';
import styles from '../konseli/layout.module.css'; // Reusing layout styles for consistency
import { Home, Users, FileBarChart, Video, CalendarCheck, LogOut } from 'lucide-react';

export default function KonselorLayout({ children }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{backgroundColor: 'var(--secondary)'}}>MS</div>
          <span className={styles.brandName} style={{color: 'var(--text-main)'}}>Mind Shield Konselor</span>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/konselor/dashboard" className={styles.navItem}>
            <Home size={20} /> Dashboard Utama
          </Link>
          <Link href="/konselor/tinjau-screening" className={styles.navItem}>
            <FileBarChart size={20} /> Tinjau Screening Baru
          </Link>
          <Link href="/konselor/pasien" className={styles.navItem}>
            <Users size={20} /> Daftar Konseli
          </Link>
          <Link href="/konselor/jadwal" className={styles.navItem}>
            <CalendarCheck size={20} /> Jadwal Sesi
          </Link>
          <Link href="/konselor/sesi" className={styles.navItem}>
            <Video size={20} /> Ruang Konseling
          </Link>
        </nav>
        
        <div className={styles.sidebarFooter}>
          <Link href="/login" className={styles.logoutBtn}>
            <LogOut size={20} /> Keluar
          </Link>
        </div>
      </aside>
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}