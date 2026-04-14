'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState('konseli');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi loading sebentar lalu redirect berdasarkan role
    setTimeout(() => {
      if (role === 'konseli') {
        router.push('/konseli/dashboard');
      } else if (role === 'konselor') {
        router.push('/konselor/dashboard');
      } else if (role === 'admin') {
        router.push('/admin/dashboard');
      }
    }, 800);
  };

  return (
    <div className={styles.container}>
      <div className={`card fade-in ${styles.loginCard}`}>
        <div className={styles.header}>
          <div className={styles.logo}>MS</div>
          <h2>Selamat Datang Kembali</h2>
          <p className={styles.textMuted}>Masuk ke portal perlindungan mental Anda</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="nama@email.com" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Kata Sandi</label>
            <input type="password" placeholder="••••••••" className={styles.input} />
          </div>
          
          <div className={styles.roleSelect}>
            <label>Masuk Sebagai:</label>
            <select
              className={styles.input}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="konseli">🧑 Konseli (Klien)</option>
              <option value="konselor">👨‍⚕️ Konselor</option>
              <option value="admin">🛡️ Admin Website</option>
            </select>
          </div>

          {/* Badge preview role yang dipilih */}
          <div className={styles.roleBadge} data-role={role}>
            {role === 'konseli' && '✔ Anda akan masuk sebagai Konseli (Klien CBT)'}
            {role === 'konselor' && '✔ Anda akan masuk sebagai Konselor / Psikolog'}
            {role === 'admin' && '✔ Anda akan masuk sebagai Admin Sistem'}
          </div>
          
          <button
            type="submit"
            className={`btn-primary ${styles.fullWidth}`}
            disabled={loading}
            style={{ marginTop: '12px', padding: '14px', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Masuk...' : 'Masuk ke Dashboard →'}
          </button>
        </form>
        
        <div className={styles.footer}>
          <p>Belum punya akun? <a href="/register" className={styles.link}>Daftar sebagai Konseli</a></p>
        </div>
      </div>
    </div>
  );
}
