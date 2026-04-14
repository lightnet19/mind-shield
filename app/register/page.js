'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../login/login.module.css';
import s from '../shared.module.css';

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push('/login'), 1000);
  };

  return (
    <div className={styles.container}>
      <div className={`card fade-in ${styles.loginCard}`} style={{maxWidth: 460}}>
        <div className={styles.header}>
          <div className={styles.logo}>MS</div>
          <h2>Daftar Akun Konseli</h2>
          <p className={styles.textMuted}>Langkah pertama menuju perlindungan diri</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={s.formGroup}>
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Nama Anda" className={s.input} required />
          </div>
          <div className={s.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="nama@email.com" className={s.input} required />
          </div>
          <div className={s.formGroup}>
            <label>Nomor Telepon (Opsional)</label>
            <input type="tel" placeholder="08xxxxxxxxxx" className={s.input} />
          </div>
          <div className={s.formGroup}>
            <label>Kata Sandi</label>
            <input type="password" placeholder="Minimal 8 karakter" className={s.input} required />
          </div>
          <div className={s.formGroup}>
            <label>Konfirmasi Kata Sandi</label>
            <input type="password" placeholder="Ulangi kata sandi" className={s.input} required />
          </div>
          
          <label className={s.checkGroup}>
            <input type="checkbox" required />
            <span>Saya menyetujui <strong>Ketentuan Layanan</strong> dan <strong>Kebijakan Privasi</strong> Mind Shield.</span>
          </label>

          <button
            type="submit"
            className={`btn-primary ${styles.fullWidth}`}
            disabled={loading}
            style={{ marginTop: 12, padding: 14, fontSize: '1rem', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
          </button>
        </form>
        
        <div className={styles.footer}>
          <p>Sudah punya akun? <a href="/login" className={styles.link}>Masuk di sini</a></p>
        </div>
      </div>
    </div>
  );
}