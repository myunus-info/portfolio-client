"use client";

import * as React from "react";
import Image from "next/image";
import {
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Mail,
  Download,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProfileData } from "@/lib/api";

export function Hero({ profile }: { profile?: ProfileData | null }) {

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: profile?.socialGithub || "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: profile?.socialLinkedin || "https://linkedin.com",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      href: profile?.socialTwitter || "https://twitter.com",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: profile?.socialFacebook || "https://facebook.com",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Background Subtle Dot Grid & Radial Spotlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Introduction & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-fade-in">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-xs text-slate-200 backdrop-blur-md shadow-sm card-sheen">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-400">
                {profile?.remoteStatus || "Open for Global Remote Roles"}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-mono text-[11px]">
                {profile?.timezone || "EET (UTC+2) • Full EU & US Overlap"}
              </span>
            </div>

            {/* Headline with Optimized Typographic Hierarchy */}
            <div className="space-y-3.5">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.85rem] font-black text-white tracking-tight leading-[1.1]">
                Full-Stack Engineer building{" "}
                <span className="bg-linear-to-r from-indigo-300 via-white to-violet-300 bg-clip-text text-transparent">
                  production web systems
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs sm:text-sm font-mono text-indigo-300">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Next.js (App Router) • TypeScript • Node.js • PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Authoritative Bio Summary */}
            <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal">
              Hi, I&apos;m <span className="font-bold text-white">{profile?.fullName || "Muhammad Yunus"}</span>.{" "}
              {profile?.headline ||
                "I build clean, production-ready web applications, fast APIs, and responsive user interfaces with Next.js, TypeScript, and PostgreSQL."}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1 w-full sm:w-auto">
              <a href="#projects">
                <Button
                  size="default"
                  className="gap-2 px-6 py-2.5 text-sm sm:text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/25 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Selected Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={profile?.resumeUrl || "/Muhammad_Yunus_Resume.pdf"}
                download="Muhammad_Yunus_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="default"
                  className="gap-2 px-6 py-2.5 text-sm sm:text-base font-semibold border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 hover:border-slate-600 text-white cursor-pointer card-sheen transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  Download Resume
                </Button>
              </a>

              {profile?.calendlyUrl && (
                <a
                  href={profile.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-indigo-400 transition-colors py-2 px-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Book 15-Min Call &rarr;</span>
                </a>
              )}
            </div>

            {/* Profile Links */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400">Profiles:</span>
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-150 hover:-translate-y-0.5"
                      aria-label={s.name}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
                <a
                  href={`mailto:${profile?.email || "myunus.info@gmail.com"}`}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-150 hover:-translate-y-0.5"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Portrait Container with Hardware Sheen */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Subtle Ambient Rim Glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-indigo-500/25 via-violet-500/15 to-transparent blur-2xl opacity-60 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-900 group card-sheen">
                <Image
                  src={profile?.avatarUrl || "/muhammad.png"}
                  alt={profile?.fullName || "Muhammad Yunus"}
                  fill
                  priority
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient overlay at base */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Micro Tech Pill on bottom of portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-sans font-medium text-white text-xs">Full-Stack Dev</span>
                  </div>
                  <span className="text-indigo-400 text-[10px]">React • Next.js • Node</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
