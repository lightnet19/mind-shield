import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, HeartPulse, BrainCircuit, Lock } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo-mindshield-transparent.png" alt="Mind Shield Logo" width={40} height={40} />
          <span className={styles.brandName}>Mind Shield</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="#fitur" className={styles.navLink}>Fitur</Link>
          <Link href="#tentang" className={styles.navLink}>Tentang CBT</Link>
          <Link href="/login" className="btn-outline">Masuk</Link>
          <Link href="/register" className="btn-primary">Daftar Sekarang</Link>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className="fade-in">
            <h1 className={styles.heroTitle}>
              Ruang Aman untuk <br />
              <span className={styles.highlight}>Pikiran & Perasaanmu</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Mind Shield hadir untuk membantumu mengenali pikiran negatif, mengelola emosi, dan menemukan cara yang lebih sehat dalam menghadapi tekanan melalui pendekatan Cognitive Behavioral Therapy (CBT).
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/register" className={`btn-primary ${styles.btnLg}`}>
                Mulai Perjalananmu <ArrowRight size={20} className={styles.iconRight} />
              </Link>
              <Link href="/panduan-darurat" className={`btn-outline ${styles.btnLg} ${styles.btnAlert}`}>
                Butuh Bantuan Darurat?
              </Link>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <Lock size={24} className={styles.statIcon} />
                <span>100% Rahasia & Aman</span>
              </div>
              <div className={styles.statItem}>
                <ShieldCheck size={24} className={styles.statIcon} />
                <span>Didampingi Konselor Profesional</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.heroImageContainer} slide-up`}>
          {/* We will use a regular img tag for external or base64 if needed, but since it's uploaded to public later, we use Image */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/hero_image.png" 
              alt="Ilustrasi Dukungan Mental Pelajar" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
            <div className={styles.glowEffect}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Bagaimana Mind Shield Membantumu?</h2>
          <p>Langkah demi langkah menuju kesejahteraan mental yang lebih baik.</p>
        </div>
        
        <div className={styles.grid}>
          <div className="card">
            <div className={styles.featureIconWrapper} style={{background: '#E8F4FD', color: '#07689F'}}>
              <BrainCircuit size={32} />
            </div>
            <h3>Screening Mandiri</h3>
            <p>Pahami kondisimu melalui instrumen screening psikologis teruji (ISAS & Core Beliefs) untuk mengenali pemicu dan pola pikiran.</p>
          </div>
          
          <div className="card">
            <div className={styles.featureIconWrapper} style={{background: '#F0FFF4', color: '#22A559'}}>
              <HeartPulse size={32} />
            </div>
            <h3>Sesi Konseling Aman</h3>
            <p>Terhubung dengan konselor sekolah melalui sesi video (tele-counseling) dalam ruang digital yang sepenuhnya rahasia.</p>
          </div>
          
          <div className="card">
            <div className={styles.featureIconWrapper} style={{background: '#FFF0F3', color: '#EF476F'}}>
              <ShieldCheck size={32} />
            </div>
            <h3>Penugasan Terapeutik</h3>
            <p>Latih keterampilan mengelola emosi dengan tugas-tugas CBT terstruktur yang diberikan langsung oleh konselormu.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
