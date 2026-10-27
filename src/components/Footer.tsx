"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import type { ProfileData } from "@/lib/api";

export function Footer({ profile }: { profile?: ProfileData | null }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 sm:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand & Designation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-0.5">
            <Link href="/" className="font-bold text-white text-base tracking-tight hover:text-indigo-400 transition-colors">
              {profile?.fullName || "Muhammad Yunus"}
            </Link>
            <p className="text-xs text-slate-400">
              {profile?.designation || "Full-Stack Software Engineer"}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#blogs" className="hover:text-white transition-colors">
              Articles
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {profile?.socialGithub && (
                <a
                  href={profile.socialGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-150"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {profile?.socialLinkedin && (
                <a
                  href={profile.socialLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-150"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {profile?.socialTwitter && (
                <a
                  href={profile.socialTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-150"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
              {profile?.socialFacebook && (
                <a
                  href={profile.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-150"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 flex items-center justify-center transition-all duration-150 active:scale-[0.96] cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            © {currentYear} {profile?.fullName || "Muhammad Yunus"}.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
