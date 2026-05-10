import Link from 'next/link';

export default function PanduanAplikasi() {
  return (
    <div className="fade-in" style={{ padding: '40px 5%', maxWidth: '800px', margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a56db' }}>Panduan Penggunaan Aplikasi</h1>
        <p style={{ fontSize: '1.1rem' }}>Pelajari cara menggunakan Mind Shield untuk mendukung kesejahteraan mentalmu.</p>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#0e9f6e', marginBottom: '12px' }}>1. Mendaftar dan Melengkapi Profil</h3>
        <p>Gunakan NISN atau email sekolah untuk mendaftar. Pastikan data yang dimasukkan benar agar konselor dapat menghubungimu.</p>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#0e9f6e', marginBottom: '12px' }}>2. Melakukan Screening Mandiri</h3>
        <p>Sebelum sesi konseling, kamu perlu mengisi instrumen ISAS dan Core Beliefs di menu Screening. Ini akan membantu konselor memahami kondisimu.</p>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#0e9f6e', marginBottom: '12px' }}>3. Jadwal dan Sesi Konseling</h3>
        <p>Kamu dapat melihat jadwal yang telah disepakati di menu Jadwal Konseling. Saat waktunya tiba, masuk ke menu Sesi Online untuk melakukan tele-counseling.</p>
      </div>

      <div className="card" style={{ background: '#FFF0F3', borderColor: '#EF476F' }}>
        <h3 style={{ color: '#EF476F', marginBottom: '12px' }}>Kondisi Darurat (Safety Planning)</h3>
        <p style={{ marginBottom: '16px' }}>Jika kamu memiliki dorongan kuat untuk melukai diri sendiri dan butuh bantuan segera, silakan hubungi kontak darurat berikut:</p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontWeight: '500' }}>
          <li>Layanan Gawat Darurat: 112</li>
          <li>Hotline Kesehatan Jiwa Kemenkes: 119 ext 8</li>
          <li>Layanan Psikologi Save Yourselves: LINE @saveyourselves</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/" className="btn-outline">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}