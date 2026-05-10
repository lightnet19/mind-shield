'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Shield, AlertTriangle, Send } from 'lucide-react';
import styles from './penugasan.module.css';

export default function PenugasanTerapeutik() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [needHelp, setNeedHelp] = useState('');
  const [riskLevel, setRiskLevel] = useState(0);

  const handleHelpChange = (val) => {
    setNeedHelp(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Catatan berhasil dikirim ke konselor.");
      router.push('/konseli/dashboard');
    }, 1000);
  };

  const isHighRisk = needHelp === 'yes' || riskLevel > 7;

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Penugasan Terapeutik</h1>
        <p>Catatan Aman Pasca-Sesi Konseling</p>
      </div>

      <div className={styles.container}>
        <div className={styles.introCard}>
          <h3>Halo, Sobat Mind Shield.</h3>
          <p>Setelah mengikuti konseling online, kamu akan mengisi latihan singkat untuk membantumu memahami pikiran, perasaan, dan dorongan yang muncul saat kamu merasa tertekan.</p>
          <p>Latihan ini bukan ujian. Tidak ada jawaban benar atau salah. Isilah dengan jujur sesuai keadaanmu. Tujuan latihan ini adalah membantumu melihat pikiran negatif dengan lebih seimbang, menenangkan diri, dan memilih tindakan yang lebih aman.</p>
          
          <div className={styles.alertBox}>
            <AlertTriangle size={24} color="#856404" />
            <div>
              <strong>Catatan Penting:</strong>
              <p>Jika kamu merasa tidak aman, memiliki dorongan kuat untuk menyakiti diri, atau merasa tidak mampu mengendalikan diri, segera hubungi guru BK, konselor, orang tua/wali, keluarga, atau orang dewasa yang kamu percaya.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.taskForm}>
          
          {/* Bagian A */}
          <div className={styles.taskSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepBadge}>A</span>
              <h2>Cek Keamanan Diri</h2>
            </div>
            <p className={styles.sectionDesc}>Sebelum memulai, jawab pertanyaan berikut sesuai keadaanmu saat ini.</p>
            
            <div className={styles.formGroup}>
              <label>Seberapa kuat dorongan menyakiti diri yang kamu rasakan saat ini? (Skala 1-10)</label>
              <input 
                type="range" 
                min="1" max="10" 
                value={riskLevel} 
                onChange={(e) => setRiskLevel(parseInt(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.rangeLabels}>
                <span>1 (Sangat Rendah)</span>
                <span>10 (Sangat Kuat)</span>
              </div>
              <div style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--primary)', marginTop: '8px'}}>Skor: {riskLevel}</div>
            </div>

            <div className={styles.formGroup}>
              <label>Apakah kamu merasa butuh bantuan segera untuk menjaga dirimu tetap aman?</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="needHelp" value="yes" onChange={() => handleHelpChange('yes')} required />
                  Ya, saya butuh bantuan
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="needHelp" value="no" onChange={() => handleHelpChange('no')} required />
                  Tidak, saya masih bisa mengendalikan diri
                </label>
              </div>
            </div>

            {isHighRisk && (
              <div className={styles.highRiskAlert}>
                <AlertTriangle size={24} color="#dc3545" />
                <div>
                  <h4>Pesan Sistem:</h4>
                  <p>Kamu tidak harus menghadapi ini sendirian. Segera hubungi guru BK, konselor, orang tua/wali, keluarga, atau orang dewasa yang kamu percaya. Latihan ini dapat dilanjutkan setelah kamu berada dalam kondisi yang lebih aman.</p>
                  <div className={styles.actionButtons}>
                    <button type="button" className="btn-danger" onClick={() => router.push('/konseli/panduan#darurat')}>Hubungi Konselor / Darurat</button>
                    <button type="button" className="btn-secondary" onClick={() => { setNeedHelp('no'); setRiskLevel(5); }}>Saya Sudah Lebih Aman dan Ingin Melanjutkan</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!isHighRisk && (
            <>
              {/* Bagian B */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>B</span>
                  <h2>Situasi yang Membuat Saya Tertekan</h2>
                </div>
                <div className={styles.formGroup}>
                  <label>Tuliskan satu kejadian yang membuatmu merasa sedih, marah, kecewa, takut, malu, cemas, kesepian, atau muncul dorongan menyakiti diri.</label>
                  <textarea rows="4" placeholder="Misalnya: Teman saya mengabaikan pesan saya, padahal dia online..." required></textarea>
                </div>
              </div>

              {/* Bagian C */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>C</span>
                  <h2>Periksa Pikiran Negatif Saya</h2>
                </div>
                <p className={styles.sectionDesc}>Sekarang, coba periksa kembali pikiran negatif yang muncul. Tujuannya bukan memaksa kamu berpikir positif, tetapi membantumu melihat keadaan dengan lebih seimbang dan aman.</p>
                <div className={styles.formGroup}>
                  <label>Apa pikiran negatif yang muncul saat itu?</label>
                  <textarea rows="3" placeholder="Misalnya: Mereka benci padaku..." required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Apakah ada penjelasan lain yang lebih masuk akal tentang kejadian tersebut?</label>
                  <textarea rows="3" placeholder="Misalnya: Mungkin dia sedang sibuk atau lupa membalas..." required></textarea>
                </div>
              </div>

              {/* Bagian D */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>D</span>
                  <h2>Tindakan Aman yang Akan Saya Lakukan</h2>
                </div>
                <p className={styles.sectionDesc}>Pilih atau tuliskan tindakan aman yang akan kamu lakukan setelah mengisi latihan ini saat kamu merasa sangat tertekan.</p>
                
                <div className={styles.formGroup}>
                  <label>Rencana Aman Saya (Pilih/tulis 3 tindakan):</label>
                  <input type="text" placeholder="1. Mendengarkan musik" required className={styles.inputItem} />
                  <input type="text" placeholder="2. Menulis di jurnal" required className={styles.inputItem} />
                  <input type="text" placeholder="3. Tarik napas dalam 10 kali" required className={styles.inputItem} />
                </div>
              </div>

              {/* Bagian E */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>E</span>
                  <h2>Refleksi Setelah Latihan</h2>
                </div>
                <div className={styles.formGroup}>
                  <label>Bagaimana perasaanmu setelah menulis ini semua?</label>
                  <textarea rows="3" placeholder="Ceritakan perasaanmu..." required></textarea>
                </div>
              </div>

              <div className={styles.submitSection}>
                <button type="submit" className="btn-primary" disabled={loading}>
                  <Send size={18} style={{marginRight: '8px'}} />
                  {loading ? 'Mengirim...' : 'Kirim Catatan ke Konselor'}
                </button>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  );
}
