import type {
  ProfileData,
  SkillData,
  ProjectData,
  ExperienceData,
  EducationData,
  BlogData,
  TestimonialData,
} from "@/lib/api";

export const profileData: ProfileData = {
  id: "profile-1",
  fullName: "Muhammad Yunus",
  designation: "Full-Stack Software Engineer • TypeScript, Node.js & Next.js ",
  headline:
    "Building clean, production-ready web applications, fast APIs, and responsive user interfaces with Next.js, TypeScript, and PostgreSQL.",
  remoteStatus: "Open for Global Remote Roles",
  timezone: "Eastern European Time (EET / EEST) • Full EU & US Overlap",
  bio: "Full-Stack Software Engineer with 3+ years of experience designing and shipping production web applications. I focus on clean code structure, snappy page performance, and practical system design across modern Next.js frontends and Node.js/PostgreSQL backends.",
  journey:
    "I started out building command-line utilities and small web tools, which sparked my interest in how scalable distributed applications work. Over the past three years, I've worked across the full stack—architecting database schemas, implementing robust RESTful endpoints with TypeScript, and building fluid, accessible user interfaces with Next.js and Tailwind CSS.",
  workEnjoyment:
    "I enjoy working on end-to-end features where both user experience and backend stability matter: designing clean component architectures, implementing transactional checkout flows with row-level locks, and building developer-friendly APIs.",
  hobbies:
    "Outside of work, I follow open-source software, play tactical chess, enjoy road cycling, and experiment with new developer tools.",
  avatarUrl: "/muhammad.png",
  resumeUrl: "/RESUME_OF_YUNUS.pdf",
  calendlyUrl:
    "https://calendly.com/myunus-info/30min?lid=i3jj89ltjpjw&utm_medium=email&utm_source=braze&utm_campaign=EM_Trial_User%20Welcome",
  email: "myunus.info@gmail.com",
  phone: "+20 1025-689042",
  whatsapp: "+20 1025-689042",
  address: "Eastern Europe (Available for Global Remote Roles)",
  socialGithub: "https://github.com",
  socialLinkedin: "https://linkedin.com",
  socialTwitter: "https://twitter.com",
  socialFacebook: "https://facebook.com",
};

export const skillsData: SkillData[] = [
  // Frontend
  { id: "sk-1", name: "React.js", category: "Frontend", icon: "Code", proficiency: 94, order: 1 },
  { id: "sk-2", name: "Next.js (App Router)", category: "Frontend", icon: "Layers", proficiency: 92, order: 2 },
  { id: "sk-3", name: "TypeScript", category: "Frontend", icon: "FileCode", proficiency: 90, order: 3 },
  { id: "sk-4", name: "Tailwind CSS", category: "Frontend", icon: "Palette", proficiency: 95, order: 4 },
  { id: "sk-5", name: "Shadcn UI & Radix", category: "Frontend", icon: "Component", proficiency: 92, order: 5 },
  { id: "sk-6", name: "Zustand & TanStack Query", category: "Frontend", icon: "Database", proficiency: 88, order: 6 },
  // Backend
  { id: "sk-7", name: "Node.js", category: "Backend", icon: "Server", proficiency: 92, order: 7 },
  { id: "sk-8", name: "Express.js", category: "Backend", icon: "Cpu", proficiency: 94, order: 8 },
  { id: "sk-9", name: "RESTful API Design", category: "Backend", icon: "Network", proficiency: 95, order: 9 },
  {
    id: "sk-10",
    name: "Authentication (JWT / OAuth)",
    category: "Backend",
    icon: "ShieldCheck",
    proficiency: 90,
    order: 10,
  },
  // Database
  { id: "sk-11", name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 88, order: 11 },
  { id: "sk-12", name: "Prisma ORM", category: "Database", icon: "Workflow", proficiency: 92, order: 12 },
  { id: "sk-13", name: "MongoDB", category: "Database", icon: "FolderTree", proficiency: 86, order: 13 },
  { id: "sk-14", name: "Redis Caching", category: "Database", icon: "Zap", proficiency: 80, order: 14 },
  // Tools & DevOps
  { id: "sk-15", name: "Git & GitHub", category: "Tools", icon: "GitBranch", proficiency: 95, order: 15 },
  { id: "sk-16", name: "Docker", category: "Tools", icon: "Box", proficiency: 82, order: 16 },
  { id: "sk-17", name: "Postman & API Testing", category: "Tools", icon: "CheckCircle2", proficiency: 92, order: 17 },
  { id: "sk-18", name: "Linux & Bash", category: "Tools", icon: "Terminal", proficiency: 85, order: 18 },
];

export const experiencesData: ExperienceData[] = [
  {
    id: "exp-1",
    company: "Apex Cloud Solutions",
    role: "Full-Stack Software Engineer",
    location: "Remote (Global)",
    startDate: "2024-01-01",
    endDate: null,
    isCurrent: true,
    description:
      "Built and maintained enterprise cloud dashboards and core customer-facing features in a fast-paced remote team.",
    bulletPoints: [
      "Designed and delivered performant REST APIs with Express, TypeScript, and Prisma, cutting server latency by 35%.",
      "Migrated critical client portals to Next.js App Router and Server Components, improving initial page render times by 1.8s.",
      "Implemented secure role-based access control (RBAC) and JWT authentication with automatic refresh token rotation.",
      "Collaborated asynchronously across EU and US timezones with thorough pull requests, automated test suites, and RFC proposals.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "NextGen Digital Labs",
    role: "Frontend Engineer",
    location: "Dhaka (Hybrid)",
    startDate: "2022-06-01",
    endDate: "2023-12-31",
    isCurrent: false,
    description:
      "Developed responsive web interfaces, admin panels, and reusable component systems for fintech and retail clients.",
    bulletPoints: [
      "Built responsive client portals using React, TypeScript, and Tailwind CSS serving 40,000+ active users.",
      "Standardized an accessible UI design system with Radix and Tailwind, accelerating feature delivery cycles across 3 client projects.",
      "Integrated Stripe payment checkouts and verified webhooks with idempotent database updates.",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Jest"],
  },
];

export const educationsData: EducationData[] = [
  {
    id: "edu-1",
    institution: "American International University-Bangladesh (AIUB)",
    degree: "Bachelor of Science in Computer Science & Engineering",
    fieldOfStudy: "Computer Science & Engineering",
    startDate: "2020-01-15",
    endDate: "2024-02-28",
    grade: "CGPA 3.82 / 4.00 (Honors)",
    description:
      "Core coursework: Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Distributed Systems, Computer Networks, and Operating Systems.",
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "proj-1",
    title: "DevJudge – Automated Code Assessment Sandbox",
    slug: "devjudge-automated-code-assessment",
    thumbnail: "/project1.png",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=750&q=85",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=1200&h=675&q=80",
    ],
    shortOverview:
      "A technical assessment platform featuring isolated Docker container execution, custom hidden test runners, and real-time execution analytics for candidate code evaluation.",
    fullDescription:
      "DevJudge is a coding evaluation platform designed to automate technical assessments and homework challenges. Interviewers can configure coding problems with hidden test suites, invite candidates, and receive real-time execution analytics including runtime, memory usage, and edge case coverage. The platform ensures safe runtime isolation to prevent malicious code exploits.",
    liveUrl: "https://devjudgelivecoding.vercel.app",
    clientRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-7",
    serverRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-6",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker"],
    architecture:
      "Frontend built with Next.js App Router and Shadcn UI. Backend runs Express TypeScript with Prisma ORM on PostgreSQL. Untrusted candidate code runs inside ephemeral Docker containers with strict CPU, memory, and networking limits.",
    challengesFaced:
      "Preventing infinite loops and system resource exhaustion from untrusted user submissions. Engineered an isolated worker pipeline using Docker containers with resource cgroups (512MB RAM cap, 2.0s execution timeout, non-root user privileges, and blocked network egress).",
    futureImprovements:
      "1. Add collaborative live interview editor with WebSockets. 2. Implement static AST complexity analysis. 3. Expand language runners to Rust and Go.",
    featured: true,
    order: 1,
  },
  {
    id: "proj-2",
    title: "NexusFlow – Real-Time Team Sprint Board",
    slug: "nexusflow-team-collaboration-kanban",
    thumbnail: "/project2.png",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=750&q=85",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?fit=crop&w=1200&h=675&q=80",
    ],
    shortOverview:
      "A real-time Kanban project management tool featuring optimistic UI drag-and-drop, WebSocket live presence, and automated milestone tracking for distributed teams.",
    fullDescription:
      "NexusFlow helps engineering teams organize sprints, track deliverables, and manage task backlogs seamlessly. It features fluid drag-and-drop Kanban boards, markdown task descriptions, task assignment badges, and automated activity logs.",
    liveUrl: "https://gearup-six-kohl.vercel.app",
    clientRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-5",
    serverRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-4",
    techStack: ["Next.js", "React", "TypeScript", "Express.js", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    architecture:
      "Modular REST and WebSocket architecture. The frontend uses optimistic UI updates via TanStack Query to ensure instant drag-and-drop feedback without waiting for server round-trips, with server-side reconciliation via WebSocket broadcast.",
    challengesFaced:
      "Handling concurrent drag-and-drop reordering when multiple team members move cards simultaneously. Implemented the LexoRank algorithm for fractional string indexing, allowing arbitrary card insertions without re-indexing all subsequent items in PostgreSQL.",
    futureImprovements:
      "1. Add offline-first caching with IndexedDB background sync. 2. Build automated GitHub pull request integration to automatically link PRs to board cards.",
    featured: true,
    order: 2,
  },
  {
    id: "proj-3",
    title: "PulseCommerce – Scalable Headless Storefront",
    slug: "pulsecommerce-headless-ecommerce",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=85",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=85",
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?fit=crop&w=1200&h=675&q=80",
    ],
    shortOverview:
      "A modern storefront featuring fast product search, persistent shopping carts, Stripe payment integration, and transactional row-level inventory reservations.",
    fullDescription:
      "PulseCommerce is a full-stack storefront and administrative portal designed for high-concurrency retail transactions. It handles product catalog filtering, cart persistence, promo codes, idempotent Stripe payment webhooks, and real-time inventory management.",
    liveUrl: "https://pulsecommerce-demo.vercel.app",
    clientRepoUrl: "https://github.com/yunus-dev/pulsecommerce-client",
    serverRepoUrl: "https://github.com/yunus-dev/pulsecommerce-server",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    architecture:
      "Headless decoupled design. Fast edge caching on public product queries combined with transactional PostgreSQL consistency for checkout workflows. Stripe webhooks verify signatures and trigger order fulfillment asynchronously.",
    challengesFaced:
      "Preventing race conditions where multiple customers attempt to purchase the last available stock simultaneously. Implemented PostgreSQL row-level locks (`SELECT FOR UPDATE`) inside Prisma interactive transactions to ensure zero inventory overselling under high concurrency.",
    futureImprovements:
      "1. Integrate full-text faceted search with Meilisearch. 2. Add localized multi-currency conversion with hourly cached exchange rates. 3. Add customer review ratings with verified buyer badges.",
    featured: true,
    order: 3,
  },
];

export const blogsData: BlogData[] = [
  {
    id: "blog-1",
    title: "Mastering Database Transactions and Concurrency with Prisma & PostgreSQL",
    slug: "mastering-database-transactions-prisma-postgresql",
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?fit=crop&w=1200&h=600&q=80",
    excerpt:
      "A deep dive into preventing race conditions, managing optimistic vs pessimistic locks, and executing atomic workflows in production web backends.",
    content: `<h2>The Hidden Pitfall: Concurrency in Modern Web Apps</h2>
<p>In high-throughput web applications, race conditions are among the most subtle and damaging bugs. When multiple concurrent HTTP requests attempt to read and write to the same database row simultaneously, naive implementations lead to double-spending, inventory overselling, or corrupted state.</p>
<h3>Pessimistic vs. Optimistic Locking</h3>
<p>When consistency is non-negotiable—such as handling wallet balances or checkout inventory—pessimistic locking via <code>SELECT FOR UPDATE</code> ensures that only one transaction can acquire a lock on the target row at a time.</p>
<pre><code>// Example: Atomic inventory reservation with Prisma
await prisma.$transaction(async (tx) => {
  const item = await tx.$queryRaw\`SELECT * FROM "Product" WHERE id = \${productId} FOR UPDATE\`;
  if (item.stock < quantity) {
    throw new Error("Insufficient inventory");
  }
  await tx.product.update({
    where: { id: productId },
    data: { stock: { decrement: quantity } },
  });
});</code></pre>
<h3>Key Takeaways for Remote Production Teams</h3>
<p>By leveraging PostgreSQL isolation levels and transactional blocks in Prisma, you ensure that your backend maintains 100% data integrity even during sudden traffic spikes.</p>`,
    tags: ["PostgreSQL", "Prisma", "Backend", "System Design"],
    published: true,
    readTime: "6 min read",
    createdAt: "2024-11-10T12:00:00.000Z",
  },
  {
    id: "blog-2",
    title: "Why Async-First Communication is the Superpower of Top Remote Software Engineers",
    slug: "why-async-first-communication-is-the-superpower-of-remote-engineers",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1200&h=600&q=80",
    excerpt:
      "How writing thoughtful pull requests, self-documenting RFCs, and clear architectural summaries elevates engineering impact across international timezones.",
    content: `<h2>The Shift to Asynchronous Engineering</h2>
<p>Working effectively across international timezones—whether collaborating between Asia, Europe, and the Americas—requires fundamentally different habits than sitting in an office together. Top remote software engineers treat clear written communication as a core engineering skill, not an afterthought.</p>
<h3>1. Self-Contained Pull Requests</h3>
<p>Every pull request is an opportunity to save your teammates 30 minutes of guesswork. Include a concise summary of the problem, a walkthrough of your implementation, screenshots or recordings of UI states, and explicit testing instructions.</p>
<h3>2. Proactive Documentation over Sync Meetings</h3>
<p>Before writing code for complex features, drafting a one-page RFC (Request for Comments) allows team members across different timezones to review architecture, propose alternative approaches, and catch edge cases while you sleep.</p>
<h3>Conclusion</h3>
<p>When you master async-first habits, you enable continuous engineering momentum, foster psychological safety, and deliver results with extraordinary autonomy.</p>`,
    tags: ["Remote Work", "Career Growth", "Engineering Culture"],
    published: true,
    readTime: "5 min read",
    createdAt: "2024-11-20T14:30:00.000Z",
  },
];

export const testimonialsData: TestimonialData[] = [
  {
    id: "test-1",
    authorName: "David Sterling",
    authorRole: "Principal Software Architect",
    company: "Apex Cloud Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200&q=80",
    content:
      "Yunus is one of the most proactive and dependable full-stack engineers I've worked with. His ability to dissect complex distributed requirements, write clean type-safe code, and communicate asynchronously made him an indispensable member of our team.",
    rating: 5,
  },
  {
    id: "test-2",
    authorName: "Sarah Jenkins",
    authorRole: "Senior Product Manager",
    company: "NextGen Digital",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200&q=80",
    content:
      "Working with Yunus on our client portals was a breath of fresh air. He doesn't just build tickets—he thinks deeply about user experience, catches edge cases before they reach QA, and always ships on time.",
    rating: 5,
  },
  {
    id: "test-3",
    authorName: "Alex Rivera",
    authorRole: "Open Source Maintainer",
    company: "TypeScript Dev Community",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=200&h=200&q=80",
    content:
      "Yunus contributed several critical performance optimizations and bug fixes to our repositories. His PRs are exceptionally well-documented with thorough automated tests. Any remote engineering team would be fortunate to have him.",
    rating: 5,
  },
];
