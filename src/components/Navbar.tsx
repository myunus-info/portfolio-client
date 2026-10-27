"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, FileText, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import type { ProfileData } from "@/lib/api";

export function Navbar({ profile }: { profile?: ProfileData | null }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ];

  const allMobileLinks = [
    { name: "Selected Work", href: "/#projects" },
    { name: "Tech Stack", href: "/#skills" },
    { name: "Work Experience", href: "/#experience" },
    { name: "About & Setup", href: "/#about" },
    { name: "Education & Certs", href: "/#education" },
    { name: "Technical Notes", href: "/#blogs" },
    { name: "Contact & Booking", href: "/#contact" },
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
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white font-black text-base shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm tracking-tight group-hover:text-indigo-400 transition-colors">
                {profile?.fullName || "Muhammad Yunus"}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">Full-Stack Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 px-3 py-1 rounded-full backdrop-blur-md card-sheen">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/80 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Remote (EET)</span>
            </div>

            <a
              href={profile?.resumeUrl || "/Muhammad_Yunus_Resume.pdf"}
              download="Muhammad_Yunus_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs font-semibold cursor-pointer border-slate-700/80 bg-slate-900 hover:bg-slate-800 text-slate-200 card-sheen transition-all duration-150 active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                Resume
              </Button>
            </a>

            {profile?.calendlyUrl && (
              <a href={profile.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="gap-1.5 text-xs font-semibold cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all duration-150 active:scale-[0.98]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Call
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={profile?.resumeUrl || "/Muhammad_Yunus_Resume.pdf"}
              download="Muhammad_Yunus_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
            >
              <Button
                variant="outline"
                size="sm"
                className="px-2.5 text-xs border-slate-700 bg-slate-900 text-slate-200 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-base">
            Y
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">{profile?.fullName || "Muhammad Yunus"}</h4>
            <p className="text-xs text-indigo-400">Full-Stack Engineer • Remote</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {allMobileLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800/60 font-medium text-sm transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-2.5">
          <a
            href={profile?.resumeUrl || "/Muhammad_Yunus_Resume.pdf"}
            download="Muhammad_Yunus_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            <Button
              variant="outline"
              className="w-full justify-center gap-2 text-xs font-semibold border-slate-700 bg-slate-900 text-white cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              Download Resume
            </Button>
          </a>

          {profile?.calendlyUrl && (
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="w-full justify-center gap-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white">
                <Calendar className="w-4 h-4" />
                Schedule Intro Call
              </Button>
            </a>
          )}
        </div>
      </Sheet>
    </>
  );
}
