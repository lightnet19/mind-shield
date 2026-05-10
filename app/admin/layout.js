'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../konseli/layout.module.css';
import { Home, Users, Settings, FileText, Database, LogOut, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src="/logo-mindshield-transparent.png" alt="Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className={styles.topbarBrand}>Mind Shield Admin</span>
        </div>
      </div>

      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''} ${collapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src="/logo-mindshield-transparent.png" alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.brandName}>Mind Shield Admin</span>
          <button 
            className={styles.collapseBtn} 
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Perlebar sidebar" : "Lipat sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/admin/dashboard" className={styles.navItem} title="Dashboard Admin">
            <Home size={20} /><span className={styles.navLabel}>Dashboard Admin</span>
          </Link>
          <Link href="/admin/users" className={styles.navItem} title="Manajemen Pengguna">
            <Users size={20} /><span className={styles.navLabel}>Manajemen Pengguna</span>
          </Link>
          <Link href="/admin/konseling" className={styles.navItem} title="Data Konseling">
            <FileText size={20} /><span className={styles.navLabel}>Data Konseling</span>
          </Link>
          <Link href="/admin/database" className={styles.navItem} title="Cadangan Data">
            <Database size={20} /><span className={styles.navLabel}>Cadangan Data</span>
          </Link>
          <Link href="/admin/pengaturan" className={styles.navItem} title="Pengaturan Sistem">
            <Settings size={20} /><span className={styles.navLabel}>Pengaturan Sistem</span>
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
