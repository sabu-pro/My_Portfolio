# Sabut B K — Personal Portfolio

A modern, responsive cybersecurity portfolio built with **Next.js 14** and **Tailwind CSS**.  
Features dark/light mode, smooth animations, and a professional design tailored for IT & Cybersecurity roles.

---

## 🚀 Quick Start (Local Development)

### Step 1 — Prerequisites
Make sure you have **Node.js 18+** installed.  
Download from: https://nodejs.org

### Step 2 — Add Your Files
Before running the project, add these two files to the `/public` folder:
- `public/photo.png` → Your profile photo
- `public/resume.pdf` → Your resume (renamed to `resume.pdf`)

### Step 3 — Install & Run
Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## 📁 Project Structure

```
sabut-portfolio/
├── public/
│   ├── photo.png          ← Your profile photo (add this!)
│   └── resume.pdf         ← Your resume PDF (add this!)
│
├── src/
│   ├── app/
│   │   ├── globals.css    ← All custom styles & CSS variables
│   │   ├── layout.js      ← Root layout with SEO metadata
│   │   └── page.js        ← Main page (imports all sections)
│   │
│   ├── components/
│   │   ├── Navbar.jsx         ← Navigation + dark/light toggle
│   │   ├── Hero.jsx           ← Hero section with typing effect
│   │   ├── About.jsx          ← About me with photo
│   │   ├── Skills.jsx         ← Animated skill bars + tools
│   │   ├── Experience.jsx     ← Work experience + education
│   │   ├── Projects.jsx       ← Project cards grid
│   │   ├── ProjectCard.jsx    ← Reusable project card component
│   │   ├── Certifications.jsx ← Certifications section
│   │   ├── Contact.jsx        ← Contact form + info
│   │   └── Footer.jsx         ← Footer with links
│   │
│   └── context/
│       └── ThemeContext.jsx   ← Dark/light mode state
│
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

---

## 🌐 Deploy on Vercel (Step-by-Step)

### Option A — Via GitHub (Recommended)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new repo called `portfolio` (or any name)

2. **Push your code**
   ```bash
   cd sabut-portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to https://vercel.com and sign in (use GitHub login)
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Keep all settings as default — Vercel auto-detects Next.js
   - Click **"Deploy"**
   - Done! ✅ Your site will be live at `https://your-project.vercel.app`

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🔧 Customisation Guide

### Update your information
All personal data is in the component files inside `src/components/`.

| What to change              | File to edit               |
|-----------------------------|----------------------------|
| Name, bio, contact info     | `About.jsx`, `Contact.jsx` |
| Skills & percentages        | `Skills.jsx`               |
| Work experience             | `Experience.jsx`           |
| Projects                    | `Projects.jsx`             |
| Certifications              | `Certifications.jsx`       |
| Typing effect roles         | `Hero.jsx` (roles array)   |
| Social links                | `Navbar.jsx`, `Footer.jsx` |

### Change accent colour
Open `src/app/globals.css` and change the `--accent` value:
```css
:root {
  --accent: #0891b2;   /* Light mode accent */
}
.dark {
  --accent: #22d3ee;   /* Dark mode accent */
}
```

### Add Formspree (real form emails)
1. Sign up at https://formspree.io
2. Create a form and get your endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` function with:
```js
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  body: JSON.stringify(formData),
  headers: { "Content-Type": "application/json" }
});
```

---

## ✅ Features

- ⚡ Next.js 14 App Router
- 🌙 Dark / Light mode toggle (persists via localStorage)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Animated skill bars with intersection observer
- ⌨️ Typing animation in Hero section
- 🖥️ Terminal card in hero section
- 🃏 Hover-animated project & cert cards
- 📄 Resume download button
- 🔍 SEO meta tags
- 🎯 Smooth scroll navigation
- 🚀 Vercel-ready (zero config)

---

## 📞 Contact

**Sabut B K**  
📧 sabutsunar97@gmail.com  
📱 +61 452 180 047  
🔗 https://www.linkedin.com/in/sabut-b-k-841639354/  
📍 Melbourne, Australia
