'use client';
import styles from './jadwal.module.css';
import { Calendar, Clock, Video, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const jadwalList = [
  { id:1, konselor:'Dr. Sari Wulandari', date:'Senin, 13 Mei 2026', time:'10:00', sesi:'Sesi Ke-4', status:'dikonfirmasi' },
  { id:2, konselor:'Dr. Sari Wulandari', date:'Senin, 20 Mei 2026', time:'10:00', sesi:'Sesi Ke-5', status:'menunggu' },
];

const badgeStyle = {
  dikonfirmasi: { bg:'rgba(14,159,110,.1)', color:'#0e9f6e', label:'Dikonfirmasi' },
  menunggu: { bg:'rgba(245,158,11,.1)', color:'#d97706', label:'Menunggu Konfirmasi' },
  selesai: { bg:'rgba(107,114,128,.1)', color:'#6b7280', label:'Selesai' },
};

export default function KonseliJadwal() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ date:'', time:'', notes:'' });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Jadwal Konseling</h1>
          <p className={styles.subtitle}>Jadwal sesi konseling Anda bersama konselor.</p>
        </div>
        <button onClick={() => setShowForm(p => !p)} className={styles.btnAdd}>
          <Plus size={16}/> Ajukan Jadwal
        </button>
      </div>

      {submitted && (
        <div className={styles.successAlert}>
          <CheckCircle size={16}/> Permintaan jadwal berhasil dikirim! Konselor akan mengonfirmasi dalam 24 jam.
        </div>
      )}

      {showForm && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Ajukan Jadwal Baru</h2>
          <form onSubmit={submit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Tanggal</label>
              <input type="date" required className={styles.input} value={form.date} onChange={e=>setForm(p=>({...p,date:e.target.value}))}/>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Waktu</label>
              <input type="time" required className={styles.input} value={form.time} onChange={e=>setForm(p=>({...p,time:e.target.value}))}/>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Catatan (opsional)</label>
              <textarea rows={3} className={styles.textarea} placeholder="Sampaikan hal yang ingin didiskusikan..." value={form.notes} onChange={e=>setForm(p=>({...p,notes:e.target.value}))}/>
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.btnSubmit}>Kirim Permintaan</button>
              <button type="button" onClick={() => setShowForm(false)} className={styles.btnCancel}>Batal</button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.sectionLabel}>Jadwal Mendatang</div>
      <div className={styles.list}>
        {jadwalList.map(j => {
          const st = badgeStyle[j.status];
          return (
            <div key={j.id} className={styles.card}>
              <div className={styles.dateBlock}>
                <Calendar size={18} className={styles.calIcon}/>
                <div>
                  <div className={styles.dateText}>{j.date}</div>
                  <div className={styles.timeText}><Clock size={12}/> {j.time} WIB</div>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.konselorName}>{j.konselor}</div>
                <div className={styles.sesiTag}><Video size={13}/> {j.sesi}</div>
              </div>
              <span className={styles.badge} style={{ background: st.bg, color: st.color }}>{st.label}</span>
              {j.status === 'dikonfirmasi' && (
                <button className={styles.btnJoin}><Video size={14}/> Masuk Sesi</button>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.infoNote}>
        <AlertCircle size={16}/>
        <span>Ajukan jadwal minimal <strong>1 hari sebelumnya</strong>. Konselor akan mengonfirmasi ketersediaan waktu.</span>
      </div>
    </div>
  );
}
