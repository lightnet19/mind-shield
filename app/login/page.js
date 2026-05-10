'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi Login (Akan diganti dengan auth nyata)
    setTimeout(() => {
      if (email === 'admin@mindshield.id') {
        router.push('/admin/dashboard');
      } else if (email === 'konselor@mindshield.id') {
        router.push('/konselor/dashboard');
      } else {
        router.push('/konseli/dashboard');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <Link href="/">
            <Image src="/logo-mindshield-transparent.png" alt="Logo" width={64} height={64} className={styles.logo} />
          </Link>
          <h1>Selamat Datang</h1>
          <p>Masuk untuk mengakses ruang aman Anda</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} size={20} />
              <input
                type="email"
                id="email"
                placeholder="nama@sekolah.sch.id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Kata Sandi</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/forgot-password">Lupa kata sandi?</Link>
          </div>

          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Memproses...' : 'Masuk Sekarang'}
            {!loading && <ArrowRight size={20} />}
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p>Belum punya akun? <Link href="/register">Daftar di sini</Link></p>
        </div>
      </div>
      
      <div className={styles.creditText}>
        Made with Love ❤️ by <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer">alfajri</a>
      </div>
    </div>
  );
}
