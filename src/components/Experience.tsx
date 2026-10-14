"use client";

import * as React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ExperienceData } from "@/lib/api";

export function Experience({ experiences = [] }: { experiences?: ExperienceData[] }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            Work History
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Professional roles where I shipped features and contributed in distributed teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id || idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-110 transition-transform duration-200" />

              <Card className="border border-slate-800 bg-slate-900/80 hover:bg-slate-900/95 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 rounded-2xl shadow-lg">
                <CardContent className="p-5 sm:p-7 space-y-3.5">
                  {/* Company & Role Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {exp.isCurrent && (
                        <Badge variant="outline" className="text-xs font-medium border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                          Current Role
                        </Badge>
                      )}
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {new Date(exp.startDate).getFullYear()} –{" "}
                        {exp.isCurrent ? "Present" : exp.endDate ? new Date(exp.endDate).getFullYear() : "N/A"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Accomplishments */}
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-1">
                      {exp.bulletPoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Used */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="pt-2.5 flex flex-wrap gap-1.5 border-t border-slate-800">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/80 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
