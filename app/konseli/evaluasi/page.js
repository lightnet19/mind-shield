'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Info } from 'lucide-react';
import styles from './evaluasi.module.css';

const DIMENSIONS = [
  {
    title: "Pengendalian Dorongan Self-Injury",
    items: [
      { id: 1, text: "Saya lebih mampu menahan dorongan untuk menyakiti diri ketika tekanan muncul.", type: "favorable" },
      { id: 2, text: "Keinginan untuk melukai diri masih sering muncul dalam diri saya.", type: "unfavorable" },
      { id: 3, text: "Saya mulai memiliki cara lain yang lebih aman selain menyakiti diri saat menghadapi tekanan.", type: "favorable" },
      { id: 4, text: "Saya masih merasa bahwa menyakiti diri adalah cara tercepat untuk meredakan beban.", type: "unfavorable" }
    ]
  },
  {
    title: "Keyakinan Diri / Self-Worth",
    items: [
      { id: 5, text: "Saya mulai memandang diri saya sebagai pribadi yang tetap berharga.", type: "favorable" },
      { id: 6, text: "Saya masih merasa bahwa diri saya rusak atau tidak layak.", type: "unfavorable" },
      { id: 7, text: "Saya lebih mampu mengenali keyakinan negatif tentang diri saya.", type: "favorable" },
      { id: 8, text: "Saya mulai percaya bahwa saya layak dibantu dan didukung.", type: "favorable" }
    ]
  },
  {
    title: "Regulasi Emosi",
    items: [
      { id: 9, text: "Saya lebih mampu menenangkan diri saat emosi negatif meningkat.", type: "favorable" },
      { id: 10, text: "Emosi saya masih sangat sulit dikendalikan ketika sedang tertekan.", type: "unfavorable" },
      { id: 11, text: "Saya dapat mengenali tanda-tanda saat kondisi emosi saya mulai memburuk.", type: "favorable" },
      { id: 12, text: "Saya lebih cepat pulih setelah mengalami tekanan emosional.", type: "favorable" }
    ]
  },
  {
    title: "Strategi Coping",
    items: [
      { id: 13, text: "Saya memiliki cara yang lebih sehat untuk menghadapi masalah.", type: "favorable" },
      { id: 14, text: "Saya mulai menerapkan strategi coping yang aman dalam kehidupan sehari-hari.", type: "favorable" },
      { id: 15, text: "Saat menghadapi masalah, saya masih merasa bingung dan tidak tahu harus berbuat apa.", type: "unfavorable" },
      { id: 16, text: "Saya mampu menjalankan penugasan terapeutik yang diberikan selama konseling.", type: "favorable" }
    ]
  },
  {
    title: "Jaringan Keselamatan",
    items: [
      { id: 17, text: "Saya tahu kepada siapa saya dapat meminta bantuan ketika kondisi saya memburuk.", type: "favorable" },
      { id: 18, text: "Saya memiliki langkah keselamatan yang dapat dilakukan saat kondisi krisis muncul.", type: "favorable" },
      { id: 19, text: "Saya berani menghubungi orang yang aman atau terpercaya ketika membutuhkan bantuan.", type: "favorable" },
      { id: 20, text: "Saya cenderung memendam masalah sendiri walaupun kondisi saya semakin berat.", type: "unfavorable" }
    ]
  },
  {
    title: "Evaluasi Keseluruhan",
    items: [
      { id: 21, text: "Saya memahami kondisi diri saya dengan lebih baik.", type: "favorable" },
      { id: 22, text: "Saya merasakan manfaat nyata dari layanan konseling online CBT yang saya ikuti.", type: "favorable" },
      { id: 23, text: "Setelah mengikuti konseling, saya merasa kondisi saya belum mengalami perubahan berarti.", type: "unfavorable" },
      { id: 24, text: "Saya merasa tujuan konseling yang saya jalani mulai tercapai.", type: "favorable" }
    ]
  }
];

const OPTIONS = [
  { value: 5, label: "Sangat Sesuai", short: "SS" },
  { value: 4, label: "Sesuai", short: "S" },
  { value: 3, label: "Ragu-Ragu", short: "R" },
  { value: 2, label: "Tidak Sesuai", short: "TS" },
  { value: 1, label: "Sangat Tidak Sesuai", short: "STS" }
];

export default function EvaluasiPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (itemId, optionValue, type) => {
    // Calculate actual score based on favorable/unfavorable
    // If favorable: 5=5, 4=4, 3=3, 2=2, 1=1
    // If unfavorable: 5=1, 4=2, 3=3, 2=4, 1=5 (reversed)
    let score = optionValue;
    if (type === 'unfavorable') {
      score = 6 - optionValue;
    }
    
    setAnswers(prev => ({
      ...prev,
      [itemId]: {
        value: optionValue, // original selected value
        score: score        // calculated score
      }
    }));
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

  const isComplete = Object.keys(answers).length === 24;
  const progressPercent = (Object.keys(answers).length / 24) * 100;

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.successCard}>
          <CheckCircle size={64} className={styles.successIcon} />
          <h2 className={styles.successTitle}>Evaluasi Berhasil Dikirim!</h2>
          <p className={styles.successText}>
            Terima kasih telah mengisi evaluasi konseling online. Masukan Anda sangat berharga untuk memantau perkembangan Anda.
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
        <h1 className={styles.title}>Evaluasi Konseling Online</h1>
        <p className={styles.subtitle}>Bagikan umpan balik Anda tentang proses konseling</p>
      </header>

      <div className={styles.introCard}>
        <div className={styles.introIconWrapper}>
          <Info size={24} className={styles.introIcon} />
        </div>
        <div>
          <h2 className={styles.introTitle}>Petunjuk Pengisian</h2>
          <p className={styles.introText}>
            Silakan isi pernyataan berikut sesuai dengan kondisi Anda setelah mengikuti konseling online CBT. Tidak ada jawaban benar atau salah. Jawablah dengan jujur sesuai keadaan Anda saat ini.
          </p>
        </div>
      </div>

      <div className={styles.stickyProgress}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>Progress: {Object.keys(answers).length} / 24</span>
          <span className={styles.progressPercent}>{Math.round(progressPercent)}%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {DIMENSIONS.map((dim, dimIdx) => (
          <div key={dimIdx} className={styles.dimensionSection}>
            <h3 className={styles.dimensionTitle}>{dim.title}</h3>
            
            <div className={styles.itemsList}>
              {dim.items.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <p className={styles.itemText}>
                    <span className={styles.itemNumber}>{item.id}.</span> {item.text}
                  </p>
                  
                  <div className={styles.optionsGroup}>
                    {OPTIONS.map((opt) => (
                      <label 
                        key={opt.value} 
                        className={`${styles.optionLabel} ${answers[item.id]?.value === opt.value ? styles.optionSelected : ''}`}
                      >
                        <input
                          type="radio"
                          name={`item-${item.id}`}
                          value={opt.value}
                          checked={answers[item.id]?.value === opt.value}
                          onChange={() => handleOptionChange(item.id, opt.value, item.type)}
                          className={styles.radioInput}
                          required
                        />
                        <span className={styles.radioCustom}></span>
                        <span className={styles.optionText}>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.formFooter}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!isComplete || isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Evaluasi'}
          </button>
          {!isComplete && (
            <p className={styles.warningText}>Harap isi semua pernyataan sebelum mengirim.</p>
          )}
        </div>
      </form>
    </div>
  );
}
