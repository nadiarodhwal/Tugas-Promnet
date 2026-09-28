# Panduan Tugas Mandiri — Sistem Member Kedai Kopi
**Mata Kuliah:** Pemrograman Internet | **Prodi:** PSTI UPI

> 🏠 **Tugas ini dikerjakan di rumah** sebagai penguatan materi praktikum.  
> Kerjakan dan pelajari file `app.js` secara mandiri, lalu simpan dengan git commit, upload ke GitHub, dan kumpulkan link-nya!

---

## 🎯 Deskripsi Proyek

Kamu diminta membuat **Sistem Poin & Keanggotaan Member Kedai Kopi** berbasis JavaScript murni (Console & Dialog). Program ini mencatat transaksi pelanggan, mengakumulasikan poin pembelian (menggunakan bilangan bulat murni / integer), menentukan tier membership (Platinum, Gold, Silver, Bronze), dan menampilkan menu rekomendasi menggunakan perulangan Array.

**Tujuan Tugas:**
Menguji dan memperkuat pemahaman konsep JavaScript dasar yang telah dipraktikkan di laboratorium:
1. Variabel (`let`, `const`) dan perbedaan sifat mutabilitas keduanya
2. Dialog interaktif (`prompt()`, `alert()`, `console.log()`)
3. Operasi aritmatika bilangan bulat murni (**tanpa float / desimal**)
4. Percabangan `if - else if - else` untuk penentuan tier status
5. `function` modular dengan parameter dan return value (reusable)
6. `Array` dan perulangan `for loop`

---

## 🚀 Cara Memulai Pengerjaan

1. Buka link repositori GitHub template yang dibagikan oleh Asdos.
2. Klik tombol hijau **"Use this template"** pada bagian kanan atas ➡️ pilih **"Create a new repository"**.
3. Beri nama repositori di akun GitHub kamu sendiri (misal: `tugas-mandiri-js-[nim]`), pastikan diset **Public**, lalu klik **Create repository**.
4. Clone repositori ke laptop kamu:
   ```bash
   git clone https://github.com/username-kamu/nama-repo-kamu.git
   ```
5. Buka folder proyek menggunakan **VS Code**.
6. Buka `index.html` di browser (atau klik kanan ➡️ **Open with Live Server**), lalu tekan tombol **F12** di keyboard dan pilih tab **Console**.
7. Buka file `app.js` dan lengkapi kode secara bertahap pada setiap bagian `// TODO:` dari Aktivitas 1 sampai 6!

---

## 📁 Struktur Berkas

```
Tugas Mandiri/
├── index.html                ← Tampilan panduan web (sudah disediakan)
├── style.css                 ← Desain tampilan (sudah disediakan)
├── app.js                    ← File JavaScript yang KAMU KERJAKAN ← FOKUS DI SINI!
└── PANDUAN_TUGAS_MANDIRI.md  ← Panduan pengerjaan ini
```

---

## ⚙️ Rincian 6 Aktivitas di `app.js`

---

### 📌 AKTIVITAS 1 — Setup Berkas & Integrasi JavaScript Eksternal

**Konsep:** `console.log()`

- Hubungkan file `app.js` ke `index.html` menggunakan tag `<script src="app.js"></script>` tepat sebelum tag penutup `</body>`.
- Cetak judul sistem dan pesan konfirmasi bahwa skrip berhasil terhubung ke tab Console (F12).

**Contoh output Console:**
```
=== SISTEM POIN MEMBER KEDAI KOPI ===
Skrip app.js berhasil terhubung!
```

---

### 📌 AKTIVITAS 2 — Variabel & Dialog Interaktif

**Konsep:** `const`, `let`, `alert()`, `prompt()`, pengkondisian sederhana `if-else`

- Buat konstanta `const NAMA_KEDAI = "Kopi PSTI Kampus";`
- Buat variabel `let namaKasir = "Kak Eko";` lalu ubah nilainya (re-assign) untuk membuktikan bahwa `let` bersifat fleksibel.
- Berikan salam pembuka pop-up menggunakan `alert()`.
- Minta nama pelanggan menggunakan `prompt()`.
- Gunakan `if (namaPelanggan) { ... } else { ... }` untuk memeriksa apakah user mengisi nama. Jika kosong atau klik Cancel, berikan nama default `"Pelanggan Setia"`.

---

### 📌 AKTIVITAS 3 — Operasi Aritmatika (Akumulasi Poin Bulat)

**Konsep:** Operasi `+`, bilangan bulat murni (**tanpa float / desimal**)

- Catat perolehan poin dari 3 jenis transaksi belanja:
  - `poinKopi` (contoh: 45)
  - `poinMakanan` (contoh: 35)
  - `poinMerchandise` (contoh: 20)
- Hitung total poin dengan menjumlahkan ketiga variabel tersebut (`totalPoin = poinKopi + poinMakanan + poinMerchandise`).
- Cetak rincian perolehan poin ke Console browser.

**Contoh output Console:**
```
=== RINCIAN POIN: Budi Santoso ===
Poin Kopi        : 45
Poin Makanan     : 35
Poin Merchandise : 20
Total Poin       : 100
```

---

### 📌 AKTIVITAS 4 — Percabangan if-else (Tier Membership)

**Konsep:** `if - else if - else`, operator perbandingan `>=`

Evaluasi perolehan `totalPoin` untuk menentukan tier keanggotaan:

| Total Poin | Tier Member | Benefit / Diskon |
|---|---|---|
| ≥ 100 Poin | Platinum | Diskon 20% + Gratis 1 Minuman Signature |
| 70 – 99 Poin | Gold | Diskon 10% di setiap transaksi |
| 40 – 69 Poin | Silver | Diskon 5% untuk menu minuman |
| &lt; 40 Poin | Bronze | Member Reguler |

- Tampilkan tier member dan benefit ke `console.log()`.
- Tampilkan ringkasan status member via `alert()`.

---

### 📌 AKTIVITAS 5 — Function Modular

**Konsep:** `function`, `parameter`, `return` value

Buat 2 fungsi mandiri yang reusable (dapat digunakan berulang kali):

1. **`hitungTotalPoin(p1, p2, p3)`**: Menjumlahkan 3 nilai poin dan mengembalikan totalnya (`return total`).
2. **`tentukanTierMember(poin)`**: Menerima angka poin dan mengembalikan string tier member.

Panggil kedua fungsi tersebut untuk **2 data simulasi pelanggan lain** (Pelanggan B dan Pelanggan C) guna membuktikan reusabilitas fungsi, lalu cetak hasilnya ke Console.

---

### 📌 AKTIVITAS 6 — Array & For Loop (Menu Rekomendasi)

**Konsep:** `Array []`, `for loop`, properti `.length`

- Buat Array berisi minimal 5 nama menu favorit rekomendasi kedai kopi.
- Gunakan perulangan `for` untuk mencetak semua menu bernomor urut `(i + 1)` ke Console.
- Cetak jumlah total menu menggunakan properti `.length`.

**Contoh output Console:**
```
=== MENU REKOMENDASI UNTUK MEMBER ===
1. Caramel Macchiato
2. Kopi Susu Gula Aren
3. Croissant Butter Keju
4. Matcha Cream Latte
5. Cinnamon Roll Hangat
-------------------------------------
Total Menu Favorit: 5 menu
```

---

## 🌿 Version Control: Minimal 3 Commit Git

Kerjakan dan simpan progres tugas ini dalam minimal **3 tahap commit**:

### Commit 1 — Setelah Aktivitas 1, 2, dan 3 selesai:
```bash
git add app.js
git commit -m "feat: integrasi dialog nama dan hitung akumulasi poin member"
```

### Commit 2 — Setelah Aktivitas 4 dan 5 selesai:
```bash
git add app.js
git commit -m "feat: logika tier membership dan modularisasi function"
```

### Commit 3 — Setelah Aktivitas 6 selesai:
```bash
git add app.js
git commit -m "feat: perulangan array menu rekomendasi ke console"
```

Lalu push ke repositori GitHub:
```bash
git push origin main
```

---

## 🌐 Publikasi ke GitHub Pages

1. Buka repositori kamu di GitHub.
2. Masuk ke menu **Settings** → **Pages**.
3. Pada opsi **Branch** pilih `main` → folder `/(root)` → klik **Save**.
4. Akses link live web yang dihasilkan.

---

## 📑 Yang Harus Dikumpulkan

1. **URL Repositori GitHub** (akses publik)
2. **URL GitHub Pages** (halaman web live)
3. **Screenshot Bukti Praktik** (dikompilasi ke PDF):
   - Pop-up dialog interaktif (`alert()` dan `prompt()`) saat dijalankan
   - Tab Console (F12) yang menampilkan seluruh output Aktivitas 1–6
   - Bukti riwayat commit (`git log --oneline`)

---

## 📊 Rubrik Penilaian (Total: 100 Poin)

| Komponen | Bobot | Indikator Penilaian |
|---|---|---|
| **Aktivitas 1 & 2** | 20% | Setup eksternal berhasil, variabel `const`/`let` tepat, `prompt()` dan `if-else` berjalan |
| **Aktivitas 3** | 20% | Akumulasi poin akurat, menggunakan bilangan bulat murni (tanpa float) |
| **Aktivitas 4** | 20% | Percabangan bertingkat (Platinum/Gold/Silver/Bronze) tepat dan `alert()` muncul |
| **Aktivitas 5** | 20% | Dua fungsi modular dengan parameter dan return value, simulasi pelanggan B & C sukses |
| **Aktivitas 6** | 10% | Array terdefinisi, loop `for` mencetak daftar bernomor rapi |
| **Git & GitHub Pages** | 10% | Minimal 3 commit bermakna, web live di GitHub Pages |
