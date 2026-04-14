'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../konseli/layout.module.css';
import { Home, Users, FileBarChart, Video, CalendarCheck, LogOut, Menu, X } from 'lucide-react';

export default function KonselorLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <span className={styles.topbarBrand}>Mind Shield Konselor</span>
      </div>

      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ backgroundColor: 'var(--secondary)' }}>MS</div>
          <span className={styles.brandName} style={{ color: 'var(--text-main)' }}>Mind Shield Konselor</span>
          <button className={styles.hamburger} onClick={() => setOpen(false)}
            style={{ marginLeft: 'auto', display: 'flex' }} aria-label="Tutup menu">
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
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
