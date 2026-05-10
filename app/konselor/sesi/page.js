import { Video, Mic, MicOff, VideoOff, MessageSquare, PhoneMissed, FileText } from 'lucide-react';

export default function SesiKonselingKonselor() {
  return (
    <div className="fade-in" style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Ruang Konseling Online</h1>
          <p>Sesi aktif dengan Ahmad Maulana (KNSL-0921)</p>
        </div>
        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
          <FileText size={18} /> Buka Catatan Sesi
        </button>
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', background: '#1a1a2e' }}>
        <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Main Video Area (Konseli) */}
          <div style={{ color: 'white', textAlign: 'center' }}>
            <UserIconPlaceholder />
            <p style={{ marginTop: '16px', fontSize: '1.2rem' }}>Menunggu Konseli Bergabung...</p>
          </div>

          {/* Picture in Picture (Konselor) */}
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '200px', height: '150px', background: '#2b2d42', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            Kamera Anda
          </div>
        </div>

        {/* Controls */}
        <div style={{ padding: '20px', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button style={controlBtnStyle}><Mic size={24} /></button>
          <button style={controlBtnStyle}><Video size={24} /></button>
          <button style={controlBtnStyle}><MessageSquare size={24} /></button>
          <button style={{ ...controlBtnStyle, background: 'var(--alert)', color: 'white' }}><PhoneMissed size={24} /></button>
        </div>
      </div>
    </div>
  );
}

function UserIconPlaceholder() {
  return (
    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#2b2d42', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
      <Video size={40} color="rgba(255,255,255,0.5)" />
    </div>
  );
}

const controlBtnStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background 0.2s'
};