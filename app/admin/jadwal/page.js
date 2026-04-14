'use client';

import s from '../../shared.module.css';

const allSchedules = [
  { konseli: 'Sarah M.', konselor: 'Budi H.', date: '16 Apr 2026', time: '14:00 - 15:00', status: 'Dikonfirmasi' },
  { konseli: 'Dika M.', konselor: 'Budi H.', date: '16 Apr 2026', time: '10:00 - 11:00', status: 'Dikonfirmasi' },
  { konseli: 'Rina K.', konselor: 'Budi H.', date: '18 Apr 2026', time: '09:00 - 10:00', status: 'Menunggu' },
  { konseli: 'Andi T.', konselor: 'Budi H.', date: '17 Apr 2026', time: '13:00 - 14:00', status: 'Menunggu' },
  { konseli: 'Lina S.', konselor: 'Budi H.', date: '20 Apr 2026', time: '15:00 - 16:00', status: 'Dikonfirmasi' },
];

export default function AdminJadwal() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Ketersediaan & Master Jadwal</h1>
      <p className={s.pageDesc}>Pantau seluruh jadwal sesi konseling dalam sistem Mind Shield.</p>

      <div className="card">
        <table className={s.table}>
          <thead>
            <tr>
              <th>Konseli</th>
              <th>Konselor</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allSchedules.map((sc, i) => (
              <tr key={i}>
                <td style={{fontWeight: 500}}>{sc.konseli}</td>
                <td>{sc.konselor}</td>
                <td>{sc.date}</td>
                <td><span className={s.scheduleTime}>{sc.time}</span></td>
                <td><span className={`${s.badge} ${sc.status === 'Dikonfirmasi' ? s.badgeGreen : s.badgeYellow}`}>{sc.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}