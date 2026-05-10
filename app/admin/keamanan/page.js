'use client';
import styles from './keamanan.module.css';
import { Shield, Lock, Database } from 'lucide-react';
import { useState } from 'react';

export default function AdminKeamanan() {
  const [settings, setSettings] = useState({ twoFactor: false, encryptData: true, anonymizeExport: true, sessionTimeout: '30' });
  const [saved, setSaved] = useState(false);
  const toggle = (key) => setSettings(p => ({ ...p, [key]: !p[key] }));
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Privasi & Keamanan</h1>
      <p className={styles.subtitle}>Konfigurasi keamanan dan privasi data pengguna.</p>
      {saved && <div className={styles.toast}>✅ Pengaturan tersimpan!</div>}
      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}><Lock size={18}/><h2>Autentikasi</h2></div>
          <div className={styles.settingRow}>
            <div><div className={styles.settingLabel}>Verifikasi Dua Langkah (2FA)</div><div className={styles.settingDesc}>Wajibkan OTP email saat login admin</div></div>
            <button onClick={()=>toggle('twoFactor')} className={`${styles.toggle} ${settings.twoFactor?styles.toggleOn:''}`}><span className={styles.toggleKnob}/></button>
          </div>
          <div className={styles.settingRow}>
            <div><div className={styles.settingLabel}>Batas Waktu Sesi</div><div className={styles.settingDesc}>Logout otomatis jika tidak aktif</div></div>
            <select className={styles.select} value={settings.sessionTimeout} onChange={e=>setSettings(p=>({...p,sessionTimeout:e.target.value}))}>
              <option value="15">15 menit</option><option value="30">30 menit</option><option value="60">60 menit</option>
            </select>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}><Database size={18}/><h2>Data & Privasi</h2></div>
          <div className={styles.settingRow}>
            <div><div className={styles.settingLabel}>Enkripsi Data Konseling</div><div className={styles.settingDesc}>Semua data sesi dienkripsi AES-256</div></div>
            <button onClick={()=>toggle('encryptData')} className={`${styles.toggle} ${settings.encryptData?styles.toggleOn:''}`}><span className={styles.toggleKnob}/></button>
          </div>
          <div className={styles.settingRow}>
            <div><div className={styles.settingLabel}>Anonimisasi Saat Ekspor</div><div className={styles.settingDesc}>Hapus identitas saat ekspor laporan</div></div>
            <button onClick={()=>toggle('anonymizeExport')} className={`${styles.toggle} ${settings.anonymizeExport?styles.toggleOn:''}`}><span className={styles.toggleKnob}/></button>
          </div>
        </div>
      </div>
      <button onClick={save} className={styles.btnSave}><Shield size={16}/> Simpan Pengaturan</button>
    </div>
  );
}
