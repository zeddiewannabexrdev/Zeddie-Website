<div align="center">
  <h1 align="center">XR Developer Portfolio</h1>
  <p align="center">
    <strong>A Cyber/Space-Themed Personal Landing Page for an XR/Unity Developer</strong>
  </p>
  <p align="center">
    <a href="https://zeddiewannabexrdev.github.io/Zeddie-Website/">🌐 Live Demo</a>
  </p>
</div>

<br />

## Overview

This is the personal portfolio landing page for Dao An Hoang Long (Zeddiewannabexrdev), an Extended Reality (XR) & Unity Developer. The project is designed with a premium **"Cyber / Space"** aesthetic tailored to reflect spatial computing and high-tech immersive ecosystems.

Instead of a generic template, this application features:
- Interactive HTML5 Canvas ripple background with neon-red theming
- 60 FPS unthrottled cursor animations with Meta Quest 3 icon and trailing particles
- Entrance animations powered by Framer Motion
- Multi-language support (i18n) via React Context API
- Infinite tech stack marquee & LiDAR AR-scan overlays

---

## 🛠️ Tech Stack

### ⚡ Build Tool & Runtime

| Technology | Version | Role |
|---|---|---|
| **Vite** | `^8.0.1` | Lightning-fast build tool using native ES Modules. Replaces Create React App. Configured with `base: '/Zeddie-Website/'` for GitHub Pages deployment. |
| **Node.js / npm** | — | Package manager and script runner (`dev`, `build`, `deploy`) |

---

### ⚛️ Core Framework

| Technology | Version | Role |
|---|---|---|
| **React** | `^19.2.4` | Main UI framework, using JSX and component-based architecture |
| **React DOM** | `^19.2.4` | Renders React into the browser DOM |

> Uses **React 19** — the latest release with Concurrent Rendering support.

---

### 🎨 Styling

| Technology | Version | Role |
|---|---|---|
| **Tailwind CSS** | `^3.4.19` | Utility-first CSS framework. Customized with `neon-red` color, `Inter` / `Fira Code` fonts, and custom `marquee` + `ar-scan` keyframe animations |
| **PostCSS** | `^8.5.8` | CSS processing pipeline required by Tailwind |
| **Autoprefixer** | `^10.4.27` | Auto-adds vendor prefixes (`-webkit-`, `-moz-`) for cross-browser compatibility |
| **clsx** | `^2.1.1` | Conditionally joins CSS class names cleanly |
| **tailwind-merge** | `^3.5.0` | Resolves Tailwind class conflicts (e.g., `p-2` vs `p-4` → keeps the last one) |

---

### 🎬 Animation

| Technology | Version | Role |
|---|---|---|
| **Framer Motion** | `^12.38.0` | Declarative animation library for React. Powers fade-in entrance animations as the page loads |
| **HTML5 Canvas API** | Native | Used in `RippleBackground.jsx` — draws the interactive droplet entrance animation, shockwave effect, and ongoing mouse ripples |
| **CSS Animations** (Tailwind) | — | Drives the `marquee` (tech stack scrolling) and `ar-scan` (LiDAR overlay scanning) effects |

---

### 🧩 Icons

| Technology | Version | Role |
|---|---|---|
| **Lucide React** | `^1.7.0` | Beautiful, lightweight SVG icon library used in Navbar and social links |

---

### 🌐 State Management

| Technology | Role |
|---|---|
| **React Context API** | Powers `LanguageContext.jsx` — manages global language switching (Vietnamese / English) without external libraries |

---

### 🚀 Deployment

| Technology | Version | Role |
|---|---|---|
| **gh-pages** | `^6.3.0` | Automates deployment of the `dist/` folder to GitHub Pages via `npm run deploy` |
| **GitHub Pages** | — | Free static hosting at `https://zeddiewannabexrdev.github.io/Zeddie-Website/` |

---

### 🔍 Code Quality

| Technology | Version | Role |
|---|---|---|
| **ESLint** | `^9.39.4` | Linter for catching errors and enforcing coding standards |
| **eslint-plugin-react-hooks** | `^7.0.1` | Enforces correct usage of React Hooks (`useEffect`, `useState`, etc.) |
| **eslint-plugin-react-refresh** | `^0.5.2` | Ensures Vite's Hot Module Replacement (HMR) works correctly |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── About.jsx              # Bento grid profile section
│   ├── CoreCompetencies.jsx   # XR skills & competencies
│   ├── Footer.jsx             # Social links & mailto
│   ├── Hero.jsx               # Main hero section
│   ├── InteractiveCursor.jsx  # Meta Quest 3 custom cursor with trail
│   ├── MouseAura.jsx          # Glow aura following the mouse
│   ├── Navbar.jsx             # Floating pill navigation bar
│   ├── Projects.jsx           # Project showcase (bento grid)
│   ├── RippleBackground.jsx   # Canvas-based interactive ripple background
│   ├── ShootingStars.jsx      # Shooting star particle effect
│   ├── Skills.jsx             # Technical skills display
│   ├── TechStack.jsx          # Infinite marquee of tech icons
│   ├── WorkExperience.jsx     # Work experience timeline
│   └── XRBackground.jsx       # LiDAR / AR scan overlay
├── contexts/
│   └── LanguageContext.jsx    # i18n language switcher (VI / EN)
├── assets/                    # Static assets (images, CV PDF)
├── utils/                     # Helper utilities
├── App.jsx                    # Root component
└── main.jsx                   # Application entry point
```

---

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Deploy to GitHub Pages
npm run deploy
```

---

<div align="center">
  <p><i>Coded by Zeddiewannabexrdev (2026)</i></p>
</div>
