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
