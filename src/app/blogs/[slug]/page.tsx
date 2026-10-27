import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/api";

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 relative bg-slate-950 text-slate-100">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Back Button */}
        <div>
          <Link href="/#blogs">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 text-slate-400 hover:text-white border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-2 border-b border-slate-800/80 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-indigo-400" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-400" />
              {blog.readTime || "5 min read"}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Excerpt / Lead */}
        <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic border-l-4 border-indigo-500 pl-4 py-1">
          {blog.excerpt}
        </p>

        <Separator className="bg-slate-800" />

        {/* Rich-Text Rendered Content */}
        <div
          className="prose prose-invert max-w-none text-slate-200 leading-relaxed space-y-4 text-sm sm:text-base [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-indigo-300 [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:leading-relaxed [&>p]:text-slate-300 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:bg-slate-900 [&>pre]:border [&>pre]:border-slate-800 [&>pre]:text-indigo-300 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>code]:bg-slate-900 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-indigo-400"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <Separator className="bg-slate-800" />

        {/* Author / Back Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-lg text-white">
              Y
            </div>
            <div>
              <p className="font-bold text-white text-sm">Written by Muhammad Yunus</p>
              <p className="text-xs text-indigo-400">Full-Stack Software Engineer</p>
            </div>
          </div>

          <Link href="/#blogs">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Read More Articles
            </Button>
          </Link>
        </div>
      </article>
    </main>
  );
}
