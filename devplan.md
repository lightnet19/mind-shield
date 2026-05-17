# Development Plan (DevPlan)
# Mind Shield — Rencana Pengembangan Revisi v2.0

**Versi:** 2.0  
**Tanggal:** 17 Mei 2026  
**Referensi:** prd.md, Tambahannya ini berada setelah screening core belief.docx  
**Status Saat Ini:** UI Prototype (Frontend-only, belum terintegrasi Supabase)

---

## 1. Kondisi Saat Ini (Current State)

### Struktur Proyek
```
mind-shield/
├── app/
│   ├── admin/          → ✅ Layout + Dashboard, Jadwal, Keamanan, Monitoring, Panduan, Users
│   ├── components/     → ✅ Chatbot component
│   ├── dashboard/      → ✅ Dashboard routing umum
│   ├── konseli/        → ✅ Layout + Dashboard, Jadwal, Laporan, Panduan, Penugasan, Screening, Sesi
│   ├── konselor/       → ✅ Layout + Dashboard, Jadwal, Laporan, Pasien, Pesan, Sesi, Tinjau-screening
│   ├── login/          → ✅ Login page + CSS
│   ├── register/       → ✅ Register page
│   ├── panduan/        → ✅ Panduan umum
│   ├── globals.css     → ✅ Global styles
│   ├── layout.js       → ✅ Root layout
│   ├── page.js         → ✅ Landing page
│   ├── page.module.css → ✅ Landing page styles
│   └── shared.module.css → ✅ Shared styles
├── public/
├── package.json        → Next.js project
└── next.config.mjs
```

### Yang Sudah Ada
- ✅ Landing page dengan branding
- ✅ Login & Register pages (UI only)
- ✅ Dashboard untuk 3 role (Admin, Konselor, Konseli)
- ✅ Screening Self-Injury & Core Beliefs (UI)
- ✅ Jadwal konseling (UI)
- ✅ Sesi konseling (UI)
- ✅ Penugasan terapeutik (UI)
- ✅ Laporan konseling (UI)
- ✅ Chatbot component (UI)
- ✅ Panduan penggunaan
- ✅ Tinjau Screening (Konselor)
- ✅ Admin panel (Dashboard, Users, Jadwal, Keamanan, Monitoring, Panduan)

### Yang Belum Ada (Gap Analysis)
- ❌ **Screening Pola Pikir** — Fitur baru dari dokumen
- ❌ **Evaluasi Konseling Online** — Fitur baru dari dokumen (24 item Likert)
- ❌ **Tutorial Penggunaan Konseling Online** — Fitur baru dari dokumen
- ❌ **Tinjau Evaluasi** pada dashboard Konselor
- ❌ Integrasi Supabase (Auth, Database, RLS, Storage)
- ❌ Real-time communication (WebRTC/Jitsi)
- ❌ AI Chatbot backend (Gemini API)
- ❌ Scoring & kalkulasi otomatis screening
- ❌ Crisis Alert System (deteksi risiko tinggi)

---

## 2. Rencana Pengembangan — Fase

### 🔵 FASE 1: Fitur Baru dari Dokumen (Prioritas Utama)
**Estimasi:** 1–2 Minggu  
**Tujuan:** Implementasi 3 fitur baru sesuai dokumen referensi

#### 1.1 Screening Pola Pikir
**Route:** `/konseli/screening/pola-pikir`

**Files yang dibuat:**
| File | Deskripsi |
|---|---|
| `app/konseli/screening/pola-pikir/page.js` | Halaman utama screening pola pikir |
| `app/konseli/screening/pola-pikir/pola-pikir.module.css` | Styling halaman |

**Spesifikasi Teknis:**
- Form wizard multi-step atau single-page form dengan 15 pertanyaan essay
- Pertanyaan nomor 4: Input slider/range 0–100 dengan label visual
- Teks pengantar ditampilkan di awal sebelum form
- Petunjuk pengisian ditampilkan dalam accordion/collapsible
- Tombol submit mengirim data ke konselor
- State management: React useState/useReducer
- Validasi: Semua field wajib diisi sebelum submit (kecuali pertanyaan dengan contoh)

**Data Model:**
```json
{
  "screening_type": "pola_pikir",
  "answers": [
    { "question_id": 1, "answer": "text..." },
    { "question_id": 4, "answer": 75, "type": "score" },
    ...
  ],
  "submitted_at": "2026-05-17T..."
}
```

---

#### 1.2 Evaluasi Konseling Online
**Route:** `/konseli/evaluasi`

**Files yang dibuat:**
| File | Deskripsi |
|---|---|
| `app/konseli/evaluasi/page.js` | Halaman evaluasi konseling |
| `app/konseli/evaluasi/evaluasi.module.css` | Styling halaman |

**Spesifikasi Teknis:**
- 24 pernyataan dengan radio button (Likert 5 poin)
- Grouped by dimensi (6 dimensi) dengan visual separator
- Progress indicator menunjukkan progress pengisian
- Teks pengantar yang ramah di awal halaman
- Auto-scroll ke pernyataan berikutnya setelah memilih

**Skema Scoring:**

| Tipe | Nomor Item | SS | S | R | TS | STS |
|---|---|---|---|---|---|---|
| Favorable | 1,3,5,7,8,9,11,12,13,14,16,17,18,19,21,22,24 | 5 | 4 | 3 | 2 | 1 |
| Unfavorable | 2,4,6,10,15,20,23 | 1 | 2 | 3 | 4 | 5 |

**Kalkulasi Dimensi:**
| Dimensi | Item | Skor Min | Skor Max |
|---|---|---|---|
| Pengendalian Dorongan Self-Injury | 1–4 | 4 | 20 |
| Keyakinan Diri / Self-Worth | 5–8 | 4 | 20 |
| Regulasi Emosi | 9–12 | 4 | 20 |
| Strategi Coping | 13–16 | 4 | 20 |
| Jaringan Keselamatan | 17–20 | 4 | 20 |
| Evaluasi Keseluruhan | 21–24 | 4 | 20 |
| **TOTAL** | **1–24** | **24** | **120** |

---

#### 1.3 Tutorial Penggunaan Konseling Online
**Route:** `/konseli/tutorial`

**Files yang dibuat:**
| File | Deskripsi |
|---|---|
| `app/konseli/tutorial/page.js` | Halaman tutorial step-by-step |
| `app/konseli/tutorial/tutorial.module.css` | Styling halaman |

**Spesifikasi Teknis:**
- 10 langkah tutorial dalam format card-based
- Accordion/tab navigation untuk setiap langkah
- Setiap langkah memiliki: judul, ikon, deskripsi, dan screenshot/ilustrasi
- Responsive design
- Bisa di-navigate melalui Chatbot

**Langkah Tutorial:**
1. Cara Login/Registrasi
2. Cara Membaca Panduan Website
3. Cara Mengisi Screening Self-Injury
4. Cara Mengisi Screening Core Beliefs
5. Cara Mengisi Screening Pola Pikir *(BARU)*
6. Cara Mengajukan Jadwal Konseling
7. Cara Masuk ke Ruang Konseling Online
8. Cara Mengerjakan Penugasan Terapeutik
9. Cara Mengisi Evaluasi Konseling *(BARU)*
10. Cara Membaca Laporan Hasil Konseling

---

#### 1.4 Update Dashboard Konselor — Tinjau Evaluasi
**Route:** `/konselor/tinjau-evaluasi`

**Files yang dibuat:**
| File | Deskripsi |
|---|---|
| `app/konselor/tinjau-evaluasi/page.js` | Halaman tinjau evaluasi |
| `app/konselor/tinjau-evaluasi/tinjau-evaluasi.module.css` | Styling halaman |

**Spesifikasi Teknis:**
- Daftar evaluasi yang masuk dari konseli
- Detail evaluasi per konseli dengan:
  - Skor total
  - Skor per dimensi (bar chart / radar chart)
  - Detail jawaban per item
  - Tanggal pengisian
- Filter berdasarkan konseli, tanggal, range skor
- Export data (opsional)

---

#### 1.5 Update Sidebar Navigation Konseli
**File:** `app/konseli/layout.js`

**Perubahan:**
- Tambah menu **"Screening Pola Pikir"** di bawah menu Screening
- Tambah menu **"Evaluasi Konseling"** setelah Penugasan
- Tambah menu **"Tutorial"** di bawah Panduan

---

#### 1.6 Update Sidebar Navigation Konselor
**File:** `app/konselor/layout.js`

**Perubahan:**
- Tambah menu **"Tinjau Evaluasi"** di bawah Tinjau Screening

---

### 🟢 FASE 2: Integrasi Backend — Supabase
**Estimasi:** 2–3 Minggu  
**Tujuan:** Menghubungkan semua UI ke Supabase backend

#### 2.1 Setup Supabase
- Konfigurasi project Supabase
- Setup environment variables
- Buat Supabase client utility (`lib/supabase.js`)

#### 2.2 Authentication
- Implementasi Supabase Auth (email + password)
- Role-based redirect setelah login
- Protected routes dengan middleware
- Session management

#### 2.3 Database Schema
Buat tabel sesuai PRD:
- `users` + `profiles`
- `consent_logs`
- `screening_results` (termasuk tipe `pola_pikir`)
- `appointments`
- `counseling_notes`
- `therapeutic_tasks`
- `chatbot_sessions`
- `evaluation_results` (**BARU**)
- `tutorial_progress` (**BARU**, opsional)

#### 2.4 Row Level Security (RLS)
- Konseli hanya bisa akses data sendiri
- Konselor bisa akses data konseli yang ditangani
- Admin bisa akses semua data
- Data sensitif (screening, evaluasi) dilindungi ketat

#### 2.5 CRUD Operations
- Hubungkan semua form ke Supabase:
  - Register → insert `users` + `profiles`
  - Informed Consent → insert `consent_logs`
  - Screening → insert `screening_results`
  - Evaluasi → insert `evaluation_results`
  - Jadwal → insert/update `appointments`
  - Penugasan → insert/update `therapeutic_tasks`

---

### 🟡 FASE 3: Fitur Real-time & Komunikasi
**Estimasi:** 1–2 Minggu

#### 3.1 Ruang Konseling Online
- Integrasi WebRTC atau Jitsi Meet
- Generate meeting link otomatis
- Timer sesi konseling
- Tombol masuk/keluar ruang

#### 3.2 Notifikasi & Alert
- Crisis Alert System (hasil screening risiko tinggi)
- Notifikasi jadwal dikonfirmasi
- Notifikasi penugasan baru
- Notifikasi evaluasi tersedia
- Notifikasi screening pola pikir masuk (ke Konselor)

#### 3.3 Real-time Chat
- Chat real-time dalam sesi konseling
- Riwayat pesan

---

### 🟠 FASE 4: AI Chatbot & Finalisasi
**Estimasi:** 1–2 Minggu

#### 4.1 Chatbot Backend
- Setup Gemini API atau n8n orchestration
- System prompt dengan batasan etika psikologi
- Klasifikasi pesan (teknis/klinis/krisis)
- Integrasi data jadwal, penugasan, laporan

#### 4.2 Crisis Detection
- Keyword detection untuk pesan darurat
- Auto-trigger jalur darurat
- Notifikasi ke Konselor dan Admin

#### 4.3 Reporting & Export
- Laporan hasil konseling (PDF export)
- Ringkasan screening + evaluasi
- Dashboard analytics untuk Admin

#### 4.4 Polish & QA
- Responsive design review
- Accessibility audit
- Performance optimization
- Cross-browser testing
- User acceptance testing

---

## 3. Prioritas Implementasi — Sprint Plan

```
Sprint 1 (Minggu 1):
├── [P0] Screening Pola Pikir — page + form + styling
├── [P0] Evaluasi Konseling Online — page + 24 item Likert + scoring
├── [P0] Tutorial Penggunaan — page + 10 langkah
└── [P0] Update sidebar navigation (Konseli + Konselor)

Sprint 2 (Minggu 2):
├── [P0] Tinjau Evaluasi (Konselor dashboard)
├── [P0] Tinjau Screening Pola Pikir (update existing)
├── [P1] Refine UI/UX semua halaman baru
└── [P1] Update Chatbot menu (tambah Tutorial, Evaluasi)

Sprint 3-4 (Minggu 3-4):
├── [P1] Supabase setup + Auth
├── [P1] Database schema creation + RLS
└── [P1] CRUD untuk Screening, Evaluasi, Auth

Sprint 5-6 (Minggu 5-6):
├── [P2] Ruang Konseling (WebRTC/Jitsi)
├── [P2] Notifikasi & Alert system
└── [P2] Real-time chat

Sprint 7-8 (Minggu 7-8):
├── [P2] Chatbot backend (Gemini API)
├── [P2] Crisis detection
├── [P3] Reporting & Export
└── [P3] QA & Polish
```

---

## 4. File-by-File Change List (Fase 1)

### File Baru
| # | Path | Deskripsi |
|---|---|---|
| 1 | `app/konseli/screening/pola-pikir/page.js` | Form screening pola pikir (15 pertanyaan) |
| 2 | `app/konseli/screening/pola-pikir/pola-pikir.module.css` | Styling screening pola pikir |
| 3 | `app/konseli/evaluasi/page.js` | Form evaluasi konseling (24 item Likert) |
| 4 | `app/konseli/evaluasi/evaluasi.module.css` | Styling evaluasi konseling |
| 5 | `app/konseli/tutorial/page.js` | Tutorial penggunaan konseling |
| 6 | `app/konseli/tutorial/tutorial.module.css` | Styling tutorial |
| 7 | `app/konselor/tinjau-evaluasi/page.js` | Dashboard tinjau evaluasi konseling |
| 8 | `app/konselor/tinjau-evaluasi/tinjau-evaluasi.module.css` | Styling tinjau evaluasi |

### File yang Dimodifikasi
| # | Path | Perubahan |
|---|---|---|
| 1 | `app/konseli/layout.js` | Tambah menu: Screening Pola Pikir, Evaluasi, Tutorial |
| 2 | `app/konselor/layout.js` | Tambah menu: Tinjau Evaluasi |
| 3 | `app/components/Chatbot/*` | Update menu chatbot dengan Tutorial & Evaluasi |

---

## 5. UI/UX Design Guidelines

### Prinsip Desain
- **Calming & Safe**: Gunakan warna biru/hijau yang menenangkan
- **Non-intimidating**: Form screening menggunakan desain card-based
- **Supportive language**: Teks pengantar yang ramah dan empatik
- **Progressive disclosure**: Form panjang dibagi menjadi section/step

### Color Palette
| Token | Warna | Penggunaan |
|---|---|---|
| Primary | `#1E3A8A` | Trust, security, navigation |
| Secondary | `#10B981` | Growth, health, success states |
| Background | White/Off-white gradient | Page backgrounds |
| Warning | `#F59E0B` | Attention, moderate risk |
| Danger | `#EF4444` | High risk, crisis alerts |
| Surface | `#F8FAFC` | Card backgrounds |

### Typography
- **Font Family:** Inter / Plus Jakarta Sans
- **Heading:** Bold, larger size untuk section
- **Body:** Regular weight, comfortable reading
- **Caution text:** Italic atau box warning

---

## 6. Testing & Verification Plan

### Automated Testing
```bash
npm run build          # Verifikasi build berhasil
npm run lint           # Check lint errors
```

### Manual Verification
- [ ] Semua halaman baru bisa diakses via URL
- [ ] Navigasi sidebar menampilkan menu baru
- [ ] Form screening pola pikir: 15 pertanyaan tampil dengan benar
- [ ] Slider skor emosi (pertanyaan 4) berfungsi: 0–100
- [ ] Form evaluasi: 24 item tampil dengan radio button 5 opsi
- [ ] Scoring evaluasi: Hitung total + per dimensi dengan benar
- [ ] Tutorial: 10 langkah navigable
- [ ] Tinjau evaluasi: Dummy data tampil di dashboard konselor
- [ ] Responsive: Semua halaman baru tampil baik di mobile
- [ ] Chatbot menu terupdate

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Chrome / Safari
