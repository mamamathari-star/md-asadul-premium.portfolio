export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications engineered with precision — from robust back-end architecture to pixel-perfect front-end execution. React, Next.js, Node.js, databases.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Creative UI/UX Design',
    description:
      'Digital experiences that command attention. Every pixel placed with intention — dark luxury aesthetics, motion design, and interaction systems built to impress.',
    tags: ['Figma', 'Framer', 'Motion Design', 'Design Systems'],
  },
  {
    number: '03',
    title: 'Performance Engineering',
    description:
      'Obsessing over Core Web Vitals, server-side optimization, and architecture decisions that keep your product blazing fast at any scale.',
    tags: ['Web Vitals', 'CDN', 'Caching', 'Edge Computing'],
  },
  {
    number: '04',
    title: 'API & Integration',
    description:
      'Seamless third-party integrations, custom REST & GraphQL APIs, payment systems, and automation pipelines that power your business logic.',
    tags: ['REST', 'GraphQL', 'Stripe', 'Webhooks'],
  },
  {
    number: '05',
    title: 'Tech Consulting',
    description:
      'Strategic guidance on tech stack selection, architecture planning, code reviews, and product roadmaps — from MVP to enterprise scale.',
    tags: ['Strategy', 'Architecture', 'Code Review', 'Roadmap'],
  },
]

export const PROJECTS = [
  {
    id: '01',
    title: 'Nexus Commerce',
    category: 'Full-Stack / E-Commerce',
    description:
      'A high-performance e-commerce platform with real-time inventory, AI-powered recommendations, and a revenue dashboard that moves at the speed of business.',
    year: '2024',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80',
    color: '#C9A84C',
  },
  {
    id: '02',
    title: 'Aura Studio',
    category: 'Creative / SaaS',
    description:
      'A design tool SaaS platform with collaborative workspaces, asset management, and AI-assisted generation tools for modern creative teams.',
    year: '2024',
    tags: ['React', 'WebSockets', 'OpenAI API', 'AWS'],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&q=80',
    color: '#8B5CF6',
  },
  {
    id: '03',
    title: 'Meridian Finance',
    category: 'FinTech / Dashboard',
    description:
      'A sophisticated fintech dashboard with real-time market data, portfolio analytics, and predictive models rendered in immersive data visualizations.',
    year: '2023',
    tags: ['TypeScript', 'D3.js', 'Node.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    color: '#06B6D4',
  },
  {
    id: '04',
    title: 'Luminary Agency',
    category: 'Creative / Branding',
    description:
      'A cinematic branding website for a boutique creative agency — scroll-driven animations, WebGL backgrounds, and editorial-grade typography.',
    year: '2023',
    tags: ['Next.js', 'GSAP', 'Three.js', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    color: '#F59E0B',
  },
  {
    id: '05',
    title: 'Pulse Health',
    category: 'HealthTech / Mobile',
    description:
      'A health monitoring platform with wearable integrations, physician dashboards, and a patient-facing app delivering insights with clinical precision.',
    year: '2023',
    tags: ['React Native', 'Node.js', 'MongoDB', 'HL7'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    color: '#10B981',
  },
  {
    id: '06',
    title: 'Obsidian CMS',
    category: 'Open Source / Tooling',
    description:
      'A headless CMS built for developers and editors who demand speed — plugin architecture, live preview, and a content modeling system that scales.',
    year: '2022',
    tags: ['TypeScript', 'GraphQL', 'React', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=1200&q=80',
    color: '#EF4444',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Asadul delivered an experience, not just a website. The attention to animation detail and performance optimization is on another level — our conversion rate jumped 40% within the first month.',
    author: 'Aria Chen',
    role: 'CEO, Nexus Commerce',
    avatar: 'AC',
  },
  {
    quote:
      'Working with Asadul felt like having a world-class agency at a fraction of the cost. The quality of code, the design sensibility, and the communication were all exceptional throughout.',
    author: 'James Whitfield',
    role: 'Founder, Aura Studio',
    avatar: 'JW',
  },
  {
    quote:
      "The Meridian dashboard he built is genuinely one of the most impressive pieces of software I've encountered. Dense financial data made beautiful and intuitive. Remarkable work.",
    author: 'Priya Kapoor',
    role: 'CTO, Meridian Finance',
    avatar: 'PK',
  },
  {
    quote:
      'From architecture decisions to the final polished UI, Asadul brought a level of craft that transformed our digital presence. He treats every project like it has his name on it.',
    author: 'Luca Romano',
    role: 'Creative Director, Luminary Agency',
    avatar: 'LR',
  },
  {
    quote:
      'Brilliant technical ability combined with a genuine understanding of product. Asadul built our entire patient platform in record time without sacrificing an ounce of quality.',
    author: 'Dr. Sarah Okafor',
    role: 'Co-founder, Pulse Health',
    avatar: 'SO',
  },
]

export const FAQS = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary by scope. A focused landing page or branding site typically takes 2–4 weeks. A full-stack product or SaaS application ranges from 6–16 weeks. I provide detailed timelines after our initial discovery call — and I always deliver on schedule.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Absolutely. The majority of my clients are based in Europe, North America, and Southeast Asia. I work asynchronously across time zones with clear communication cadences and milestone-based progress updates.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'I offer project-based flat fees for defined scopes, and retainer arrangements for ongoing work. Pricing reflects the complexity, timeline, and strategic value of the project. Rates start from $3,000 for focused engagements.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. Every project includes a 30-day post-launch support window at no additional cost. Beyond that, I offer monthly maintenance and enhancement retainers for clients who want continued collaboration.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'My core stack is React / Next.js, TypeScript, Node.js, PostgreSQL, and Tailwind CSS for the front-end. For back-end and infrastructure, I work extensively with AWS, Vercel, Docker, and various cloud-native services.',
  },
  {
    question: 'How do we start working together?',
    answer:
      "Send me a message via the contact form below with a brief description of your project, goals, and timeline. I respond within 24 hours to all enquiries, and we'll schedule a discovery call to align on scope and approach.",
  },
]
