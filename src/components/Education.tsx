"use client";

import * as React from "react";
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EducationData } from "@/lib/api";

export function Education({ educations = [] }: { educations?: EducationData[] }) {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2024",
      status: "Verified Active Credential",
      skills: ["Cloud Architecture", "Amazon RDS / PostgreSQL", "VPC Networking", "IAM Security", "S3 & CloudFront", "High Availability"],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            Education & Certs
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Academic degree in computer science alongside verified cloud architecture credentials.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Academic Qualification */}
          {educations.map((edu, idx) => (
            <Card
              key={edu.id || idx}
              className="border border-slate-800 bg-slate-900/80 hover:bg-slate-900/95 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                        Degree
                      </span>
                      {edu.grade && (
                        <Badge variant="outline" className="text-[10px] font-mono py-0 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                          {edu.grade}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-300">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                  <p>{edu.description}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {new Date(edu.startDate).getFullYear()} – {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"}
                  </span>
                  <span className="text-emerald-400 font-sans font-medium">Graduated</span>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* 2. AWS Certified Solutions Architect */}
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="border border-slate-800 bg-slate-900/80 hover:bg-slate-900/95 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                        Certification
                      </span>
                      <Badge variant="outline" className="text-[10px] font-medium py-0 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                        Active
                      </Badge>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-300">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Cloud Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[11px] font-mono text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Issued {cert.issueDate}
                  </span>
                  <span className="text-emerald-400 font-sans font-medium">AWS Verified</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
