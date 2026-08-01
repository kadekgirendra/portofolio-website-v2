# React Portfolio

Hasil konversi dari source code HTML/CSS/JS ke React (Vite), dengan tampilan (UI) yang sama persis.

## Struktur Project

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── resume-example.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          <- gabungan style.css + mediaqueries.css (tidak diubah)
    ├── assets/             <- semua gambar (profile-pic, project-1, dst)
    └── components/
        ├── Navbar.jsx       <- desktop nav + hamburger menu (state React, ganti script.js)
        ├── Profile.jsx      <- section#profile
        ├── About.jsx        <- section#about
        ├── Experience.jsx   <- section#experience
        ├── Projects.jsx     <- section#projects
        ├── Contact.jsx      <- section#contact
        └── Footer.jsx       <- footer
```

## Cara Menjalankan

1. Install dependency:
   ```
   npm install
   ```
2. Jalankan development server:
   ```
   npm run dev
   ```
3. Buka URL yang muncul di terminal (biasanya `http://localhost:5173`).

## Catatan Perubahan dari Versi Asli

- `toggleMenu()` di `script.js` diganti dengan `useState` di komponen `Navbar.jsx` — fungsinya sama (buka/tutup menu hamburger), tapi caranya React-style.
- Semua `<img src="./assets/...">` diganti jadi `import` gambar, supaya Vite bisa proses asset-nya dengan benar.
- CSS (`style.css` + `mediaqueries.css`) digabung jadi satu file `index.css` — isinya sama sekali tidak diubah, jadi tampilannya identik.
- List skill di Experience dan daftar project di Projects dibuat dalam bentuk array data, supaya lebih mudah ditambah/diedit nanti (misalnya tambah skill baru tinggal tambah 1 baris di array).
- Konten Lorem Ipsum, nama "John Doe", link Github/LinkedIn placeholder — semuanya masih sama seperti source aslinya, tinggal kamu ganti sesuai data kamu.

Catatan: saya tidak bisa menjalankan `npm install` di sandbox ini karena akses jaringan sedang dimatikan, jadi build belum saya test langsung di sini — tapi strukturnya standar Vite + React, seharusnya langsung jalan begitu kamu `npm install` di komputer kamu.
