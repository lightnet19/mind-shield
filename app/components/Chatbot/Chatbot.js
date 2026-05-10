'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, AlertTriangle } from 'lucide-react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Halo! Saya asisten virtual Mind Shield. Ada yang bisa saya bantu hari ini?',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const addBotMessage = (text, isAlert = false) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text, isAlert }]);
    }, 500);
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text }]);
    setInputValue('');

    // Logic klasifikasi respons
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('darurat') || lowerText.includes('bunuh diri') || lowerText.includes('sakit') || lowerText.includes('menyakiti')) {
      addBotMessage(
        'SISTEM MENDETEKSI KONDISI KRISIS. Anda tidak sendirian. Mohon segera hubungi konselor Anda atau nomor darurat terdekat. Klik tautan berikut untuk bantuan segera: [Hubungi Konselor Sekarang](/konseli/panduan#darurat)',
        true
      );
    } else if (lowerText.includes('jadwal') || lowerText.includes('kapan')) {
      addBotMessage('Anda dapat melihat jadwal konseling Anda pada menu "Jadwal Konseling" di dashboard Anda. Apakah Anda ingin diarahkan ke sana?');
    } else if (lowerText.includes('tugas') || lowerText.includes('latihan') || lowerText.includes('penugasan')) {
      addBotMessage('Untuk mengisi penugasan terapeutik pasca-sesi, silakan akses menu "Penugasan Terapeutik". Form tersebut dirancang untuk membantumu melatih keterampilan CBT.');
    } else {
      addBotMessage('Terima kasih atas pesan Anda. Jika ini adalah keluhan psikologis, mohon sampaikan langsung kepada konselor pada sesi Anda berikutnya. Jika ada kendala teknis, silakan beritahu saya!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (text) => {
    handleSend(text);
  };

  return (
    <div className={styles.chatbotContainer}>
      {!isOpen && (
        <button className={styles.floatingBtn} onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <MessageSquare size={18} />
              <span>Asisten Mind Shield</span>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.messageWrapper} ${msg.type === 'user' ? styles.wrapperUser : styles.wrapperBot}`}>
                <div className={`${styles.message} ${msg.type === 'user' ? styles.msgUser : styles.msgBot} ${msg.isAlert ? styles.msgAlert : ''}`}>
                  {msg.isAlert && <AlertTriangle size={16} className={styles.alertIcon} />}
                  {/* Pengecekan sederhana untuk link markdown */}
                  {msg.text.includes('[Hubungi Konselor Sekarang]') ? (
                    <span>
                      SISTEM MENDETEKSI KONDISI KRISIS. Anda tidak sendirian. Mohon segera hubungi konselor Anda atau nomor darurat terdekat. 
                      <br/><br/>
                      <a href="/konseli/panduan#darurat" className={styles.emergencyLink}>Hubungi Konselor Sekarang</a>
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className={styles.quickReplies}>
              <button onClick={() => handleQuickReply('Saya butuh bantuan darurat')}>Bantuan Darurat</button>
              <button onClick={() => handleQuickReply('Saya ingin melihat jadwal konseling')}>Jadwal Konseling</button>
              <button onClick={() => handleQuickReply('Saya kesulitan mengisi penugasan')}>Penugasan</button>
            </div>
          )}

          <div className={styles.chatFooter}>
            <input 
              type="text" 
              placeholder="Ketik pesan..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.inputField}
            />
            <button className={styles.sendBtn} onClick={() => handleSend()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
