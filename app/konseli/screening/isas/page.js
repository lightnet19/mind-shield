'use client';
import { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function ISASScreening() {
  const [section, setSection] = useState(1);

  const isasItems = [
    "Memukul atau membenturkan diri",
    "Menggigit diri sendiri",
    "Membakar kulit",
    "Mengukir kulit (carving)",
    "Memotong/menyayat kulit (cutting)",
    "Mencabut rambut secara paksa",
    "Mencubit parah",
    "Menggaruk secara berlebihan",
    "Mengganggu penyembuhan luka"
  ];

  const isasFunctions = [
    { id: 1, text: "Melepaskan tekanan emosional" },
    { id: 2, text: "Menghukum diri sendiri" },
    { id: 3, text: "Merasakan sesuatu walau rasa sakit" },
    { id: 4, text: "Mendapatkan perhatian" },
    { id: 5, text: "Menghindari melakukan bunuh diri" }
  ];

  return (
    <div className="fade-in">
      <div style={{ marginBottom: '24px' }}>
        <Link href="/konseli/screening" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: '500' }}>
          <ArrowLeft size={16} /> Kembali ke Menu Screening
        </Link>
      </div>

      <div className="card">
        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '20px', marginBottom: '24px' }}>
          <h2>Instrumen ISAS - Bagian {section}</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            {section === 1 
              ? "Bagian I: Berapa kali Anda pernah melakukan perilaku berikut secara sengaja kepada diri sendiri?" 
              : "Bagian II: Seberapa relevan pernyataan berikut dengan alasan Anda melakukan self-injury? (0=Tidak Relevan, 1=Agak Relevan, 2=Sangat Relevan)"}
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
                        <input type="number" min="0" placeholder="0" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="form-group" style={{ marginTop: '24px' }}>
              <label>Kapan Anda PERTAMA KALI melakukan perilaku menyakiti diri secara sengaja? (Sebutkan tahun/usia)</label>
              <input type="text" placeholder="Contoh: Saat usia 14 tahun" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
              <button className="btn-primary" onClick={() => setSection(2)}>Lanjut ke Bagian II</button>
            </div>
          </div>
        )}

        {section === 2 && (
          <div className="slide-up">
            <div style={{ overflowX: 'auto' }}>
              <table className="screening-table">
                <thead>
                  <tr>
                    <th>Pernyataan (Fungsi)</th>
                    <th style={{ width: '100px', textAlign: 'center' }}>0</th>
                    <th style={{ width: '100px', textAlign: 'center' }}>1</th>
                    <th style={{ width: '100px', textAlign: 'center' }}>2</th>
                  </tr>
                </thead>
                <tbody>
                  {isasFunctions.map((item) => (
                    <tr key={item.id}>
                      <td>{item.text}</td>
                      <td style={{ textAlign: 'center' }}><input type="radio" name={`func_${item.id}`} value="0" /></td>
                      <td style={{ textAlign: 'center' }}><input type="radio" name={`func_${item.id}`} value="1" /></td>
                      <td style={{ textAlign: 'center' }}><input type="radio" name={`func_${item.id}`} value="2" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              <button className="btn-outline" onClick={() => setSection(1)}>Kembali</button>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Save size={18} /> Simpan Hasil ISAS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
