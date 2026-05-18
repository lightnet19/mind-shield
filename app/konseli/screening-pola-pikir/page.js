'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Info, Brain, ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './screening-pola-pikir.module.css';

const QUESTIONS = [
  { id: 1, category: "Peristiwa Pemicu", question: "Peristiwa apa yang membuat saya merasa tidak nyaman, cemas, sedih, marah, malu, atau tertekan?", placeholder: "Ceritakan satu situasi yang benar-benar pernah kamu alami...", type: "textarea", hint: "Pilih satu peristiwa yang paling ingin kamu pahami." },
  { id: 2, category: "Pikiran Otomatis", question: "Pikiran apa yang langsung muncul dalam diri saya ketika situasi itu terjadi?", placeholder: "Misalnya: 'Saya pasti gagal', 'Tidak ada yang peduli pada saya'...", type: "textarea", hint: "Tuliskan pikiran spontan pertama yang muncul, bukan yang sudah direnungkan." },
  { id: 3, category: "Perasaan", question: "Perasaan apa yang muncul akibat pikiran tersebut?", placeholder: "Misalnya: sedih, takut, marah, malu, putus asa...", type: "textarea", hint: "Coba bedakan pikiran dan perasaan. Perasaan biasanya satu kata." },
  { id: 4, category: "Intensitas Emosi", question: "Seberapa kuat emosi tersebut saya rasakan?", placeholder: "Masukkan angka antara 0 sampai 100", type: "slider", hint: "0 = tidak terasa sama sekali, 100 = sangat kuat/berat dirasakan" },
  { id: 5, category: "Reaksi Tubuh", question: "Apa yang saya rasakan pada tubuh saya?", placeholder: "Misalnya: jantung berdebar, pusing, lemas, menangis, sulit tidur...", type: "textarea", hint: "Perhatikan sensasi fisik yang muncul saat peristiwa itu terjadi." },
  { id: 6, category: "Perilaku", question: "Apa yang saya lakukan setelah pikiran dan emosi itu muncul?", placeholder: "Misalnya: menarik diri, menangis, marah-marah, tidak bisa bergerak...", type: "textarea", hint: "Apa reaksi atau tindakan nyata yang kamu lakukan?" },
  { id: 7, category: "Makna Peristiwa", question: "Apa arti kejadian itu bagi diri saya?", placeholder: "Misalnya: 'Ini berarti saya memang tidak berguna'...", type: "textarea", hint: "Apa kesimpulan yang kamu ambil dari kejadian tersebut tentang dirimu?" },
  { id: 8, category: "Keyakinan tentang Diri Sendiri", question: "Dari kejadian itu, keyakinan apa yang muncul tentang diri saya?", placeholder: "Misalnya: 'Saya gagal', 'Saya tidak berharga', 'Saya tidak mampu'...", type: "textarea", hint: "Ini adalah inti dari pikiran negatif tentang dirimu sendiri." },
  { id: 9, category: "Keyakinan tentang Orang Lain", question: "Apa keyakinan saya tentang orang lain?", placeholder: "Misalnya: 'Orang lain akan menolak saya', 'Orang lain tidak peduli'...", type: "textarea", hint: "Bagaimana kamu melihat orang-orang di sekitarmu terkait peristiwa ini?" },
  { id: 10, category: "Keyakinan tentang Masa Depan", question: "Apa keyakinan saya tentang dunia atau masa depan?", placeholder: "Misalnya: 'Masa depan saya suram', 'Dunia tidak aman'...", type: "textarea", hint: "Bagaimana pandanganmu tentang hari-hari ke depan?" },
  { id: 11, category: "Aturan yang Diyakini", question: "Aturan apa yang saya yakini?", placeholder: "Misalnya: 'Saya harus selalu berhasil agar diterima', 'Kalau saya salah, saya pasti dipandang buruk'...", type: "textarea", hint: "Aturan ini sering bersifat kaku dan menekan." },
  { id: 12, category: "Pola Coping Saat Ini", question: "Apa kebiasaan saya untuk menghadapi kondisi ini?", placeholder: "Misalnya: menghindar, diam, menyalahkan diri, menarik diri, berpura-pura baik-baik saja...", type: "textarea", hint: "Apa yang biasa kamu lakukan untuk bertahan dari kondisi ini?" },
  { id: 13, category: "Dampak pada Kehidupan", question: "Bagaimana keyakinan dan pikiran tersebut memengaruhi kehidupan saya?", placeholder: "Misalnya: sulit bersosialisasi, prestasi menurun, hubungan memburuk...", type: "textarea", hint: "Tuliskan dampak nyata dalam keseharian dan hubunganmu." },
  { id: 14, category: "Alternatif Pikiran Sehat", question: "Cara berpikir lain apa yang lebih sehat, realistis, dan membantu?", placeholder: "Misalnya: 'Meski saya gagal kali ini, bukan berarti saya selalu gagal'...", type: "textarea", hint: "Coba lihat situasi dari sudut pandang yang berbeda dan lebih menyeimbangkan." },
  { id: 15, category: "Tindakan Baru", question: "Apa tindakan baru yang bisa saya lakukan ketika menghadapi situasi serupa?", placeholder: "Misalnya: berbicara dengan teman, menarik napas, menulis jurnal perasaan...", type: "textarea", hint: "Rencanakan langkah kecil yang realistis untuk menghadapi situasi serupa." }
];

export default function ScreeningPolaPikirPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswer = (id, value) => setAnswers(prev => ({ ...prev, [id]: value }));
  const currentQuestion = QUESTIONS[currentStep - 1];
  const isLastQuestion = currentStep === QUESTIONS.length;
  const progress = currentStep === 0 ? 0 : (currentStep / QUESTIONS.length) * 100;
  const handleNext = () => { if (currentStep < QUESTIONS.length) setCurrentStep(prev => prev + 1); };
  const handlePrev = () => { if (currentStep > 0) setCurrentStep(prev => prev - 1); };
  const handleSubmit = () => { setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500); };
  const canProceed = () => {
    if (currentStep === 0) return true;
    const q = QUESTIONS[currentStep - 1];
    const ans = answers[q.id];
    if (q.type === 'slider') return ans !== undefined;
    return ans && ans.trim().length > 0;
  };

  if (isSubmitted) return (
    <div className={styles.container}>
      <div className={styles.successCard}>
        <div className={styles.successIconWrapper}><CheckCircle size={64} className={styles.successIcon} /></div>
        <h2 className={styles.successTitle}>Screening Berhasil Dikirim!</h2>
        <p className={styles.successText}>Terima kasih sudah meluangkan waktu untuk mengenal dirimu lebih dalam. Jawaban kamu telah dikirim ke konselor dan akan digunakan untuk mendukung proses layanan bimbingan dan konselingmu.</p>
        <button onClick={() => router.push('/konseli/dashboard')} className={styles.primaryButton}>Kembali ke Dashboard</button>
      </div>
    </div>
  );

  if (currentStep === 0) return (
    <div className={styles.container}>
      <div className={styles.introScreen}>
        <div className={styles.introIcon}><Brain size={40} /></div>
        <h1 className={styles.introTitle}>Screening Pola Pikir</h1>
        <p className={styles.introSubtitle}>Kenali hubungan antara peristiwa, pikiran, dan perasaanmu</p>
        <div className={styles.introBody}>
          <p>Halo, teman-teman.</p>
          <p>Lembar ini dibuat untuk membantu kamu mengenali hubungan antara peristiwa yang kamu alami, pikiran yang muncul, perasaan yang dirasakan, reaksi tubuh, perilaku, serta keyakinan tentang diri sendiri, orang lain, dan masa depan.</p>
          <p>Melalui lembar ini, kamu diajak untuk memahami pola tersebut secara perlahan agar dapat menemukan cara berpikir yang lebih sehat, realistis, dan membantu.</p>
        </div>
        <div className={styles.instructionBox}>
          <h3><Info size={16} /> Petunjuk Pengisian</h3>
          <ol>
            <li>Bacalah setiap pertanyaan dengan tenang dan teliti.</li>
            <li>Jawablah berdasarkan pengalaman pribadi yang benar-benar pernah kamu alami.</li>
            <li>Pilih satu peristiwa yang paling ingin kamu pahami terlebih dahulu.</li>
            <li>Gunakan bahasa kamu sendiri. Tidak perlu takut salah dalam menjawab.</li>
            <li>Jawaban kamu akan dijaga kerahasiaannya dan dikirimkan ke konselor.</li>
          </ol>
        </div>
        <button onClick={() => setCurrentStep(1)} className={styles.startButton}>Mulai Screening <ChevronRight size={20} /></button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.progressHeader}>
        <div className={styles.progressInfo}>
          <span className={styles.progressCategory}>{currentQuestion.category}</span>
          <span className={styles.progressCount}>{currentStep} / {QUESTIONS.length}</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className={styles.questionCard}>
        <div className={styles.questionNumber}>Pertanyaan {currentStep}</div>
        <h2 className={styles.questionText}>{currentQuestion.question}</h2>
        {currentQuestion.hint && <p className={styles.hintText}>💡 {currentQuestion.hint}</p>}
        <div className={styles.answerArea}>
          {currentQuestion.type === 'textarea' && (
            <textarea className={styles.textAnswer} placeholder={currentQuestion.placeholder} value={answers[currentQuestion.id] || ''} onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)} rows={5} />
          )}
          {currentQuestion.type === 'slider' && (
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderScore}>
                <span className={styles.sliderValue}>{answers[currentQuestion.id] ?? 50}</span>
                <span className={styles.sliderUnit}>/ 100</span>
              </div>
              <input type="range" min="0" max="100" value={answers[currentQuestion.id] ?? 50} onChange={(e) => handleAnswer(currentQuestion.id, Number(e.target.value))} className={styles.slider} />
              <div className={styles.sliderLabels}><span>0 — Tidak terasa</span><span>100 — Sangat kuat</span></div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.prevButton}><ChevronLeft size={18} /> Sebelumnya</button>
        {!isLastQuestion ? (
          <button onClick={handleNext} className={styles.nextButton} disabled={!canProceed()}>Selanjutnya <ChevronRight size={18} /></button>
        ) : (
          <button onClick={handleSubmit} className={styles.submitButton} disabled={!canProceed() || isSubmitting}>{isSubmitting ? 'Mengirim...' : 'Kirim Screening'}</button>
        )}
      </div>
    </div>
  );
}
