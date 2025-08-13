# Portfolio Website

Website portfolio personal yang dibuat menggunakan React.js dengan design modern dan responsif.

## Fitur

- **Responsive Design** - Tampilan yang optimal di semua perangkat
- **Modern UI/UX** - Design yang clean dan professional
- **Interactive Components** - Komponen yang interaktif dan engaging
- **Smooth Animations** - Animasi yang halus dan menarik
- **Contact Form** - Form kontak yang fungsional
- **Project Showcase** - Galeri project dengan detail lengkap

## Teknologi yang Digunakan

- React.js
- CSS3 dengan Flexbox dan Grid
- JavaScript ES6+
- HTML5

## Struktur Project

```
src/
├── components/
│   ├── Header.js          # Navigasi utama
│   ├── Hero.js            # Section hero/landing
│   ├── About.js           # Section tentang diri
│   ├── Skills.js          # Section keahlian
│   ├── Projects.js        # Section project portfolio
│   ├── Contact.js         # Section kontak
│   └── Footer.js          # Footer website
├── App.js                 # Komponen utama
├── App.css               # Styling utama
├── index.js              # Entry point
└── index.css             # Global styles
```

## Cara Menjalankan

1. Install dependencies:
   ```
   npm install
   ```

2. Jalankan development server:
   ```
   npm start
   ```

3. Buka browser dan akses `http://localhost:3000`

## Cara Build untuk Production

```
npm run build
```

## Customization

### Mengubah Informasi Personal

1. **Hero Section** - Edit file `src/components/Hero.js`
2. **About Section** - Edit file `src/components/About.js`
3. **Contact Info** - Edit file `src/components/Contact.js`
4. **Skills** - Edit file `src/components/Skills.js`
5. **Projects** - Edit file `src/components/Projects.js`

### Mengubah Warna dan Styling

- Edit file `src/App.css` untuk mengubah color scheme
- Ubah variabel warna di bagian atas file CSS

### Menambah Project Baru

Edit array `projects` di file `src/components/Projects.js`:

```javascript
{
  title: "Nama Project",
  description: "Deskripsi project",
  technologies: ["Tech1", "Tech2"],
  image: "🎨", // Emoji atau path ke gambar
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com"
}
```

## Deployment

Website ini bisa di-deploy ke berbagai platform:

- **Netlify** - Drag and drop folder build
- **Vercel** - Connect repository GitHub
- **GitHub Pages** - Gunakan GitHub Actions
- **Firebase Hosting** - Gunakan Firebase CLI

## License

MIT License - bebas untuk digunakan dan dimodifikasi.
