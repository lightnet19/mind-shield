'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../konseli/layout.module.css';
import logoImg from '../../logo-mindshield-transparent.png';
import { Home, Shield, Users, Database, Activity, LogOut, Menu, X } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src={logoImg} alt="Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className={styles.topbarBrand}>Admin System</span>
        </div>
      </div>

      {open && <div className={`${styles.overlay} ${styles.overlayVisible}`} onClick={() => setOpen(false)} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} style={{ padding: 0, background: 'transparent' }}>
            <Image src={logoImg} alt="Mind Shield Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.brandName} style={{ color: '#2b2d42' }}>Admin System</span>
          <button className={styles.hamburger} onClick={() => setOpen(false)}
            style={{ marginLeft: 'auto', display: 'flex' }} aria-label="Tutup menu">
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav} onClick={() => setOpen(false)}>
          <Link href="/admin/dashboard" className={styles.navItem}>
            <Home size={20} /> Dashboard Admin
          </Link>
          <Link href="/admin/users" className={styles.navItem}>
            <Users size={20} /> Kelola Akun & Verifikasi
          </Link>
          <Link href="/admin/jadwal" className={styles.navItem}>
            <Activity size={20} /> Ketersediaan Sistem
          </Link>
          <Link href="/admin/keamanan" className={styles.navItem}>
            <Shield size={20} /> Privasi & Keamanan
          </Link>
          <Link href="/admin/database" className={styles.navItem}>
            <Database size={20} /> Backup Data
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/login" className={styles.logoutBtn}>
            <LogOut size={20} /> Keluar (Admin)
          </Link>
        </div>
      </aside>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
