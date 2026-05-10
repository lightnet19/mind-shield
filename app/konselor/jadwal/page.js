import { Calendar, Clock, Video, User } from 'lucide-react';

export default function KonselorJadwal() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Jadwal Sesi Konseling</h1>
        <p>Kelola jadwal sesi tele-counseling Anda dengan para konseli.</p>
      </div>

      <div className="grid">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Jadwal Hari Ini</h3>
            <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Atur Ketersediaan Waktu</button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--background)', padding: '20px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Sesi CBT Tahap 1 - Ahmad Maulana</h4>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 14:00 - 15:00 WIB</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--alert)' }}>Status: Menunggu Sesi</span>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Video size={16} /> Mulai Sesi Sekarang
              </button>
            </div>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-muted)' }}>Sesi CBT Tahap 3 - Siti Nurhaliza</h4>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 16:00 - 17:00 WIB</span>
                <span>Telah Selesai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}