'use client';

import { useState } from 'react';
import s from '../../shared.module.css';

const users = [
  { id: 1, name: 'Sarah M.', email: 'sarah@email.com', role: 'Konseli', registered: '5 Apr 2026', status: 'Aktif', verified: true },
  { id: 2, name: 'Andi T.', email: 'andi@email.com', role: 'Konseli', registered: '3 Apr 2026', status: 'Aktif', verified: true },
  { id: 3, name: 'Budi H., S.Psi.', email: 'budi@email.com', role: 'Konselor', registered: '1 Mar 2026', status: 'Aktif', verified: true },
  { id: 4, name: 'Dr. Anita M.', email: 'anita@email.com', role: 'Konselor', registered: '13 Apr 2026', status: 'Menunggu', verified: false },
  { id: 5, name: 'Rina K.', email: 'rina@email.com', role: 'Konseli', registered: '12 Apr 2026', status: 'Menunggu', verified: false },
  { id: 6, name: 'Dewi R.', email: 'dewi@email.com', role: 'Konseli', registered: '1 Feb 2026', status: 'Nonaktif', verified: true },
];

export default function AdminUsers() {
  const [userList, setUserList] = useState(users);

  const verify = (id) => {
    setUserList(prev => prev.map(u => u.id === id ? {...u, verified: true, status: 'Aktif'} : u));
  };

  const deactivate = (id) => {
    setUserList(prev => prev.map(u => u.id === id ? {...u, status: 'Nonaktif'} : u));
  };

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Kelola Akun Pengguna</h1>
      <p className={s.pageDesc}>Verifikasi pendaftaran baru dan kelola hak akses seluruh pengguna sistem.</p>

      <div className={`${s.alertBox} ${s.alertWarning}`}>
        ⏳ <strong>2 akun</strong> menunggu verifikasi pendaftaran (1 Konselor, 1 Konseli).
      </div>

      <div className="card">
        <table className={s.table}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Terdaftar</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((u) => (
              <tr key={u.id}>
                <td style={{fontWeight: 500}}>{u.name}</td>
                <td style={{color: 'var(--text-muted)'}}>{u.email}</td>
                <td><span className={`${s.badge} ${u.role === 'Konselor' ? s.badgeBlue : s.badgeGreen}`}>{u.role}</span></td>
                <td>{u.registered}</td>
                <td>
                  <span className={`${s.badge} ${u.status === 'Aktif' ? s.badgeGreen : u.status === 'Menunggu' ? s.badgeYellow : s.badgeGray}`}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <div style={{display: 'flex', gap: 6}}>
                    {!u.verified && (
                      <button className="btn-primary" onClick={() => verify(u.id)} style={{padding: '6px 12px', fontSize: '0.82rem'}}>
                        ✓ Verifikasi
                      </button>
                    )}
                    {u.status === 'Aktif' && (
                      <button className={s.btnSecondary} onClick={() => deactivate(u.id)} style={{padding: '6px 12px', fontSize: '0.82rem', color: 'var(--alert)'}}>
                        Nonaktifkan
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}