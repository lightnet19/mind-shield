'use client';

import s from '../../shared.module.css';

const patients = [
  { name: 'Sarah M.', sesi: '2 / 6', status: 'Aktif', risk: 'Menengah', lastActivity: 'Jurnal: 12 Apr', thought: 'All-or-Nothing Thinking' },
  { name: 'Andi T.', sesi: '1 / 6', status: 'Krisis', risk: 'Tinggi', lastActivity: 'Screening: 11 Apr', thought: 'Catastrophizing' },
  { name: 'Dika M.', sesi: '3 / 6', status: 'Aktif', risk: 'Rendah', lastActivity: 'Sesi: 10 Apr', thought: 'Mind Reading' },
  { name: 'Rina K.', sesi: '1 / 6', status: 'Menunggu', risk: 'Rendah', lastActivity: 'Screening: 13 Apr', thought: '-' },
  { name: 'Lina S.', sesi: '5 / 6', status: 'Aktif', risk: 'Rendah', lastActivity: 'Jurnal: 9 Apr', thought: 'Overgeneralization' },
  { name: 'Dewi R.', sesi: '6 / 6', status: 'Selesai', risk: 'Rendah', lastActivity: 'Evaluasi: 8 Apr', thought: '-' },
];

function statusBadge(st) {
  if (st === 'Krisis') return `${s.badge} ${s.badgeRed}`;
  if (st === 'Aktif') return `${s.badge} ${s.badgeGreen}`;
  if (st === 'Menunggu') return `${s.badge} ${s.badgeYellow}`;
  return `${s.badge} ${s.badgeGray}`;
}

export default function Pasien() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Daftar Konseli</h1>
      <p className={s.pageDesc}>Seluruh konseli yang sedang dalam proses terapi CBT bersama Anda.</p>

      <div className="card">
        <table className={s.table}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Progres Sesi</th>
              <th>Risiko</th>
              <th>Distorsi Kognitif</th>
              <th>Aktivitas Terakhir</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, i) => (
              <tr key={i}>
                <td style={{fontWeight: 500}}>{p.name}</td>
                <td>{p.sesi}</td>
                <td><span className={p.risk === 'Tinggi' ? `${s.badge} ${s.badgeRed}` : p.risk === 'Menengah' ? `${s.badge} ${s.badgeYellow}` : `${s.badge} ${s.badgeGreen}`}>{p.risk}</span></td>
                <td style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{p.thought}</td>
                <td style={{fontSize: '0.9rem'}}>{p.lastActivity}</td>
                <td><span className={statusBadge(p.status)}>{p.status}</span></td>
                <td>
                  <button className="btn-primary" style={{padding: '6px 14px', fontSize: '0.85rem'}}>
                    Lihat Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}