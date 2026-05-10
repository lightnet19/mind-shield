'use client';
import styles from './tinjau.module.css';
import { ClipboardList, AlertTriangle, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const screenings = [
  { id:1, name:'Dewi Ayu', date:'10 Mei 2026', risk:'Tinggi', isas1:18, isas2:52, coreBeliefs:'Negatif-Diri dominan', urgent:true },
  { id:2, name:'Fajar Maulana', date:'10 Mei 2026', risk:'Sedang', isas1:9, isas2:31, coreBeliefs:'Negatif-Lain dominan', urgent:false },
  { id:3, name:'Siti Nuraini', date:'9 Mei 2026', risk:'Rendah', isas1:3, isas2:14, coreBeliefs:'Positif-Diri dominan', urgent:false },
  { id:4, name:'Andi P.', date:'8 Mei 2026', risk:'Sedang', isas1:11, isas2:28, coreBeliefs:'Negatif-Diri & Lain', urgent:false },
];

const riskColor = { Tinggi:'#ef4444', Sedang:'#f59e0b', Rendah:'#0e9f6e' };
const riskBg = { Tinggi:'rgba(239,68,68,.1)', Sedang:'rgba(245,158,11,.1)', Rendah:'rgba(14,159,110,.1)' };

export default function TinjauScreening() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tinjau Screening Baru</h1>
          <p className={styles.subtitle}>Hasil screening ISAS dan Core Beliefs konseli yang belum ditinjau.</p>
        </div>
        <span className={styles.urgentChip}><AlertTriangle size={14}/> {screenings.filter(s=>s.urgent).length} Darurat</span>
      </div>

      <div className={styles.list}>
        {screenings.map(s => (
          <div key={s.id} className={`${styles.card} ${s.urgent ? styles.cardUrgent : ''}`}>
            <div className={styles.cardTop} onClick={() => toggle(s.id)}>
              <div className={styles.avatar}>{s.name[0]}</div>
              <div className={styles.info}>
                <span className={styles.name}>{s.name}</span>
                <span className={styles.date}>{s.date}</span>
              </div>
              <span className={styles.riskBadge} style={{ background: riskBg[s.risk], color: riskColor[s.risk] }}>
                Risiko {s.risk}
              </span>
              {expanded === s.id ? <ChevronUp size={18} className={styles.chevron}/> : <ChevronDown size={18} className={styles.chevron}/>}
            </div>

            {expanded === s.id && (
              <div className={styles.detail}>
                <div className={styles.detailGrid}>
                  <div className={styles.detailBox}>
                    <div className={styles.detailLabel}>ISAS Seksi I (Perilaku)</div>
                    <div className={styles.detailValue}>{s.isas1} <span className={styles.detailUnit}>frekuensi</span></div>
                  </div>
                  <div className={styles.detailBox}>
                    <div className={styles.detailLabel}>ISAS Seksi II (Fungsi)</div>
                    <div className={styles.detailValue}>{s.isas2} <span className={styles.detailUnit}>/ 78 poin</span></div>
                  </div>
                  <div className={styles.detailBox} style={{ gridColumn: '1/-1' }}>
                    <div className={styles.detailLabel}>Core Beliefs Dominan</div>
                    <div className={styles.detailValue} style={{ fontSize:'1rem' }}>{s.coreBeliefs}</div>
                  </div>
                </div>
                {s.urgent && (
                  <div className={styles.urgentNote}>
                    ⚠️ Konseli ini menunjukkan risiko tinggi. Tindak lanjut segera diperlukan.
                  </div>
                )}
                <div className={styles.detailActions}>
                  <button className={styles.btnPrimary}><Eye size={15}/> Lihat Detail Lengkap</button>
                  <button className={styles.btnSecondary}>Jadwalkan Sesi</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
