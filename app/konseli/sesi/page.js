'use client';
import styles from './sesi.module.css';
import { Video, Mic, MicOff, VideoOff, MessageSquare, PhoneMissed, Shield } from 'lucide-react';
import { useState } from 'react';

export default function SesiKonseli() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([
    { from: 'konselor', text: 'Selamat datang di sesi konseling. Bagaimana perasaan Anda hari ini?', time: '10:00' },
  ]);

  const send = () => {
    if (!msg.trim()) return;
    setMessages(p => [...p, {
      from: 'konseli', text: msg,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }]);
    setMsg('');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sesi Konseling Online</h1>
        <div className={styles.safeLabel}><Shield size={14}/> Sesi Terenkripsi & Anonim</div>
      </div>

      <div className={styles.room}>
        {/* Video Area */}
        <div className={styles.videoArea}>
          <div className={styles.mainVideo}>
            <div className={styles.videoPlaceholder}>
              <Video size={48} className={styles.videoIcon}/>
              <span>Kamera Konselor</span>
              <span className={styles.konselorName}>Dr. Sari Wulandari</span>
            </div>
            <div className={styles.selfVideo}>
              <div className={styles.selfDot}/>
              <span>Anda</span>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={() => setMicOn(p => !p)} className={`${styles.ctrl} ${!micOn ? styles.ctrlOff : ''}`}>
              {micOn ? <Mic size={20}/> : <MicOff size={20}/>}
              <span>{micOn ? 'Mute' : 'Unmute'}</span>
            </button>
            <button onClick={() => setCamOn(p => !p)} className={`${styles.ctrl} ${!camOn ? styles.ctrlOff : ''}`}>
              {camOn ? <Video size={20}/> : <VideoOff size={20}/>}
              <span>{camOn ? 'Stop' : 'Aktifkan'}</span>
            </button>
            <button onClick={() => setChatOpen(p => !p)} className={`${styles.ctrl} ${chatOpen ? styles.ctrlActive : ''}`}>
              <MessageSquare size={20}/>
              <span>Chat</span>
            </button>
            <button className={styles.ctrlEnd}>
              <PhoneMissed size={20}/> Akhiri Sesi
            </button>
          </div>
        </div>

        {/* Chat */}
        {chatOpen && (
          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>Pesan Sesi</div>
            <div className={styles.chatMessages}>
              {messages.map((m, i) => (
                <div key={i} className={`${styles.bubble} ${m.from === 'konseli' ? styles.bubbleMe : styles.bubbleThem}`}>
                  <span className={styles.bubbleText}>{m.text}</span>
                  <span className={styles.bubbleTime}>{m.time}</span>
                </div>
              ))}
            </div>
            <div className={styles.chatInput}>
              <input
                value={msg}
                onChange={e => setMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ketik pesan..."
                className={styles.inputField}
              />
              <button onClick={send} className={styles.sendBtn}>Kirim</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
