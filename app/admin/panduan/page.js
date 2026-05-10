'use client';
import { useState } from 'react';
import styles from './panduan.module.css';
import { Save, PlusCircle, Trash2, Edit3 } from 'lucide-react';

const initItems = [
  { id: 1, title: 'Cara Mendaftar', content: 'Buka halaman registrasi, isi data diri, pilih peran (Konseli), lalu kirim. Tunggu verifikasi admin dalam 1x24 jam.' },
  { id: 2, title: 'Mengisi Screening CBT', content: 'Masuk ke menu Screening CBT, isi kuesioner ISAS Section I, II, dan Core Beliefs secara jujur. Hasilnya akan ditinjau konselor.' },
  { id: 3, title: 'Jadwal Konseling', content: 'Ajukan jadwal setelah screening selesai. Konselor akan mengonfirmasi slot waktu yang tersedia dalam 24 jam.' },
];

export default function AdminPanduan() {
  const [items, setItems] = useState(initItems);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: '', content: '' });
  const [saved, setSaved] = useState(false);

  const startEdit = (item) => { setEditId(item.id); setForm({ title: item.title, content: item.content }); };
  const saveEdit = () => {
    setItems(prev => prev.map(i => i.id === editId ? { ...i, ...form } : i));
    setEditId(null); setSaved(true); setTimeout(() => setSaved(false), 2000);
  };
  const deleteItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const addNew = () => {
    const newId = Date.now();
    setItems(prev => [...prev, { id: newId, title: 'Judul Baru', content: 'Isi panduan...' }]);
    setEditId(newId); setForm({ title: 'Judul Baru', content: 'Isi panduan...' });
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Kelola Panduan</h1>
          <p className={styles.subtitle}>Edit konten panduan penggunaan yang tampil di aplikasi.</p>
        </div>
        <button onClick={addNew} className={styles.btnAdd}><PlusCircle size={16}/> Tambah Panduan</button>
      </div>
      {saved && <div className={styles.toast}>✅ Perubahan tersimpan!</div>}
      <div className={styles.list}>
        {items.map(item => (
          <div key={item.id} className={styles.card}>
            {editId === item.id ? (
              <div className={styles.editForm}>
                <input className={styles.inputTitle} value={form.title} onChange={e=>setForm(p=>({...p,title:e.target.value}))} placeholder="Judul"/>
                <textarea className={styles.inputContent} rows={4} value={form.content} onChange={e=>setForm(p=>({...p,content:e.target.value}))} placeholder="Isi panduan..."/>
                <div className={styles.editActions}>
                  <button onClick={saveEdit} className={styles.btnSave}><Save size={14}/> Simpan</button>
                  <button onClick={()=>setEditId(null)} className={styles.btnCancel}>Batal</button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.cardActions}>
                    <button onClick={()=>startEdit(item)} className={styles.btnEdit}><Edit3 size={14}/></button>
                    <button onClick={()=>deleteItem(item.id)} className={styles.btnDelete}><Trash2 size={14}/></button>
                  </div>
                </div>
                <p className={styles.cardContent}>{item.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}