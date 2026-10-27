"use client";

import * as React from "react";
import { GraduationCap, Calendar, ShieldCheck, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EducationData } from "@/lib/api";

export function Education({ educations = [] }: { educations?: EducationData[] }) {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Nov 2022",
      status: "Active Credential",
      skills: [
        "AWS Cloud Architecture",
        "EC2 & S3 Infrastructure",
        "RDS & Database Services",
        "VPC Networking",
        "IAM & Security Governance",
        "High Availability",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            Education & Credentials
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Education & Tech Mastery
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Academic foundations, continuous software engineering study across full-stack technologies from January 2019 to present, and certified cloud credentials.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Educations: Academic & Continuous Technical Study */}
          {educations.map((edu, idx) => {
            const isAcademic = edu.institution.toLowerCase().includes("uttara");
            const Icon = isAcademic ? GraduationCap : Terminal;
            const iconBg = isAcademic
              ? "bg-indigo-500/15 text-indigo-400 border-indigo-500/20"
              : "bg-violet-500/15 text-violet-400 border-violet-500/20";
            const tagLabel = isAcademic ? "Academic Foundation" : "Continuous Tech Study";
            const tagColor = isAcademic ? "text-indigo-400" : "text-violet-400";
            const statusLabel = edu.endDate ? "Completed (1 Year)" : "Jan 2019 – Present (Active)";

            return (
              <Card
                key={edu.id || idx}
                className="border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-0.5 rounded-2xl shadow-xl flex flex-col justify-between card-sheen"
              >
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider ${tagColor}`}>
                          {tagLabel}
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
                    <span className={`${edu.endDate ? "text-indigo-400" : "text-emerald-400"} font-sans font-medium text-xs`}>
                      {statusLabel}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Professional Cloud Certification */}
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-0.5 rounded-2xl shadow-xl flex flex-col justify-between card-sheen"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                        Cloud Credential
                      </span>
                      <Badge variant="outline" className="text-[10px] font-medium py-0 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                        {cert.status}
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

                <div className="flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Issued {cert.issueDate}
                  </span>
                  <span className="text-amber-400 font-sans font-medium text-xs">Verified Credential</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
