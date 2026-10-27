"use client";

import * as React from "react";
import {
  Code,
  Layers,
  FileCode,
  Palette,
  Component,
  Database,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Workflow,
  FolderTree,
  Zap,
  GitBranch,
  Box,
  CheckCircle2,
  Terminal,
  Cloud,
  Layout,
  HardDrive,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SkillData } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Layers,
  FileCode,
  Palette,
  Component,
  Database,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Workflow,
  FolderTree,
  Zap,
  GitBranch,
  Box,
  CheckCircle2,
  Terminal,
  Cloud,
  Layout,
  HardDrive,
  Wrench,
};

interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  accentClass: string;
  iconBgClass: string;
  skills: SkillData[];
}

export function Skills({ skills = [] }: { skills?: SkillData[] }) {
  const categories: SkillCategoryGroup[] = [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Performant, accessible, and responsive user interfaces built with React & Next.js.",
      icon: Layout,
      accentClass: "hover:border-indigo-500/40",
      iconBgClass: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
      skills: skills.filter((s) => s.category.toLowerCase() === "frontend"),
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Robust RESTful services, JWT auth flows, and server-side runtime business logic.",
      icon: Server,
      accentClass: "hover:border-violet-500/40",
      iconBgClass: "bg-violet-500/15 text-violet-400 border-violet-500/20",
      skills: skills.filter((s) => s.category.toLowerCase() === "backend"),
    },
    {
      id: "database",
      name: "Databases & Storage",
      description: "Relational modeling, Prisma transactions, row-level locks, and Redis caching.",
      icon: Database,
      accentClass: "hover:border-emerald-500/40",
      iconBgClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
      skills: skills.filter((s) => s.category.toLowerCase() === "database"),
    },
    {
      id: "tools",
      name: "DevOps & Tooling",
      description: "Git version control workflows, Docker containerization, and automated test pipelines.",
      icon: Wrench,
      accentClass: "hover:border-amber-500/40",
      iconBgClass: "bg-amber-500/15 text-amber-400 border-amber-500/20",
      skills: skills.filter((s) => ["tools", "tool", "devops", "cloud"].includes(s.category.toLowerCase())),
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/70 border-y border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge
            variant="outline"
            className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
          >
            Technical Stack
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Languages, frameworks, and architectural patterns I work with across production applications.
          </p>
        </div>

        {/* 4 Clean Category Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Card
                key={category.id}
                className={`border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-0.5 shadow-xl rounded-2xl card-sheen ${category.accentClass}`}
              >
                <CardContent className="p-5 sm:p-6 space-y-5">
                  {/* Category Header */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${category.iconBgClass}`}
                    >
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                    {category.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Code;
                      return (
                        <div
                          key={skill.id || skill.name}
                          className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-150 group shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-md bg-slate-800/80 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 shrink-0">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
