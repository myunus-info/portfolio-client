"use client";

import { Globe2, ShieldCheck, Zap, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProfileData } from "@/lib/api";

export function About({ profile }: { profile?: ProfileData | null }) {
  const principles = [
    {
      title: "Strict TypeScript & Type Safety",
      detail: "Clean data contracts from PostgreSQL schemas to frontend forms without relying on 'any'.",
      icon: ShieldCheck,
      color: "text-indigo-400",
    },
    {
      title: "Pragmatic Database Design",
      detail: "Proper relational indexing, constraints, and transactional isolation with Prisma & PostgreSQL.",
      icon: Terminal,
      color: "text-emerald-400",
    },
    {
      title: "Async-First Communication",
      detail: "Well-documented pull requests, concise RFC summaries, and autonomous task execution.",
      icon: Globe2,
      color: "text-violet-400",
    },
    {
      title: "Performance & Maintainability",
      detail: "Lean bundle sizes, sensible caching, and readable component hierarchies that teammates can build upon.",
      icon: Zap,
      color: "text-amber-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/60 border-t border-slate-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Authentic Developer Voice */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
              >
                About Me
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                My Programming Journey & Personality
              </h2>
            </div>

            {/* Narrative Cards: Journey, Work I Enjoy, Hobbies & Personality */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-1.5 card-sheen">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                  My Programming Journey
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profile?.journey ||
                    "My programming journey began in January 2019. From January 2019 to present, I have continuously studied and mastered full-stack technologies, distributed APIs, transactional databases, and cloud architecture across platforms like Udemy, Creative IT, Pondit, and Programming Hero alongside internships and US client contract work."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-1.5 card-sheen">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  The Work I Enjoy Most
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profile?.workEnjoyment ||
                    "I enjoy architecting modular backend services, designing transactional database schemas with row-level locks (SELECT FOR UPDATE), and building high-performance, accessible user interfaces with Next.js 16 App Router and TypeScript."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-1.5 card-sheen">
                <span className="text-xs font-bold text-violet-400 uppercase tracking-wider block">
                  Hobbies & Personality Outside Programming
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profile?.hobbies ||
                    "Outside of programming, I enjoy competitive chess tactics, road cycling, and studying English literature."}{" "}
                  I believe in rigorous discipline, analytical curiosity, and approaching every problem with patience
                  and empathy.
                </p>
              </div>
            </div>

            {/* 4 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {principles.map(p => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1 hover:border-slate-700/80 transition-all duration-200 card-sheen shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                      <Icon className={`w-3.5 h-3.5 ${p.color} shrink-0`} />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{p.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Working Setup & Remote Availability */}
          <div className="lg:col-span-5">
            <Card className="border border-slate-800/90 bg-slate-900/70 hover:border-slate-700/80 transition-all duration-300 shadow-2xl rounded-2xl card-sheen">
              <CardContent className="p-5 sm:p-7 space-y-5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-indigo-400" />
                    Remote Engineering Setup
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Structured for autonomous execution in distributed remote teams.
                  </p>
                </div>

                <div className="space-y-3 pt-1 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Base Timezone</span>
                    <span className="font-semibold text-slate-200 font-mono">EET / EEST (UTC+2 / UTC+3)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">UK / Europe Overlap</span>
                    <span className="font-semibold text-emerald-400">Full Working Day (CET / BST)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">US Americas Overlap</span>
                    <span className="font-semibold text-indigo-300">4–6 Hours Daily (EST / EDT)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Primary Collaboration</span>
                    <span className="font-semibold text-slate-200">GitHub PRs, Slack, Zoom</span>
                  </div>
                </div>

                {/* Practical Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center">
                    <div className="text-xl font-black text-white">5+ Years</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Continuous Engineering</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center">
                    <div className="text-xl font-black text-indigo-400">Next.js 16</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">App Router & SSG</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
