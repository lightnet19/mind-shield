'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertTriangle } from 'lucide-react';
import styles from './chat.module.css';

const INITIAL_MESSAGES = [
  {
    id: 1,
    type: 'bot',
    text: 'Halo, saya Mind Shield Assistant. Saya di sini untuk mendengarkan dan membantu Anda. Bagaimana perasaan Anda hari ini?'
  }
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse = 'Terima kasih telah berbagi. Ingatlah bahwa perasaan ini valid dan Anda tidak sendirian. Apakah Anda ingin mencoba beberapa teknik relaksasi?';
      
      if (input.toLowerCase().includes('marah') || input.toLowerCase().includes('kesal')) {
        botResponse = 'Saya mendengar bahwa Anda sedang merasa kesal. Terkadang menarik napas panjang bisa membantu meredakan ketegangan. Mau mencoba tarik napas 4 detik, tahan 4 detik, lalu hembuskan perlahan?';
      } else if (input.toLowerCase().includes('sedih') || input.toLowerCase().includes('nangis')) {
        botResponse = 'Rasanya pasti berat ya. Tidak apa-apa untuk bersedih. Saya di sini mendengarkan. Apakah ada hal spesifik yang memicu perasaan ini?';
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse
      }]);
    }, 1500);
  };

  return (
    <div className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header">
        <h1>Chatbot Pendukung</h1>
        <p>Teman cerita virtual saat Anda membutuhkan dukungan segera</p>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.warningBanner}>
          <AlertTriangle size={18} />
          <span>Ini adalah asisten virtual, bukan pengganti konseling profesional. Jika Anda dalam keadaan darurat, silakan hubungi kontak darurat.</span>
        </div>

        <div className={styles.messagesArea}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.type === 'user' ? styles.userWrapper : styles.botWrapper}`}>
              <div className={styles.avatar}>
                {msg.type === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={`${styles.messageBubble} ${msg.type === 'user' ? styles.userBubble : styles.botBubble}`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className={`${styles.messageWrapper} ${styles.botWrapper}`}>
              <div className={styles.avatar}>
                <Bot size={18} />
              </div>
              <div className={`${styles.messageBubble} ${styles.botBubble}`}>
                <div className={styles.typingIndicator}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pesan Anda di sini..."
            className={styles.messageInput}
          />
          <button 
            type="submit" 
            className={styles.sendButton}
            disabled={!input.trim() || isTyping}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}