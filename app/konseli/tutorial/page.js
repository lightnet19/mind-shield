'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, LogIn, BookOpen, FileText, Calendar, Video, ClipboardList, CheckSquare, FileBarChart, BrainCircuit } from 'lucide-react';
import styles from './tutorial.module.css';

const TUTORIAL_STEPS = [
  {
    id: 1,
    title: "Cara Login dan Registrasi",
    icon: <LogIn size={24} />,
    description: "Langkah pertama untuk menggunakan layanan Mind Shield.",
    content: "Untuk mulai menggunakan layanan, Anda harus memiliki akun terlebih dahulu.\n\n1. Klik tombol 'Daftar' di halaman utama.\n2. Isi form pendaftaran dengan data diri yang valid.\n3. Setelah berhasil mendaftar, gunakan Email dan Password Anda untuk Login."
  },
  {
    id: 2,
    title: "Cara Membaca Panduan Website",
    icon: <BookOpen size={24} />,
    description: "Pahami cara kerja dan aturan layanan kami.",
    content: "Di menu sidebar kiri, klik menu 'Panduan'. Di sana terdapat panduan lengkap mengenai batasan layanan, kerahasiaan data, dan apa yang harus dilakukan dalam kondisi krisis/darurat."
  },
  {
    id: 3,
    title: "Cara Mengisi Screening Self-Injury",
    icon: <FileText size={24} />,
    description: "Asesmen awal untuk menilai tingkat risiko.",
    content: "Pilih menu 'Screening Self-Injury'. Anda akan diminta untuk menjawab beberapa pertanyaan tentang pengalaman Anda terkait menyakiti diri. Jawablah sejujur mungkin karena ini akan membantu konselor memahami kondisi Anda."
  },
  {
    id: 4,
    title: "Cara Mengisi Screening Core Beliefs",
    icon: <BrainCircuit size={24} />,
    description: "Asesmen lanjutan untuk menggali keyakinan dasar.",
    content: "Setelah menyelesaikan screening awal, lanjutkan ke 'Screening Core Beliefs'. Asesmen ini akan menggali keyakinan mendalam yang Anda miliki tentang diri sendiri, orang lain, dan dunia."
  },
  {
    id: 5,
    title: "Cara Mengisi Screening Pola Pikir (BARU)",
    icon: <BrainCircuit size={24} />,
    description: "Identifikasi hubungan antara peristiwa, pikiran, dan perasaan.",
    content: "Menu ini berada di bawah bagian Screening. Pilih satu peristiwa tidak nyaman yang baru saja terjadi, lalu jawab 15 pertanyaan essay untuk membantu Anda dan konselor mengidentifikasi pola pikir otomatis yang muncul."
  },
  {
    id: 6,
    title: "Cara Mengajukan Jadwal Konseling",
    icon: <Calendar size={24} />,
    description: "Buat janji temu dengan konselor.",
    content: "Buka menu 'Jadwal Sesi'. Anda dapat melihat ketersediaan konselor dan memilih waktu yang cocok. Setelah diajukan, tunggu konfirmasi dari pihak konselor."
  },
  {
    id: 7,
    title: "Cara Masuk ke Ruang Konseling Online",
    icon: <Video size={24} />,
    description: "Bergabung ke sesi video call terapi.",
    content: "Pada waktu yang telah dijadwalkan, buka menu 'Ruang Konseling'. Tombol 'Mulai Sesi' akan aktif 5 menit sebelum jadwal. Pastikan koneksi internet Anda stabil dan gunakan earphone untuk privasi."
  },
  {
    id: 8,
    title: "Cara Mengerjakan Penugasan Terapeutik",
    icon: <ClipboardList size={24} />,
    description: "Selesaikan tugas yang diberikan konselor di antara sesi.",
    content: "Setelah sesi konseling, konselor mungkin akan memberikan tugas (homework). Buka menu 'Penugasan Terapeutik' untuk melihat instruksi dan mengirimkan hasil tugas Anda."
  },
  {
    id: 9,
    title: "Cara Mengisi Evaluasi Konseling (BARU)",
    icon: <CheckSquare size={24} />,
    description: "Berikan umpan balik setelah sesi selesai.",
    content: "Menu ini penting untuk menilai perkembangan Anda. Buka menu 'Evaluasi Konseling' dan isi 24 pernyataan yang tersedia sesuai dengan perubahan yang Anda rasakan setelah beberapa sesi."
  },
  {
    id: 10,
    title: "Cara Membaca Laporan Hasil Konseling",
    icon: <FileBarChart size={24} />,
    description: "Lihat perkembangan dan catatan konselor.",
    content: "Di akhir periode konseling, Anda dapat melihat rangkuman perkembangan Anda di menu 'Laporan'. Laporan ini berisi evaluasi kemajuan, diagnosis (jika ada), dan rekomendasi lanjutan."
  }
];

export default function TutorialPage() {
  const [expandedStep, setExpandedStep] = useState(1);

  const toggleStep = (id) => {
    if (expandedStep === id) {
      setExpandedStep(null);
    } else {
      setExpandedStep(id);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tutorial Penggunaan</h1>
        <p className={styles.subtitle}>Panduan lengkap menggunakan fitur-fitur Mind Shield</p>
      </header>

      <div className={styles.tutorialList}>
        {TUTORIAL_STEPS.map((step) => (
          <div 
            key={step.id} 
            className={`${styles.stepCard} ${expandedStep === step.id ? styles.stepExpanded : ''}`}
          >
            <div 
              className={styles.stepHeader} 
              onClick={() => toggleStep(step.id)}
            >
              <div className={styles.stepIconWrapper}>
                {step.icon}
              </div>
              <div className={styles.stepTitleWrapper}>
                <h3 className={styles.stepTitle}>{step.id}. {step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.chevronWrapper}>
                {expandedStep === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            
            {expandedStep === step.id && (
              <div className={styles.stepContent}>
                {step.content.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
