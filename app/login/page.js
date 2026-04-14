import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={`card fade-in ${styles.loginCard}`}>
        <div className={styles.header}>
          <div className={styles.logo}>MS</div>
          <h2>Selamat Datang Kembali</h2>
          <p className={styles.textMuted}>Masuk ke portal perlindungan mental Anda</p>
        </div>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="nama@email.com" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Kata Sandi</label>
            <input type="password" placeholder="••••••••" required className={styles.input} />
          </div>
          
          <div className={styles.roleSelect}>
            <label>Masuk Sebagai:</label>
            <select className={styles.input}>
              <option value="konseli">Konseli (Klien)</option>
              <option value="konselor">Konselor</option>
              <option value="admin">Admin Website</option>
            </select>
          </div>
          
          <div className={styles.actions}>
            {/* The actual routing would depend on auth state, using Link for mockup flow */}
            <Link href="/konseli/dashboard" className={`btn-primary ${styles.fullWidth}`}>
              Masuk
            </Link>
          </div>
        </form>
        
        <div className={styles.footer}>
          <p>Belum punya akun? <Link href="/register" className={styles.link}>Daftar sebagai Konseli</Link></p>
        </div>
      </div>
    </div>
  );
}