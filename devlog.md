# Developer Log (DevLog)
# Mind Shield — Catatan Pengembangan & Perubahan

Dokumen ini berfungsi sebagai log harian/berkala untuk mencatat semua perubahan, pembaruan, bug fixing, dan keputusan arsitektur selama proses pengembangan **Mind Shield v2.0**.

---

## 📑 Format Catatan Log

Untuk setiap sesi pengerjaan atau rilis fitur baru, gunakan format berikut:

```markdown
### [YYYY-MM-DD] — [Judul Sesi/Fitur]
- **Tujuan:** Deskripsi singkat tujuan pengerjaan.
- **Fase:** [Fase 1 / Fase 2 / Fase 3 / Fase 4]
- **Perubahan Detail:**
  - [x] Detil perubahan 1
  - [x] Detil perubahan 2
- **File Baru:**
  - `path/ke/file/baru.js`
- **File Dimodifikasi:**
  - `path/ke/file/lama.js`
- **Catatan & Isu Terbuka:**
  - Kendala yang dihadapi atau hal yang perlu dikonfirmasi.
```

---

## 🚀 Log Riwayat Perubahan (Change Log)

### 2026-05-18 — Implementasi Informed Consent, Logika Deteksi Krisis ISAS, Flat File DB, & Fitur Umpan Balik
- **Tujuan:** Menyelesaikan alur privasi informed consent, mengimplementasikan branching crisis response terintegrasi ISAS, mendesain mekanisme umpan balik interaktif dua arah antara konseli dan konselor, serta memigrasikan aset statis & implementasi flat-file db.
- **Fase:** Fase 1 / Penyelesaian Prototype
- **Perubahan Detail:**
  - [x] **Aset Statis & Logo Fix:** Memindahkan `logo-mindshield-transparent.png` dan `hero_image.png` ke direktori `/public` dan memodifikasi `app/page.js` untuk mengatasi error 404 broken image.
  - [x] **Flat-File JSON DB (`data/db.json` & `lib/db.js`):** Mengimplementasikan Server Actions untuk membaca/menulis data lokal dalam format JSON demi mendukung demonstrasi prototype mandiri tanpa ketergantungan relasional Supabase.
  - [x] **Informed Consent Modal:** Menambahkan modal informed consent yang memblokir akses menu screening di `/konseli/screening/page.js` lengkap dengan checkbox persetujuan wajib dan CSS yang cantik.
  - [x] **ISAS dengan Logika Deteksi Krisis:** Membangun instrumen ISAS bagian I & II interaktif, lengkap dengan kalkulator penskoran risiko (`frekuensi perilaku >= 3` atau `rata-rata fungsi >= 1.5`) yang otomatis mengarahkan ke halaman **Crisis Response** (daftar kontak darurat, safety plan) sebelum opsi bypass diizinkan.
  - [x] **Halaman Umpan Balik Konseli:** Membuat halaman `/konseli/umpan-balik/page.js` dengan notifikasi unread, sistem card expand-collapse, serta formulir balasan pesan konselor.
  - [x] **Halaman Kirim Umpan Balik Konselor:** Membuat halaman `/konselor/kirim-umpan-balik/page.js` lengkap dengan fitur pencarian konseli, filter tingkat risiko, klasifikasi jenis umpan balik, subjek, serta textarea isi pesan.
  - [x] **Pembaruan Navigasi Sidebar:** Mengintegrasikan menu umpan balik ke dalam sidebar `KonseliLayout` dan `KonselorLayout` menggunakan ikon `MessageSquare` dari `lucide-react`.
- **File Baru:**
  - `app/konseli/screening/isas/isas.module.css` (Style instrumen ISAS & Crisis Response)
  - `app/konseli/umpan-balik/page.js` (Halaman inbox umpan balik konseli)
  - `app/konseli/umpan-balik/umpan-balik.module.css` (Style umpan balik konseli)
  - `app/konselor/kirim-umpan-balik/page.js` (Halaman kirim umpan balik konselor)
  - `app/konselor/kirim-umpan-balik/kirim-umpan-balik.module.css` (Style kirim umpan balik konselor)
- **File Dimodifikasi:**
  - `app/page.js` (Perbaikan path image logo & hero)
  - `app/konseli/screening/page.js` (Penambahan logic modal Informed Consent & CSS locking)
  - `app/konseli/screening/screening.module.css` (Penambahan CSS Modal & Declined State)
  - `app/konseli/screening/isas/page.js` (Rewrite form ISAS + logic krisis)
  - `app/konseli/layout.js` (Navigasi Umpan Balik Konseli)
  - `app/konselor/layout.js` (Navigasi Kirim Umpan Balik Konselor)
- **Catatan & Isu Terbuka:**
  - Logika Crisis Response telah diuji secara lokal dan berfungsi dengan baik mendeteksi skor ekstrim ISAS.
  - Semua pesan konselor dan respons balik tersimpan secara simulatif di `localStorage` & flat JSON untuk demonstrasi cepat.

### 2026-05-17 — Inisiasi Revisi v2.0 & Sinkronisasi Dokumen Baru
- **Tujuan:** Membaca dokumen screening & evaluasi terbaru, merumuskan kembali PRD dan DevPlan agar selaras dengan kebutuhan baru klien.
- **Fase:** Fase Persiapan / Pra-Fase 1
- **Perubahan Detail:**
  - [x] Ekstraksi data dokumen Microsoft Word `Tambahannya ini berada setelah screaning core blieff.docx` menggunakan skrip ekstraksi python.
  - [x] Pemetaan 15 pertanyaan essay untuk fitur baru **"Screening Pola Pikir"**.
  - [x] Pemetaan 24 item pertanyaan Likert (5 skala) untuk fitur baru **"Evaluasi Konseling Online"** beserta pembagian 6 dimensi (Pengendalian Dorongan, Keyakinan Diri, Regulasi Emosi, Strategi Coping, Jaringan Keselamatan, Evaluasi Keseluruhan) dan skema penskoran (favorable & unfavorable).
  - [x] Pemetaan 10 langkah interaktif untuk fitur baru **"Tutorial Penggunaan Konseling Online"**.
  - [x] Pembuatan dokumen [prd.md](file:///i:/My%20Drive/Mind-Shield/prd.md) v2.0 yang komprehensif.
  - [x] Pembuatan dokumen [devplan.md](file:///i:/My%20Drive/Mind-Shield/devplan.md) v2.0 yang merinci gap analysis, rencana fase, dan file-by-file change list.
- **File Baru:**
  - [prd.md](file:///i:/My%20Drive/Mind-Shield/prd.md) (Product Requirements Document v2.0)
  - [devplan.md](file:///i:/My%20Drive/Mind-Shield/devplan.md) (Development Plan v2.0)
  - [devlog.md](file:///i:/My%20Drive/Mind-Shield/devlog.md) (Developer Log ini)
- **File Dimodifikasi:**
  - Tidak ada (hanya pembuatan file dokumentasi arsitektur).
- **Catatan & Isu Terbuka:**
  - Struktur router Next.js saat ini masih menggunakan model *frontend-only UI Prototype*.
  - Langkah pertama implementasi (Fase 1) akan berfokus pada pembuatan UI dan logika statis 3 fitur baru (Screening Pola Pikir, Evaluasi, Tutorial) terlebih dahulu sebelum melangkah ke integrasi Supabase.

---

## 🛠️ Status Progres Fitur

| Fitur | Kategori | Prioritas | Status |
|---|---|---|---|
| Landing Page & Auth UI | Core | High | ✅ Selesai |
| Informed Consent | Core | High | ✅ Selesai |
| Screening Self-Injury | Core | High | ✅ Selesai |
| Screening Core Beliefs | Core | High | ✅ Selesai |
| **Screening Pola Pikir** | Baru | High | ⏳ Menunggu (Fase 1) |
| **Evaluasi Konseling Online** | Baru | High | ⏳ Menunggu (Fase 1) |
| **Tutorial Penggunaan** | Baru | Medium | ⏳ Menunggu (Fase 1) |
| **Tinjau Evaluasi (Konselor)** | Baru | High | ⏳ Menunggu (Fase 1) |
| Integrasi Database Supabase | Core | Critical | ⏳ Menunggu (Fase 2) |
| Ruang Konseling Online | Core | High | ⏳ Menunggu (Fase 3) |
| Chatbot Pendamping (Gemini API) | Core | Medium | ⏳ Menunggu (Fase 4) |

## Sprint 1 (17 Mei 2026)
- ✅ **Screening Pola Pikir**: Membuat page.js dan pola-pikir.module.css untuk 15 pertanyaan essay dan slider skor.
- ✅ **Evaluasi Konseling Online**: Membuat page.js dan evaluasi.module.css untuk 24 item Likert scale.
- ✅ **Tutorial Penggunaan**: Membuat page.js dan 	utorial.module.css untuk 10 langkah interaktif.
- ✅ **Tinjau Evaluasi**: Membuat dashboard untuk konselor meninjau evaluasi.
- ✅ **Update Navigasi**: Memperbarui layout.js untuk Konseli dan Konselor.
