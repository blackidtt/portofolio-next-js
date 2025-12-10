# Full Stack Developer Portfolio

Selamat datang di portfolio website fullstack developer yang modern dan responsif, dibangun dengan Next.js versi terbaru.

## 🚀 Features

- **Modern Design**: UI yang clean dan professional dengan dark mode support
- **Fully Responsive**: Optimal di desktop, tablet, dan mobile
- **Fast Performance**: Built with Next.js App Router dan Turbopack
- **TypeScript**: Type-safe code untuk development yang lebih baik
- **Tailwind CSS**: Styling yang efficient dan customizable
- **SEO Optimized**: Next.js metadata dan best practices

## 📋 Sections

1. **Hero** - Pengantar dan call-to-action
2. **About** - Deskripsi tentang Anda dan highlight key
3. **Skills** - Frontend, Backend, dan DevOps skills
4. **Projects** - Showcase 4 project featured dengan teknologi
5. **Experience** - Work experience dan education timeline
6. **Contact** - Contact form dan social media links
7. **Footer** - Navigation links dan copyright

## 🛠️ Technology Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Code Quality**: ESLint

## 📦 Prerequisites

Sebelum menjalankan project ini, pastikan Anda telah menginstall:

- **Node.js >= 20.9.0** (Wajib untuk Next.js 16)
- **npm 8+** atau **yarn** atau **pnpm** atau **bun**

## ⚙️ Installation & Setup

### 1. Install Node.js yang benar

Karena Next.js 16 memerlukan Node.js >= 20.9.0, Anda perlu upgrade Node.js:

- Download dari [nodejs.org](https://nodejs.org/) - Pilih LTS version terbaru
- Atau gunakan Node Version Manager (nvm):
  ```bash
  # Windows (gunakan nvm-windows)
  nvm install 20
  nvm use 20
  
  # macOS/Linux
  nvm install 20
  nvm use 20
  ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Server akan running di `http://localhost:3000`

## 📝 Customize Portfolio Anda

Edit file berikut untuk personalisasi portfolio:

### 1. Update Data Portfolio (`src/data/portfolio.ts`)

```typescript
export const portfolioData = {
  name: "Nama Anda",
  title: "Job Title Anda",
  contact: {
    email: "email@anda.com",
    // ... contact info
  },
  // ...
}
```

### 2. Update Komponen (Optional)

- **Header** (`src/components/Header.tsx`): Navigation bar
- **Hero** (`src/components/Hero.tsx`): Landing section
- **About** (`src/components/About.tsx`): About section
- **Skills** (`src/components/Skills.tsx`): Skills showcase
- **Projects** (`src/components/Projects.tsx`): Project portfolio
- **Experience** (`src/components/Experience.tsx`): Work & education
- **Contact** (`src/components/Contact.tsx`): Contact form & info
- **Footer** (`src/components/Footer.tsx`): Footer

## 🎨 Customization Guide

### Colors & Styling
- Semua warna menggunakan Tailwind CSS classes
- Untuk customize, edit class names di komponen atau update `tailwind.config.ts`

### Dark Mode
- Dark mode sudah built-in dan otomatis berdasarkan system preference
- Tekan tombol dark mode toggle di header (jika ditambahkan)

### Fonts & Typography
- Default menggunakan sans-serif system font
- Untuk custom fonts, import di `src/app/layout.tsx`

## 🚀 Build untuk Production

```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🔗 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── portfolio.ts    # Portfolio data configuration
```

## 📝 Adding Projects

Edit `src/data/portfolio.ts` dan tambahkan project baru:

```typescript
{
  id: 5,
  title: "Your Project Title",
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"],
  link: "https://github.com/yourlink",
  image: "/projects/your-project.jpg"
}
```

## 🔐 Contact Form Integration

Saat ini, form contact menampilkan pesan sukses lokal. Untuk implement email sending:

1. Gunakan service seperti:
   - Vercel Mail
   - SendGrid
   - Mailgun
   - Nodemailer

2. Create API route di `src/app/api/contact/route.ts`

3. Update `Contact.tsx` untuk submit ke API

## 📴 Disable Dark Mode (Optional)

Edit `src/app/layout.tsx`:
```typescript
<html lang="en" className="light">
```

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

1. Push ke GitHub
2. Connect repository ke Vercel
3. Vercel akan auto-detect Next.js project
4. Deploy dengan sekali klik!

### Alternatif Deployment

- Netlify
- GitHub Pages
- Self-hosted (VPS)
- Railway
- Render

## 🐛 Troubleshooting

### Node.js Version Error
```
Error: You are using Node.js 16.20.2. For Next.js, Node.js version ">=20.9.0" is required.
```
**Solution**: Upgrade ke Node.js 20+

### Port 3000 sudah dipakai
```bash
npm run dev -- -p 3001
```

### Dependencies tidak terinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

MIT License - Feel free to use this untuk project Anda

## 💬 Questions?

Jika ada pertanyaan atau issue, silakan buka issue atau hubungi melalui contact form di portfolio

---

**Happy Coding! 🎉**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
