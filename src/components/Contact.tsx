"use client";

import * as React from "react";
import {
  Mail,
  Calendar,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Github,
  Linkedin,
  Copy,
  Check,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProfileData } from "@/lib/api";

export function Contact({ profile }: { profile?: ProfileData | null }) {
  const [copied, setCopied] = React.useState(false);

  const contactEmail = profile?.email || "myunus.info@gmail.com";
  const calendlyUrl = profile?.calendlyUrl;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappClean = (profile?.whatsapp || "").replace(/[^0-9]/g, "");

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/70 border-t border-slate-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge
            variant="outline"
            className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
          >
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Interested in discussing an open remote position, contract work, or software engineering? Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Primary Contact Cards: 2 Columns */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Direct Email */}
          <Card className="border border-slate-800/90 bg-slate-900/70 hover:bg-slate-900/90 hover:border-slate-700/80 transition-all duration-300 shadow-xl rounded-2xl flex flex-col justify-between p-6 card-sheen">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-mono break-all mt-0.5">
                  {contactEmail}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Best for job descriptions, interview invitations, project scopes, and engineering discussions.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contactEmail}?subject=Software%20Engineering%20Opportunity`}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer gap-1.5 transition-all duration-150 active:scale-[0.98] shadow-md shadow-indigo-600/20"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Send Email
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="border-slate-700/80 bg-slate-950 text-slate-300 hover:text-white cursor-pointer gap-1.5 text-xs card-sheen transition-all duration-150 active:scale-[0.98]"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Typically replies within 12–24 hours</span>
              </div>
            </div>
          </Card>

          {/* Card 2: Schedule Intro Call via Calendly */}
          <Card className="border border-slate-800/90 bg-slate-900/70 hover:bg-slate-900/90 hover:border-slate-700/80 transition-all duration-300 shadow-xl rounded-2xl flex flex-col justify-between p-6 card-sheen">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block">
                  Quick Intro Call
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  Schedule a Video Chat
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Prefer discussing directly? Pick a convenient time on my calendar for a 15–30 minute introductory call.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              {calendlyUrl ? (
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="sm"
                    className="w-full text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white cursor-pointer gap-1.5 transition-all duration-150 active:scale-[0.98] shadow-md shadow-purple-600/20"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book via Calendly
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </Button>
                </a>
              ) : (
                <a
                  href={`mailto:${contactEmail}?subject=Schedule%20Introductory%20Call`}
                  className="block w-full"
                >
                  <Button
                    size="sm"
                    className="w-full text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white cursor-pointer gap-1.5 transition-all duration-150 active:scale-[0.98]"
                  >
                    Request Call via Email
                  </Button>
                </a>
              )}
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Google Meet / Zoom • Flexible slots</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Secondary Direct Channels Strip */}
        <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Direct Phone */}
          {profile?.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/60 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-200 group flex items-center justify-between card-sheen"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Direct Phone
                  </span>
                  <span className="text-[11px] text-slate-300 font-mono">
                    {profile.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>
          )}

          {/* WhatsApp */}
          {whatsappClean && (
            <a
              href={`https://wa.me/${whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/60 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-200 group flex items-center justify-between card-sheen"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    WhatsApp
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Instant Messaging
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>
          )}

          {/* LinkedIn */}
          {profile?.socialLinkedin && (
            <a
              href={profile.socialLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/60 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 group flex items-center justify-between card-sheen"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Professional Network
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>
          )}

          {/* GitHub */}
          {profile?.socialGithub && (
            <a
              href={profile.socialGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group flex items-center justify-between card-sheen"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-700">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    GitHub
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Code & Repositories
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          )}
        </div>

        {/* Location & Timezone Overlap Banner */}
        <div className="max-w-4xl mx-auto mt-6 p-4 rounded-2xl border border-slate-800/90 bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs card-sheen">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-white font-medium">
              Open for Global Remote Roles
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-center sm:text-right">
            <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="font-mono text-[11px]">
              {profile?.timezone || "Eastern European Time (EET / EEST) • Full EU & US Overlap"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
