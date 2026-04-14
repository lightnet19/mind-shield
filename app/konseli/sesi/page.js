'use client';

import s from '../../shared.module.css';
import { Video, Mic, PhoneOff } from 'lucide-react';

export default function Sesi() {
  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Ruang Sesi Konseling Online</h1>
      <p className={s.pageDesc}>Sesi CBT bersama Konselor Budi H. — Restrukturisasi Kognitif</p>

      <div className={s.sessionGrid}>
        <div>
          <div className={s.videoPlaceholder}>
            <Video size={48} />
            <span>Video Call akan dimulai saat sesi dimulai</span>
            <div style={{display: 'flex', gap: 12, marginTop: 16}}>
              <button className="btn-primary" style={{borderRadius: 50, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8}}>
                <Mic size={18} /> Mikrofon
              </button>
              <button className="btn-primary" style={{borderRadius: 50, padding: '12px 20px', backgroundColor: 'var(--alert)', display: 'flex', alignItems: 'center', gap: 8}}>
                <PhoneOff size={18} /> Akhiri
              </button>
            </div>
          </div>

          <div className={`${s.alertBox} ${s.alertWarning}`} style={{marginTop: 16}}>
            ⏰ Sesi akan dimulai pada <strong>16 April 2026, 14:00 WIB</strong>. Pastikan koneksi internet Anda stabil.
          </div>
        </div>

        <div className={`card ${s.chatBox}`}>
          <h4 style={{padding: '12px 16px', borderBottom: '1px solid var(--border)', color: 'var(--secondary)'}}>💬 Chat Sesi</h4>
          <div className={s.chatMessages}>
            <div className={`${s.chatBubble} ${s.chatBubbleOther}`}>
              Halo Sarah, selamat datang di sesi ke-2 kita. Bagaimana perasaan Anda hari ini?
            </div>
            <div className={`${s.chatBubble} ${s.chatBubbleUser}`}>
              Halo pak Budi. Saya masih sering merasa cemas, tapi sudah lebih baik dari minggu lalu.
            </div>
            <div className={`${s.chatBubble} ${s.chatBubbleOther}`}>
              Itu kemajuan yang bagus. Mari kita coba identifikasi pola pikiran yang muncul saat Anda cemas...
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