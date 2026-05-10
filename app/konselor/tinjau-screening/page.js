import { ClipboardList, Brain, AlertTriangle } from 'lucide-react';

export default function TinjauScreening() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Tinjau Hasil Screening</h1>
        <p>Analisis hasil ISAS dan Core Beliefs dari konseli sebelum memulai sesi.</p>
      </div>

      <div className="grid">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Ahmad Maulana</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Siswa Kelas 11 IPA 2 | ID: KNSL-0921</p>
            </div>
            <span style={{ background: '#FFF0F3', color: 'var(--alert)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertTriangle size={16} /> Risiko Tinggi (Self-Injury Aktif)
            </span>
          </div>

          <div className="grid">
            <div style={{ background: 'var(--background)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--secondary)' }}>
                <ClipboardList size={20} /> Hasil ISAS (Ringkasan)
              </h4>
              <ul style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Riwayat:</strong> Cutting (Sering), Mencubit parah (Kadang)</li>
                <li><strong>Usia Mulai:</strong> 15 Tahun</li>
                <li><strong>Fungsi Dominan:</strong> Melepaskan tekanan emosional (Skor: 2), Menghukum diri sendiri (Skor: 2)</li>
              </ul>
              <button className="btn-outline" style={{ marginTop: '16px', width: '100%', fontSize: '0.9rem', padding: '8px' }}>Lihat Detail ISAS</button>
            </div>

            <div style={{ background: 'var(--background)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--accent)' }}>
                <Brain size={20} /> Core Beliefs Terkuat
              </h4>
              <ul style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>1. "Saya pada dasarnya cacat atau rusak." (Skor: 5/5)</li>
                <li>2. "Saya harus selalu sempurna agar diterima." (Skor: 4/5)</li>
                <li>3. "Emosi saya terlalu kuat dan tidak bisa dikendalikan." (Skor: 4/5)</li>
              </ul>
              <button className="btn-outline" style={{ marginTop: '16px', width: '100%', fontSize: '0.9rem', padding: '8px' }}>Lihat Detail Core Beliefs</button>
            </div>
          </div>
          
          <div style={{ marginTop: '24px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <h4 style={{ marginBottom: '12px' }}>Catatan Pra-Sesi Konselor</h4>
            <textarea rows="4" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="Tulis catatan analisis awal untuk persiapan sesi CBT..."></textarea>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button className="btn-primary">Simpan Catatan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}