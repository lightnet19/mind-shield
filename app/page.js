import Link from 'next/link';
import Image from 'next/image';
import { Shield, ArrowUp } from 'lucide-react';
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src="/logo-mindshield-transparent.png" alt="Mind Shield Logo" width={40} height={40} />
            <span className={styles.brandName}>Mind Shield</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="/#fitur" className={styles.navLink}>Fitur</Link>
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
              src="/hero_image.png" 
              alt="Ilustrasi Dukungan Mental Pelajar" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className={styles.features}>
        <div className={styles.featuresHeader}>
          <span className={styles.featuresTag}>Fitur Utama</span>
          <h2 className={styles.featuresTitle}>Solusi Berbasis Bukti</h2>
        </div>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Shield size={32} />
            </div>
            <h3 className={styles.featureCardTitle}>Screening Psikologis</h3>
            <p className={styles.featureCardText}>
              Identifikasi tingkat kerentanan emosional dan pemikiran negatif melalui kuesioner terstandar CBT.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 8v4l3 3"></path></svg>
            </div>
            <h3 className={styles.featureCardTitle}>Restrukturisasi Kognitif</h3>
            <p className={styles.featureCardText}>
              Pahami dan ubah core beliefs (keyakinan inti) negatif yang memicu tindakan self-injury.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
            </div>
            <h3 className={styles.featureCardTitle}>Tele-Counseling</h3>
            <p className={styles.featureCardText}>
              Ruang aman untuk terhubung dengan konselor profesional secara anonim dan privat.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className={styles.featureCardTitle}>Panduan Keselamatan</h3>
            <p className={styles.featureCardText}>
              Prosedur darurat dan safety plan yang dapat diakses cepat ketika krisis melanda.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src="/logo-mindshield-transparent.png" alt="Mind Shield Logo" width={32} height={32} />
            <span className={styles.footerBrand}>Mind Shield</span>
          </div>
          <p className={styles.footerText}>
            Platform tele-counseling yang aman dan terpercaya, membantu Anda mengenali dan mengatasi pikiran negatif.
          </p>
          
          <Link href="/" className={styles.backToTop}>
            <ArrowUp size={20} />
            <span>Kembali ke Atas</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}