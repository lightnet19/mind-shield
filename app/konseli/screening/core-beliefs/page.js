'use client';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function CoreBeliefsScreening() {
  const beliefs = [
    { id: 1, text: "Saya pada dasarnya cacat atau rusak." },
    { id: 2, text: "Saya tidak berharga." },
    { id: 3, text: "Orang lain pasti akan meninggalkan saya." },
    { id: 4, text: "Dunia ini adalah tempat yang berbahaya." },
    { id: 5, text: "Saya tidak akan pernah bisa bahagia." },
    { id: 6, text: "Saya harus selalu sempurna agar diterima." },
    { id: 7, text: "Jika saya menunjukkan kelemahan, orang akan memanfaatkan saya." },
    { id: 8, text: "Emosi saya terlalu kuat dan tidak bisa dikendalikan." }
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
          <h2>Instrumen Core Beliefs</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            Seberapa kuat Anda meyakini pernyataan berikut ini? (1=Sangat Tidak Yakin, 5=Sangat Yakin)
          </p>
        </div>

        <div className="slide-up">
          <div style={{ overflowX: 'auto' }}>
            <table className="screening-table">
              <thead>
                <tr>
                  <th>Pernyataan Keyakinan Inti</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>1</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>2</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>3</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>4</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>5</th>
                </tr>
              </thead>
              <tbody>
                {beliefs.map((item) => (
                  <tr key={item.id}>
                    <td>{item.text}</td>
                    <td style={{ textAlign: 'center' }}><input type="radio" name={`cb_${item.id}`} value="1" /></td>
                    <td style={{ textAlign: 'center' }}><input type="radio" name={`cb_${item.id}`} value="2" /></td>
                    <td style={{ textAlign: 'center' }}><input type="radio" name={`cb_${item.id}`} value="3" /></td>
                    <td style={{ textAlign: 'center' }}><input type="radio" name={`cb_${item.id}`} value="4" /></td>
                    <td style={{ textAlign: 'center' }}><input type="radio" name={`cb_${item.id}`} value="5" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Save size={18} /> Simpan Hasil Core Beliefs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
