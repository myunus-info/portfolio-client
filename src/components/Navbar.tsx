"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet } from "@/components/ui/sheet";
import { ResumeModal } from "@/components/ResumeModal";
import type { ProfileData } from "@/lib/api";

export function Navbar({ profile }: { profile?: ProfileData | null }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [resumeOpen, setResumeOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Articles", href: "/#blogs" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-indigo-400 transition-colors">
                {profile?.fullName || "Muhammad Yunus"}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">Full-Stack Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-slate-900/60 border border-slate-800/70 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Badge variant="success" className="py-1 px-3 hidden xl:inline-flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
              Available for Remote
            </Badge>

            <Button variant="outline" size="sm" onClick={() => setResumeOpen(true)} className="gap-2 cursor-pointer">
              <FileText className="w-4 h-4 text-indigo-400" />
              Resume
            </Button>

            {profile?.calendlyUrl && (
              <a href={profile.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  Book Call
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" size="sm" onClick={() => setResumeOpen(true)} className="px-2.5">
              <FileText className="w-4 h-4 text-indigo-400" />
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Open Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
            Y
          </div>
          <div>
            <h4 className="font-bold text-white text-base">{profile?.fullName || "Muhammad Yunus"}</h4>
            <p className="text-xs text-indigo-400">Available for Remote Roles</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-indigo-400 py-2.5 px-3 rounded-lg hover:bg-slate-800/60 font-medium text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full justify-center gap-2"
            onClick={() => {
              setMobileOpen(false);
              setResumeOpen(true);
            }}
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            View & Download Resume
          </Button>

          {profile?.calendlyUrl && (
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="w-full justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Intro Call
              </Button>
            </a>
          )}
        </div>
      </Sheet>

      {/* Resume Modal */}
      <ResumeModal open={resumeOpen} onOpenChange={setResumeOpen} profile={profile} />
    </>
  );
}
