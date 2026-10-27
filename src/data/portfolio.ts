import type { ProfileData, SkillData, ProjectData, ExperienceData, EducationData, BlogData } from "@/lib/api";

export const profileData: ProfileData = {
  id: "profile-1",
  fullName: "Muhammad Yunus",
  designation: "Full-Stack Software Engineer • Next.js 16 • TypeScript • Node.js • Cloud",
  headline:
    "Full-Stack Software Engineer with 5+ years of software development experience engineering resilient backend services, distributed APIs, and transactional databases with Node.js, Express, NestJS, and PostgreSQL, backed by deep frontend mastery in Next.js 16, React 19, and TypeScript.",
  remoteStatus: "Open to Remote & Relocation",
  timezone: "Cairo, Egypt (EET / UTC+2) • Full EU & US East Coast Overlap",
  bio: "Full-Stack Software Engineer with 6+ years of software development experience (continuous software engineering and tech stack study from January 2020 to present across intensive platforms, Udemy, Creative IT, Pondit, and Programming Hero). Maintained an unbroken dedication to mastering modern web architecture, distributed APIs, transactional databases, and cloud systems concurrently alongside internships and US client contract work. Proven track record architecting modular backend services, scalable RESTful APIs, and building production platforms with Next.js 16 (App Router), React 19, TypeScript, NestJS, and PostgreSQL. Skilled in transactional database modeling (TypeORM, Prisma), Redis caching, and Docker containerization on AWS.",
  journey:
    "My programming journey began in January 2020. From January 2020 to present, I have continuously studied and mastered full-stack technologies, distributed APIs, transactional databases, and cloud architecture across platforms like Udemy, Creative IT, Pondit, and Programming Hero alongside internships and US client contract work.",
  workEnjoyment:
    "I enjoy architecting modular backend services, designing transactional database schemas with row-level locks (SELECT FOR UPDATE), and building high-performance, accessible user interfaces with Next.js 16 App Router and TypeScript.",
  hobbies: "Outside of programming, I enjoy competitive chess tactics, road cycling, and studying English literature.",
  avatarUrl: "/muhammad.png",
  resumeUrl: "/Muhammad_Yunus_Resume.pdf",
  calendlyUrl: "https://calendly.com/myunus-info/30min",
  email: "myunus.info@gmail.com",
  phone: "+20 1025-689042",
  whatsapp: "+20 1025-689042",
  address: "Cairo, Egypt (Open to Remote & Relocation)",
  socialGithub: "https://github.com/myunus-info",
  socialLinkedin: "https://linkedin.com/in/yunus-profile",
  socialTwitter: "https://twitter.com",
  socialFacebook: "https://facebook.com",
};

export const skillsData: SkillData[] = [
  // Frontend
  { id: "sk-1", name: "Next.js 16 (App Router)", category: "Frontend", icon: "Layers", proficiency: 95, order: 1 },
  { id: "sk-2", name: "React 19", category: "Frontend", icon: "Code", proficiency: 94, order: 2 },
  { id: "sk-3", name: "TypeScript", category: "Frontend", icon: "FileCode", proficiency: 93, order: 3 },
  { id: "sk-4", name: "Tailwind CSS v4", category: "Frontend", icon: "Palette", proficiency: 95, order: 4 },
  { id: "sk-5", name: "Shadcn UI & Radix", category: "Frontend", icon: "Component", proficiency: 92, order: 5 },
  { id: "sk-6", name: "TanStack Query v5", category: "Frontend", icon: "Database", proficiency: 90, order: 6 },
  { id: "sk-7", name: "Zustand & Redux Toolkit", category: "Frontend", icon: "Workflow", proficiency: 88, order: 7 },
  // Backend & APIs
  { id: "sk-8", name: "Node.js", category: "Backend", icon: "Server", proficiency: 94, order: 8 },
  { id: "sk-9", name: "Express.js", category: "Backend", icon: "Cpu", proficiency: 93, order: 9 },
  { id: "sk-10", name: "NestJS", category: "Backend", icon: "Layers", proficiency: 90, order: 10 },
  { id: "sk-11", name: "RESTful API Architecture", category: "Backend", icon: "Network", proficiency: 95, order: 11 },
  { id: "sk-12", name: "JWT & OAuth 2.0 (RBAC)", category: "Backend", icon: "ShieldCheck", proficiency: 92, order: 12 },
  { id: "sk-13", name: "WebSockets (Socket.io)", category: "Backend", icon: "Zap", proficiency: 85, order: 13 },
  // Databases & Cloud
  { id: "sk-14", name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 92, order: 14 },
  { id: "sk-15", name: "Prisma ORM & TypeORM", category: "Database", icon: "Workflow", proficiency: 93, order: 15 },
  { id: "sk-16", name: "Redis In-Memory Caching", category: "Database", icon: "Zap", proficiency: 88, order: 16 },
  { id: "sk-17", name: "MySQL & MongoDB", category: "Database", icon: "FolderTree", proficiency: 87, order: 17 },
  // DevOps & Tools
  { id: "sk-18", name: "AWS (EC2, S3, Lambda)", category: "Tools", icon: "Cloud", proficiency: 86, order: 18 },
  { id: "sk-19", name: "Docker Containerization", category: "Tools", icon: "Box", proficiency: 88, order: 19 },
  { id: "sk-20", name: "Git & GitHub CI/CD", category: "Tools", icon: "GitBranch", proficiency: 95, order: 20 },
  { id: "sk-21", name: "Linux Bash & Postman", category: "Tools", icon: "Terminal", proficiency: 90, order: 21 },
];

export const experiencesData: ExperienceData[] = [
  {
    id: "exp-1",
    company: "Independent Project Engineering",
    role: "Full-Stack Software Engineer",
    location: "Remote",
    startDate: "2023-01-01",
    endDate: null,
    isCurrent: true,
    description:
      "Undertook dedicated advanced engineering specialization; architected and shipped production platforms (DevJudge, GearUp) utilizing Next.js 16 App Router, React 19, NestJS, and PostgreSQL.",
    bulletPoints: [
      "Architected and shipped production platforms (DevJudge, GearUp) utilizing Next.js 16 App Router, React 19, NestJS, and PostgreSQL.",
      "Engineered complex backend integrations including database transactional row-locking (SELECT FOR UPDATE), in-browser Web Worker sandboxes, and full-stack type safety with Prisma and TypeORM.",
      "Enforced production-grade engineering practices: strict TypeScript typing, responsive Tailwind CSS v4 design, and zero-downtime Vercel deployments.",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "TypeORM",
      "Docker",
      "Tailwind CSS v4",
    ],
  },
  {
    id: "exp-2",
    company: "US Client Contract",
    role: "Full-Stack Software Engineer (Contract)",
    location: "New York, NY (Remote)",
    startDate: "2022-07-01",
    endDate: "2023-01-31",
    isCurrent: false,
    description:
      "Full-Stack Software Engineer on an enterprise courier and parcel logistics management platform prototype for a US client.",
    bulletPoints: [
      "Architected backend RESTful services and dispatch workflows for an enterprise-grade parcel delivery and courier logistics management prototype.",
      "Engineered normalized PostgreSQL and MySQL schemas with compound indexes, achieving sub-100ms response benchmarks during staging load tests.",
      "Integrated Redis in-memory caching for merchant reporting dashboards and package status lookups to prevent database bottlenecks under concurrent access.",
      "Designed secure authentication workflows utilizing JWT HTTP-only cookies and Role-Based Access Control (RBAC) across dispatchers, couriers, and merchants.",
      "Containerized microservices using Docker and configured AWS staging pipelines (EC2, S3), adhering to modular clean architecture principles.",
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS (EC2, S3)", "JWT", "RBAC"],
  },
  {
    id: "exp-3",
    company: "Aurora IT",
    role: "Software Engineer (Intern)",
    location: "Dhaka, Bangladesh",
    startDate: "2022-05-01",
    endDate: "2022-06-30",
    isCurrent: false,
    description:
      "Developed internal dashboard modules and RESTful endpoints using Node.js, Express, and JavaScript within an Agile sprint team.",
    bulletPoints: [
      "Developed internal dashboard modules and RESTful endpoints using Node.js, Express, and JavaScript within an Agile sprint team.",
      "Authored automated integration and unit test suites, expanding test coverage across core API routes by 25%.",
      "Collaborated in daily Agile sprint standups, Git branch code reviews, and API documentation updates.",
    ],
    techStack: ["Node.js", "Express.js", "JavaScript", "RESTful APIs", "Jest", "Git"],
  },
];

export const educationsData: EducationData[] = [
  {
    id: "edu-1",
    institution: "Uttara University",
    degree: "Bachelor of Arts in English Language & Literature (1 Year Completed)",
    fieldOfStudy: "English Language & Literature",
    startDate: "2020-01-01",
    endDate: "2020-01-01",
    grade: "CGPA 3.92 / 4.00 (High Honors)",
    description:
      "Completed 1 year of foundational university study in English Language and Literature. Coursework focus: Technical Writing, Critical Rhetoric, and Analytical Problem Solving.",
  },
  {
    id: "edu-2",
    institution: "Self-Directed CS Tracks & Platforms (Udemy, Programming Hero, Pondit, Creative IT)",
    degree: "Full-Stack Software Engineering & Computer Science",
    fieldOfStudy: "Full-Stack Web Architecture, Distributed Systems & Cloud",
    startDate: "2020-01-01",
    endDate: null,
    grade: "6+ Years Continuous Mastery",
    description:
      "Studied all modern software engineering technologies continuously from January 2020 to present across intensive platforms, Udemy, Creative IT, Pondit, and Programming Hero. In-depth mastery in Next.js 16, React 19, TypeScript, Node.js, Express, NestJS, PostgreSQL transactions, TypeORM, Prisma, Redis caching, Docker containerization, and AWS cloud deployment.",
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "proj-1",
    title: "DevJudge – Automated Code Assessment & Live Coding Arena",
    slug: "devjudge-automated-code-assessment",
    thumbnail: "/project1.png",
    images: [
      "/project1.png",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=750&q=85",
    ],
    shortOverview:
      "A technical assessment platform featuring Monaco Editor, Web Worker sandboxed code execution, custom hidden test runners, and real-time execution analytics for candidate evaluation.",
    fullDescription:
      "DevJudge is an enterprise-grade technical hiring and assessment platform built with Next.js 16 (App Router), React 19, and TypeScript. It empowers recruiters and engineering teams to author coding challenges, assemble timed multi-question assessments, evaluate candidate code through an in-browser sandboxed judge, and analyze hiring performance through data-rich scorecards and platform analytics.",
    liveUrl: "https://devjudgelivecoding.vercel.app",
    clientRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-7",
    serverRepoUrl: "https://github.com/myunus-info/phero-batch7-assignment-6",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Monaco Editor",
      "Tailwind CSS v4",
      "TanStack Query v5",
      "Zod",
      "Express 5",
      "Prisma 7",
      "PostgreSQL 16",
      "Stripe API",
    ],
    architecture:
      "Frontend built with Next.js 16 App Router, React 19, and Monaco Editor. Client-side execution sandboxing runs in a dedicated Web Worker (clientCodeRunner.ts) with execution timeout guards. The backend runs Express 5 with Prisma ORM 7 on PostgreSQL 16, providing timed assessment workflows, automated scorecards, and Stripe recruiter credit billing.",
    challengesFaced:
      "Preventing infinite loops, memory leaks, and browser UI freezes caused by untrusted candidate code execution. Solved by architecting an isolated Web Worker execution sandbox with message-passing communication, strict 2.0s execution timeout guards, and custom console interceptors to capture runtime stdout and execution time metrics safely.",
    futureImprovements:
      "1. Add real-time collaborative pair-programming with WebSockets. 2. Implement static AST complexity analysis for candidate code. 3. Expand programming language support to Python, Rust, and Go.",
    featured: true,
    order: 1,
  },
  {
    id: "proj-2",
    title: "GearUp – Outdoor Equipment Rental Marketplace",
    slug: "gearup-outdoor-gear-rental",
    thumbnail: "/project2.png",
    images: [
      "/project2.png",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=750&q=85",
    ],
    shortOverview:
      "A two-sided gear rental marketplace connecting outdoor enthusiasts with local providers, featuring 3 role-specific dashboards, faceted catalog search, and Stripe checkouts.",
    fullDescription:
      "GearUp is a full-stack outdoor sports and gear rental marketplace where customers can browse and rent camping, climbing, biking, and water sports equipment from verified providers. It features three role-gated dashboards (Customer, Provider, Admin), faceted catalog filtering, reservation scheduling, and payment gateway integration.",
    liveUrl: "https://gearup-six-kohl.vercel.app",
    clientRepoUrl: "https://github.com/myunus-info/gearup-frontend",
    serverRepoUrl: "https://github.com/myunus-info/gearup-server",
    techStack: [
      "Next.js 16",
      "React 19",
      "NestJS",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Stripe API",
      "Tailwind CSS v4",
      "Shadcn UI",
      "TanStack Query v5",
    ],
    architecture:
      "Decoupled architecture. Frontend built with Next.js 16 App Router and Server Actions for authentication. Backend runs NestJS with modular dependency injection and TypeORM on PostgreSQL. Includes Stripe payment processing with asynchronous webhook signature verification.",
    challengesFaced:
      "Preventing concurrency race conditions where multiple customers attempt to reserve the same piece of equipment for overlapping rental dates. Solved by implementing database transactional row-locking in PostgreSQL via TypeORM with strict reservation date-range overlap validation.",
    futureImprovements:
      "1. Add real-time in-app messaging between customers and gear providers. 2. Integrate automated GPS equipment tracking. 3. Implement damage insurance deposit holds via Stripe authorization holds.",
    featured: true,
    order: 2,
  },
  {
    id: "proj-3",
    title: "PulseCommerce – Scalable Headless Storefront",
    slug: "pulsecommerce-headless-ecommerce",
    thumbnail: "/project-3.png",
    images: ["/project-3.png", "https://images.unsplash.com/photo-1556742049-0a67c5574f73?fit=crop&w=1200&h=675&q=80"],
    shortOverview:
      "A modern headless e-commerce storefront featuring instant faceted search, persistent cart state, Stripe checkout, and transactional inventory reservations.",
    fullDescription:
      "PulseCommerce is a full-stack storefront and administrative portal designed for high-concurrency retail transactions. It handles product catalog filtering, cart persistence, promo codes, idempotent Stripe payment webhooks, and real-time inventory management.",
    liveUrl: "https://devjudgelivecoding.vercel.app",
    clientRepoUrl: "https://github.com/myunus-info/gearup-frontend",
    serverRepoUrl: "https://github.com/myunus-info/gearup-server",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Prisma 7",
      "Stripe API",
      "Tailwind CSS v4",
    ],
    architecture:
      "Headless decoupled design. Fast edge caching on public product queries combined with transactional PostgreSQL consistency for checkout workflows. Stripe webhooks verify signatures and update order fulfillments asynchronously.",
    challengesFaced:
      "Preventing inventory overselling when thousands of shoppers attempt to checkout the last available SKU simultaneously. Implemented pessimistic row-level locking via PostgreSQL SELECT FOR UPDATE within Prisma interactive transactions to ensure strict transactional consistency.",
    futureImprovements:
      "1. Add Redis caching layer for catalog search filters. 2. Implement automated abandoned cart recovery email triggers. 3. Integrate multi-currency international pricing with geolocation.",
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
