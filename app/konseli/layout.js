'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import logoImg from '../../logo-mindshield-transparent.png';
import { Home, FileText, Calendar, Video, LogOut, Info, Menu, PenTool, ClipboardList, ChevronLeft, ChevronRight } from 'lucide-react';
import Chatbot from '../components/Chatbot/Chatbot';

export default function KonseliLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Mobile Topbar */}
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src={logoImg} alt="Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className={styles.topbarBrand}>Mind Shield</span>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''} ${collapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src={logoImg} alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.brandName}>Mind Shield</span>
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Perlebar sidebar' : 'Lipat sidebar'}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/konseli/dashboard" className={styles.navItem} title="Dashboard">
            <Home size={20} /><span className={styles.navLabel}>Dashboard</span>
          </Link>
          <Link href="/konseli/panduan" className={styles.navItem} title="Panduan & Consent">
            <Info size={20} /><span className={styles.navLabel}>Panduan & Consent</span>
          </Link>
          <Link href="/konseli/screening" className={styles.navItem} title="Screening CBT">
            <FileText size={20} /><span className={styles.navLabel}>Screening CBT</span>
          </Link>
          <Link href="/konseli/jadwal" className={styles.navItem} title="Jadwal Konseling">
            <Calendar size={20} /><span className={styles.navLabel}>Jadwal Konseling</span>
          </Link>
          <Link href="/konseli/sesi" className={styles.navItem} title="Sesi Online">
            <Video size={20} /><span className={styles.navLabel}>Sesi Online</span>
          </Link>
          <Link href="/konseli/penugasan" className={styles.navItem} title="Penugasan Terapeutik">
            <PenTool size={20} /><span className={styles.navLabel}>Penugasan Terapeutik</span>
          </Link>
          <Link href="/konseli/laporan" className={styles.navItem} title="Laporan Konseling">
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

      {/* Floating Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
