'use client';

import { useState } from 'react';
import s from '../../shared.module.css';

const schedules = [
  { konseli: 'Sarah M.', date: '16 Apr 2026', time: '14:00 - 15:00', topic: 'Restrukturisasi Kognitif', status: 'Dikonfirmasi' },
  { konseli: 'Dika M.', date: '16 Apr 2026', time: '10:00 - 11:00', topic: 'Evaluasi Tugas Rumah', status: 'Dikonfirmasi' },
  { konseli: 'Rina K.', date: '18 Apr 2026', time: '09:00 - 10:00', topic: 'Sesi Pertama - Asesmen', status: 'Menunggu' },
  { konseli: 'Andi T.', date: '17 Apr 2026', time: '13:00 - 14:00', topic: 'Respons Krisis & Follow-Up', status: 'Menunggu' },
];

export default function KonselorJadwal() {
  const [statuses, setStatuses] = useState(schedules.map(sc => sc.status));

  const confirm = (i) => {
    const copy = [...statuses];
    copy[i] = 'Dikonfirmasi';
    setStatuses(copy);
  };

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Kelola Jadwal Sesi</h1>
      <p className={s.pageDesc}>Konfirmasi atau atur ulang pengajuan jadwal dari konseli Anda.</p>

      <div className="card">
        <table className={s.table}>
          <thead>
            <tr>
              <th>Konseli</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Topik Sesi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((sc, i) => (
              <tr key={i}>
                <td style={{fontWeight: 500}}>{sc.konseli}</td>
                <td>{sc.date}</td>
                <td><span className={s.scheduleTime}>{sc.time}</span></td>
                <td>{sc.topic}</td>
                <td><span className={`${s.badge} ${statuses[i] === 'Dikonfirmasi' ? s.badgeGreen : s.badgeYellow}`}>{statuses[i]}</span></td>
                <td>
                  {statuses[i] === 'Menunggu' ? (
                    <div style={{display: 'flex', gap: 8}}>
                      <button className="btn-primary" onClick={() => confirm(i)} style={{padding: '6px 14px', fontSize: '0.85rem'}}>Konfirmasi</button>
                      <button className={s.btnSecondary} style={{padding: '6px 14px', fontSize: '0.85rem'}}>Tolak</button>
                    </div>
                  ) : (
                    <span style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>✓ Terkonfirmasi</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}