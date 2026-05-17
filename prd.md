# Product Requirements Document (PRD)
# Mind Shield — Website Self Defense Berbasis CBT

**Versi:** 2.0  
**Tanggal:** 17 Mei 2026  
**Penulis:** Tim Pengembang Mind Shield  
**Referensi Dokumen:** Tambahannya ini berada setelah screening core belief.docx

---

## 1. Ringkasan Produk

**Mind Shield** adalah platform konseling online (tele-counseling) berbasis web yang menggunakan pendekatan **Cognitive Behavioral Therapy (CBT)** untuk membantu siswa/konseli mengenali pikiran negatif, mengelola emosi, dan mendapatkan dukungan konseling terstruktur guna mengurangi tindakan **self-injury**.

### Visi Produk
Menyediakan ruang digital yang aman, terstruktur, dan mudah diakses bagi siswa (konseli) untuk memahami hubungan antara peristiwa, pikiran, perasaan, reaksi tubuh, perilaku, serta keyakinan tentang diri sendiri, orang lain, dan masa depan — sekaligus mendapatkan pendampingan profesional dari konselor.

---

## 2. Tech Stack

| Komponen | Teknologi |
|---|---|
| Frontend | Next.js (App Router) |
| Styling | CSS Modules (Vanilla CSS) |
| Backend/Database | Supabase (PostgreSQL + Auth + Storage + RLS) |
| Real-time Communication | WebRTC / Jitsi Meet / Daily.co |
| AI Chatbot | Gemini API / n8n orchestration |
| Deployment | Vercel (Frontend) + Supabase Cloud (Backend) |

---

## 3. Aktor / Peran Pengguna (RBAC)

### 3.1 Konseli (Siswa/Klien)
Pengguna utama yang mendaftarkan diri untuk mendapatkan layanan konseling online.

### 3.2 Konselor (Counselor)
Profesional BK yang memberikan layanan konseling, meninjau hasil screening, memberikan penugasan terapeutik, dan mengelola sesi.

### 3.3 Admin
Pengelola sistem yang mengatur manajemen pengguna, konten, jadwal, dan keamanan.

---

## 4. Alur Pengguna Utama (User Flow)

```
Registrasi → Login → Informed Consent → Screening Self-Injury → Screening Core Beliefs
→ [BARU] Screening Pola Pikir → Pengajuan Jadwal → Sesi Konseling Online
→ Penugasan Terapeutik → Chatbot Pendamping → [BARU] Evaluasi Konseling Online
→ Evaluasi Akhir & Follow-Up → Laporan Hasil Konseling
```

---

## 5. Modul & Fitur

### 5.1 Landing Page
- Hero section dengan branding Mind Shield
- Penjelasan layanan dan pendekatan CBT
- Tombol CTA: Registrasi / Login
- Informasi kontak dan jam operasional

### 5.2 Autentikasi
- **Registrasi** konseli dengan data: Nama, Email, Pendidikan/Jurusan, Instansi, Alamat, No HP
- **Login** multi-role (Konseli, Konselor, Admin)
- Verifikasi email
- Lupa password

### 5.3 Informed Consent
- Tampilan penjelasan lengkap: Tujuan, Prosedur, Manfaat, Risiko, Kerahasiaan, Hak Konseli
- Form persetujuan digital (Ya/Tidak)
- Informasi kontak admin (Muh. Syawal Hikmah)
- Input keluhan/masalah awal (deskripsi masalah, durasi, usaha selama ini)
- Catatan untuk konseli di bawah 18 tahun

### 5.4 Screening Self-Injury
- Form screening dengan kalkulasi skor risiko
- Kategori: Risiko Rendah / Sedang / Tinggi
- **Crisis Alert System**: Jika risiko tinggi → trigger respons krisis, safety planning, dan referral

### 5.5 Screening Core Beliefs
- Form screening keyakinan inti (core beliefs)
- Hasil dikirim ke dashboard Konselor untuk ditinjau

### 5.6 ✅ [FITUR BARU] Screening Pola Pikir
> **Sumber:** Dokumen "Tambahannya ini berada setelah screening core belief"

Fitur ini berada **setelah Screening Core Beliefs** dalam alur layanan. Tujuannya membantu konseli mengenali hubungan antara peristiwa, pikiran, perasaan, reaksi tubuh, perilaku, serta keyakinan tentang diri sendiri, orang lain, dan masa depan.

#### 5.6.1 Konten Pengantar
Tampilkan teks pengantar yang bersifat ramah dan tidak mengintimidasi:
- "Angket ini bukanlah tes untuk menilai benar atau salahnya diri kamu"
- "Lembar ini dibuat untuk membantu kamu mengenali hubungan antara peristiwa, pikiran, perasaan, reaksi tubuh, perilaku, serta keyakinan"
- Petunjuk pengisian yang jelas

#### 5.6.2 Petunjuk Pengisian
1. Bacalah setiap pertanyaan dengan tenang dan teliti
2. Jawablah berdasarkan pengalaman pribadi
3. Pilih satu peristiwa yang paling ingin dipahami terlebih dahulu
4. Untuk pertanyaan skor emosi: 0–100 (0 = tidak terasa, 100 = sangat kuat)
5. Gunakan bahasa sendiri, tidak perlu takut salah
6. Jika sulit, tulis secara sederhana

#### 5.6.3 Form Screening Pola Pikir (15 Pertanyaan)
Format: Tabel dengan kolom No, Pertanyaan, dan Jawaban (textarea)

| No | Pertanyaan |
|---|---|
| 1 | Peristiwa apa yang membuat saya merasa tidak nyaman, cemas, sedih, marah, malu, atau tertekan? |
| 2 | Pikiran apa yang langsung muncul dalam diri saya ketika situasi itu terjadi? |
| 3 | Perasaan apa yang muncul akibat pikiran tersebut? |
| 4 | Seberapa kuat emosi tersebut saya rasakan? Beri skor 0–100. |
| 5 | Apa yang saya rasakan pada tubuh saya? (jantung berdebar, pusing, lemas, menangis, sulit tidur) |
| 6 | Apa yang saya lakukan setelah pikiran dan emosi itu muncul? |
| 7 | Apa arti kejadian itu bagi diri saya? |
| 8 | Keyakinan apa yang muncul tentang diri saya? (Contoh: "Saya gagal", "Saya tidak berharga") |
| 9 | Apa keyakinan saya tentang orang lain? (Contoh: "Orang lain akan menolak saya") |
| 10 | Apa keyakinan saya tentang dunia atau masa depan? (Contoh: "Masa depan saya suram") |
| 11 | Aturan apa yang saya yakini? (Contoh: "Saya harus selalu berhasil agar diterima") |
| 12 | Apa kebiasaan saya untuk menghadapi kondisi ini? (menghindar, diam, menyalahkan diri, dll.) |
| 13 | Bagaimana keyakinan dan pikiran tersebut memengaruhi kehidupan saya? |
| 14 | Cara berpikir lain apa yang lebih sehat, realistis, dan membantu? |
| 15 | Apa tindakan baru yang bisa saya lakukan ketika menghadapi situasi serupa? |

#### 5.6.4 Perilaku Sistem
- Hasil screening **otomatis terkirim ke akun Konselor**
- Data disimpan di tabel `screening_results` dengan `screening_type = 'pola_pikir'`
- Konselor dapat meninjau melalui dashboard di menu **Tinjau Screening**
- Input pertanyaan nomor 4 menggunakan **slider 0–100** atau input angka dengan validasi

---

### 5.7 ✅ [FITUR BARU] Evaluasi Konseling Online
> **Sumber:** Dokumen "Tambahannya ini berada setelah screening core belief"

Fitur evaluasi yang diisi konseli **setelah mengikuti konseling online CBT**. Menggunakan skala Likert 5 poin untuk mengukur efektivitas konseling.

#### 5.7.1 Konten Pengantar
"Silakan isi pernyataan berikut sesuai dengan kondisi Anda setelah mengikuti konseling online CBT. Tidak ada jawaban benar atau salah. Jawablah dengan jujur sesuai keadaan Anda saat ini."

#### 5.7.2 Skala Jawaban (Likert 5 Poin)
- Sangat Sesuai (SS)
- Sesuai (S)
- Ragu-Ragu (R)
- Tidak Sesuai (TS)
- Sangat Tidak Sesuai (STS)

#### 5.7.3 Daftar Pernyataan (24 Item)

**A. Dimensi Pengendalian Dorongan Self-Injury (Item 1–4)**
1. Saya lebih mampu menahan dorongan untuk menyakiti diri ketika tekanan muncul.
2. *(Unfavorable)* Keinginan untuk melukai diri masih sering muncul dalam diri saya.
3. Saya mulai memiliki cara lain yang lebih aman selain menyakiti diri saat menghadapi tekanan.
4. *(Unfavorable)* Saya masih merasa bahwa menyakiti diri adalah cara tercepat untuk meredakan beban.

**B. Dimensi Keyakinan Diri / Self-Worth (Item 5–8)**
5. Saya mulai memandang diri saya sebagai pribadi yang tetap berharga.
6. *(Unfavorable)* Saya masih merasa bahwa diri saya rusak atau tidak layak.
7. Saya lebih mampu mengenali keyakinan negatif tentang diri saya.
8. Saya mulai percaya bahwa saya layak dibantu dan didukung.

**C. Dimensi Regulasi Emosi (Item 9–12)**
9. Saya lebih mampu menenangkan diri saat emosi negatif meningkat.
10. *(Unfavorable)* Emosi saya masih sangat sulit dikendalikan ketika sedang tertekan.
11. Saya dapat mengenali tanda-tanda saat kondisi emosi saya mulai memburuk.
12. Saya lebih cepat pulih setelah mengalami tekanan emosional.

**D. Dimensi Strategi Coping (Item 13–16)**
13. Saya memiliki cara yang lebih sehat untuk menghadapi masalah.
14. Saya mulai menerapkan strategi coping yang aman dalam kehidupan sehari-hari.
15. *(Unfavorable)* Saat menghadapi masalah, saya masih merasa bingung dan tidak tahu harus berbuat apa.
16. Saya mampu menjalankan penugasan terapeutik yang diberikan selama konseling.

**E. Dimensi Jaringan Keselamatan / Safety Network (Item 17–20)**
17. Saya tahu kepada siapa saya dapat meminta bantuan ketika kondisi saya memburuk.
18. Saya memiliki langkah keselamatan yang dapat dilakukan saat kondisi krisis muncul.
19. Saya berani menghubungi orang yang aman atau terpercaya ketika membutuhkan bantuan.
20. *(Unfavorable)* Saya cenderung memendam masalah sendiri walaupun kondisi saya semakin berat.

**F. Dimensi Evaluasi Keseluruhan Layanan (Item 21–24)**
21. Saya memahami kondisi diri saya dengan lebih baik.
22. Saya merasakan manfaat nyata dari layanan konseling online CBT yang saya ikuti.
23. *(Unfavorable)* Setelah mengikuti konseling, saya merasa kondisi saya belum mengalami perubahan berarti.
24. Saya merasa tujuan konseling yang saya jalani mulai tercapai.

#### 5.7.4 Perilaku Sistem
- Hasil evaluasi **otomatis terkirim ke akun Konselor**
- Scoring: Item favorable (1,3,5,7,8,9,11,12,13,14,16,17,18,19,21,22,24) → SS=5, S=4, R=3, TS=2, STS=1
- Scoring: Item unfavorable (2,4,6,10,15,20,23) → SS=1, S=2, R=3, TS=4, STS=5
- Total skor 24–120, dengan skor lebih tinggi menunjukkan perbaikan yang lebih baik
- Ringkasan per dimensi ditampilkan dalam bentuk grafik/chart di dashboard Konselor
- Data disimpan di tabel baru `evaluation_results`

---

### 5.8 ✅ [FITUR BARU] Tutorial Penggunaan Konseling Online
> **Sumber:** Dokumen "Tambahannya ini berada setelah screening core belief"

Halaman/fitur panduan langkah demi langkah untuk menggunakan layanan konseling online di Mind Shield.

#### 5.8.1 Konten Tutorial
Tutorial interaktif berbasis step-by-step yang mencakup:
1. **Cara Login/Registrasi** — Panduan membuat akun dan masuk ke sistem
2. **Cara Membaca Panduan** — Navigasi halaman panduan website
3. **Cara Mengisi Screening Self-Injury** — Langkah pengisian form screening
4. **Cara Mengisi Screening Core Beliefs** — Langkah pengisian screening keyakinan inti
5. **Cara Mengisi Screening Pola Pikir** — Langkah pengisian screening pola pikir (BARU)
6. **Cara Mengajukan Jadwal** — Proses pengajuan jadwal konseling
7. **Cara Masuk Ruang Konseling Online** — Panduan bergabung ke sesi video/voice call
8. **Cara Mengerjakan Penugasan Terapeutik** — Langkah pengisian penugasan CBT
9. **Cara Mengisi Evaluasi Konseling** — Panduan mengisi form evaluasi (BARU)
10. **Cara Membaca Laporan Hasil Konseling** — Akses dan membaca laporan

#### 5.8.2 Format Tampilan
- Desain card-based dengan ilustrasi/ikon per langkah
- Accordion atau tab-based navigation
- Bisa diakses dari:
  - Menu sidebar Konseli (halaman `/konseli/tutorial`)
  - Chatbot Pendamping (menu "Panduan Website")
  - Halaman Panduan umum (`/panduan`)

---

### 5.9 Penjadwalan Konseling
- Kalender interaktif untuk mengajukan jadwal
- Slot waktu: 08.00–16.00 WIB
- Durasi sesi: 45–60 menit
- Status: Menunggu / Dikonfirmasi / Selesai / Dibatalkan
- Konfirmasi oleh Konselor

### 5.10 Ruang Konseling Online
- Video/Voice call terintegrasi (WebRTC/Jitsi)
- Chat real-time
- Timer sesi
- Catatan sesi untuk Konselor (Case Formulation)

### 5.11 Penugasan Terapeutik
Modul CBT pasca-sesi dengan 5 bagian:
- **A. Cek Keamanan Diri** — Skala 1–10 untuk keamanan, tekanan emosi, dorongan menyakiti diri
- **B. Situasi yang Membuat Tertekan** — Narasi peristiwa pemicu
- **C. Periksa Pikiran Negatif** — Identifikasi dan tantang pikiran negatif
- **D. Tindakan Aman** — Checklist tindakan aman + rencana aman personal
- **E. Refleksi** — Evaluasi setelah latihan
- Hasil dikirim ke Konselor

### 5.12 Chatbot Pendamping
- Sapaan awal + menu quick-action
- Panduan penggunaan website
- Informasi jadwal konseling
- Info penugasan terapeutik
- Laporan hasil konseling
- Pengalihan ke Konselor untuk isu klinis
- **Crisis detection** → jalur darurat otomatis
- Terintegrasi Gemini API

### 5.13 Dashboard Konselor
- Ringkasan aktivitas dan jadwal hari ini
- **Tinjau Screening** — Self-Injury, Core Beliefs, + **Pola Pikir (BARU)**
- **Tinjau Evaluasi Konseling (BARU)** — Ringkasan per dimensi dengan visualisasi grafik
- Crisis Alert System
- Case Formulation editor
- Manajemen sesi dan jadwal
- Daftar pasien/konseli

### 5.14 Dashboard Admin
- User Management (CRUD Konselor, moderasi Konseli)
- Content Management (Panduan, Informed Consent)
- Schedule Management (slot default)
- Monitoring & Security (log aktivitas, log chatbot)

### 5.15 Laporan Hasil Konseling
- Ringkasan proses konseling
- Hasil screening (Self-Injury, Core Beliefs, Pola Pikir)
- Hasil evaluasi konseling
- Catatan dan rekomendasi Konselor

---

## 6. Database Schema (Revisi)

### Tabel Eksisting
| Tabel | Deskripsi |
|---|---|
| `users` | id, email, role, full_name, created_at |
| `profiles` | user_id, bio, contact_number, emergency_contact, status |
| `consent_logs` | id, user_id, agreed_at, ip_address, complaint_description, complaint_duration, self_effort |
| `screening_results` | id, user_id, screening_type, answers_json, risk_level, submitted_at |
| `appointments` | id, konseli_id, konselor_id, scheduled_at, status, meeting_link |
| `counseling_notes` | id, appointment_id, konselor_id, formulation, feedback, private_notes |
| `therapeutic_tasks` | id, appointment_id, user_id, task_description, submission_json, status |
| `chatbot_sessions` | id, user_id, active_until, context_data |

### Tabel Baru / Modifikasi

#### `screening_results` — Tambah tipe baru
- `screening_type` kini menerima: `'self_injury'`, `'core_beliefs'`, **`'pola_pikir'`**
- Untuk `pola_pikir`: `answers_json` berisi array 15 jawaban essay + skor emosi (pertanyaan 4)

#### `evaluation_results` — **[TABEL BARU]**
```sql
CREATE TABLE evaluation_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  konselor_id UUID REFERENCES users(id),
  appointment_id UUID REFERENCES appointments(id),
  answers_json JSONB NOT NULL,        -- {item_1: "SS", item_2: "TS", ...}
  dimension_scores JSONB,             -- {pengendalian_dorongan: 15, keyakinan_diri: 18, ...}
  total_score INTEGER,                -- 24-120
  submitted_at TIMESTAMPTZ DEFAULT now()
);
```

#### `tutorial_progress` — **[TABEL BARU]** (Opsional)
```sql
CREATE TABLE tutorial_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  steps_completed JSONB DEFAULT '[]', -- ["login", "screening_si", ...]
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 7. Halaman / Route (Next.js App Router)

### Publik
| Route | Deskripsi |
|---|---|
| `/` | Landing Page |
| `/login` | Halaman Login |
| `/register` | Halaman Registrasi |
| `/panduan` | Panduan Penggunaan (umum) |

### Konseli
| Route | Deskripsi |
|---|---|
| `/konseli/dashboard` | Dashboard Konseli |
| `/konseli/screening` | Screening Self-Injury & Core Beliefs |
| `/konseli/screening/pola-pikir` | **[BARU]** Screening Pola Pikir |
| `/konseli/jadwal` | Pengajuan Jadwal |
| `/konseli/sesi` | Ruang Konseling Online |
| `/konseli/penugasan` | Penugasan Terapeutik |
| `/konseli/evaluasi` | **[BARU]** Evaluasi Konseling Online |
| `/konseli/tutorial` | **[BARU]** Tutorial Penggunaan Konseling |
| `/konseli/laporan` | Laporan Hasil Konseling |
| `/konseli/panduan` | Panduan Penggunaan |

### Konselor
| Route | Deskripsi |
|---|---|
| `/konselor/dashboard` | Dashboard Konselor |
| `/konselor/tinjau-screening` | Tinjau Screening (termasuk Pola Pikir) |
| `/konselor/tinjau-evaluasi` | **[BARU]** Tinjau Evaluasi Konseling |
| `/konselor/pasien` | Daftar Pasien/Konseli |
| `/konselor/jadwal` | Manajemen Jadwal |
| `/konselor/sesi` | Ruang Konseling Online |
| `/konselor/pesan` | Pesan/Komunikasi |
| `/konselor/laporan` | Laporan Konseling |

### Admin
| Route | Deskripsi |
|---|---|
| `/admin/dashboard` | Dashboard Admin |
| `/admin/users` | Manajemen Pengguna |
| `/admin/jadwal` | Manajemen Jadwal |
| `/admin/monitoring` | Monitoring & Log |
| `/admin/keamanan` | Keamanan Sistem |
| `/admin/panduan` | Manajemen Konten Panduan |

---

## 8. Keamanan & Privasi

- **Row Level Security (RLS)** di Supabase untuk isolasi data antar pengguna
- **Enkripsi** data sensitif (hasil screening, catatan konseling)
- **Kerahasiaan** dijaga sesuai etika BK — kecuali risiko keselamatan
- **Audit log** untuk setiap akses data sensitif
- Data evaluasi hanya bisa diakses oleh Konselor yang menangani dan Admin

---

## 9. Informasi Operasional

- **Jam operasional:** 08.00 – 16.00 WIB
- **Durasi sesi:** 45–60 menit
- **Frekuensi:** 1x per minggu atau sesuai kebutuhan
- **Admin/PJ:** Muh. Syawal Hikmah
- **Email:** mindshield.webapp@um.ac.id
- **Institusi:** Universitas Negeri Malang
