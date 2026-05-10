'use client';

import { useState } from 'react';
import { Search, AlertTriangle, User, Send, CheckCircle } from 'lucide-react';
import styles from './pesan.module.css';

// Mock data eskalasi pesan dari Chatbot
const initialMessages = [
  {
    id: 1,
    konseliName: 'Budi Santoso',
    time: '10:30',
    date: '12 Mei 2026',
    status: 'urgent',
    lastMessage: 'Saya merasa tidak aman saat ini.',
    history: [
      { sender: 'bot', text: 'Halo Budi, apakah ada yang bisa saya bantu hari ini?' },
      { sender: 'konseli', text: 'Saya merasa tidak aman saat ini.' },
      { sender: 'bot', text: 'Saya khawatir dengan keselamatan Anda saat ini. Saya telah menghubungkan Anda dengan konselor.' }
    ]
  },
  {
    id: 2,
    konseliName: 'Siti Aminah',
    time: '09:15',
    date: '12 Mei 2026',
    status: 'pending',
    lastMessage: 'Saya bingung dengan hasil screening saya.',
    history: [
      { sender: 'konseli', text: 'Saya bingung dengan hasil screening saya.' },
      { sender: 'bot', text: 'Pesan Anda memerlukan penanganan langsung dari konselor. Mohon tunggu sebentar.' }
    ]
  },
  {
    id: 3,
    konseliName: 'Ahmad Faisal',
    time: '15:45',
    date: '11 Mei 2026',
    status: 'resolved',
    lastMessage: 'Terima kasih, saya sudah lebih tenang.',
    history: [
      { sender: 'konseli', text: 'Saya merasa kewalahan dengan tugas.' },
      { sender: 'bot', text: 'Pesan Anda memerlukan penanganan langsung dari konselor. Mohon tunggu.' },
      { sender: 'konselor', text: 'Halo Ahmad, mari kita bahas pelan-pelan. Apa yang membuatmu kewalahan?' },
      { sender: 'konseli', text: 'Tugas numpuk dan deadline dekat. Tapi saya sudah buat rencana.' },
      { sender: 'konselor', text: 'Bagus sekali. Pastikan kamu juga istirahat yang cukup.' },
      { sender: 'konseli', text: 'Terima kasih, saya sudah lebih tenang.' }
    ]
  }
];

export default function PesanKonselor() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedChat, setSelectedChat] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedChat) return;

    const updatedChat = {
      ...selectedChat,
      history: [...selectedChat.history, { sender: 'konselor', text: replyText }]
    };

    setMessages(messages.map(m => m.id === selectedChat.id ? updatedChat : m));
    setSelectedChat(updatedChat);
    setReplyText('');
  };

  const markResolved = () => {
    if (!selectedChat) return;
    const updatedChat = { ...selectedChat, status: 'resolved' };
    setMessages(messages.map(m => m.id === selectedChat.id ? updatedChat : m));
    setSelectedChat(updatedChat);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Pesan & Notifikasi Chatbot</h1>
        <p>Tangani eskalasi pesan dari konseli secara langsung</p>
      </div>

      <div className={styles.chatContainer}>
        {/* Sidebar Daftar Pesan */}
        <div className={styles.chatSidebar}>
          <div className={styles.searchBox}>
            <Search size={18} color="#9ca3af" />
            <input type="text" placeholder="Cari konseli..." />
          </div>
          
          <div className={styles.chatList}>
            {messages.map(chat => (
              <div 
                key={chat.id} 
                className={`${styles.chatItem} ${selectedChat?.id === chat.id ? styles.activeChat : ''}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className={styles.chatItemHeader}>
                  <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                      <User size={18} />
                    </div>
                    <strong>{chat.konseliName}</strong>
                  </div>
                  <span className={styles.time}>{chat.time}</span>
                </div>
                <div className={styles.chatItemBody}>
                  <p className={styles.lastMessage}>{chat.lastMessage}</p>
                  {chat.status === 'urgent' && <span className={styles.badgeUrgent}>Darurat</span>}
                  {chat.status === 'pending' && <span className={styles.badgePending}>Menunggu</span>}
                  {chat.status === 'resolved' && <span className={styles.badgeResolved}>Selesai</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Area Percakapan */}
        <div className={styles.chatMain}>
          {selectedChat ? (
            <>
              <div className={styles.chatHeader}>
                <div className={styles.userInfo}>
                  <div className={styles.avatarLarge}>
                    <User size={24} />
                  </div>
                  <div>
                    <h3>{selectedChat.konseliName}</h3>
                    <span className={styles.statusText}>
                      Status: {selectedChat.status === 'urgent' ? 'Darurat (Butuh Tindakan Cepat)' : 
                               selectedChat.status === 'pending' ? 'Menunggu Balasan' : 'Selesai'}
                    </span>
                  </div>
                </div>
                {selectedChat.status !== 'resolved' && (
                  <button onClick={markResolved} className="btn-secondary" style={{padding: '8px 12px', fontSize: '0.85rem'}}>
                    <CheckCircle size={16} style={{marginRight: '6px'}} /> Tandai Selesai
                  </button>
                )}
              </div>

              {selectedChat.status === 'urgent' && (
                <div className={styles.urgentAlert}>
                  <AlertTriangle size={20} />
                  <span>Peringatan: Konseli ini menunjukkan indikasi risiko tinggi atau krisis. Berikan respons segera.</span>
                </div>
              )}

              <div className={styles.messagesArea}>
                {selectedChat.history.map((msg, idx) => (
                  <div key={idx} className={`${styles.messageWrapper} ${styles[msg.sender]}`}>
                    {msg.sender === 'bot' && <div className={styles.botLabel}>Chatbot Sistem</div>}
                    <div className={styles.messageBubble}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {selectedChat.status !== 'resolved' && (
                <form onSubmit={handleSend} className={styles.inputArea}>
                  <input 
                    type="text" 
                    placeholder="Ketik balasan untuk konseli..." 
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className={styles.messageInput}
                  />
                  <button type="submit" className={styles.sendBtn} disabled={!replyText.trim()}>
                    <Send size={20} />
                  </button>
                </form>
              )}
              {selectedChat.status === 'resolved' && (
                <div className={styles.resolvedFooter}>
                  Percakapan ini telah ditandai selesai.
                </div>
              )}
            </>
          ) : (
            <div className={styles.emptyState}>
              <MessageCircle size={48} color="#cbd5e1" />
              <h3>Pilih Pesan</h3>
              <p>Pilih pesan dari daftar di samping untuk mulai membalas konseli.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
