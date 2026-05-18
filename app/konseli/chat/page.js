'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertTriangle, Book, Calendar, ClipboardCheck, FileText, Phone, LifeBuoy, ShieldAlert, Video } from 'lucide-react';
import Link from 'next/link';
import styles from './chat.module.css';

const INITIAL_MESSAGE = 'Halo, selamat datang di Mind Shield. Saya adalah chatbot pendamping yang membantu Anda memahami penggunaan website, melihat jadwal konseling, membaca arahan layanan, memeriksa penugasan terapeutik, dan melihat laporan hasil konseling. Jika Anda ingin membahas kondisi pribadi, hasil screening, atau membutuhkan bantuan segera, saya akan mengarahkan Anda ke konselor.';

const QUICK_REPLIES = [
  { label: 'Panduan Website', icon: Book },
  { label: 'Jadwal Konseling', icon: Calendar },
  { label: 'Penugasan Terapeutik', icon: ClipboardCheck },
  { label: 'Laporan Hasil Konseling', icon: FileText },
  { label: 'Hubungi Konselor', icon: Phone },
  { label: 'Bantuan Darurat', icon: LifeBuoy }
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: INITIAL_MESSAGE,
      showQuickReplies: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text
    };

    // Hilangkan quick replies dari pesan sebelumnya
    setMessages(prev => prev.map(m => ({ ...m, showQuickReplies: false })));
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Proses respons chatbot
    setTimeout(() => {
      setIsTyping(false);
      processBotResponse(text.toLowerCase());
    }, 1000);
  };

  const processBotResponse = (query) => {
    const krisisWords = ['melukai diri', 'tidak aman', 'bunuh diri', 'menyakiti diri', 'mengakhiri hidup', 'berdarah', 'tidak tahan'];
    const klinisWords = ['screening', 'arti hasil', 'keyakinan inti', 'memburuk', 'hasil konseling', 'konselor'];
    
    // C. Cek Risiko Krisis
    if (krisisWords.some(word => query.includes(word)) || query.includes('darurat')) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Saya khawatir dengan keselamatan Anda saat ini. Segera pilih salah satu opsi berikut:',
        isEmergency: true
      }]);
      return;
    }

    // B. Cek Pertanyaan Klinis / Butuh Konselor
    if (klinisWords.some(word => query.includes(word))) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Pesan Anda memerlukan penanganan langsung dari konselor. Silakan pilih Hubungi Konselor atau Masuk ke Ruang Konseling Online.',
        isClinical: true
      }]);
      return;
    }

    // A. Administratif & Teknis
    if (query.includes('panduan') || query.includes('login') || query.includes('cara') || query.includes('website')) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Untuk menggunakan website Mind Shield, silakan ikuti langkah berikut:\n1. Login atau registrasi akun\n2. Baca panduan penggunaan website\n3. Isi screening self-injury\n4. Isi screening core beliefs\n5. Ajukan jadwal konseling online\n6. Ikuti sesi konseling\n7. Periksa penugasan terapeutik dan laporan hasil konseling di akun Anda',
        showQuickReplies: true
      }]);
      return;
    }

    if (query.includes('jadwal')) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Jadwal konseling Anda berikutnya adalah:\nHari/Tanggal: Senin, 12 Mei 2026\nWaktu: 13.00 WIB\nStatus: Sudah dikonfirmasi\nSilakan klik tombol Masuk ke Ruang Konseling Online saat sesi dimulai.',
        hasAction: { label: 'Masuk ke Ruang Konseling Online', href: '/konseli/sesi', icon: Video },
        showQuickReplies: true
      }]);
      return;
    }

    if (query.includes('tugas') || query.includes('penugasan') || query.includes('terapeutik')) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Anda memiliki penugasan terapeutik baru dari konselor. Silakan buka menu Penugasan Terapeutik untuk melihat instruksi lengkap.\n\nContoh Penugasan Terapeutik:\nJudul: Refleksi Diri Pasca-Sesi\nInstruksi: Tuliskan situasi yang membuat Anda tidak nyaman, perasaan yang muncul, dan cara yang Anda lakukan untuk menenangkan diri.\nBatas waktu: 3 hari\nStatus: Belum dikerjakan',
        hasAction: { label: 'Lihat Penugasan Terapeutik', href: '/konseli/penugasan', icon: ClipboardCheck },
        showQuickReplies: true
      }]);
      return;
    }

    if (query.includes('laporan')) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: 'Laporan hasil konseling Anda telah tersedia di akun Mind Shield.\nSilakan buka menu Laporan Hasil Konseling untuk melihat ringkasan layanan dan tindak lanjut yang diberikan oleh konselor.',
        hasAction: { label: 'Lihat Laporan Hasil Konseling', href: '/konseli/evaluasi', icon: FileText },
        showQuickReplies: true
      }]);
      return;
    }

    // Default Support / Fallback
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'bot',
      text: 'Terima kasih sudah menghubungi saya. Jangan lupa memeriksa arahan layanan dari konselor dan penugasan Anda. Jika Anda ingin membahas lebih lanjut, silakan pilih menu di bawah ini.',
      showQuickReplies: true
    }]);
  };

  return (
    <div className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header">
        <h1>Chatbot Pendamping Mind Shield</h1>
        <p>Bantuan navigasi, pengingat, dan panduan penggunaan website</p>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.warningBanner}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          <span>Chatbot bukan pengganti konselor dan tidak memberikan diagnosis klinis. Gunakan fitur Bantuan Darurat jika Anda dalam krisis.</span>
        </div>

        <div className={styles.messagesArea}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.type === 'user' ? styles.userWrapper : styles.botWrapper}`}>
              <div className={styles.avatar}>
                {msg.type === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={`${styles.messageBubble} ${msg.type === 'user' ? styles.userBubble : styles.botBubble}`}>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} style={{ margin: '0 0 6px 0', lineHeight: 1.5 }}>{line}</p>
                ))}
                
                {/* Emergency Actions */}
                {msg.isEmergency && (
                  <div className={styles.actionContainer}>
                    <Link href="#" className={`${styles.actionBtn} ${styles.dangerBtn}`}>
                      <Phone size={16} /> Hubungi Konselor Sekarang
                    </Link>
                    <Link href="#" className={`${styles.actionBtn} ${styles.dangerBtn}`}>
                      <AlertTriangle size={16} /> Bantuan Darurat
                    </Link>
                    <Link href="/konseli/materi" className={`${styles.actionBtn} ${styles.warningBtn}`}>
                      <ShieldAlert size={16} /> Lihat Safety Planning
                    </Link>
                  </div>
                )}

                {/* Clinical Actions */}
                {msg.isClinical && (
                  <div className={styles.actionContainer}>
                    <Link href="#" className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                      <Phone size={16} /> Hubungi Konselor
                    </Link>
                    <Link href="/konseli/sesi" className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                      <Video size={16} /> Masuk ke Ruang Konseling Online
                    </Link>
                  </div>
                )}

                {/* Standard Link Action */}
                {msg.hasAction && (
                  <div className={styles.actionContainer}>
                    <Link href={msg.hasAction.href} className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                      <msg.hasAction.icon size={16} /> {msg.hasAction.label}
                    </Link>
                  </div>
                )}
                
                {/* Quick Replies Options */}
                {msg.showQuickReplies && (
                  <div className={styles.quickReplies}>
                    {QUICK_REPLIES.map((reply, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleSend(reply.label)}
                        className={styles.quickReplyBtn}
                      >
                        <reply.icon size={14} />
                        {reply.label}
                      </button>
                    ))}
                  </div>
                )}
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

        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className={styles.inputArea}>
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
