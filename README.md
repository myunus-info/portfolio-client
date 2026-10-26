# Personal Developer Portfolio & Engineering Case Studies

![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

**Live Demo**: [https://yunusportfolio-ten.vercel.app/](https://yunusportfolio-ten.vercel.app/)

A modern, high-performance developer portfolio and personal engineering hub built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It features interactive case studies, dynamic project filtering, an ATS-friendly resume viewer with direct PDF download, and an integrated Calendly scheduling system.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Project Architecture](#project-architecture)
- [Getting Started Locally](#getting-started-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Development Server](#running-development-server)
  - [Production Build](#production-build)
- [Deployment](#deployment)
- [Author & Connect](#author--connect)

---

## Overview

This client-side portfolio application is architected to deliver near-instant page transitions, 100% static site generation (SSG) with `generateStaticParams()`, and perfect Lighthouse performance scores. It serves as the primary showcase for technical recruiters, CTOs, and engineering leaders reviewing production web applications.

---

## Key Features

- **Interactive Project Case Studies**: Granular breakdowns of full-stack production systems (DevJudge, GearUp) with live demo links, repository access, and architectural challenges.
- **Categorized Technical Arsenal**: Visual competencies across Frontend, Backend, Databases, and Cloud/DevOps.
- **ATS-Friendly Resume Modal**: Built-in resume viewer modal with direct one-click PDF downloading.
- **Direct Connect Hub**: One-click email copying, prefilled contact triggers, WhatsApp routing, and embedded Calendly 15/30-minute meeting booking.
- **Hardware-Sheen Dark Aesthetics**: Bespoke slate and dark navy surfaces inspired by Vercel and Linear design systems with fluid micro-interactions powered by Framer Motion.
- **100% Responsive Design**: Optimized across mobile phones, tablets, and ultrawide 4K desktop screens.

---

## Tech Stack & Dependencies

### Core Framework & Language
- **Next.js 16.4.0** (App Router, Turbopack, Static Site Generation)
- **React 19.0.0** & **React DOM 19**
- **TypeScript 5.8.2** (Strict Mode)

### Styling & UI Primitives
- **Tailwind CSS v4.0.9** (`@tailwindcss/postcss`)
- **Framer Motion 12.4.7** (Fluid enter/exit animations and scroll reveals)
- **Lucide React 0.475.0** (Modern vector icon set)
- **Sonner 2.0.1** (Clean toast notification system)
- **clsx** & **tailwind-merge** (Conditional class composition)

---

## Project Architecture

```
frontend/
├── public/                  # Static assets (images, PDF resume, icons)
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   │   ├── layout.tsx       # Root metadata, fonts, and dark layout shell
│   │   ├── page.tsx         # Main portfolio single-page application
│   │   └── globals.css      # Tailwind CSS v4 styling rules
│   ├── components/          # Modular client UI components
│   │   ├── Hero.tsx         # Typing hero banner and quick actions
│   │   ├── About.tsx        # Personal narrative and technical focus
│   │   ├── Projects.tsx     # Case studies and production system cards
│   │   ├── Skills.tsx       # Categorized competencies matrix
│   │   ├── Contact.tsx      # Communication channels and scheduling
│   │   ├── ResumeModal.tsx  # Interactive PDF resume modal
│   │   └── Footer.tsx       # Minimalist footer with social links
│   ├── data/                # Static data models and project content
│   │   └── portfolio.ts     # Centralized type-safe portfolio data
│   └── lib/                 # Utility functions and API interfaces
│       └── utils.ts         # Class merging helpers
├── package.json
└── tsconfig.json
```

---

## Getting Started Locally

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: v20.x or higher (v22+ recommended)
- **npm**, **yarn**, or **pnpm**
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/myunus-info/portfolio-client.git
   cd portfolio-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Development Server

Start the local Next.js development server with Turbopack:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### Production Build

To test the production build locally:
```bash
npm run build
npm run start
```

---

## Deployment

This application is configured for zero-configuration continuous deployment on **Vercel**:
- Automatic deployments on push to `main` branch.
- Edge-cached static delivery worldwide.
- **Live URL**: [https://yunusportfolio-ten.vercel.app/](https://yunusportfolio-ten.vercel.app/)

---

## Author & Connect

**Muhammad Yunus**  
*Full-Stack Software Engineer (Backend-Heavy)*

- **Portfolio**: [https://yunusportfolio-ten.vercel.app/](https://yunusportfolio-ten.vercel.app/)
- **LinkedIn**: [https://www.linkedin.com/in/yunus-profile](https://www.linkedin.com/in/yunus-profile)
- **GitHub**: [https://github.com/myunus-info](https://github.com/myunus-info)
- **Email**: [myunus.info@gmail.com](mailto:myunus.info@gmail.com)
- **WhatsApp**: [+20 1025-689042](https://wa.me/201025689042)
- **Calendly**: [https://calendly.com/myunus-info/30min](https://calendly.com/myunus-info/30min)
