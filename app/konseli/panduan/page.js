import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export default function PanduanConsent() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Panduan & Informed Consent</h1>
        <p>Harap baca dengan teliti sebelum memulai sesi konseling Anda.</p>
      </div>

      <div className="grid">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <FileText size={24} color="var(--primary)" />
            <h3>Informed Consent</h3>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <p style={{ marginBottom: '12px' }}>Dengan menggunakan layanan Mind Shield, Anda menyetujui hal-hal berikut:</p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Kerahasiaan:</strong> Semua informasi yang Anda bagikan dalam sesi konseling akan dijaga kerahasiaannya oleh konselor, kecuali jika ada ancaman bahaya bagi diri sendiri atau orang lain.</li>
              <li><strong>Sifat Layanan:</strong> Layanan ini bertujuan memberikan dukungan emosional dan intervensi berbasis Cognitive Behavioral Therapy (CBT), bukan pengganti penanganan medis kedaruratan psikiatri.</li>
              <li><strong>Partisipasi Aktif:</strong> Keberhasilan konseling sangat bergantung pada keterbukaan dan komitmen Anda dalam mengerjakan penugasan terapeutik (seperti jurnal emosi).</li>
              <li><strong>Batasan Waktu:</strong> Sesi konseling dilakukan sesuai jadwal yang telah disepakati bersama konselor.</li>
            </ul>
          </div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', background: 'var(--background)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
            <input type="checkbox" style={{ marginTop: '4px', width: '18px', height: '18px' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Saya telah membaca, memahami, dan menyetujui seluruh ketentuan Informed Consent di atas.</span>
          </label>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary">Simpan Persetujuan</button>
          </div>
        </div>

        <div className="card" style={{ borderColor: 'var(--alert)', background: '#FFF0F3' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <AlertTriangle size={24} color="var(--alert)" />
            <h3 style={{ color: 'var(--alert)' }}>Safety Planning (Prosedur Darurat)</h3>
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text-main)' }}>
            Jika Anda merasa tidak aman, memiliki keinginan kuat untuk melukai diri sendiri (self-injury), atau pikiran bunuh diri, <strong>segera hubungi kontak darurat berikut:</strong>
          </p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', fontWeight: '500' }}>
            <li>Layanan Gawat Darurat (Ambulans/Polisi): 112 / 119</li>
            <li>Hotline Kesehatan Jiwa Kemenkes: 119 ext 8</li>
            <li>Save Yourselves (Layanan Psikologi): LINE @saveyourselves</li>
            <li>Kontak Darurat Pribadi: <input type="text" placeholder="Masukkan Nama & No. HP Keluarga/Teman" style={{ marginTop: '8px', width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
