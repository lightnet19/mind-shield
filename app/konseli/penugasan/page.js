'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Shield, AlertTriangle, Send } from 'lucide-react';
import styles from './penugasan.module.css';

export default function PenugasanTerapeutik() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [riskLevel, setRiskLevel] = useState(0);
  const [needHelp, setNeedHelp] = useState('');

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
              <label>Seberapa aman kamu merasa saat ini? (Skala 1-10)</label>
              <input type="range" min="1" max="10" defaultValue="5" className={styles.rangeInput} />
              <div className={styles.rangeLabels}><span>1 (Sangat Tidak Aman)</span><span>10 (Sangat Aman)</span></div>
            </div>

            <div className={styles.formGroup}>
              <label>Seberapa kuat tekanan emosi yang kamu rasakan saat ini? (Skala 1-10)</label>
              <input type="range" min="1" max="10" defaultValue="5" className={styles.rangeInput} />
              <div className={styles.rangeLabels}><span>1 (Sangat Rendah)</span><span>10 (Sangat Kuat)</span></div>
            </div>

            <div className={styles.formGroup}>
              <label>Seberapa kuat dorongan menyakiti diri yang kamu rasakan saat ini? (Skala 1-10)</label>
              <input 
                type="range" 
                min="1" max="10" 
                value={riskLevel} 
                onChange={(e) => setRiskLevel(parseInt(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.rangeLabels}><span>1 (Sangat Rendah)</span><span>10 (Sangat Kuat)</span></div>
              <div style={{textAlign: 'center', fontWeight: 'bold', color: 'var(--primary)', marginTop: '8px'}}>Skor: {riskLevel}</div>
            </div>

            <div className={styles.formGroup}>
              <label>Apakah kamu membutuhkan bantuan orang lain sekarang?</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="needHelp" value="yes" onChange={() => handleHelpChange('yes')} required />
                  Ya
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="needHelp" value="no" onChange={() => handleHelpChange('no')} required />
                  Tidak
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
                    <button type="button" className="btn-danger" onClick={() => router.push('/konseli/panduan#darurat')}>Hubungi Konselor</button>
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
                  <label>Apa yang terjadi? Di mana? Dengan siapa?</label>
                  <textarea rows="3" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Perasaan apa yang muncul?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Seberapa kuat emosi itu dari 1-10?</label>
                  <input type="number" min="1" max="10" required className={styles.inputItem} />
                </div>
                <div className={styles.formGroup}>
                  <label>Pikiran apa yang langsung muncul di kepalamu?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Seberapa kuat dorongan itu dari 1-10?</label>
                  <input type="number" min="1" max="10" required className={styles.inputItem} />
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
                  <label>Pikiran apa yang paling mengganggumu?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Apa yang membuatmu merasa pikiran itu benar?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Apa fakta lain yang menunjukkan bahwa pikiran itu belum tentu benar?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Jika temanmu mengalami hal yang sama, nasihat baik apa yang akan kamu berikan?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Pikiran baru apa yang lebih seimbang, realistis, dan aman untuk kamu pegang?</label>
                  <textarea rows="2" required></textarea>
                </div>
              </div>

              {/* Bagian D */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>D</span>
                  <h2>Tindakan Aman yang Akan Saya Lakukan</h2>
                </div>
                <p className={styles.sectionDesc}>Pilih tindakan aman yang akan kamu lakukan setelah mengisi latihan ini.</p>
                
                <div className={styles.formGroup}>
                  <label>Rencana Aman Saya</label>
                  <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Saat saya merasa sangat tertekan, saya akan melakukan tiga tindakan aman berikut:</p>
                  
                  <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Pindah ke tempat yang lebih aman</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Menghubungi guru BK, konselor, orang tua/wali, atau orang dewasa tepercaya</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Menjauh dari hal-hal yang membuat saya tidak aman</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Mengatur napas secara perlahan</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Minum air putih</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Membaca kembali pikiran alternatif yang sudah saya tulis</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Menulis perasaan tanpa menyakiti diri</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Mendengarkan musik yang menenangkan</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" /> Melakukan aktivitas ringan yang aman, seperti menggambar, berjalan ke ruang BK, atau duduk bersama keluarga</label>
                  </div>
                </div>
              </div>

              {/* Bagian E */}
              <div className={styles.taskSection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.stepBadge}>E</span>
                  <h2>Refleksi Setelah Latihan</h2>
                </div>
                <div className={styles.formGroup}>
                  <label>Bagaimana perasaanmu setelah mengisi latihan ini?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Seberapa kuat emosimu sekarang dari 1-10?</label>
                  <input type="number" min="1" max="10" required className={styles.inputItem} />
                </div>
                <div className={styles.formGroup}>
                  <label>Seberapa kuat dorongan menyakiti diri sekarang dari 1-10?</label>
                  <input type="number" min="1" max="10" required className={styles.inputItem} />
                </div>
                <div className={styles.formGroup}>
                  <label>Pikiran alternatif apa yang paling membantumu?</label>
                  <textarea rows="2" required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Apa yang ingin kamu bahas dengan konselor pada sesi berikutnya?</label>
                  <textarea rows="2" required></textarea>
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
