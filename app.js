/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// =====================================================
// ALL CODING JAVASCRIPT DASAR
// "Sistem Poin & Keanggotaan Member Kedai Kopi"
// File: app.js
// =====================================================


// ==================================================
// AKTIVITAS 1 : Setup Berkas & Integrasi Eksternal
// ==================================================
// Pastikan di index.html sudah ada tag ini tepat sebelum </body> :
// <script src="app.js"></script>

// mencetak sebuah nilai = console.log("Teks")
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip JavaScript berhasil terhubung!");


// ==================================================
// AKTIVITAS 2 : Variabel & Dialog Interaktif
// ==================================================

// Variabel "const" = Konstanta, sifatnya tetap dan tidak bisa diubah
const NAMA_KEDAI = "Kopi PSTI Kampus";

// Variabel "let" = nilainya bisa berubah sewaktu-waktu
let namaKasir = "Kak Eko";

// Cetak nilai variabel const dan let
// Operator + digunakan untuk menggabungkan teks (string)
console.log("Kedai : " + NAMA_KEDAI);
console.log("Kasir : " + namaKasir);

// DEMO perbedaan const dan let (re-assign)
namaKasir = "Kak Nadia"; // Boleh, karena namaKasir adalah variabel let
console.log("Kasir Baru (setelah diubah dengan let): " + namaKasir);

// NAMA_KEDAI = "Kopi Lain"; // Akan ERROR: TypeError (Assignment to constant variable)

// Input interaktif
// alert() = menampilkan dialog pop-up
alert("Selamat datang di " + NAMA_KEDAI + "!\nKasir hari ini: " + namaKasir);

// prompt() = meminta input dari pengguna
let namaPelanggan = prompt("Halo! Masukkan nama pelanggan:");

// if (namaPelanggan) artinya "Jika namaPelanggan ada isinya"
// Jika dikosongkan atau di-Cancel, nilainya "" atau null -> masuk ke else
if (namaPelanggan) {
    // Jika pengguna mengisi nama
    alert("Halo, " + namaPelanggan + "! Terima kasih sudah berbelanja di " + NAMA_KEDAI + ".");
    console.log("Pelanggan aktif: " + namaPelanggan);
} else {
    // Jika kosong atau dibatalkan, pakai nama default
    alert("Nama tidak diisi. Kamu akan dipanggil Pelanggan Setia.");
    namaPelanggan = "Pelanggan Setia";
    console.log("Pelanggan aktif: " + namaPelanggan);
}


// ==================================================
// AKTIVITAS 3 : Operasi Aritmatika - Akumulasi Poin
// ==================================================
// Semua poin berupa bilangan bulat (integer), tanpa desimal
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;

// Jumlahkan seluruh poin
let totalPoin = poinKopi + poinMakanan + poinMerchandise;

// Tampilkan rincian perolehan poin ke Console
console.log("=== RINCIAN POIN " + namaPelanggan + " ===");
console.log("Poin Kopi        : " + poinKopi);
console.log("Poin Makanan     : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin       : " + totalPoin);


// ==================================================
// AKTIVITAS 4 : Percabangan if - else if - else
//               Penentuan Tier Membership
// ==================================================

// Buat variabel kosong (string kosong), nanti diisi sesuai kondisi
let tier = "";
let benefit = "";

if (totalPoin >= 100) {
    // Kondisi pertama yang dicek: poin >= 100
    tier = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
    // Jika kondisi pertama tidak terpenuhi: poin 70 - 99
    tier = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
    // Jika kondisi kedua tidak terpenuhi: poin 40 - 69
    tier = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} else {
    // Jika semua kondisi di atas tidak terpenuhi: poin < 40
    tier = "Bronze";
    benefit = "Member Reguler";
}

// Tampilkan status tier ke Console
console.log("Tier Member : " + tier);
console.log("Benefit     : " + benefit);

// Ringkasan untuk pelanggan via pop-up alert
alert(
    "RINGKASAN MEMBER " + namaPelanggan + ":\n" +
    "Total Poin : " + totalPoin + "\n" +
    "Tier       : " + tier + "\n" +
    "Benefit    : " + benefit
);


// ==================================================
// AKTIVITAS 5 : Function Modular Reusable
// ==================================================
// Function = membungkus sekumpulan kode menjadi satu blok
// yang bisa dipanggil berulang kali dengan nama function-nya

// Function 1: menjumlahkan 3 poin transaksi lalu mengembalikan totalnya
function hitungTotalPoin(p1, p2, p3) {
    let total = p1 + p2 + p3;
    return total;
}

// Function 2: mengembalikan nama tier berdasarkan poin
function tentukanTierMember(poin) {
    if (poin >= 100) return "Platinum";
    if (poin >= 70) return "Gold";
    if (poin >= 40) return "Silver";
    return "Bronze";
}

// Simulasi Pelanggan B
let totalPoinB = hitungTotalPoin(40, 30, 15);
let tierB = tentukanTierMember(totalPoinB);

console.log("=== DATA PELANGGAN B ===");
console.log("Total Poin : " + totalPoinB);
console.log("Tier       : " + tierB);

// Simulasi Pelanggan C (membuktikan function bisa dipakai ulang)
let totalPoinC = hitungTotalPoin(10, 15, 5);
let tierC = tentukanTierMember(totalPoinC);

console.log("=== DATA PELANGGAN C ===");
console.log("Total Poin : " + totalPoinC);
console.log("Tier       : " + tierC);


// ==================================================
// AKTIVITAS 6 : Array & Perulangan Menu Rekomendasi
// ==================================================
// Array = kotak penyimpanan yang diisi banyak nilai, ditulis dengan [...]
// NOTE: index array dimulai dari 0

let menuRekomendasi = [
    "Kopi Susu Gula Aren",  // index 0
    "Caramel Macchiato",    // index 1
    "Americano",            // index 2
    "Matcha Latte",         // index 3
    "Roti Bakar Cokelat",   // index 4
    "Kentang Goreng"        // index 5
    // Total panjang array = 6
];

console.log("=== MENU REKOMENDASI " + NAMA_KEDAI + " ===");

// Looping for: tampilkan daftar bernomor urut (i + 1)
for (let i = 0; i < menuRekomendasi.length; i++) {
    console.log((i + 1) + ". " + menuRekomendasi[i]);
}

// .length = jumlah elemen di dalam array
console.log("-------------------------------");
console.log("Total Menu Rekomendasi: " + menuRekomendasi.length + " menu");
console.log("=== SISTEM SELESAI, TERIMA KASIH! ===");