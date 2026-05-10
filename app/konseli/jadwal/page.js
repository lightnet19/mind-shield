import { Calendar, Clock, Video, User } from 'lucide-react';

export default function KonseliJadwal() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Jadwal Konseling</h1>
        <p>Lihat dan atur jadwal sesi konseling online Anda.</p>
      </div>

      <div className="grid">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3>Sesi Mendatang</h3>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--background)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '16px', borderRadius: '12px', textAlign: 'center', minWidth: '100px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>15</div>
              <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>Nov 2026</div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Sesi CBT Tahap 1</h4>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 14:00 - 15:00 WIB</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> Dra. Siti Aminah, M.Psi</span>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Video size={16} /> Gabung Sesi (Belum Dimulai)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}