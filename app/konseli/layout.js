'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import { Home, FileText, Calendar, Video, BookHeart, LogOut, Info, Menu, X } from 'lucide-react';

export default function KonseliLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Mobile Topbar */}
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <span className={styles.topbarBrand}>Mind Shield</span>
      </div>

      {/* Overlay */}
      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>MS</div>
          <span className={styles.brandName}>Mind Shield</span>
          <button className={styles.hamburger} onClick={() => setOpen(false)}
            style={{ marginLeft: 'auto', display: 'flex' }} aria-label="Tutup menu">
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/konseli/dashboard" className={styles.navItem}>
            <Home size={20} /> Dashboard
          </Link>
          <Link href="/konseli/panduan" className={styles.navItem}>
            <Info size={20} /> Panduan & Consent
          </Link>
          <Link href="/konseli/screening" className={styles.navItem}>
            <FileText size={20} /> Screening CBT
          </Link>
          <Link href="/konseli/jadwal" className={styles.navItem}>
            <Calendar size={20} /> Jadwal Konseling
          </Link>
          <Link href="/konseli/sesi" className={styles.navItem}>
            <Video size={20} /> Sesi Online
          </Link>
          <Link href="/konseli/jurnal" className={styles.navItem}>
            <BookHeart size={20} /> Jurnal Perkembangan
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
