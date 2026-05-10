'use client';
import styles from './sesi.module.css';
import { Video, Mic, MicOff, VideoOff, MessageSquare, PhoneMissed, User, Clock } from 'lucide-react';
import { useState } from 'react';

export default function SesiKonselor() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([
    { from: 'konseli', text: 'Selamat pagi, Pak/Bu. Saya sudah siap.', time: '09:58' },
    { from: 'konselor', text: 'Selamat pagi! Baik, kita mulai sesi hari ini ya.', time: '10:00' },
  ]);

  const send = () => {
    if (!msg.trim()) return;
    setMessages(p => [...p, { from: 'konselor', text: msg, time: new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}) }]);
    setMsg('');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Ruang Konseling Online</h1>
        <div className={styles.sessionInfo}>
          <User size={15}/> Andi Pratama &nbsp;·&nbsp; <Clock size={15}/> Sesi Ke-4
        </div>
      </div>

      <div className={styles.room}>
        {/* Video Area */}
        <div className={styles.videoArea}>
          <div className={styles.mainVideo}>
            <div className={styles.videoPlaceholder}>
              <Video size={48} className={styles.videoIcon}/>
              <span>Kamera Konseli</span>
            </div>
            <div className={styles.selfVideo}>
              <User size={20}/>
              <span>Anda</span>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button onClick={()=>setMicOn(p=>!p)} className={`${styles.ctrl} ${!micOn?styles.ctrlOff:''}`} title="Mikrofon">
              {micOn ? <Mic size={20}/> : <MicOff size={20}/>}
            </button>
            <button onClick={()=>setCamOn(p=>!p)} className={`${styles.ctrl} ${!camOn?styles.ctrlOff:''}`} title="Kamera">
              {camOn ? <Video size={20}/> : <VideoOff size={20}/>}
            </button>
            <button onClick={()=>setChatOpen(p=>!p)} className={`${styles.ctrl} ${chatOpen?styles.ctrlActive:''}`} title="Chat">
              <MessageSquare size={20}/>
            </button>
            <button className={styles.ctrlEnd} title="Akhiri Sesi"><PhoneMissed size={20}/> Akhiri</button>
          </div>
        </div>

        {/* Chat Panel */}
        {chatOpen && (
          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>Pesan Sesi</div>
            <div className={styles.chatMessages}>
              {messages.map((m, i) => (
                <div key={i} className={`${styles.bubble} ${m.from==='konselor'?styles.bubbleMe:styles.bubbleThem}`}>
                  <span className={styles.bubbleText}>{m.text}</span>
                  <span className={styles.bubbleTime}>{m.time}</span>
                </div>
              ))}
            </div>
            <div className={styles.chatInput}>
              <input
                value={msg}
                onChange={e=>setMsg(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&send()}
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
