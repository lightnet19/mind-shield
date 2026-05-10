import { Users, FileEdit, Plus, Search } from 'lucide-react';

export default function DaftarPasien() {
  return (
    <div className="fade-in">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Daftar Konseli & Penugasan CBT</h1>
          <p>Kelola data konseli dan berikan penugasan terapeutik.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', background: 'white', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: 'var(--radius-full)' }}>
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '8px' }} />
          <input type="text" placeholder="Cari nama atau ID..." style={{ border: 'none', outline: 'none', background: 'transparent' }} />
        </div>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="screening-table" style={{ margin: '0' }}>
            <thead>
              <tr>
                <th>Nama Konseli</th>
                <th>Status Kasus</th>
                <th>Progres CBT</th>
                <th>Penugasan Aktif</th>
                <th style={{ textAlign: 'center' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Ahmad Maulana</strong><br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>KNSL-0921 | Kls 11 IPA 2</span>
                </td>
                <td><span style={{ background: '#FFF0F3', color: '#EF476F', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Risiko Tinggi</span></td>
                <td>Sesi 1 (Identifikasi Masalah)</td>
                <td>Jurnal Restrukturisasi Kognitif (Belum)</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Beri Tugas <Plus size={14} style={{ display: 'inline', marginLeft: '4px' }} /></button>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Siti Nurhaliza</strong><br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>KNSL-0922 | Kls 10 IPS 1</span>
                </td>
                <td><span style={{ background: '#F0FFF4', color: '#22A559', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Stabil</span></td>
                <td>Sesi 3 (Behavioral Activation)</td>
                <td>Latihan Relaksasi (Selesai)</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="btn-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Review <FileEdit size={14} style={{ display: 'inline', marginLeft: '4px' }} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}