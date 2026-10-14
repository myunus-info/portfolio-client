import {
  profileData,
  skillsData,
  projectsData,
  experiencesData,
  educationsData,
  blogsData,
  testimonialsData,
} from "@/data/portfolio";

// Data models
export interface ProfileData {
  id?: string;
  fullName: string;
  designation: string;
  headline: string;
  bio: string;
  journey: string;
  workEnjoyment: string;
  hobbies: string;
  avatarUrl: string;
  resumeUrl?: string | null;
  calendlyUrl?: string | null;
  timezone: string;
  remoteStatus: string;
  email: string;
  phone: string;
  whatsapp?: string | null;
  address: string;
  socialGithub?: string | null;
  socialLinkedin?: string | null;
  socialTwitter?: string | null;
  socialFacebook?: string | null;
}

export interface SkillData {
  id: string;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
  order: number;
}

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  isCurrent: boolean;
  description: string;
  bulletPoints: string[];
  techStack: string[];
}

export interface EducationData {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string | null;
  grade?: string | null;
  description?: string | null;
}

export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  images: string[];
  shortOverview: string;
  fullDescription: string;
  liveUrl: string;
  clientRepoUrl: string;
  serverRepoUrl?: string | null;
  techStack: string[];
  architecture?: string | null;
  challengesFaced: string;
  futureImprovements: string;
  featured: boolean;
  order: number;
}

export interface BlogData {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  published: boolean;
  readTime: string;
  createdAt: string;
}

export interface TestimonialData {
  id: string;
  authorName: string;
  authorRole: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// Standalone data getters (no external backend dependency)
export async function getPortfolioData() {
  return {
    profile: profileData,
    skills: skillsData,
    projects: projectsData,
    experiences: experiencesData,
    educations: educationsData,
    blogs: blogsData,
    testimonials: testimonialsData,
  };
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  const project = projectsData.find((p) => p.slug === slug);
  return project || null;
}

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  const blog = blogsData.find((b) => b.slug === slug);
  return blog || null;
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

export function getAllBlogSlugs(): string[] {
  return blogsData.map((b) => b.slug);
}

