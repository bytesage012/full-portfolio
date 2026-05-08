(function () {
    gsap.registerPlugin(ScrollTrigger);

    // --- Configuration ---
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dur = prefersReducedMotion ? 0.05 : 1;

    // --- DOM Elements ---
    const html = document.documentElement;
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggle = document.getElementById('themeToggle');
    const heroGlow = document.getElementById('heroGlow');
    const scrollHint = document.getElementById('scrollHint');
    const navLinks = document.querySelectorAll('#navLinks a[data-section]');
    const mobileLinks = document.querySelectorAll('#mobileMenu a[data-section]');
    const allSectionLinks = [...navLinks, ...mobileLinks];

    // --- Theme Logic ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.classList.add('light');
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
        html.classList.add('light');
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('light');
        localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
    });

    // --- Mobile Menu Logic ---
    let menuOpen = false;

    function openMenu() {
        menuOpen = true;
        hamburger.classList.add('active');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuOpen = false;
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
    mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

    // --- Navigation & Scroll Logic ---
    let navScrolled = false;

    function updateNavState() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 40;

        if (shouldBeScrolled !== navScrolled) {
            navScrolled = shouldBeScrolled;
            nav.classList.toggle('scrolled', navScrolled);
        }

        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
                currentSection = section.id;
            }
        });

        allSectionLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
        });
    }

    window.addEventListener('scroll', updateNavState, { passive: true });
    updateNavState();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navH = nav.offsetHeight + 16;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navH,
                    behavior: 'smooth',
                });
            }
        });
    });

    // --- Hero Animations ---
    const heroTl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.16, 1, 0.3, 1)' } });

    heroTl
        .fromTo('#heroBadge', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 * dur }, 0.1)
        .fromTo('#heroHeadline', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 * dur }, 0.25)
        .fromTo('#heroSubhead', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65 * dur }, 0.5)
        .fromTo('#heroActions', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 * dur }, 0.7)
        .fromTo(scrollHint, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 * dur }, 0.9);

    gsap.fromTo(
        heroGlow,
        { opacity: 0, scale: 0.85 },
        {
            opacity: 1,
            scale: 1,
            duration: 1.1 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            delay: 0.05,
        }
    );

    gsap.fromTo(
        '.hero-image-card',
        { opacity: 0, x: 30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            delay: 0.6,
        }
    );

    // --- Scroll Animations ---
    const animateIn = (selector, config = {}) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: config.y || 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: (config.duration || 0.7) * dur,
                    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                    delay: i * (config.stagger || 0.08),
                }
            );
        });
    };

    animateIn('.tech-card', { y: 20, stagger: 0.04, duration: 0.5 });
    animateIn('.project-card', { y: 40, stagger: 0.1, duration: 0.7 });
    animateIn('.timeline-item', { y: 24, stagger: 0.1, duration: 0.6 });
    animateIn('.service-card', { y: 28, stagger: 0.06, duration: 0.55 });
    animateIn('.process-step', { y: 24, stagger: 0.08, duration: 0.55 });
    animateIn('.testimonial-card', { y: 24, stagger: 0.1, duration: 0.6 });
    animateIn('.stat-item', { y: 20, stagger: 0.08, duration: 0.5 });
    animateIn('.blog-card', { y: 24, stagger: 0.1, duration: 0.6 });
    animateIn('.faq-item', { y: 16, stagger: 0.06, duration: 0.45 });

    gsap.fromTo(
        '.about-visual-wrap',
        { opacity: 0, x: -30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.75 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: { trigger: '.about-grid', start: 'top 80%', toggleActions: 'play none none none', once: true },
        }
    );

    gsap.fromTo(
        '.about-text',
        { opacity: 0, x: 30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.75 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: { trigger: '.about-grid', start: 'top 80%', toggleActions: 'play none none none', once: true },
        }
    );

    gsap.fromTo(
        '.contact-cta-card',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.7 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: { trigger: '.contact-cta-card', start: 'top 88%', toggleActions: 'play none none none', once: true },
        }
    );

    // --- Counter Animations ---
    const setupCounters = (triggerSelector, itemSelector) => {
        const countEls = document.querySelectorAll(itemSelector);
        if (countEls.length === 0) return;

        ScrollTrigger.create({
            trigger: triggerSelector,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                countEls.forEach((el) => {
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const ctx = { value: 0 };
                    gsap.to(ctx, {
                        value: target,
                        duration: 1.6 * dur,
                        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        onUpdate: () => {
                            el.textContent = Math.round(ctx.value);
                        },
                    });
                });
            },
        });
    };

    setupCounters('.about-meta-row', '[data-count]');
    setupCounters('.stats-row', '.stat-number[data-count]');

    // --- Parallax & Scroll Effects ---
    gsap.to(heroGlow, {
        y: () => window.innerHeight * 0.15,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
        },
    });

    gsap.to(scrollHint, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom 60%',
            scrub: 0.8,
        },
    });

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-question').forEach((q) => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const wasOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));

            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });

    // --- Modals Logic ---
    const projectModalOverlay = document.getElementById('projectModalOverlay');
    const contactModalOverlay = document.getElementById('contactModalOverlay');
    const projectModalClose = document.getElementById('projectModalClose');
    const contactModalClose = document.getElementById('contactModalClose');

    function openModal(overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    projectModalClose.addEventListener('click', () => closeModal(projectModalOverlay));
    contactModalClose.addEventListener('click', () => closeModal(contactModalOverlay));

    projectModalOverlay.addEventListener('click', function (e) {
        if (e.target === this) closeModal(this);
    });
    contactModalOverlay.addEventListener('click', function (e) {
        if (e.target === this) closeModal(this);
    });

    const projectData = {
        aether: {
            tag: 'Fintech · Dashboard',
            title: 'Aether : Financial Intelligence Platform',
            desc: 'Complete redesign of a wealth management dashboard serving 50K+ DAU, implemented with React, Express, and WebSocket real‑time data. The new interface reduced cognitive load through progressive disclosure and improved data visualization clarity.',
            tech: ['React', 'TypeScript', 'Express', 'WebSocket', 'PostgreSQL', 'AWS'],
            image: 'https://placehold.co/800x500/1E232E/F2C49B?text=Aether+Dashboard',
            link: '#',
        },
        kiso: {
            tag: 'E-commerce · Web3',
            title: 'Kiso : Ethical Marketplace',
            desc: 'Decentralised marketplace with Solidity escrow contracts and a Next.js storefront. Features include transparent supply chain tracking, carbon‑impact calculator, and gas‑optimized transactions.',
            tech: ['Next.js', 'Solidity', 'Ethers.js', 'Hardhat', 'GraphQL', 'IPFS'],
            image: 'https://placehold.co/600x400/1E232E/F2C49B?text=Kiso+Marketplace',
            link: '#',
        },
        vireo: {
            tag: 'Healthcare · Patient Portal',
            title: 'Vireo : Patient Experience',
            desc: 'HIPAA‑compliant patient portal built with React and Fastify, featuring a compassionate UI that reduced booking abandonment by 40%. Includes real‑time appointment scheduling and secure messaging.',
            tech: ['React', 'Fastify', 'TypeScript', 'PostgreSQL', 'WCAG AA', 'Docker'],
            image: 'https://placehold.co/600x400/1E232E/F2C49B?text=Vireo+Health',
            link: '#',
        },
        randomGuy: {
            tag: 'Web3 · Meme Token',
            title: 'Random Guy : $RandomGuy Token',
            desc: 'Tongue-in-cheek Solana meme token landing page built purely out of creative curiosity. Features a clean, minimal UI with a deadpan brand identity that leans into the absurdist premise : no promises, no roadmap, just vibes.',
            tech: ['React', 'Tailwind CSS', 'Solana', 'Vercel'],
            image: 'assets/images/random-guy.png',
            link: 'https://random-guy-nu.vercel.app/',
        },
        banaCoin: {
            tag: 'Web3 · Meme Token',
            title: 'BANA : The Premium Meme Asset',
            desc: 'High-polish landing page for $BANA, a community-driven meme coin on Solana. Designed with a premium aesthetic that parodies blue-chip crypto branding : bold typography, tight copy, and a "yellow revolution" community narrative.',
            tech: ['React', 'Tailwind CSS', 'Solana', 'Vercel'],
            image: 'assets/images/bana-coin.png',
            link: 'https://bana-coin.vercel.app/',
        },
        cowgorithmV2: {
            tag: 'Web3 · Meme Token',
            title: 'Cowgorithm V2 : Algorithmic Bovine Finance',
            desc: 'Redesigned landing page for $COWGORITHM, a satirical DeFi meme coin with a fictional AI farming narrative. V2 introduced a live mock dashboard with animated farm metrics, a cleaner layout, and a refined dark aesthetic over the original.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
            image: 'assets/images/cowgorithm-v2.png',
            link: 'https://cowgorithm-v2.vercel.app/',
        },
        cowgorithmV1: {
            tag: 'Web3 · Meme Token',
            title: 'Cowgorithm V1 : AI-Powered Bovine Finance',
            desc: 'Original launch site for $COWGORITHM : a meme coin built around a fictional on-chain bovine intelligence protocol. Features a scrolling ticker, animated farm OS dashboard, tokenomics breakdown, and a phased roadmap toward "global farm takeover."',
            tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
            image: 'assets/images/cowgorithm-v1.png',
            link: 'https://cowgorithm-v1.vercel.app/',
        },
        philax: {
            tag: 'Web3 · NFT · Collectibles',
            title: 'Philax : Phygital Collectibles Protocol',
            desc: 'Landing page for a phygital collectibles platform that bridges rare physical assets with on-chain verification. Positioned around the intersection of traditional collecting culture and blockchain permanence : stamps, coins, and memorabilia tokenized.',
            tech: ['React', 'Tailwind CSS', 'Blockchain', 'Vercel'],
            image: 'assets/images/philax.png',
            link: 'https://philax.vercel.app/',
        },
        cricketSol: {
            tag: 'Web3 · Sports · Predictions',
            title: 'CricketOnSol : Memes & Predictions',
            desc: 'Solana-based platform combining cricket fandom with on-chain prediction markets and meme culture. Partnered with jump_trade, it features revenue-based reward distribution : rewarding both correct predictions and community engagement.',
            tech: ['React', 'Solana', 'Tailwind CSS', 'Vercel'],
            image: 'assets/images/cricket-sol.png',
            link: 'https://cricket-sol.vercel.app/',
        },
        cannibalCoin: {
            tag: 'Web3 · Meme Token',
            title: 'Cannibal Coin : $CANNI',
            desc: "Dark-humour meme token where the supply is the joke : $CANNI's entire premise is a deflationary \"the supply is food\" mechanic. Bold amber branding and sharp copywriting carry the absurdist concept with confident design execution.",
            tech: ['React', 'Tailwind CSS', 'Solana', 'Vercel'],
            image: 'assets/images/cannibal.png',
            link: 'https://cannibal-coin.vercel.app/',
        },
        cortexFrontend: {
            tag: 'AI · SaaS · Marketing',
            title: 'CorTex AI : Custom Engineered AI Solutions',
            desc: 'Marketing site for a custom AI solutions agency. Designed to convey technical credibility and enterprise readiness : clean layout, clear service positioning, and a tone that bridges cutting-edge AI capability with business-focused outcomes.',
            tech: ['React', 'Tailwind CSS', 'Vercel'],
            image: 'assets/images/cortex-ai.png',
            link: 'https://cortex-frontend-mu.vercel.app/',
        },
        cortexDashboard: {
            tag: 'AI · SaaS · Dashboard',
            title: 'CorTex AI : Internal Dashboard',
            desc: 'Companion analytics dashboard to the CorTex AI platform, providing clients with a centralized interface to monitor deployed AI solutions, usage metrics, and performance insights in real time.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            image: 'assets/images/cortex-dash.png',
            link: 'https://cortex-dashboard-eta.vercel.app/',
        },
    };

    document.querySelectorAll('.project-card[data-project]').forEach((card) => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-project');
            const data = projectData[key];
            if (!data) return;

            document.getElementById('modalTag').textContent = data.tag;
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalDesc').textContent = data.desc;
            document.getElementById('modalTechTags').innerHTML = data.tech.map((t) => `<span>${t}</span>`).join('');
            
            const modalLink = document.getElementById('modalLink');
            if (data.link && data.link !== '#') {
                modalLink.href = data.link;
                modalLink.style.display = 'inline-flex';
            } else {
                modalLink.style.display = 'none';
            }

            openModal(projectModalOverlay);
        });
    });

    const contactTriggers = [document.getElementById('heroContactBtn'), document.getElementById('contactCtaBtn')];
    contactTriggers.forEach((btn) => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (menuOpen) closeMenu();
                openModal(contactModalOverlay);
            });
        }
    });

    document.querySelectorAll('.service-card[data-service]').forEach((card) => {
        card.addEventListener('click', () => {
            openModal(contactModalOverlay);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (contactModalOverlay.classList.contains('active')) closeModal(contactModalOverlay);
            if (projectModalOverlay.classList.contains('active')) closeModal(projectModalOverlay);
            if (menuOpen) closeMenu();
        }
    });

    // --- Lifecycle & Utils ---
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 250);
    });

    console.log(
        '%c Portfolio ready • Bytesage %c🚀',
        'font-family:"Space Grotesk",monospace;font-size:1.3em;color:#F2C49B;',
        ''
    );
    console.log('%c GSAP ' + gsap.version + ' • Full‑stack Web3 focus', 'color:#9E2F3D;font-weight:600;');
})();
