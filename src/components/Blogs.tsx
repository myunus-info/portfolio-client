"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogData } from "@/lib/api";

export function Blogs({ blogs = [] }: { blogs?: BlogData[] }) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="blogs" className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            Writing
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Articles & Engineering Notes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Practical notes on database design, React architecture, and remote team workflows.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <Card
              key={blog.id || blog.slug}
              className="flex flex-col overflow-hidden border border-slate-800 bg-slate-900/80 hover:bg-slate-900/95 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 group rounded-2xl shadow-lg"
            >
              {/* Cover Image */}
              <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                <Image
                  src={
                    blog.coverImage ||
                    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?fit=crop&w=800&h=450&q=80"
                  }
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-800">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {blog.readTime || "5 min read"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-indigo-300 border border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>

                  <Link href={`/blogs/${blog.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 text-xs text-indigo-400 hover:text-white p-0 hover:bg-transparent cursor-pointer font-semibold"
                    >
                      Read Note
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
