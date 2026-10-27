import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, AlertCircle, TrendingUp, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/api";

interface ProjectDetailsProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 relative bg-slate-950 text-slate-100">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-175 h-100 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Back Button */}
        <div>
          <Link href="/#projects">
            <Button variant="outline" size="sm" className="gap-2 text-slate-400 hover:text-white border-slate-800">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="glow" className="text-xs">
              Production Project
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Full-Stack Application
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">{project.shortOverview}</p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30">
                <ExternalLink className="w-4 h-4" />
                Open Live Project
              </Button>
            </a>

            <a href={project.clientRepoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
              >
                <Github className="w-4 h-4" />
                Client GitHub Repo
              </Button>
            </a>

            {project.serverRepoUrl && (
              <a href={project.serverRepoUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                >
                  <Github className="w-4 h-4" />
                  Server GitHub Repo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-80 sm:h-112.5 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
          <Image src={project.thumbnail} alt={project.title} fill priority className="object-cover" />
        </div>

        {/* Main Technology Stack Used */}
        <Card className="border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-lg">
              <Layers className="w-5 h-5" />
              <h3>Main Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-sm font-mono font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Detailed Description & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8">
            {/* Overview & Context */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                Project Overview & Core Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
              {project.architecture && (
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-sm text-slate-300 leading-relaxed">
                  <span className="font-bold text-indigo-400 mb-1.5 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    System Architecture Highlights
                  </span>
                  {project.architecture}
                </div>
              )}
            </div>

            <Separator className="bg-slate-800" />

            {/* Specific Requirement: Challenges Faced */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <h3 className="text-2xl font-bold text-white">Challenges Faced & How Solved</h3>
              </div>
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-slate-200 text-sm sm:text-base leading-relaxed space-y-2">
                <p>{project.challengesFaced}</p>
              </div>
            </div>

            <Separator className="bg-slate-800" />

            {/* Specific Requirement: Potential Improvements & Future Plans */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <TrendingUp className="w-6 h-6 shrink-0" />
                <h3 className="text-2xl font-bold text-white">Potential Improvements & Future Roadmap</h3>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-slate-200 text-sm sm:text-base leading-relaxed space-y-2">
                <p>{project.futureImprovements}</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Key Specs Box */}
          <div className="md:col-span-4 space-y-6">
            <Card className="border-slate-800 bg-slate-900/80 p-6 sticky top-28 space-y-5">
              <h4 className="font-bold text-white text-base">Project Metadata</h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block">Category:</span>
                  <span className="font-semibold text-slate-200">Full-Stack Application</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Live Deployment:</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline break-all"
                  >
                    {project.liveUrl}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block">Client Repository:</span>
                  <a
                    href={project.clientRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline break-all"
                  >
                    {project.clientRepoUrl}
                  </a>
                </div>
                {project.serverRepoUrl && (
                  <div>
                    <span className="text-slate-400 block">Server Repository:</span>
                    <a
                      href={project.serverRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline break-all"
                    >
                      {project.serverRepoUrl}
                    </a>
                  </div>
                )}
              </div>

              <Separator className="bg-slate-800" />

              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Launch Project
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
