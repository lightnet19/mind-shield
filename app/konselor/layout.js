'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../konseli/layout.module.css';
import logoImg from '../../logo-mindshield-transparent.png';
import { Home, Users, FileBarChart, Video, CalendarCheck, LogOut, Menu, ClipboardList, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function KonselorLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src={logoImg} alt="Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className={styles.topbarBrand}>Mind Shield Konselor</span>
        </div>
      </div>

      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''} ${collapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src={logoImg} alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.brandName}>Mind Shield Konselor</span>
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Perlebar sidebar' : 'Lipat sidebar'}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/konselor/dashboard" className={styles.navItem} title="Dashboard Utama">
            <Home size={20} /><span className={styles.navLabel}>Dashboard Utama</span>
          </Link>
          <Link href="/konselor/tinjau-screening" className={styles.navItem} title="Tinjau Screening Baru">
            <FileBarChart size={20} /><span className={styles.navLabel}>Tinjau Screening Baru</span>
          </Link>
          <Link href="/konselor/pasien" className={styles.navItem} title="Daftar Konseli">
            <Users size={20} /><span className={styles.navLabel}>Daftar Konseli</span>
          </Link>
          <Link href="/konselor/jadwal" className={styles.navItem} title="Jadwal Sesi">
            <CalendarCheck size={20} /><span className={styles.navLabel}>Jadwal Sesi</span>
          </Link>
          <Link href="/konselor/pesan" className={styles.navItem} title="Pesan & Notifikasi">
            <MessageCircle size={20} /><span className={styles.navLabel}>Pesan & Notifikasi</span>
          </Link>
          <Link href="/konselor/sesi" className={styles.navItem} title="Ruang Konseling">
            <Video size={20} /><span className={styles.navLabel}>Ruang Konseling</span>
          </Link>
          <Link href="/konselor/laporan" className={styles.navItem} title="Laporan Konseling">
            <ClipboardList size={20} /><span className={styles.navLabel}>Laporan Konseling</span>
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.creditText}>
            Made with Love ❤️ by{' '}
            <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer">alfajri</a>
          </span>
          <Link href="/login" className={styles.logoutBtn} title="Keluar">
            <LogOut size={20} /><span className={styles.logoutLabel}>Keluar</span>
          </Link>
        </div>
      </aside>

      <main className={`${styles.main} ${collapsed ? styles.mainCollapsed : ''}`}>
        {children}
      </main>
    </div>
  );
}
