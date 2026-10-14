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
  skills: SkillData[];
}

export function Skills({ skills = [] }: { skills?: SkillData[] }) {
  const categories: SkillCategoryGroup[] = [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Modern, responsive, and accessible user interfaces built with React & Next.js.",
      icon: Layout,
      skills: skills.filter((s) => s.category.toLowerCase() === "frontend"),
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "RESTful endpoints, authentication workflows, and server-side runtime logic.",
      icon: Server,
      skills: skills.filter((s) => s.category.toLowerCase() === "backend"),
    },
    {
      id: "database",
      name: "Databases & Storage",
      description: "Relational schema design, Prisma ORM modeling, transactions, and caching.",
      icon: Database,
      skills: skills.filter((s) => s.category.toLowerCase() === "database"),
    },
    {
      id: "tools",
      name: "DevOps & Tooling",
      description: "Version control workflows, Docker containerization, and automated testing.",
      icon: Wrench,
      skills: skills.filter((s) => ["tools", "tool", "devops", "cloud"].includes(s.category.toLowerCase())),
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            Skills & Stack
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Technologies & Tools
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Languages, frameworks, and developer tools I use regularly in production.
          </p>
        </div>

        {/* 4 Clean Category Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Card
                key={category.id}
                className="border border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900/95 transition-all duration-200 hover:-translate-y-0.5 shadow-lg rounded-2xl"
              >
                <CardContent className="p-5 sm:p-6 space-y-5">
                  {/* Category Header */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                    {category.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Code;
                      return (
                        <div
                          key={skill.id || skill.name}
                          className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-150 group shadow-sm"
                        >
                          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 shrink-0">
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
