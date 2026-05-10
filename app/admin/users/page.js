'use client';
import { useState } from 'react';
import styles from './users.module.css';
import { Search, Check, X, Filter, UserPlus, Shield, User } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Andi Pratama', email: 'andi@email.com', role: 'konseli', status: 'pending', joined: '10 Mei 2026' },
  { id: 2, name: 'Rina Lestari', email: 'rina@email.com', role: 'konseli', status: 'pending', joined: '10 Mei 2026' },
  { id: 3, name: 'Dr. Sari Wulandari', email: 'sari@email.com', role: 'konselor', status: 'aktif', joined: '5 Mei 2026' },
  { id: 4, name: 'Budi Santoso', email: 'budi@email.com', role: 'konseli', status: 'aktif', joined: '3 Mei 2026' },
  { id: 5, name: 'Dewi Ayu', email: 'dewi@email.com', role: 'konseli', status: 'ditolak', joined: '1 Mei 2026' },
  { id: 6, name: 'Dr. Hasan R.', email: 'hasan@email.com', role: 'konselor', status: 'aktif', joined: '28 Apr 2026' },
];

export default function AdminUsers() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('semua');
  const [users, setUsers] = useState(mockUsers);

  const filtered = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'semua' || u.status === filter || u.role === filter;
    return matchSearch && matchFilter;
  });

  const updateStatus = (id, newStatus) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: newStatus } : u));
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Kelola Akun & Verifikasi</h1>
          <p className={styles.subtitle}>Verifikasi pendaftaran baru dan kelola status pengguna.</p>
        </div>
        <div className={styles.headerStats}>
          <span className={styles.chip}>Pending: {users.filter(u=>u.status==='pending').length}</span>
          <span className={`${styles.chip} ${styles.chipGreen}`}>Aktif: {users.filter(u=>u.status==='aktif').length}</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Cari nama atau email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          {['semua','pending','aktif','konselor','konseli'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nama</th><th>Email</th><th>Peran</th><th>Status</th><th>Bergabung</th><th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan={6} className={styles.empty}>Tidak ada data ditemukan.</td></tr>
            )}
            {filtered.map(u => (
              <tr key={u.id}>
                <td>
                  <div className={styles.nameCell}>
                    <div className={styles.avatar}>{u.name[0]}</div>
                    <span>{u.name}</span>
                  </div>
                </td>
                <td className={styles.emailCell}>{u.email}</td>
                <td>
                  <span className={`${styles.roleBadge} ${u.role === 'konselor' ? styles.roleKonselor : styles.roleKonseli}`}>
                    {u.role === 'konselor' ? <Shield size={12}/> : <User size={12}/>} {u.role}
                  </span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${styles['status_'+u.status]}`}>
                    {u.status}
                  </span>
                </td>
                <td className={styles.dateCell}>{u.joined}</td>
                <td>
                  <div className={styles.actions}>
                    {u.status === 'pending' && (
                      <>
                        <button onClick={() => updateStatus(u.id, 'aktif')} className={styles.btnApprove} title="Setujui">
                          <Check size={15}/> Setujui
                        </button>
                        <button onClick={() => updateStatus(u.id, 'ditolak')} className={styles.btnReject} title="Tolak">
                          <X size={15}/> Tolak
                        </button>
                      </>
                    )}
                    {u.status === 'aktif' && (
                      <button onClick={() => updateStatus(u.id, 'dinonaktifkan')} className={styles.btnDeact}>
                        Nonaktifkan
                      </button>
                    )}
                    {(u.status === 'ditolak' || u.status === 'dinonaktifkan') && (
                      <button onClick={() => updateStatus(u.id, 'aktif')} className={styles.btnRestore}>
                        Aktifkan
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