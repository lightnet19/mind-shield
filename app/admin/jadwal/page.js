'use client';
import styles from './jadwal.module.css';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

const initSlots = [
  { id:1, konselor:'Dr. Sari W.', day:'Senin', time:'09:00–12:00', status:'aktif' },
  { id:2, konselor:'Dr. Hasan R.', day:'Selasa', time:'13:00–16:00', status:'aktif' },
  { id:3, konselor:'Dr. Sari W.', day:'Rabu', time:'09:00–12:00', status:'nonaktif' },
  { id:4, konselor:'Dr. Hasan R.', day:'Kamis', time:'10:00–13:00', status:'aktif' },
];

export default function AdminJadwal() {
  const [slots, setSlots] = useState(initSlots);
  const toggle = (id) => setSlots(prev => prev.map(s => s.id===id ? {...s, status: s.status==='aktif'?'nonaktif':'aktif'} : s));
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Ketersediaan Sistem</h1>
      <p className={styles.subtitle}>Pantau dan kelola slot jadwal konseling yang tersedia.</p>
      <div className={styles.grid}>
        {slots.map(s => (
          <div key={s.id} className={`${styles.card} ${s.status==='nonaktif'?styles.cardInactive:''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>{s.konselor[0]}</div>
              <div><div className={styles.name}>{s.konselor}</div><div className={styles.day}><Calendar size={12}/> {s.day}</div></div>
              <span className={`${styles.badge} ${s.status==='aktif'?styles.badgeOn:styles.badgeOff}`}>{s.status}</span>
            </div>
            <div className={styles.time}><Clock size={14}/> {s.time}</div>
            <button onClick={()=>toggle(s.id)} className={`${styles.btn} ${s.status==='aktif'?styles.btnOff:styles.btnOn}`}>
              {s.status==='aktif'?<><XCircle size={14}/> Nonaktifkan</>:<><CheckCircle size={14}/> Aktifkan</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
