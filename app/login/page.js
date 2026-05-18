'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { User, Stethoscope, ShieldCheck, ArrowRight, LogIn } from 'lucide-react';

const ROLES = [
  {
    id: 'konseli',
    label: 'Konseli',
    description: 'Saya ingin mendapatkan layanan konseling',
    icon: User,
    color: '#07689F',
    path: '/konseli/dashboard',
  },
  {
    id: 'konselor',
    label: 'Konselor',
    description: 'Saya adalah konselor / tenaga profesional',
    icon: Stethoscope,
    color: '#4F8A8B',
    path: '/konselor/dashboard',
  },
  {
    id: 'admin',
    label: 'Admin',
    description: 'Saya adalah administrator sistem',
    icon: ShieldCheck,
    color: '#6C3483',
    path: '/admin/dashboard',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!selectedRole) return;
    setLoading(true);
    const role = ROLES.find((r) => r.id === selectedRole);
    setTimeout(() => {
      router.push(role.path);
    }, 800);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <Link href="/">
            <Image
              src="/logo-mindshield-transparent.png"
              alt="Logo Mind Shield"
              width={64}
              height={64}
              className={styles.logo}
            />
          </Link>
          <h1>Selamat Datang</h1>
          <p>Pilih peran Anda untuk melanjutkan</p>
        </div>

        <div className={styles.roleGrid}>
          {ROLES.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <button
                key={role.id}
                className={`${styles.roleCard} ${isSelected ? styles.roleCardActive : ''}`}
                style={isSelected ? { '--role-color': role.color } : {}}
                onClick={() => setSelectedRole(role.id)}
              >
                <div
                  className={styles.roleIconWrap}
                  style={{ backgroundColor: isSelected ? role.color : undefined }}
                >
                  <Icon size={28} color={isSelected ? '#fff' : role.color} />
                </div>
                <span className={styles.roleLabel}>{role.label}</span>
                <span className={styles.roleDesc}>{role.description}</span>
                {isSelected && <div className={styles.roleCheckmark}>✓</div>}
              </button>
            );
          })}
        </div>

        <button
          className={styles.loginButton}
          onClick={handleLogin}
          disabled={!selectedRole || loading}
        >
          {loading ? (
            <span className={styles.loadingDot} />
          ) : (
            <>
              <LogIn size={20} />
              Masuk Sekarang
            </>
          )}
        </button>

        <div className={styles.loginFooter}>
          <p>
            Belum punya akun?{' '}
            <Link href="/register">Daftar di sini</Link>
          </p>
        </div>
      </div>

      <div className={styles.creditText}>
        Made with Love ❤️ by{' '}
        <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer">
          alfajri
        </a>
      </div>
    </div>
  );
}
