'use client';

import { useState } from 'react';
import { Save, Bell, Lock, Globe, Mail } from 'lucide-react';
import styles from './pengaturan.module.css';

export default function AdminPengaturanPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Pengaturan berhasil disimpan!');
    }, 1000);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Pengaturan Sistem</h1>
        <p>Konfigurasi preferensi aplikasi dan notifikasi</p>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSave} className={styles.settingsForm}>
          
          <div className={styles.settingsSection}>
            <div className={styles.sectionHeader}>
              <Globe size={20} className={styles.sectionIcon} />
              <h2>Umum</h2>
            </div>
            
            <div className={styles.formGroup}>
              <label>Nama Aplikasi</label>
              <input type="text" defaultValue="Mind Shield" className={styles.inputItem} />
            </div>
            
            <div className={styles.formGroup}>
              <label>Zona Waktu Sistem</label>
              <select className={styles.inputItem}>
                <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
                <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
              </select>
            </div>
          </div>

          <div className={styles.settingsSection}>
            <div className={styles.sectionHeader}>
              <Bell size={20} className={styles.sectionIcon} />
              <h2>Notifikasi</h2>
            </div>
            
            <div className={styles.toggleGroup}>
              <div className={styles.toggleInfo}>
                <label>Notifikasi Darurat</label>
                <p>Kirim peringatan ke admin jika ada skor ISAS berisiko tinggi.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
            
            <div className={styles.toggleGroup}>
              <div className={styles.toggleInfo}>
                <label>Notifikasi Sesi Baru</label>
                <p>Kirim email saat ada konseli baru mendaftar.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          <div className={styles.settingsSection}>
            <div className={styles.sectionHeader}>
              <Lock size={20} className={styles.sectionIcon} />
              <h2>Keamanan</h2>
            </div>
            
            <div className={styles.toggleGroup}>
              <div className={styles.toggleInfo}>
                <label>Wajibkan Autentikasi 2 Faktor (2FA)</label>
                <p>Untuk semua akun level Admin dan Konselor.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
            
            <div className={styles.formGroup}>
              <label>Batas Sesi Habis (Menit)</label>
              <input type="number" defaultValue="30" className={styles.inputItem} />
            </div>
          </div>

          <div className={styles.submitSection}>
            <button type="submit" className={styles.primaryBtn} disabled={isSaving}>
              <Save size={18} />
              {isSaving ? 'Menyimpan...' : 'Simpan Pengaturan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}