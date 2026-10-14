"use client";

import * as React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TestimonialData } from "@/lib/api";

export function Testimonials({
  testimonials = [],
}: {
  testimonials?: TestimonialData[];
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <Badge variant="outline" className="px-3 py-0.5 text-xs text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
            References
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Peer Recommendations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            What technical leads and colleagues have said about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <Card
              key={item.id || idx}
              className="border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/95 transition-all duration-200 hover:-translate-y-0.5 rounded-2xl shadow-lg"
            >
              <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-indigo-400/50" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-slate-800">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {item.authorName}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.authorRole} • {item.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
