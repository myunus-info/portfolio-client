"use client";

import * as React from "react";
import {
  Globe2,
  CheckCircle2,
  Smile,
  Code2,
  Terminal,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProfileData } from "@/lib/api";

export function About({ profile }: { profile?: ProfileData | null }) {
  const principles = [
    {
      title: "Strict TypeScript & Type Safety",
      detail: "Clean data contracts from PostgreSQL schemas to frontend forms without relying on 'any'.",
    },
    {
      title: "Pragmatic Database Design",
      detail: "Proper relational indexing, constraints, and transactional isolation with Prisma & PostgreSQL.",
    },
    {
      title: "Async-First Communication",
      detail: "Well-documented pull requests, concise RFC summaries, and autonomous task execution.",
    },
    {
      title: "Performance & Maintainability",
      detail: "Lean bundle sizes, sensible caching, and readable component hierarchies that teammates can build upon.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Authentic Developer Voice */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
                About & Approach
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                How I Work & Build Software
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {profile?.journey ||
                "I started out building command-line utilities and small web tools, which sparked my interest in how scalable distributed applications work. Over the past three years, I've worked across the full stack—architecting database schemas, implementing robust RESTful endpoints with TypeScript, and building fluid, accessible user interfaces with Next.js and Tailwind CSS."}
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-slate-700 transition-all duration-150 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Relatable Interests */}
            <div className="pt-2 flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
              <Smile className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                <strong className="text-slate-200">Outside coding:</strong> Competitive chess, road cycling, and tinkering with open-source developer tooling.
              </span>
            </div>
          </div>

          {/* Right Column: Working Setup & Remote Availability */}
          <div className="lg:col-span-5">
            <Card className="border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all duration-200 shadow-xl rounded-2xl">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-indigo-400" />
                    Remote Work Setup
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Structured for autonomous collaboration in distributed teams.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Timezone</span>
                    <span className="font-semibold text-slate-200">EET / EEST (UTC+2 / UTC+3)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">European Overlap</span>
                    <span className="font-semibold text-emerald-400">Full Working Day (UK/EU)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Americas Overlap</span>
                    <span className="font-semibold text-indigo-300">4–6 Hours Daily (US East)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Primary Workflow</span>
                    <span className="font-semibold text-slate-200">GitHub PRs, Slack, Notion</span>
                  </div>
                </div>

                {/* Practical Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xl font-bold text-white">3+ Years</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Full-Stack Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xl font-bold text-white">TypeScript</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">Strict End-to-End</div>
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
