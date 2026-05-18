'use client';
import { useState, useRef } from 'react';
import { ArrowLeft, Save, AlertTriangle, Phone, Shield } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './isas.module.css';

// ISAS Scoring: Bagian I = frekuensi (0+), Bagian II = fungsi (0-2 per item)
// Threshold risiko tinggi: total frekuensi >= 3 ATAU rata-rata fungsi >= 1.5
const RISK_THRESHOLD_FREQ = 3;    // total jenis perilaku yang pernah dilakukan ≥ 3
const RISK_THRESHOLD_FUNC = 1.5;  // rata-rata skor fungsi ≥ 1.5

const isasItems = [
  "Memukul atau membenturkan diri",
  "Menggigit diri sendiri",
  "Membakar kulit",
  "Mengukir kulit (carving)",
  "Memotong/menyayat kulit (cutting)",
  "Mencabut rambut secara paksa",
  "Mencubit parah",
  "Menggaruk secara berlebihan",
  "Mengganggu penyembuhan luka",
];

const isasFunctions = [
  { id: 'f1', text: "Melepaskan tekanan emosional yang tidak tertahankan" },
  { id: 'f2', text: "Menghukum diri sendiri atas kesalahan yang saya buat" },
  { id: 'f3', text: "Merasakan sesuatu meskipun hanya rasa sakit fisik" },
  { id: 'f4', text: "Mendapatkan perhatian atau kepedulian dari orang lain" },
  { id: 'f5', text: "Menghindari dorongan melakukan tindakan yang lebih berbahaya" },
  { id: 'f6', text: "Mengekspresikan kemarahan yang tidak bisa diungkapkan secara verbal" },
  { id: 'f7', text: "Merasa lebih nyata atau hadir dalam kehidupan" },
  { id: 'f8', text: "Mendapatkan kontrol atas tubuh atau situasi yang terasa kacau" },
];

// Halaman Crisis Response yang ditampilkan inline
function CrisisResponse({ onContinueAnyway }) {
  return (
    <div className={styles.crisisPage}>
      <div className={styles.crisisCard}>
        <div className={styles.crisisHeader}>
          <AlertTriangle size={40} color="#dc2626" />
          <h1>Kami Khawatir dengan Kondisimu</h1>
          <p>
            Berdasarkan jawaban yang kamu berikan, sistem mendeteksi bahwa kamu mungkin sedang
            dalam kondisi yang membutuhkan dukungan segera.
          </p>
        </div>

        <div className={styles.crisisBody}>
          <div className={styles.crisisMessage}>
            <p>
              <strong>Kamu tidak harus menghadapi ini sendirian.</strong> Hasil screening-mu
              akan segera ditinjau oleh konselor. Sementara itu, kami sangat menganjurkan
              kamu untuk menghubungi salah satu dari berikut:
            </p>
          </div>

          <div className={styles.contactList}>
            <div className={styles.contactCard}>
              <Phone size={20} color="#1a56db" />
              <div>
                <div className={styles.contactLabel}>Guru BK / Konselor Sekolah</div>
                <div className={styles.contactDesc}>Hubungi langsung guru BK atau konselor yang kamu percaya di sekolah.</div>
              </div>
            </div>
            <div className={styles.contactCard}>
              <Phone size={20} color="#0e9f6e" />
              <div>
                <div className={styles.contactLabel}>Hotline Into The Light Indonesia</div>
                <div className={styles.contactDesc}>119 ext 8 — Tersedia 24 jam sehari, 7 hari seminggu</div>
              </div>
            </div>
            <div className={styles.contactCard}>
              <Phone size={20} color="#f59e0b" />
              <div>
                <div className={styles.contactLabel}>Yayasan Pulih</div>
                <div className={styles.contactDesc}>(021) 788-42580 — Layanan konseling psikologis</div>
              </div>
            </div>
            <div className={styles.contactCard}>
              <Shield size={20} color="#8b5cf6" />
              <div>
                <div className={styles.contactLabel}>Orang Tua / Wali / Orang Dewasa Tepercaya</div>
                <div className={styles.contactDesc}>Ceritakan kondisimu kepada orang dewasa yang kamu percaya di sekitarmu.</div>
              </div>
            </div>
          </div>

          <div className={styles.safetyPlan}>
            <h3>🛡️ Rencana Keamanan Segera</h3>
            <ol>
              <li>Tinggalkan benda-benda yang bisa membahayakan dirimu.</li>
              <li>Pindah ke tempat yang aman dan tidak sendirian.</li>
              <li>Hubungi seseorang yang kamu percaya sekarang.</li>
              <li>Ingat: Perasaan ini tidak akan berlangsung selamanya.</li>
            </ol>
          </div>
        </div>

        <div className={styles.crisisFooter}>
          <Link href="/konseli/dashboard" className={styles.btnDashboard}>
            Kembali ke Dashboard
          </Link>
          <button
            className={styles.btnContinueAnyway}
            onClick={onContinueAnyway}
          >
            Saya sudah lebih aman, lanjutkan screening
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ISASScreening() {
  const router = useRouter();
  const [section, setSection] = useState(1);
  const [freqAnswers, setFreqAnswers] = useState({}); // { idx: number }
  const [funcAnswers, setFuncAnswers] = useState({}); // { id: '0'|'1'|'2' }
  const [firstTime, setFirstTime] = useState('');
  const [riskResult, setRiskResult] = useState(null); // null | { isHigh, freqScore, funcAvg }
  const [bypassCrisis, setBypassCrisis] = useState(false);

  const handleFreqChange = (idx, val) => {
    setFreqAnswers(prev => ({ ...prev, [idx]: parseInt(val) || 0 }));
  };

  const handleFuncChange = (id, val) => {
    setFuncAnswers(prev => ({ ...prev, [id]: parseInt(val) }));
  };

  // Hitung skor ISAS dan tentukan risiko
  const calculateRisk = () => {
    // Bagian I: hitung jumlah jenis perilaku yang pernah dilakukan (frekuensi > 0)
    const activeTypes = Object.values(freqAnswers).filter(v => v > 0).length;

    // Bagian II: hitung rata-rata skor fungsi
    const funcValues = isasFunctions.map(f => funcAnswers[f.id] ?? 0);
    const funcSum = funcValues.reduce((a, b) => a + b, 0);
    const funcAvg = funcValues.length > 0 ? funcSum / funcValues.length : 0;

    const isHigh = activeTypes >= RISK_THRESHOLD_FREQ || funcAvg >= RISK_THRESHOLD_FUNC;
    return { isHigh, freqScore: activeTypes, funcAvg: funcAvg.toFixed(2) };
  };

  const handleSave = () => {
    const result = calculateRisk();
    setRiskResult(result);

    // Simpan ke localStorage (flat file client-side)
    const savedData = {
      timestamp: new Date().toISOString(),
      freqAnswers,
      funcAnswers,
      firstTime,
      riskLevel: result.isHigh ? 'tinggi' : 'rendah',
      freqScore: result.freqScore,
      funcAvg: result.funcAvg,
    };
    try {
      localStorage.setItem('isas_result', JSON.stringify(savedData));
    } catch (e) {}
  };

  // Tampilkan halaman crisis jika risiko tinggi dan belum di-bypass
  if (riskResult?.isHigh && !bypassCrisis) {
    return <CrisisResponse onContinueAnyway={() => setBypassCrisis(true)} />;
  }

  // Tampilkan hasil akhir jika sudah selesai dan tidak high-risk (atau bypass)
  if (riskResult && (!riskResult.isHigh || bypassCrisis)) {
    return (
      <div className="fade-in">
        <div className={styles.resultCard}>
          <div className={styles.resultHeader}>
            <div className={styles.resultIcon} style={{ background: riskResult.isHigh ? 'rgba(245,158,11,0.1)' : 'rgba(14,159,110,0.1)' }}>
              {riskResult.isHigh ? <AlertTriangle size={32} color="#d97706" /> : <Shield size={32} color="#0e9f6e" />}
            </div>
            <h2>Hasil ISAS Tersimpan</h2>
            <p>
              Tingkat Risiko:{' '}
              <strong style={{ color: riskResult.isHigh ? '#d97706' : '#0e9f6e' }}>
                {riskResult.isHigh ? 'Perlu Perhatian' : 'Rendah'}
              </strong>
            </p>
            <div className={styles.scoreRow}>
              <span>Jenis perilaku aktif: <strong>{riskResult.freqScore}</strong></span>
              <span>Rata-rata fungsi: <strong>{riskResult.funcAvg}</strong></span>
            </div>
          </div>
          <p className={styles.resultNote}>
            Hasil ini akan ditinjau oleh konselor Anda. Lanjutkan ke tahap screening berikutnya.
          </p>
          <div className={styles.resultActions}>
            <Link href="/konseli/screening" className="btn-primary">
              Lanjut ke Core Beliefs
            </Link>
            <Link href="/konseli/dashboard" className="btn-outline">
              Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <div style={{ marginBottom: '24px' }}>
        <Link href="/konseli/screening" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: '500' }}>
          <ArrowLeft size={16} /> Kembali ke Menu Screening
        </Link>
      </div>

      {/* Progress Indicator */}
      <div className={styles.sectionProgress}>
        <div className={`${styles.sectionStep} ${section >= 1 ? styles.active : ''}`}>Bagian I</div>
        <div className={styles.sectionLine} />
        <div className={`${styles.sectionStep} ${section >= 2 ? styles.active : ''}`}>Bagian II</div>
      </div>

      <div className="card">
        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '20px', marginBottom: '24px' }}>
          <h2>Instrumen ISAS — Bagian {section}</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            {section === 1
              ? "Bagian I: Berapa kali Anda pernah melakukan perilaku berikut secara sengaja kepada diri sendiri? (Tulis 0 jika tidak pernah)"
              : "Bagian II: Seberapa relevan pernyataan berikut dengan alasan Anda melakukan self-injury? (0 = Tidak Relevan, 1 = Agak Relevan, 2 = Sangat Relevan)"}
          </p>
        </div>

        {section === 1 && (
          <div className="slide-up">
            <div style={{ overflowX: 'auto' }}>
              <table className="screening-table">
                <thead>
                  <tr>
                    <th>Perilaku Self-Injury</th>
                    <th style={{ width: '150px', textAlign: 'center' }}>Perkiraan Jumlah (Kali)</th>
                  </tr>
                </thead>
                <tbody>
                  {isasItems.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item}</td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={freqAnswers[idx] ?? ''}
                          onChange={(e) => handleFreqChange(idx, e.target.value)}
                          style={{ width: '80px', textAlign: 'center' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="form-group" style={{ marginTop: '24px' }}>
              <label>Kapan Anda PERTAMA KALI melakukan perilaku menyakiti diri secara sengaja? (Sebutkan tahun/usia)</label>
              <input
                type="text"
                placeholder="Contoh: Saat usia 14 tahun"
                value={firstTime}
                onChange={(e) => setFirstTime(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
              <button className="btn-primary" onClick={() => setSection(2)}>
                Lanjut ke Bagian II
              </button>
            </div>
          </div>
        )}

        {section === 2 && (
          <div className="slide-up">
            <div style={{ overflowX: 'auto' }}>
              <table className="screening-table">
                <thead>
                  <tr>
                    <th>Pernyataan (Fungsi Self-Injury)</th>
                    <th style={{ width: '80px', textAlign: 'center' }}>0<br /><small>Tidak Relevan</small></th>
                    <th style={{ width: '80px', textAlign: 'center' }}>1<br /><small>Agak Relevan</small></th>
                    <th style={{ width: '80px', textAlign: 'center' }}>2<br /><small>Sangat Relevan</small></th>
                  </tr>
                </thead>
                <tbody>
                  {isasFunctions.map((item) => (
                    <tr key={item.id}>
                      <td>{item.text}</td>
                      {[0, 1, 2].map(val => (
                        <td key={val} style={{ textAlign: 'center' }}>
                          <input
                            type="radio"
                            name={`func_${item.id}`}
                            value={val}
                            checked={funcAnswers[item.id] === val}
                            onChange={() => handleFuncChange(item.id, val)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              <button className="btn-outline" onClick={() => setSection(1)}>Kembali</button>
              <button
                className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={handleSave}
              >
                <Save size={18} /> Simpan & Cek Hasil ISAS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
