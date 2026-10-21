// Konfigurasi aplikasi. Ada DUA cara pakai, pilih salah satu:
//
// ── CARA BARU: akun dengan login (satu Sheet, satu Apps Script, banyak akun) ─────────────────────────
// Setelah Code.gs dipasang dan di-deploy, hapus tanda // di baris ACCOUNTS_URL di bawah dan isi dengan link /exec-nya.
// Begitu baris itu aktif, aplikasi langsung minta masuk / buat akun, dan bagian PROFILES di bawah TIDAK dipakai lagi
// (boleh dihapus supaya sandi lama tidak ikut terbaca orang).
//
// window.APP_CONFIG = {
//   ACCOUNTS_URL: 'https://script.google.com/macros/s/ISI-DENGAN-LINK-DEPLOYMENT-CODE-GS/exec'
// };
//
// ── CARA LAMA: tiga Sheet terpisah (tetap jalan selama ACCOUNTS_URL belum diaktifkan) ─────────────────
// Baris `password` = sandi untuk masuk ke profil itu (hapus barisnya kalau tidak mau dikunci).
// Baris `color`    = warna bulatan profil (opsional). Baris `photo` = alamat gambar foto profil (opsional).
// CATATAN: file ini bisa dibaca siapa saja yang tahu alamatnya, jadi jangan pakai sandi yang sama dengan akun penting.

window.APP_CONFIG = {
  PROFILES: [
    {
      id: 'akun1',
      name: 'romini',
      API_URL: 'https://script.google.com/macros/s/AKfycbxXyZd1pekC0tZRdwuY-aQzJb7veINYpp_sheoxMemO9sSrduj26QRhR4kHokR5iqJq/exec',
      password: 'satria'
    },
    {
      id: 'akun2',
      name: 'weni',
      API_URL: 'https://script.google.com/macros/s/AKfycbwA8VVlMuCwAIztJo3AI8Sgld1NMR0twHaQG2EdhjTohRRpTcqIt3ciNmY-1YMKwA3-/exec',
      password: 'weni'
    },
    {
      id: 'akun3',
      name: 'antoni',
      API_URL: 'https://script.google.com/macros/s/AKfycbx-4oLgbBltmYD4jnx7UzMsBGMoSRSXL00qJc4VeX7uhP0N0mZQwCvQsit46gWQUOzC/exec',
      password: 'antoni'
    }
  ]
};
