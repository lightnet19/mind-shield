import Link from 'next/link';
import Image from 'next/image';
import { Shield } from 'lucide-react';
import styles from './page.module.css';
import logoImg from '../logo-mindshield-transparent.png';
import heroImg from '../hero_image.png';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={logoImg} alt="Mind Shield Logo" width={40} height={40} />
            <span className={styles.brandName}>Mind Shield</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
            <Link href="/panduan" className={styles.navLink}>Panduan Penggunaan Aplikasi</Link>
            <Link href="/login" className={styles.btnNav}>Masuk</Link>
          </div>
        </div>
      </nav>

      {/* Background Decor */}
      <div className={styles.bgDecorLeft}></div>
      <div className={styles.bgDecorRight}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className="fade-in">
            <h1 className={styles.heroTitle}>
              <span className={styles.textBlue}>Mind</span> <span className={styles.textGreen}>Shield</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              Website Self Defense Berbasis Strategi Cognitive Behavioral Therapy untuk Mengurangi Tindakan <span className={styles.textBlue}>Self-Injury</span>
            </h2>
            <div className={styles.divider}></div>
            <p className={styles.heroText}>
              Ruang aman digital untuk membantu siswa mengenali pikiran negatif, mengelola emosi, dan memperoleh dukungan konseling secara aman.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/register" className={styles.btnPrimaryLg}>
                <Shield size={24} className={styles.iconLeft} />
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
        
        <div className={`${styles.heroImageContainer} slide-up`}>
          <div className={styles.imageWrapper}>
            <Image 
              src={heroImg} 
              alt="Ilustrasi Dukungan Mental Pelajar" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
