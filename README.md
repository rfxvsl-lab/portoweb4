# Madelyn Torff - UI/UX Designer Portfolio

## Overview
Portfolio satu halaman dengan tampilan Home dan About untuk UI/UX Designer. Layout sudah dirapikan agar lebih konsisten di desktop dan mobile, dengan navigasi tetap, hero responsif, kartu proyek modern, area kontak, serta formulir sederhana.

## Fitur Utama

- Navigasi fixed dengan efek blur saat scroll.
- Menu mobile yang mudah ditutup setelah pengguna memilih menu.
- Hero section responsif dengan bentuk aksen kuning dan portrait melingkar.
- Tiga kartu proyek dengan layout bergantian dan gambar responsif.
- View About terpisah yang bisa dibuka tanpa memuat ulang halaman.
- Formulir kontak dengan validasi nama, email, dan pesan.
- Animasi reveal ringan berbasis Intersection Observer.
- Ikon sosial menggunakan Lucide Icons.

## Struktur File

```text
Portofolio-Website4/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Teknologi

- HTML5
- Tailwind CSS via CDN
- Vanilla JavaScript
- Lucide Icons via CDN
- Google Fonts: Playfair Display dan Nunito

## Menjalankan Lokal

Tidak perlu proses instalasi. Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Kustomisasi

- Ubah warna utama melalui variabel `--color-accent` di `css/style.css`.
- Perbarui teks hero, proyek, about, dan kontak di `index.html`.
- Perbarui link sosial pada bagian `contact-section` di `index.html`.
- Perbarui perilaku navigasi atau validasi form di `js/main.js`.
