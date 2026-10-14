import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Testimonials } from "@/components/Testimonials";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getPortfolioData } from "@/lib/api";

export default async function HomePage() {
  const data = await getPortfolioData();

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar profile={data.profile} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero profile={data.profile} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience experiences={data.experiences} />
        <About profile={data.profile} />
        <Education educations={data.educations} />
        <Blogs blogs={data.blogs} />
        <Testimonials testimonials={data.testimonials} />
        <Contact profile={data.profile} />
      </main>

      {/* Footer */}
      <Footer profile={data.profile} />
    </div>
  );
}
