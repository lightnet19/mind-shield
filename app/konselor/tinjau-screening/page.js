'use client';

import s from '../../shared.module.css';

const screenings = [
  { id: '#1032', name: 'Sarah M.', date: '12 Apr 2026', risk: 'Menengah', status: 'Baru', score: 18 },
  { id: '#1029', name: 'Andi T.', date: '11 Apr 2026', risk: 'Tinggi', status: 'Baru', score: 28 },
  { id: '#1035', name: 'Rina K.', date: '13 Apr 2026', risk: 'Rendah', status: 'Baru', score: 8 },
  { id: '#1028', name: 'Dika M.', date: '9 Apr 2026', risk: 'Menengah', status: 'Ditinjau', score: 15 },
  { id: '#1025', name: 'Lina S.', date: '7 Apr 2026', risk: 'Rendah', status: 'Ditinjau', score: 6 },
];

function riskBadge(risk) {
  if (risk === 'Tinggi') return `${s.badge} ${s.badgeRed}`;
  if (risk === 'Menengah') return `${s.badge} ${s.badgeYellow}`;
  return `${s.badge} ${s.badgeGreen}`;
}

export default function TinjauScreening() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Tinjau Screening & Tingkat Risiko</h1>
      <p className={s.pageDesc}>Daftar form screening terbaru dari konseli yang perlu Anda tinjau.</p>

      <div className={`${s.alertBox} ${s.alertDanger}`}>
        ⚠️ <strong>Perhatian:</strong> 1 konseli terdeteksi <strong>Risiko Tinggi</strong>. Segera lakukan tinjauan dan pertimbangkan respons krisis/referral.
      </div>

      <div className="card">
        <table className={s.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Konseli</th>
              <th>Tanggal</th>
              <th>Skor</th>
              <th>Tingkat Risiko</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {screenings.map((sc, i) => (
              <tr key={i}>
                <td style={{color: 'var(--text-muted)'}}>{sc.id}</td>
                <td style={{fontWeight: 500}}>{sc.name}</td>
                <td>{sc.date}</td>
                <td style={{fontWeight: 600}}>{sc.score}/35</td>
                <td><span className={riskBadge(sc.risk)}>{sc.risk}</span></td>
                <td><span className={`${s.badge} ${sc.status === 'Baru' ? s.badgeBlue : s.badgeGray}`}>{sc.status}</span></td>
                <td>
                  <button className="btn-primary" style={{padding: '6px 14px', fontSize: '0.85rem',
                    backgroundColor: sc.risk === 'Tinggi' ? 'var(--alert)' : 'var(--primary)'}}>
                    {sc.risk === 'Tinggi' ? 'Respons Krisis' : 'Tinjau Detail'}
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