'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import styles from './panduan.module.css';

export default function InformedConsent() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Anda harus menyetujui Informed Consent untuk melanjutkan.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      router.push('/konseli/screening');
    }, 1000);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>LEMBAR PERSETUJUAN (INFORMED CONSENT)</h1>
        <p>Layanan Konseling Online Website Mind Shield</p>
      </div>

      <div className={styles.consentCard}>
        <div className={styles.section}>
          <h3>Pengantar</h3>
          <p>Mind Shield merupakan website layanan konseling online yang dirancang untuk membantu konseli dalam memahami, mengelola, dan mengurangi kecenderungan self-injury melalui pendekatan Cognitive Behavioral Therapy (CBT). Sebelum mengikuti layanan, setiap konseli diharapkan membaca dan memahami seluruh informasi pada lembar persetujuan ini.</p>
          <p>Lembar persetujuan ini berisi penjelasan mengenai tujuan layanan, prosedur, manfaat, risiko, kerahasiaan data, serta hak konseli selama mengikuti layanan konseling online. Dengan menyetujui informed consent ini, konseli menyatakan kesediaannya untuk terlibat dalam proses layanan sesuai prosedur yang berlaku di website Mind Shield.</p>
        </div>

        <div className={styles.section}>
          <h3>Tujuan Layanan</h3>
          <p>Layanan konseling online Mind Shield bertujuan untuk:</p>
          <ul>
            <li>Membantu konseli mengenali kondisi psikologis yang berkaitan dengan perilaku self-injury;</li>
            <li>Membantu konseli memahami core beliefs atau keyakinan inti yang dapat berkaitan dengan masalah yang dialami;</li>
            <li>Memberikan layanan konseling online berbasis CBT secara terstruktur;</li>
            <li>Membantu konseli memperoleh umpan balik, arahan layanan, dan penugasan terapeutik yang mendukung proses perubahan.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Prosedur Layanan</h3>
          <p>Adapun tahapan yang akan Saudara lakukan dalam layanan ini adalah sebagai berikut:</p>
          <ol>
            <li>Melakukan login atau registrasi pada website Mind Shield;</li>
            <li>Membaca panduan penggunaan website;</li>
            <li>Menyetujui ketentuan layanan, etika, privasi, dan informed consent;</li>
            <li>Mengisi screening self-injury;</li>
            <li>Mengisi screening core beliefs;</li>
            <li>Mengajukan jadwal konseling online;</li>
            <li>Mengikuti sesi konseling online berbasis CBT sesuai jadwal yang telah dikonfirmasi;</li>
            <li>Menerima umpan balik dan arahan layanan dari konselor;</li>
            <li>Mengerjakan penugasan terapeutik apabila diberikan oleh konselor;</li>
            <li>Mengikuti sesi lanjutan, evaluasi akhir, dan follow up sesuai kebutuhan layanan.</li>
          </ol>
        </div>

        <div className={styles.section}>
          <h3>Waktu Pelaksanaan</h3>
          <p>Ketentuan umum waktu layanan adalah sebagai berikut:</p>
          <ul>
            <li>Sesi konseling online dilaksanakan dengan durasi sekitar 45–60 menit per sesi.</li>
            <li>Rentang antar sesi dapat dilakukan sekali dalam satu pekan atau menyesuaikan kebutuhan layanan.</li>
            <li>Hari dan jam pelaksanaan sesi dikomunikasikan lebih lanjut melalui sistem penjadwalan website atau melalui administrator.</li>
            <li>Jam operasional layanan dapat disesuaikan dengan kebijakan pengelola website Mind Shield.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Manfaat Layanan</h3>
          <p>Layanan ini diharapkan dapat memberikan manfaat kepada konseli, antara lain:</p>
          <ul>
            <li>Membantu konseli mengekspresikan pikiran dan perasaan secara lebih aman dan terarah;</li>
            <li>Membantu konseli memahami kondisi diri, khususnya yang berkaitan dengan self-injury;</li>
            <li>Membantu konseli mengenali pola keyakinan inti yang memengaruhi cara berpikir, merasa, dan bertindak;</li>
            <li>Membantu konseli memperoleh dukungan profesional melalui layanan konseling online berbasis CBT;</li>
            <li>Membantu konseli menyusun langkah-langkah penanganan dan pengembangan diri secara lebih adaptif.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Risiko Layanan</h3>
          <p>Layanan ini tidak menimbulkan risiko fisik secara langsung, tetapi dalam proses konseling terdapat kemungkinan munculnya rasa tidak nyaman secara psikologis, misalnya: sedih, cemas, malu, tertekan, atau tidak nyaman saat membahas pengalaman pribadi.</p>
          <p>Hal tersebut dapat terjadi karena topik yang dibahas berkaitan dengan pengalaman, pikiran, perasaan, atau perilaku yang bersifat pribadi dan sensitif. Selain itu, tidak semua masalah dapat diselesaikan hanya dalam satu atau dua sesi. Oleh sebab itu, konseli disarankan mengikuti proses layanan secara bertahap sesuai arahan konselor agar memperoleh hasil yang lebih optimal.</p>
        </div>

        <div className={styles.section}>
          <h3>Penanganan Kondisi Risiko Tinggi</h3>
          <p>Apabila dari hasil screening atau proses konseling ditemukan adanya risiko tinggi yang berkaitan dengan keselamatan diri, maka konselor dapat melakukan langkah-langkah berikut:</p>
          <ul>
            <li>Memberikan respons krisis;</li>
            <li>Menyusun safety planning atau rencana pengamanan;</li>
            <li>Menyarankan pendampingan oleh orang tua/wali/pihak terpercaya;</li>
            <li>Memberikan rujukan (referral) kepada layanan profesional yang lebih sesuai, seperti psikolog, psikiater, rumah sakit, atau layanan darurat.</li>
          </ul>
          <p>Dalam kondisi tersebut, kerahasiaan dapat dibatasi sejauh diperlukan untuk melindungi keselamatan konseli.</p>
        </div>

        <div className={styles.section}>
          <h3>Jaminan Kerahasiaan</h3>
          <p>Kerahasiaan data dan identitas Saudara akan dijaga sesuai dengan prinsip etika layanan bimbingan dan konseling. Seluruh informasi yang Saudara berikan melalui website Mind Shield, baik berupa data pribadi, hasil screening, maupun isi konseling, akan dijaga kerahasiaannya dan hanya digunakan untuk kepentingan layanan.</p>
          <p>Namun demikian, terdapat kondisi tertentu yang memungkinkan keterbukaan informasi secara terbatas, yaitu apabila:</p>
          <ul>
            <li>Terdapat risiko serius terhadap keselamatan diri konseli;</li>
            <li>Terdapat ancaman terhadap keselamatan orang lain;</li>
            <li>Terdapat kewajiban hukum atau kebijakan institusi yang harus dipenuhi.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Penyimpanan dan Penggunaan Data</h3>
          <p>Data yang Saudara berikan akan disimpan dalam sistem website Mind Shield dan hanya dapat diakses oleh pihak yang berwenang sesuai perannya, yaitu administrator dan konselor, dalam batas kebutuhan layanan. Data tidak akan disebarluaskan kepada pihak lain tanpa persetujuan Saudara, kecuali pada kondisi keselamatan atau kewajiban hukum sebagaimana telah dijelaskan sebelumnya.</p>
          <p>Apabila data layanan akan digunakan untuk kepentingan akademik, evaluasi, atau pengembangan program, identitas pribadi konseli akan disamarkan atau dianonimkan.</p>
        </div>

        <div className={styles.section}>
          <h3>Hak Konseli</h3>
          <p>Sebagai peserta layanan, Saudara memiliki hak untuk:</p>
          <ul>
            <li>Memperoleh penjelasan mengenai layanan yang akan diikuti;</li>
            <li>Mengajukan pertanyaan terkait prosedur layanan;</li>
            <li>Menyampaikan persetujuan atau menolak mengikuti layanan;</li>
            <li>Menghentikan keikutsertaan dalam layanan sewaktu-waktu dengan menyampaikan alasan kepada konselor atau administrator;</li>
            <li>Memperoleh perlakuan yang menghargai martabat, privasi, dan keamanan psikologis.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Informasi Kontak</h3>
          <p>Apabila Saudara memerlukan informasi lebih lanjut mengenai layanan konseling online Mind Shield, silakan menghubungi administrator website melalui:</p>
          <ul>
            <li>Nama Admin/Penanggung Jawab: Muh. Syawal Hikmah</li>
            <li>Nomor WhatsApp: 08123456789</li>
            <li>Email: mindshield.webapp@um.ac.id</li>
            <li>Alamat layanan/institusi: Universitas Negeri Malang</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.formSection}>
          <div className={styles.agreementBox}>
            <h3>Pernyataan Kesediaan</h3>
            <p>Saya telah membaca, memahami, dan memperoleh penjelasan mengenai layanan konseling online Mind Shield. Saya memahami tujuan, prosedur, manfaat, risiko, jaminan kerahasiaan, serta hak saya sebagai peserta layanan. Dengan ini saya menyatakan bersedia mengikuti layanan konseling online pada website Mind Shield secara sukarela.</p>
            
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="consent" 
                  value="yes"
                  checked={agreed}
                  onChange={() => setAgreed(true)}
                  required 
                />
                <span>Ya, saya bersedia mengikuti layanan konseling online Mind Shield.</span>
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="consent" 
                  value="no"
                  checked={!agreed && agreed !== false}
                  onChange={() => {
                    setAgreed(false);
                    alert("Anda harus menyetujui untuk melanjutkan.");
                  }}
                  required 
                />
                <span>Tidak, saya tidak bersedia mengikuti layanan konseling online Mind Shield.</span>
              </label>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Nama Lengkap</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Tanggal</label>
              <input type="date" required />
            </div>
            <div className={styles.formGroup}>
              <label>Pendidikan/Jurusan/Fakultas/Kelas</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Instansi/Sekolah/Perguruan Tinggi</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Alamat Domisili</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Kecamatan</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Kota/Kabupaten</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Kode Pos</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Nomor HP/WhatsApp</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>Tanda Tangan / Persetujuan Digital (Ketik Nama Anda)</label>
              <input type="text" required />
            </div>
          </div>

          <div className={styles.scheduleInfo}>
            <h4>Jam Operasional Konseling online:</h4>
            <p>Dimulai pukul 08.00-16.00 WIB</p>
            <p>Konseli akan dilayani secara daring di Web Mind Shield melalui aplikasi Web Mind Shield dan voice call.</p>
          </div>

          <div className={styles.complaintSection}>
            <h3>Keluhan/Masalah Awal:</h3>
            <div className={styles.formGroup}>
              <label>Silahkan deskripsikan masalah/keluhan yang dirasakan selama ini?</label>
              <textarea rows={3} required></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>Sudah berapa lama Anda merasakan masalah/keluhan selama ini?</label>
              <textarea rows={2} required></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>Apa usaha yang kamu lakukan selama ini?</label>
              <textarea rows={2} required></textarea>
            </div>
          </div>
          
          <div className={styles.noteBox}>
            <p><strong>Catatan:</strong> Apabila pengguna layanan masih berusia di bawah 18 tahun, persetujuan orang tua/wali dapat disesuaikan dengan kebijakan lembaga atau kebutuhan etis penelitian/pelayanan.</p>
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className="btn-primary" disabled={loading || !agreed}>
              {loading ? 'Menyimpan...' : 'Kirim Persetujuan & Lanjut'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
