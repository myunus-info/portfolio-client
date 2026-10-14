"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Terminal, Kanban, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectData } from "@/lib/api";

export function Projects({ projects = [] }: { projects?: ProjectData[] }) {
  const renderProjectVisual = (project: ProjectData) => {
    const isDevJudge = project.slug.includes("devjudge");
    const isNexusFlow = project.slug.includes("nexusflow");
    const isPulseCommerce = project.slug.includes("pulsecommerce");

    return (
      <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Browser Top Chrome Bar */}
        <div className="h-7 bg-slate-900/90 border-b border-slate-800/80 px-3 flex items-center justify-between z-20 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <div className="px-2.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-50">
            {project.liveUrl.replace("https://", "")}
          </div>
          <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live
          </div>
        </div>

        {/* Thumbnail Image with High Clarity */}
        {project.thumbnail ? (
          <div className="relative w-full h-[calc(100%-28px)] bg-slate-900">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative w-full h-[calc(100%-28px)] bg-slate-900/90 p-4 flex flex-col justify-between">
            {isDevJudge && (
              <div className="space-y-2 font-mono text-xs text-indigo-300">
                <div className="flex items-center gap-2 text-slate-400 pb-1 border-b border-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>sandbox_worker.ts &bull; Isolated Container</span>
                </div>
                <p className="text-emerald-400">&gt; test_suite_runner --all</p>
                <p className="text-slate-300">&bull; Test 01: Input Memory Allocation [PASS 12ms]</p>
                <div className="mt-2 p-1.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                  &#x2713; All Test Suites Passed
                </div>
              </div>
            )}

            {isNexusFlow && (
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-400 pb-1 border-b border-slate-800">
                  <Kanban className="w-3.5 h-3.5 text-violet-400" />
                  <span>Sprint Board &bull; Optimistic Drag-and-Drop</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">To Do</span>
                    <div className="p-1 rounded bg-slate-900 text-[11px] text-white">OAuth Webhook</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/80 border border-indigo-500/40 space-y-1">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase">In Dev</span>
                    <div className="p-1 rounded bg-indigo-950/50 text-[11px] text-indigo-200">WebSocket Sync</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Done</span>
                    <div className="p-1 rounded bg-slate-900 text-[11px] text-emerald-300">LexoRank DB</div>
                  </div>
                </div>
              </div>
            )}

            {isPulseCommerce && (
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-400 pb-1 border-b border-slate-800">
                  <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Storefront Hub &bull; Row-Level Lock Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-bold text-white">Inventory Lock</div>
                    <div className="text-xs font-mono text-emerald-400">PostgreSQL Transaction</div>
                  </div>
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-bold text-white">Stripe Checkout</div>
                    <div className="text-xs font-mono text-indigo-400">Webhook Verified</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge
            variant="outline"
            className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
          >
            Selected Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Production applications I&apos;ve designed and built, highlighting real-world technical constraints,
            architecture, and code.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map(project => (
            <Card
              key={project.id || project.slug}
              className="flex flex-col overflow-hidden border border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900/95 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group rounded-2xl"
            >
              {/* Preview Frame */}
              {renderProjectVisual(project)}

              {/* Card Body */}
              <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.shortOverview}
                    </p>
                  </div>

                  {/* Curated Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700/80 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] font-mono text-slate-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full gap-1.5 font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-sm transition-all duration-150 active:scale-[0.98]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </Button>
                    </a>

                    <a href={project.clientRepoUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 cursor-pointer transition-all duration-150 active:scale-[0.98]"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </Button>
                    </a>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700/60"
                    >
                      Case Study & Architecture
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
