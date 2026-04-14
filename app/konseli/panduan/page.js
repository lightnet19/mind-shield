'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import s from '../../shared.module.css';

export default function Panduan() {
  const router = useRouter();
  const [checks, setChecks] = useState({ c1: false, c2: false, c3: false, c4: false });
  const [agreed, setAgreed] = useState(false);

  const allChecked = checks.c1 && checks.c2 && checks.c3 && checks.c4;

  const handleAgree = () => {
    setAgreed(true);
    setTimeout(() => router.push('/konseli/screening'), 1200);
  };

  return (
    <div className="fade-in">
      <h1 className={s.pageTitle}>Panduan Layanan & Informed Consent</h1>
      <p className={s.pageDesc}>Silakan baca dan pahami setiap poin berikut sebelum memulai proses konseling.</p>

      <div className={`card ${s.formCard}`}>
        <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>Tentang Layanan Mind Shield</h3>
        <div style={{color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24, fontSize: '0.95rem'}}>
          <p style={{marginBottom: 12}}>
            Mind Shield adalah platform konseling daring berbasis pendekatan <strong>Cognitive Behavioral Therapy (CBT)</strong> yang dirancang khusus untuk membantu individu yang mengalami kecenderungan <em>self-injury</em> (menyakiti diri sendiri).
          </p>
          <p style={{marginBottom: 12}}>
            Layanan ini <strong>bukan</strong> pengganti penanganan darurat medis. Jika Anda merasa dalam bahaya segera, hubungi layanan darurat terdekat atau hotline kesehatan jiwa: <strong>119 ext. 8</strong>.
          </p>
          <p>
            Seluruh data Anda akan dilindungi dengan enkripsi dan hanya dapat diakses oleh konselor yang ditugaskan untuk Anda.
          </p>
        </div>

        <h3 style={{marginBottom: 16, color: 'var(--secondary)'}}>Persetujuan Informed Consent</h3>

        <label className={s.checkGroup} onClick={() => setChecks(p => ({...p, c1: !p.c1}))}>
          <input type="checkbox" checked={checks.c1} readOnly />
          <span>Saya memahami bahwa layanan ini bersifat <strong>konseling daring</strong> dan bukan penanganan darurat medis.</span>
        </label>

        <label className={s.checkGroup} onClick={() => setChecks(p => ({...p, c2: !p.c2}))}>
          <input type="checkbox" checked={checks.c2} readOnly />
          <span>Saya bersedia mengisi form screening awal dan memberikan informasi secara <strong>jujur</strong> untuk keperluan asesmen.</span>
        </label>

        <label className={s.checkGroup} onClick={() => setChecks(p => ({...p, c3: !p.c3}))}>
          <input type="checkbox" checked={checks.c3} readOnly />
          <span>Saya memahami bahwa data saya akan <strong>dijaga kerahasiaannya</strong> dan hanya diakses oleh konselor yang ditugaskan.</span>
        </label>

        <label className={s.checkGroup} onClick={() => setChecks(p => ({...p, c4: !p.c4}))}>
          <input type="checkbox" checked={checks.c4} readOnly />
          <span>Saya bersedia mengikuti prosedur terapi CBT termasuk mengisi <strong>jurnal harian</strong> dan <strong>tugas rumah</strong> yang diberikan konselor.</span>
        </label>

        {agreed && (
          <div className={`${s.alertBox} ${s.alertSuccess}`}>
            ✅ Persetujuan berhasil disimpan! Mengalihkan ke halaman Screening...
          </div>
        )}

        <div className={s.btnRow}>
          <button
            className="btn-primary"
            disabled={!allChecked || agreed}
            onClick={handleAgree}
            style={{padding: '12px 32px', opacity: (!allChecked || agreed) ? 0.5 : 1}}
          >
            {agreed ? 'Tersimpan ✓' : 'Saya Setuju & Lanjutkan'}
          </button>
        </div>
      </div>
    </div>
  );
}