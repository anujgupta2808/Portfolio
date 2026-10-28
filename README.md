# Anuj Gupta — Developer Portfolio

A modern, high-performance personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed with a futuristic dark/neon-red visual identity showcasing selected projects, education, technical skills, and achievements.

🌐 **Live Demo:** [https://anujgupta2808.github.io/Portfolio/](https://anujgupta2808.github.io/Portfolio/)  
👤 **GitHub:** [https://github.com/anujgupta2808](https://github.com/anujgupta2808)  
💼 **LinkedIn:** [https://www.linkedin.com/in/anuj-gupta-7aaabb2b9/](https://www.linkedin.com/in/anuj-gupta-7aaabb2b9/)

---

## ✨ Features

- **Smooth Inertia Scrolling:** Powered by [Lenis](https://lenis.darkroom.engineering/) for a fluid, momentum-based scrolling experience.
- **Fluid Micro-Animations:** Staggered section entrances, interactive hover physics, and layout animations powered by [Framer Motion](https://www.framer.com/motion/).
- **Curated Projects Showcase:**
  - 💸 **ExpenseTracker** — Personal finance tracker with expense categorization & spending analytics.
  - 📁 **DocuServe** — Document-services web platform for file conversion & data processing.
  - 📦 **Procelya-AI** — AI-powered workflow analysis & automated diagram generation.
  - 🎓 **ClassCore** — Complete student & classroom management web application.
  - 🎬 **Marvel Studios Hub** — Cinematic superhero universe explorer with cast profiles & movie trailers.
  - 🚀 **Explore More on GitHub** — Direct access to 16+ open-source repositories.
- **Interactive Project Modals:** Compact, responsive detail dialog with spring animation, key highlights, tech tags, and live demo/repo links.
- **Technical Skills Matrix:** Interactive technology badges with category filtering and detail cards.
- **Education & Languages:** Academic timeline, learning highlights, and animated language proficiency bars.
- **Achievements & Certifications:** Verified credentials modal inspection.
- **Contact Form:** Interactive contact form with client-side fallback and celebration confetti.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, Custom Neon Utilities
- **Animations:** Framer Motion, Lenis Smooth Scroll, Canvas Confetti
- **Icons:** Lucide React
- **Backend (Optional):** Node.js, Express, tsx

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anujgupta2808/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev:client
   ```
   Or run client and local API server concurrently:
   ```bash
   npm run dev
   ```

4. Build for production (outputs static site to `/dist`):
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Running on GitHub Pages (100% Serverless)

The application is fully client-side and requires **no backend server** to run live on GitHub Pages. Contact submissions automatically use an offline/localStorage fallback with celebratory confetti.

### Method 1: Automatic Deployment with GitHub Actions (Recommended)
1. On GitHub, go to your repository: [https://github.com/anujgupta2808/Portfolio](https://github.com/anujgupta2808/Portfolio)
2. Click **Settings** ➔ **Pages** (in the left sidebar).
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub automatically builds and publishes your site.

### Method 2: 1-Click Command via `gh-pages`
You can also deploy manually at any time by running:
```bash
npm run deploy
```
This builds `/dist` and publishes it directly to the `gh-pages` branch.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

