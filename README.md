<div align="center">
  <h1 align="center">XR Developer Portfolio</h1>
  <p align="center">
    <strong>A Cyber/Space-Themed Personal Landing Page for an XR/Unity Developer</strong>
  </p>
</div>

<br />

## Overview

This is the personal portfolio landing page for Dao An Hoang Long (Zeddiewannabexrdev), an Extended Reality (XR) & Unity Developer. The project is designed with a premium "Cyber / Space" aesthetic tailored to reflect spatial computing and high-tech immersive ecosystems.

Instead of a generic template, this application features heavy custom CSS architecture, 60 FPS unthrottled cursor animations, and a looped YouTube tech-background seamlessly blended into the DOM.

---

## Core Features & Technical Stack

The application is built on ReactJS (Vite) and heavily relies on Tailwind CSS v3 for its atomic styling engine. Below is the detailed technical breakdown for each core feature:

### 1. Looped Video Background (VideoBackground.jsx)
- Visuals: An endless 4K tech loop running behind the entire application, darkened by a volumetric fog gradient.
- Tech Stack: 
  - iframe embedded YouTube Video API.
  - CSS Hacks: Utilizes aspect-ratio formulas to force the iframe to cover the screen proportionally without black bars.
  - Tailwind: mix-blend-screen and opacity utilities to merge the video into the bg-black base layer smoothly.

### 2. Interactive Meta Quest 3 Cursor (InteractiveCursor.jsx)
- Visuals: Replaces the OS default cursor with a Meta Quest 3 headset icon. A glowing cyan tail made of fading dots trails behind the headset.
- Tech Stack:
  - React Native DOM Control: Pure React array Refs paired with requestAnimationFrame for a consistent 60 FPS loop.
  - Mathematics: Uses Linear Interpolation (Lerp) to simulate physics and spring tension on the trailing particles without physics libraries.
  - Optimization: Explicitly avoids React State (useState) for coordinates to prevent layout thrashing and re-rendering lag. Animates using the CSS transform with willChange for GPU acceleration.

### 3. Bento Grid Data Representation (About.jsx & Projects.jsx)
- Visuals: Modern UI segmented into distinct, rounded, glassmorphism "bento boxes". Features a simulated IDE code block.
- Tech Stack:
  - Tailwind Grid: Complex grid spanning architecture.
  - CSS Styling: Custom utilities classes injected into index.css leveraging backdrop-blur.

### 4. Infinite Custom Marquee (TechStack.jsx)
- Visuals: A seamless, never-ending horizontal scroll of core development tools (Unity, C#, HTML, CSS, Arch Linux, etc.).
- Tech Stack:
  - Pure CSS Keyframes: Extends tailwind.config.js with a custom marquee animation. 
  - CSS Masking: Applies mask-image dynamically to fade out the scrolling icons smoothly on the left and right edges.
  - Assets: API integration from skillicons.dev.

### 5. Pill-Shape Navbar & SVG Interactivity (Navbar.jsx / Footer.jsx)
- Visuals: A floating dynamic pill navigation bar anchored top-center. Interactive social media icons at the footer.
- Tech Stack:
  - Sticky Routing: Standard anchor hash HTML routing.
  - Direct Downloads: Uses download attribute on an anchor tag referencing a local asset to trigger browser PDF downloads directly.
  - Mailto Trigger: The Mail button in the footer uses the mailto: protocol to instantly open the user's native email client pre-filled with the developer's address.
  - Custom SVGs: Inline hardcoded SVG HTML blocks replacing heavy React icon libraries to prevent export dependencies and bloated build sizes.

---

## Getting Started

To run this project locally:

1. Install dependencies: npm install
2. Run the development server: npm run dev
3. Build for production deployment: npm run build

---
<div align="center">
  <p><i>Coded by AnLong XR (2026)</i></p>
</div>
