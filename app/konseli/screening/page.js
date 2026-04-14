'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import s from '../../shared.module.css';

const screeningQuestions = [
  "Saya merasa sangat tertekan atau tidak berdaya dalam 2 minggu terakhir.",
  "Saya pernah dengan sengaja menyakiti diri sendiri (memotong, membakar, memukul diri).",
  "Saya sering merasa tidak berharga atau merasa menjadi beban bagi orang lain.",
  "Saya mengalami kesulitan tidur atau perubahan nafsu makan yang signifikan.",
  "Saya menggunakan tindakan menyakiti diri sebagai cara untuk mengatasi rasa sakit emosional.",
  "Saya merasa sulit mengendalikan dorongan untuk menyakiti diri sendiri.",
  "Saya pernah berpikir bahwa hidup ini tidak layak dijalani."
];

const thoughtQuestions = [
  { situation: "Ketika saya merasa ditolak oleh teman atau orang terdekat", prompt: "Apa yang langsung terlintas di pikiran Anda?" },
  { situation: "Ketika saya melakukan kesalahan di sekolah/pekerjaan", prompt: "Pikiran otomatis apa yang muncul?" },
  { situation: "Ketika saya merasa sendiri di malam hari", prompt: "Apa yang Anda katakan pada diri sendiri?" }
];

const coreBeliefOptions = [
  "Saya tidak layak dicintai",
  "Saya tidak cukup baik",
  "Dunia ini tidak aman bagi saya",
  "Saya harus selalu sempurna",
  "Saya lemah dan tidak berdaya",
  "Orang lain tidak bisa dipercaya",
  "Saya akan selalu sendirian",
  "Perasaan saya tidak penting bagi siapapun"
];

const scaleLabels = ["Tidak Pernah", "Jarang", "Kadang", "Sering", "Sangat Sering"];

export default function Screening() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(screeningQuestions.length).fill(-1));
  const [thoughts, setThoughts] = useState(Array(thoughtQuestions.length).fill(''));
  const [beliefs, setBeliefs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleScale = (qi, val) => {
    const copy = [...answers];
    copy[qi] = val;
    setAnswers(copy);
  };

  const handleThought = (i, val) => {
    const copy = [...thoughts];
    copy[i] = val;
    setThoughts(copy);
  };

  const toggleBelief = (b) => {
    setBeliefs(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => router.push('/konseli/jadwal'), 2000);
  };

  const canNext0 = answers.every(a => a >= 0);
  const canNext1 = thoughts.every(t => t.trim().length > 0);

  const stepNames = ["Screening Gejala", "Automatic Thoughts", "Core Belief"];

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Screening & Asesmen CBT</h1>
      <p className={s.pageDesc}>Jawablah dengan jujur. Jawaban Anda sepenuhnya rahasia dan dilindungi.</p>

      {/* Stepper */}
      <div className={s.stepper}>
        {stepNames.map((name, i) => (
          <div key={i} className={`${s.step} ${step === i ? s.stepActive : ''} ${step > i ? s.stepDone : ''}`}>
            {step > i ? '✓ ' : `${i + 1}. `}{name}
          </div>
        ))}
      </div>

      {/* Step 0: Screening Gejala Self-Injury */}
      {step === 0 && (
        <div className="card">
          <h3 style={{marginBottom: 8, color: 'var(--secondary)'}}>Screening Gejala Self-Injury</h3>
          <p style={{color: 'var(--text-muted)', marginBottom: 24, fontSize: '0.9rem'}}>
            Berikan penilaian seberapa sering Anda mengalami kondisi berikut dalam <strong>2 minggu terakhir</strong>.
          </p>

          {screeningQuestions.map((q, qi) => (
            <div key={qi} className={s.scaleGroup}>
              <p>{qi + 1}. {q}</p>
              <div className={s.scaleOptions}>
                {scaleLabels.map((label, val) => (
                  <div
                    key={val}
                    className={`${s.scaleOption} ${answers[qi] === val ? s.scaleOptionSelected : ''}`}
                    onClick={() => handleScale(qi, val)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className={s.btnRow}>
            <button className="btn-primary" disabled={!canNext0} onClick={() => setStep(1)}
              style={{padding: '12px 32px', opacity: canNext0 ? 1 : 0.5}}>
              Lanjut: Identifikasi Pikiran →
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Automatic Thoughts */}
      {step === 1 && (
        <div className="card">
          <h3 style={{marginBottom: 8, color: 'var(--secondary)'}}>Identifikasi Automatic Thoughts</h3>
          <p style={{color: 'var(--text-muted)', marginBottom: 24, fontSize: '0.9rem'}}>
            Pikiran otomatis adalah reaksi instan yang muncul saat menghadapi situasi tertentu. Tuliskan apa yang langsung terlintas di kepala Anda.
          </p>

          {thoughtQuestions.map((tq, i) => (
            <div key={i} className={s.scaleGroup}>
              <p style={{fontWeight: 600}}>Situasi: {tq.situation}</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 8}}>{tq.prompt}</p>
              <textarea
                className={s.textarea}
                placeholder="Contoh: Saya berpikir bahwa semua orang membenci saya..."
                value={thoughts[i]}
                onChange={(e) => handleThought(i, e.target.value)}
                style={{minHeight: 80}}
              />
            </div>
          ))}

          <div className={s.btnRow}>
            <button className={s.btnSecondary} onClick={() => setStep(0)}>← Kembali</button>
            <button className="btn-primary" disabled={!canNext1} onClick={() => setStep(2)}
              style={{padding: '12px 32px', opacity: canNext1 ? 1 : 0.5}}>
              Lanjut: Core Belief →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Core Belief */}
      {step === 2 && (
        <div className="card">
          <h3 style={{marginBottom: 8, color: 'var(--secondary)'}}>Identifikasi Core Belief</h3>
          <p style={{color: 'var(--text-muted)', marginBottom: 24, fontSize: '0.9rem'}}>
            Core Belief adalah keyakinan paling dalam tentang diri Anda. Pilih semua yang sesuai dengan apa yang Anda rasakan.
          </p>

          {coreBeliefOptions.map((b, i) => (
            <label key={i} className={s.checkGroup} onClick={() => toggleBelief(b)}>
              <input type="checkbox" checked={beliefs.includes(b)} readOnly />
              <span>{b}</span>
            </label>
          ))}

          <div className={s.formGroup} style={{marginTop: 20}}>
            <label>Atau tuliskan keyakinan lain yang Anda rasakan:</label>
            <textarea className={s.textarea} placeholder="Tuliskan di sini..." style={{minHeight: 80}} />
          </div>

          {submitted && (
            <div className={`${s.alertBox} ${s.alertSuccess}`}>
              ✅ Screening berhasil dikirim! Konselor akan meninjau hasil Anda. Mengalihkan ke halaman Jadwal...
            </div>
          )}

          <div className={s.btnRow}>
            <button className={s.btnSecondary} onClick={() => setStep(1)}>← Kembali</button>
            <button className="btn-primary" disabled={submitted || beliefs.length === 0} onClick={handleSubmit}
              style={{padding: '12px 32px', opacity: (submitted || beliefs.length === 0) ? 0.5 : 1}}>
              {submitted ? 'Terkirim ✓' : 'Kirim Hasil Screening'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}