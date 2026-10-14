"use client";

import * as React from "react";
import { Download, ExternalLink, Printer, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProfileData } from "@/lib/api";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile?: ProfileData | null;
}

export function ResumeModal({ open, onOpenChange, profile }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const resumeDownloadUrl = profile?.resumeUrl || "#";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              Curriculum Vitae
              <Badge variant="outline" className="text-[10px] py-0 px-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                ATS-Friendly
              </Badge>
            </h3>
            <p className="text-xs text-slate-400">
              Verified for International Remote Full-Stack Engineering Roles
            </p>
          </div>

          <div className="flex items-center gap-2 pr-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="gap-1.5 text-xs hidden sm:inline-flex cursor-pointer border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-all duration-150 active:scale-[0.98]"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </Button>

            <a
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Yunus_FullStack_Resume.pdf"
            >
              <Button size="sm" className="gap-1.5 text-xs cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-150 active:scale-[0.98]">
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-9 max-h-[75vh] overflow-y-auto space-y-5 text-slate-200 text-sm leading-relaxed font-sans bg-slate-950/40">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profile?.fullName || "Muhammad Yunus"}
            </h1>
            <p className="text-indigo-400 font-semibold text-sm sm:text-base mt-0.5">
              {profile?.designation || "Full-Stack Software Engineer"} • Eastern European Time (EET)
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-2.5">
              <span>📧 {profile?.email || "yunus.dev@example.com"}</span>
              <span>📱 {profile?.phone || "+880 1700-000000"}</span>
              <span>📍 {profile?.address || "Eastern Europe (Available for Global Remote Roles)"}</span>
              <span>🌐 {profile?.socialGithub || "github.com"}</span>
              <span>💼 {profile?.socialLinkedin || "linkedin.com"}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile?.bio ||
                "Full-Stack Software Engineer with 3+ years of experience designing and shipping production web applications. I focus on clean code structure, snappy page performance, and practical system design across modern Next.js frontends and Node.js/PostgreSQL backends."}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white">Frontend:</span>{" "}
                <span className="text-slate-300">
                  React.js, Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI, Zustand, TanStack Query
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white">Backend & DB:</span>{" "}
                <span className="text-slate-300">
                  Node.js, Express.js, PostgreSQL, Prisma ORM, MongoDB, Redis, RESTful API Design, JWT, Docker
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Work Experience
            </h2>
            <div className="space-y-3.5">
              <div className="border-l-2 border-indigo-500/60 pl-3.5 py-0.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="font-bold text-white text-sm">
                    Full-Stack Software Engineer • Apex Cloud Solutions
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    2024 – Present | Remote
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    Designed and delivered performant REST APIs with Express and Prisma, cutting server latency by 35%.
                  </li>
                  <li>
                    Migrated critical client portals to Next.js App Router and Server Components, improving initial page render times by 1.8s.
                  </li>
                  <li>
                    Collaborated asynchronously across EU and US timezones with thorough PR reviews and RFC proposals.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-slate-700 pl-3.5 py-0.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="font-bold text-white text-sm">
                    Frontend Engineer • NextGen Digital Labs
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    2022 – 2024 | Hybrid
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    Built responsive client portals using React, TypeScript, and Tailwind CSS serving 40k+ active users.
                  </li>
                  <li>
                    Standardized an accessible UI design system accelerating project turnarounds by 30%.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Featured Projects
            </h2>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">
                    DevJudge – Automated Code Assessment Sandbox
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    Next.js, Node.js, Prisma, Docker
                  </span>
                </div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Engineered isolated Docker sandboxing to execute untrusted candidate code with strict resource limits (512MB RAM cap, 2.0s execution timeout).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">
                    PulseCommerce – Scalable Headless Storefront
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    Next.js, PostgreSQL, Stripe, Prisma
                  </span>
                </div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Prevented race conditions during concurrent checkouts via PostgreSQL row-level locks inside Prisma interactive transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Education & Certifications
            </h2>
            <div className="border-l-2 border-indigo-500/60 pl-3.5 py-0.5 space-y-2.5">
              <div>
                <div className="flex flex-wrap items-center justify-between">
                  <h3 className="font-bold text-white text-sm">
                    Bachelor of Science in Computer Science & Engineering
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    2020 – 2024 | CGPA 3.82 / 4.00
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  American International University-Bangladesh (AIUB) • Graduated with Honors
                </p>
              </div>

              <div className="pt-1.5 border-t border-slate-800">
                <div className="flex flex-wrap items-center justify-between">
                  <h3 className="font-bold text-white text-sm">
                    AWS Certified Solutions Architect – Associate
                  </h3>
                  <span className="text-[11px] text-emerald-400">
                    Verified Active Credential
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Amazon Web Services (AWS)
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
