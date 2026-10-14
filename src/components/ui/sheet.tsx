"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      {/* Sheet Content */}
      <div className="relative z-50 h-full w-4/5 max-w-sm border-l border-slate-800 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-right duration-300 flex flex-col">
        <button
          onClick={() => onOpenChange(false)}
          className="self-end rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="mt-6 flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
