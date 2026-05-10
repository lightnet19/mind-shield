'use client';
import styles from './jadwal.module.css';
import { Calendar, Clock, Plus, CheckCircle, XCircle, Video } from 'lucide-react';
import { useState } from 'react';

const initJadwal = [
  { id:1, konseli:'Andi Pratama', date:'10 Mei 2026', time:'10:00', type:'Sesi Ke-4', status:'terjadwal' },
  { id:2, konseli:'Budi Santoso', date:'10 Mei 2026', time:'13:00', type:'Sesi Ke-2', status:'terjadwal' },
  { id:3, konseli:'Rina Lestari', date:'11 Mei 2026', time:'09:00', type:'Sesi Ke-6 (Akhir)', status:'menunggu' },
  { id:4, konseli:'Fajar Maulana', date:'12 Mei 2026', time:'14:00', type:'Sesi Ke-3', status:'terjadwal' },
];

export default function KonselorJadwal() {
  const [jadwal, setJadwal] = useState(initJadwal);
  const confirm = (id) => setJadwal(p => p.map(j => j.id===id ? {...j, status:'dikonfirmasi'} : j));
  const cancel = (id) => setJadwal(p => p.map(j => j.id===id ? {...j, status:'dibatalkan'} : j));

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Jadwal Sesi</h1>
          <p className={styles.subtitle}>Jadwal konseling mendatang dan permintaan yang perlu dikonfirmasi.</p>
        </div>
        <button className={styles.btnAdd}><Plus size={16}/> Buat Jadwal</button>
      </div>

      <div className={styles.list}>
        {jadwal.map(j => (
          <div key={j.id} className={`${styles.card} ${j.status==='dibatalkan'?styles.cardCancelled:''}`}>
            <div className={styles.dateBox}>
              <Calendar size={20} className={styles.dateIcon}/>
              <div>
                <div className={styles.dateText}>{j.date}</div>
                <div className={styles.timeText}><Clock size={12}/> {j.time}</div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.konseli}>{j.konseli}</div>
              <div className={styles.sessionType}><Video size={13}/> {j.type}</div>
            </div>
            <span className={`${styles.badge} ${styles['b_'+j.status.replace(' ','_')]}`}>{j.status}</span>
            <div className={styles.actions}>
              {j.status === 'menunggu' && (
                <>
                  <button onClick={()=>confirm(j.id)} className={styles.btnConfirm}><CheckCircle size={14}/> Konfirmasi</button>
                  <button onClick={()=>cancel(j.id)} className={styles.btnCancel}><XCircle size={14}/> Tolak</button>
                </>
              )}
              {j.status === 'dikonfirmasi' && <button className={styles.btnJoin}><Video size={14}/> Masuk Sesi</button>}
              {j.status === 'terjadwal' && <button onClick={()=>confirm(j.id)} className={styles.btnConfirm}><CheckCircle size={14}/> Konfirmasi</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
