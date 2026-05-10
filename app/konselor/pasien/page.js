'use client';
import styles from './pasien.module.css';
import { Search, User, FileBarChart, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const pasienList = [
  { id:1, name:'Andi Pratama', age:17, school:'SMAN 1 Jember', sessions:3, lastSession:'8 Mei 2026', risk:'Sedang', status:'aktif' },
  { id:2, name:'Budi Santoso', age:16, school:'SMAN 2 Jember', sessions:1, lastSession:'9 Mei 2026', risk:'Tinggi', status:'aktif' },
  { id:3, name:'Dewi Ayu', age:15, school:'SMKN 1 Jember', sessions:0, lastSession:'—', risk:'Tinggi', status:'baru' },
  { id:4, name:'Rina Lestari', age:17, school:'SMAN 3 Jember', sessions:5, lastSession:'5 Mei 2026', risk:'Rendah', status:'selesai' },
  { id:5, name:'Fajar Maulana', age:16, school:'MAN Jember', sessions:2, lastSession:'7 Mei 2026', risk:'Sedang', status:'aktif' },
];

const riskColor = { Tinggi:'#ef4444', Sedang:'#f59e0b', Rendah:'#0e9f6e' };
const riskBg = { Tinggi:'rgba(239,68,68,.1)', Sedang:'rgba(245,158,11,.1)', Rendah:'rgba(14,159,110,.1)' };

export default function DaftarPasien() {
  const [search, setSearch] = useState('');
  const filtered = pasienList.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.school.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Daftar Konseli</h1>
          <p className={styles.subtitle}>Kelola dan pantau perkembangan seluruh konseli Anda.</p>
        </div>
        <div className={styles.countChip}>{pasienList.length} konseli terdaftar</div>
      </div>

      <div className={styles.searchBox}>
        <Search size={16} className={styles.searchIcon}/>
        <input
          className={styles.searchInput}
          placeholder="Cari nama atau sekolah..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.list}>
        {filtered.map(p => (
          <div key={p.id} className={styles.card}>
            <div className={styles.cardLeft}>
              <div className={styles.avatar}>{p.name[0]}</div>
              <div className={styles.info}>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.meta}>{p.age} thn · {p.school}</div>
              </div>
            </div>
            <div className={styles.cardMid}>
              <div className={styles.stat}><Calendar size={13}/> {p.sessions} sesi</div>
              <div className={styles.stat}>Terakhir: {p.lastSession}</div>
            </div>
            <div className={styles.cardRight}>
              <span className={styles.riskBadge} style={{ background: riskBg[p.risk], color: riskColor[p.risk] }}>
                Risiko {p.risk}
              </span>
              <span className={`${styles.statusBadge} ${styles['s_'+p.status]}`}>{p.status}</span>
            </div>
            <ChevronRight size={18} className={styles.arrow}/>
          </div>
        ))}
        {filtered.length === 0 && <div className={styles.empty}>Tidak ada konseli ditemukan.</div>}
      </div>
    </div>
  );
}
