'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import styles from './pola-pikir.module.css';

const QUESTIONS = [
  "Peristiwa apa yang membuat saya merasa tidak nyaman, cemas, sedih, marah, malu, atau tertekan?",
  "Pikiran apa yang langsung muncul dalam diri saya ketika situasi itu terjadi?",
  "Perasaan apa yang muncul akibat pikiran tersebut?",
  "Seberapa kuat emosi tersebut saya rasakan? Beri skor 0–100.",
  "Apa yang saya rasakan pada tubuh saya? Misalnya jantung berdebar, pusing, lemas, menangis, sulit tidur.",
  "Apa yang saya lakukan setelah pikiran dan emosi itu muncul?",
  "Apa arti kejadian itu bagi diri saya?",
  "Dari kejadian itu, keyakinan apa yang muncul tentang diri saya? Misalnya: “Saya gagal”, “Saya tidak berharga”, “Saya tidak mampu”.",
  "Apa keyakinan saya tentang orang lain? Misalnya: “Orang lain akan menolak saya”, “Orang lain tidak peduli”.",
  "Apa keyakinan saya tentang dunia atau masa depan? Misalnya: “Masa depan saya suram”, “Dunia tidak aman”.",
  "Aturan apa yang saya yakini? Misalnya: “Saya harus selalu berhasil agar diterima”, “Kalau saya salah, saya pasti dipandang buruk”.",
  "Apa kebiasaan saya untuk menghadapi kondisi ini? Misalnya menghindar, diam, menyalahkan diri, menarik diri, berpura-pura baik-baik saja.",
  "Bagaimana keyakinan dan pikiran tersebut memengaruhi kehidupan saya?",
  "Cara berpikir lain apa yang lebih sehat, realistis, dan membantu?",
  "Apa tindakan baru yang bisa saya lakukan ketika menghadapi situasi serupa?"
];

export default function PolaPikirPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(15).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.successCard}>
          <CheckCircle size={64} className={styles.successIcon} />
          <h2 className={styles.successTitle}>Screening Berhasil Dikirim!</h2>
          <p className={styles.successText}>
            Terima kasih telah mengisi Screening Pola Pikir dengan jujur. Hasil screening ini akan dikirim ke akun konselor untuk ditinjau lebih lanjut.
          </p>
          <button onClick={() => router.push('/konseli/dashboard')} className={styles.primaryButton}>
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Screening Pola Pikir</h1>
        <p className={styles.subtitle}>Kenali pola pikir, perasaan, dan perilaku Anda</p>
      </header>

      {step === 0 && !answers[0] && (
        <div className={styles.introCard}>
          <h2 className={styles.introTitle}>Halo, teman-teman.</h2>
          <p className={styles.introText}>
            Sebelum mengisi lembar ini, perlu dipahami bahwa angket ini bukanlah tes untuk menilai benar atau salahnya diri kamu. Lembar ini dibuat untuk membantu kamu mengenali hubungan antara peristiwa yang kamu alami, pikiran yang muncul, perasaan yang dirasakan, reaksi tubuh, perilaku, serta keyakinan tentang diri sendiri, orang lain, dan masa depan.
          </p>
          <div className={styles.alertBox}>
            <AlertTriangle size={24} className={styles.alertIcon} />
            <div>
              <h3 className={styles.alertTitle}>Petunjuk Pengisian</h3>
              <ul className={styles.alertList}>
                <li>Pilih satu peristiwa yang paling ingin kamu pahami terlebih dahulu.</li>
                <li>Pada pertanyaan nomor 4, berikan skor emosi dari 0–100.</li>
                <li>Gunakan bahasa kamu sendiri. Tidak perlu takut salah dalam menjawab.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={styles.wizardCard}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>Pertanyaan {step + 1} dari {QUESTIONS.length}</span>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.questionContainer}>
            <h3 className={styles.questionLabel}>{QUESTIONS[step]}</h3>
            
            {step === 3 ? (
              <div className={styles.sliderContainer}>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={answers[step] || 50} 
                  onChange={(e) => handleAnswerChange(step, e.target.value)}
                  className={styles.slider}
                />
                <div className={styles.sliderLabels}>
                  <span>0 (Tidak Terasa)</span>
                  <span className={styles.sliderValue}>{answers[step] || 50}</span>
                  <span>100 (Sangat Kuat)</span>
                </div>
              </div>
            ) : (
              <textarea
                className={styles.textarea}
                rows={5}
                placeholder="Tuliskan jawaban Anda di sini..."
                value={answers[step]}
                onChange={(e) => handleAnswerChange(step, e.target.value)}
                required
              />
            )}
          </div>

          <div className={styles.buttonGroup}>
            <button 
              type="button" 
              onClick={handlePrev} 
              disabled={step === 0}
              className={styles.secondaryButton}
            >
              Sebelumnya
            </button>
            
            {step < QUESTIONS.length - 1 ? (
              <button 
                type="button" 
                onClick={handleNext}
                disabled={step !== 3 && !answers[step].trim()}
                className={styles.primaryButton}
              >
                Selanjutnya
              </button>
            ) : (
              <button 
                type="submit" 
                disabled={isSubmitting || (step !== 3 && !answers[step].trim())}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Hasil Screening'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
