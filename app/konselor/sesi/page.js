'use client';

import s from '../../shared.module.css';
import { Video, Mic, PhoneOff } from 'lucide-react';

export default function KonselorSesi() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Ruang Konseling Online</h1>
      <p className={s.pageDesc}>Sesi CBT aktif bersama Konseli Sarah M. — Restrukturisasi Kognitif</p>

      <div className={s.sessionGrid}>
        <div>
          <div className={s.videoPlaceholder}>
            <Video size={48} />
            <span>Menunggu Konseli bergabung...</span>
            <div style={{display: 'flex', gap: 12, marginTop: 16}}>
              <button className="btn-primary" style={{borderRadius: 50, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8}}>
                <Mic size={18} /> Mikrofon
              </button>
              <button className="btn-primary" style={{borderRadius: 50, padding: '12px 20px', backgroundColor: 'var(--alert)', display: 'flex', alignItems: 'center', gap: 8}}>
                <PhoneOff size={18} /> Akhiri Sesi
              </button>
            </div>
          </div>

          <div className="card" style={{marginTop: 16}}>
            <h4 style={{marginBottom: 12, color: 'var(--secondary)'}}>📋 Catatan Sesi (Konselor)</h4>
            <textarea className={s.textarea} placeholder="Tulis catatan pengamatan selama sesi konseling..." style={{minHeight: 100}} />
            <button className="btn-primary" style={{marginTop: 12, padding: '8px 20px', fontSize: '0.9rem'}}>Simpan Catatan</button>
          </div>
        </div>

        <div className={`card ${s.chatBox}`}>
          <h4 style={{padding: '12px 16px', borderBottom: '1px solid var(--border)', color: 'var(--secondary)'}}>💬 Chat Sesi</h4>
          <div className={s.chatMessages}>
            <div className={`${s.chatBubble} ${s.chatBubbleUser}`}>
              Halo Sarah, selamat datang di sesi ke-2. Bagaimana minggu ini?
            </div>
            <div className={`${s.chatBubble} ${s.chatBubbleOther}`}>
              Halo pak Budi. Saya masih sering merasa cemas, tapi sudah lebih baik dari minggu lalu.
            </div>
            <div className={`${s.chatBubble} ${s.chatBubbleUser}`}>
              Bagus sekali. Mari kita bahas teknik restrukturisasi pikiran yang sudah kita pelajari. Apakah ada situasi spesifik minggu ini?
            </div>
          </div>
          <div className={s.chatInput}>
            <input placeholder="Ketik pesan..." />
            <button className="btn-primary" style={{padding: '10px 16px'}}>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}