export const TECH_STACK = [
    { name: 'React / Next.js', icon: 'fa-brands fa-react' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
    { name: 'Supabase', icon: 'fa-solid fa-database' },
    { name: 'TypeScript', icon: 'fa-brands fa-js' },
    { name: 'Stripe', icon: 'fa-solid fa-credit-card' },
    { name: 'Framer Motion', icon: 'fa-solid fa-play' },
    { name: 'Vercel', icon: 'fa-solid fa-triangle-exclamation' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'Express', icon: 'fa-solid fa-server' },
    { name: 'OAuth / Auth.js', icon: 'fa-solid fa-lock' },
];

export const PROJECTS = [
    {
        id: 'banaCoin',
        tag: 'Web3 · Meme Token',
        title: 'BANA — The Premium Meme Asset',
        shortDesc: 'High-polish Solana meme coin site that parodies blue-chip crypto branding.',
        desc: 'High-polish landing page for $BANA, a community-driven meme coin. Designed with a premium aesthetic that parodies blue-chip crypto branding: bold typography, tight copy, and a "yellow revolution" community narrative.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: 'assets/images/bana-coin.png',
        link: 'https://bana-coin.vercel.app/',
        featured: true
    },
    {
        id: 'aether',
        tag: 'Fintech · Dashboard',
        title: 'Aether — Financial Intelligence Platform',
        shortDesc: 'Complete redesign of a wealth management dashboard serving 50K+ DAU, with real‑time data and an Express‑based API.',
        desc: 'Complete redesign of a wealth management dashboard serving 50K+ DAU, implemented with React, Express, and real-time data integration. The new interface reduced cognitive load through progressive disclosure and improved data visualization clarity.',
        tech: ['React', 'TypeScript', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
        image: 'assets/images/aether.png',
        link: '#',
        featured: false
    },
    {
        id: 'philax',
        tag: 'Web3 · NFT · Collectibles',
        title: 'Philax — Phygital Collectibles Protocol',
        shortDesc: 'Platform landing page bridging rare physical collectibles with on-chain verification.',
        desc: 'Landing page for a phygital collectibles platform that bridges rare physical assets with digital verification. Positioned around the intersection of traditional collecting culture and blockchain permanence.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: 'assets/images/philax.png',
        link: 'https://philax.vercel.app/',
        featured: false
    },
    {
        id: 'randomGuy',
        tag: 'Web3 · Meme Token',
        title: 'Random Guy — $RandomGuy Token',
        shortDesc: 'Deadpan Solana meme token landing page with a minimal UI and absurdist brand identity.',
        desc: 'Tongue-in-cheek Solana meme token landing page built purely out of creative curiosity. Features a clean, minimal UI with a deadpan brand identity that leans into the absurdist premise: no promises, no roadmap, just vibes.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: './assets/images/random-guy.png',
        link: 'https://random-guy-nu.vercel.app/',
        featured: true
    },
    {
        id: 'cowgorithmV2',
        tag: 'Web3 · Meme Token',
        title: 'Cowgorithm V2 — Algorithmic Bovine Finance',
        shortDesc: 'Redesigned meme coin landing page with a live mock farm dashboard.',
        desc: 'Redesigned landing page for $COWGORITHM, a satirical DeFi meme coin with a fictional AI farming narrative. V2 introduced a live mock dashboard with animated farm metrics, a cleaner layout, and a refined dark aesthetic over the original.',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
        image: 'assets/images/cowgorithm-v2.png',
        link: 'https://cowgorithm-v2.vercel.app/',
        featured: false
    },
    {
        id: 'cowgorithmV1',
        tag: 'Web3 · Meme Token',
        title: 'Cowgorithm V1 — AI-Powered Bovine Finance',
        shortDesc: 'Original launch site for a satirical DeFi meme coin with scrolling tickers.',
        desc: 'Original launch site for $COWGORITHM: a meme coin built around a fictional on-chain bovine intelligence protocol. Features a scrolling ticker, animated farm OS dashboard, tokenomics breakdown, and a phased roadmap.',
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
        image: 'assets/images/cowgorithm-v1.png',
        link: 'https://cowgorithm-v1.vercel.app/',
        featured: false
    },
    {
        id: 'cricketSol',
        tag: 'Web3 · Sports · Predictions',
        title: 'CricketOnSol — Memes & Predictions',
        shortDesc: 'Solana-powered cricket prediction platform with revenue-based rewards.',
        desc: 'Solana-based platform combining cricket fandom with on-chain prediction markets and meme culture. Partnered with jump_trade, it features a highly responsive prediction interface.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: 'assets/images/cricket-sol.png',
        link: 'https://cricket-sol.vercel.app/',
        featured: false
    },
    {
        id: 'cannibalCoin',
        tag: 'Web3 · Meme Token',
        title: 'Cannibal Coin — $CANNI',
        shortDesc: 'Dark-humour deflationary meme token where "the supply is food."',
        desc: 'Dark-humour meme token landing page. Bold amber branding and sharp copywriting carry the absurdist concept with confident design execution and smooth animations.',
        tech: ['React', 'Tailwind CSS', 'GSAP', 'Vercel'],
        image: 'assets/images/cannibal.png',
        link: 'https://cannibal-coin.vercel.app/',
        featured: false
    },
    {
        id: 'cortexFrontend',
        tag: 'AI · SaaS · Marketing',
        title: 'CorTex AI — Custom Engineered AI Solutions',
        shortDesc: 'Marketing site for a custom AI solutions agency, balancing technical credibility.',
        desc: 'Marketing site for a custom AI solutions agency. Designed to convey technical credibility and enterprise readiness: clean layout, clear service positioning, and a tone that bridges AI capability with business outcomes.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        image: 'assets/images/cortex-ai.png',
        link: 'https://cortex-frontend-mu.vercel.app/',
        featured: false
    },
    {
        id: 'cortexDashboard',
        tag: 'AI · SaaS · Dashboard',
        title: 'CorTex AI — Internal Dashboard',
        shortDesc: 'Companion analytics dashboard for the CorTex platform.',
        desc: 'Companion analytics dashboard to the CorTex AI platform, providing clients with a centralized interface to monitor deployed AI solutions, usage metrics, and performance insights in real time.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
        image: 'assets/images/cortex-dash.png',
        link: 'https://cortex-dashboard-eta.vercel.app/',
        featured: false
    },
];

export const EXPERIENCE = [
    {
        date: '2025 — 2026',
        role: 'Senior Full-Stack & AI Engineer',
        company: 'Freelance · Web3 & AI Ecosystems',
        desc: 'Expanded into AI-powered dashboards, Web3 ecosystems, and scalable frontend systems with projects like Cortex AI, memecoin launch platforms, and analytics interfaces.'
    },
    {
        date: '2024 — 2025',
        role: 'Full-Stack Developer',
        company: 'Freelance · SaaS & Booking Systems',
        desc: 'Specialized in high-conversion booking systems, responsive user flows, and polished client-facing platforms for service-based businesses and startups.'
    },
    {
        date: '2023 — 2024',
        role: 'Independent Web Developer',
        company: 'Freelance · SaaS & Full-Stack Solutions',
        desc: 'Built freelance foundations through full-stack JavaScript development, SaaS dashboards, Stripe integrations, OAuth systems, and modern React/Next.js applications for clients across multiple industries.'
    },
];

export const SERVICES = [
    { id: 'frontend-systems', icon: 'fa-solid fa-layer-group', title: 'Scalable Frontend Systems', desc: 'Architecture for complex dashboards and SaaS products using React, Next.js, and reusable component libraries.' },
    { id: 'booking-flows', icon: 'fa-solid fa-calendar-check', title: 'High-Conversion Booking', desc: 'Optimized multi-step flows and scheduling interfaces designed to reduce friction and increase user completion.' },
    { id: 'fullstack-saas', icon: 'fa-solid fa-server', title: 'Full-Stack SaaS MVP', desc: 'End-to-end development with Node.js, Supabase, and Stripe integration to get your product to market fast.' },
    { id: 'web3-product', icon: 'fa-solid fa-link', title: 'Web3 Product Design', desc: 'Modern, conversion-oriented landing pages and interfaces for decentralized protocols and meme ecosystems.' },
    { id: 'perf', icon: 'fa-solid fa-gauge-high', title: 'Performance Optimization', desc: 'Lighthouse audits and implementation to ensure sub-second load times and perfect Core Web Vitals.' },
    { id: 'consulting', icon: 'fa-solid fa-comments', title: 'Technical Strategy', desc: 'Helping founders choose the right stack, optimize workflows, and build maintainable digital products.' },
];

export const PROCESS = [
    { title: 'Discovery', desc: 'Understanding your business goals and user needs to build the right solution, not just a set of features.' },
    { title: 'Architecture', desc: 'Planning the frontend state and backend data flow to ensure the platform is performant and easy to maintain.' },
    { title: 'Execution', desc: 'Rapid, high-quality development with transparent updates and iterative feedback cycles.' },
    { title: 'Delivery', desc: 'A polished, production-ready product with clean documentation and post-launch support.' },
];

export const TESTIMONIALS = [
    { author: 'Sarah Chen', role: 'Founder, Cortex Solutions', text: '"Bytesage delivered exactly what we needed on time. His execution on the booking flow was flawless and really simplified things for our users."' },
    { author: 'Marcus Rivera', role: 'Product Lead, Washdoctors', text: '"Communication was excellent throughout the project. He translated our product ideas into a very clean and responsive dashboard."' },
    { author: 'Elena Voss', role: 'CMO, BANA', text: '"Great frontend execution and very easy to work with. He helped us optimize our launch page for better mobile engagement."' },
];

export const STATS = [
    { label: 'Lighthouse Score', count: 100 },
    { label: 'Conversion Increase (%)', count: 40 },
    { label: 'Load Time Reduction (ms)', count: 500 },
    { label: 'Days to Launch (Avg.)', count: 15 },
];

export const BLOG = [
    { date: 'Mar 15, 2026', title: 'The Case for Design Tokens in Large‑Scale dApps', image: 'https://placehold.co/600x400/1E232E/F2C49B?text=Design+Tokens' },
    { date: 'Feb 28, 2026', title: 'Optimizing INP in Web3 Frontends', image: 'https://placehold.co/600x400/1E232E/F2C49B?text=INP+Optimization' },
    { date: 'Jan 10, 2026', title: 'Building Motion Systems That Feel Natural', image: 'https://placehold.co/600x400/1E232E/F2C49B?text=Motion+Systems' },
];

export const FAQ = [
    { question: 'What is your primary area of expertise?', answer: 'I specialize in high-performance frontend architecture and conversion-focused user flows. Most of my work involves building SaaS dashboards, complex booking systems, and modern Web3 product interfaces.' },
    { question: 'What tech stack do you recommend for new projects?', answer: 'For most startups, I recommend Next.js, Tailwind CSS, and Supabase. This combination allows for rapid development, excellent performance out of the box, and easy scalability.' },
    { question: 'Do you handle payment integrations?', answer: 'Yes. I have extensive experience integrating Stripe for subscriptions, one-time payments, and complex checkout flows in both SaaS and e-commerce contexts.' },
    { question: 'Can you improve the performance of an existing app?', answer: 'Absolutely. I can perform a deep audit of your current platform and implement optimizations to improve Core Web Vitals, reduce bundle size, and enhance the overall user experience.' },
    { question: 'What are your typical project timelines?', answer: 'Timelines vary by complexity. A high-conversion landing page typically takes 1-2 weeks, while a complex full-stack dApp or SaaS platform can take 4-8 weeks from discovery to delivery.' },
    { question: 'How do you handle pricing?', answer: 'I primarily work on a fixed-project basis to ensure transparency and alignment on deliverables. For ongoing consulting or maintenance, I offer flexible monthly retainers.' },
    { question: 'Are you currently available for new projects?', answer: 'I typically book projects 2-4 weeks in advance. However, I always leave room for smaller consultations or high-priority launches. Reach out to check my current window.' },
    { question: 'Do you work solo or with a team?', answer: 'I operate as an independent specialist, which means you get direct access to my expertise. For massive-scale projects, I have a trusted network of auditors and designers I can bring in.' },
    { question: 'Do you offer UI/UX redesigns for existing platforms?', answer: 'Yes. I specialize in taking legacy or "engineer-styled" platforms and transforming them into modern, high-performance experiences that prioritize conversion and clarity.' },
];
