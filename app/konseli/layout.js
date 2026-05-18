'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import { Home, ClipboardList, BookOpen, BookMarked, Brain, BarChart2, MessageCircle, LogOut, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function KonseliLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Topbar for mobile */}
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src="/logo-mindshield-transparent.png" alt="Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className={styles.topbarBrand}>Mind Shield</span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      {/* Sidebar with collapsible feature */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''} ${collapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src="/logo-mindshield-transparent.png" alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.brandName}>Mind Shield</span>
          <button 
            className={styles.collapseBtn} 
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Perlebar sidebar" : "Lipat sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/konseli/dashboard" className={styles.navItem} title="Beranda Utama">
            <Home size={20} /><span className={styles.navLabel}>Beranda Utama</span>
          </Link>
          <Link href="/konseli/penugasan" className={styles.navItem} title="Penugasan Terapeutik">
            <ClipboardList size={20} /><span className={styles.navLabel}>Penugasan Terapeutik</span>
          </Link>
          <Link href="/konseli/screening-pola-pikir" className={styles.navItem} title="Screening Pola Pikir">
            <Brain size={20} /><span className={styles.navLabel}>Screening Pola Pikir</span>
          </Link>
          <Link href="/konseli/evaluasi" className={styles.navItem} title="Evaluasi Konseling">
            <BarChart2 size={20} /><span className={styles.navLabel}>Evaluasi Konseling</span>
          </Link>
          <Link href="/konseli/materi" className={styles.navItem} title="Materi Edukasi">
            <BookOpen size={20} /><span className={styles.navLabel}>Materi Edukasi</span>
          </Link>
          <Link href="/konseli/tutorial" className={styles.navItem} title="Tutorial Penggunaan">
            <BookMarked size={20} /><span className={styles.navLabel}>Tutorial</span>
          </Link>
          <Link href="/konseli/chat" className={styles.navItem} title="Chatbot Pendukung">
            <MessageCircle size={20} /><span className={styles.navLabel}>Chatbot Pendukung</span>
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/login" className={styles.logoutBtn} title="Keluar">
            <LogOut size={20} /><span className={styles.logoutLabel}>Keluar</span>
          </Link>
          <span className={styles.creditText}>
            Made with Love ❤️ by{' '}
            <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer">alfajri</a>
          </span>
        </div>
      </aside>

      <main className={`${styles.main} ${collapsed ? styles.mainCollapsed : ''}`}>
        {children}
      </main>
    </div>
  );
}
