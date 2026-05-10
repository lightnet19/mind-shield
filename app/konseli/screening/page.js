import { ClipboardList, Brain, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ScreeningOverview() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Screening Mandiri</h1>
        <p>Selesaikan instrumen berikut agar konselor dapat memahami kondisimu dengan lebih baik.</p>
      </div>

      <div className="grid">
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: '#E8F4FD', padding: '12px', borderRadius: '12px' }}>
              <ClipboardList size={28} color="var(--secondary)" />
            </div>
            <h3>ISAS (Inventory of Statements About Self-Injury)</h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', flex: 1 }}>
            Evaluasi riwayat dan frekuensi perilaku menyakiti diri sendiri serta identifikasi fungsi atau alasan di baliknya. Terdiri dari Bagian I dan Bagian II.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--alert)' }}>Belum Dikerjakan</span>
            <Link href="/konseli/screening/isas" className="btn-primary" style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Mulai ISAS <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: '#F0FFF4', padding: '12px', borderRadius: '12px' }}>
              <Brain size={28} color="var(--accent)" />
            </div>
            <h3>Core Beliefs (Keyakinan Inti)</h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', flex: 1 }}>
            Identifikasi pikiran atau keyakinan negatif mendalam tentang diri sendiri, orang lain, dan dunia yang mungkin memicu perilaku self-injury.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Terkunci (Selesaikan ISAS)</span>
            <button className="btn-outline" disabled style={{ padding: '8px 16px', opacity: 0.5, cursor: 'not-allowed' }}>
              Mulai Core Beliefs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
