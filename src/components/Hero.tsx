"use client";

import * as React from "react";
import Image from "next/image";
import { FileText, Calendar, Github, Linkedin, Twitter, ArrowRight, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/ResumeModal";
import type { ProfileData } from "@/lib/api";

export function Hero({ profile }: { profile?: ProfileData | null }) {
  const [resumeOpen, setResumeOpen] = React.useState(false);

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
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authentic Developer Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 animate-fade-in">
            {/* Remote Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-200 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-400">
                {profile?.remoteStatus || "Open for Global Remote Roles"}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{profile?.timezone || "Eastern European Time (EET / EEST)"}</span>
            </div>

            {/* Natural, Realistic Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Full-Stack Engineer building{" "}
                <span className="bg-linear-to-r from-indigo-400 to-violet-300 bg-clip-text text-transparent">
                  production-ready web apps
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-indigo-300">
                {profile?.designation || "Full-Stack Software Engineer • Next.js, TypeScript & Node.js"}
              </p>
            </div>

            {/* Grounded Bio Summary */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-white">{profile?.fullName || "Muhammad Yunus"}</span>.{" "}
              {profile?.headline ||
                "I build clean, production-ready web applications, fast APIs, and responsive user interfaces with Next.js, TypeScript, and PostgreSQL."}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1 w-full sm:w-auto">
              <a href="#projects">
                <Button
                  size="default"
                  className="gap-2 px-6 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="default"
                onClick={() => setResumeOpen(true)}
                className="gap-2 px-6 py-2.5 text-sm font-semibold border-slate-700 bg-slate-900/90 hover:bg-slate-800 hover:border-slate-600 text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                Download Resume
              </Button>

              {profile?.calendlyUrl && (
                <a
                  href={profile.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-indigo-400 transition-colors py-2 px-1"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Book Call &rarr;</span>
                </a>
              )}
            </div>

            {/* Social Links Strip */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-medium text-slate-400 mr-1">Profiles:</span>
              {socialLinks.map(s => {
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
                href={`mailto:${profile?.email || "yunus.dev@example.com"}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-150 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Realistic Portrait Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Subtle Ambient Rim Glow */}
              <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-2xl opacity-50 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900 group">
                <Image
                  src={profile?.avatarUrl || "/muhammad.png"}
                  alt={profile?.fullName || "Muhammad Yunus"}
                  fill
                  priority
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATS Resume Modal */}
      <ResumeModal open={resumeOpen} onOpenChange={setResumeOpen} profile={profile} />
    </section>
  );
}
