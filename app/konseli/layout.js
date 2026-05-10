'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import logoImg from '../../logo-mindshield-transparent.png';
import { Home, FileText, Calendar, Video, BookHeart, LogOut, Info, Menu, X, PenTool, ClipboardList } from 'lucide-react';
import Chatbot from '../components/Chatbot/Chatbot';

export default function KonseliLayout({ children }) {
  const [open, setOpen] = useState(false);

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
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src={logoImg} alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
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
          <Link href="/konseli/penugasan" className={styles.navItem}>
            <PenTool size={20} /> Penugasan Terapeutik
          </Link>
          <Link href="/konseli/laporan" className={styles.navItem}>
            <ClipboardList size={20} /> Laporan Konseling
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

      {/* Floating Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
