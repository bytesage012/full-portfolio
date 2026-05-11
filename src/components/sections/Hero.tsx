import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../common/Button';
import pfp from '../../assets/pfp_no_bg.png';

interface HeroProps {
    onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const scrollHintRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const imageCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.16, 1, 0.3, 1)' } });

        tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 * dur }, 0.1)
          .fromTo(headlineRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 * dur }, 0.25)
          .fromTo(subheadRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65 * dur }, 0.5)
          .fromTo(actionsRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 * dur }, 0.7)
          .fromTo(scrollHintRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 * dur }, 0.9);

        gsap.fromTo(glowRef.current, { opacity: 0, scale: 0.85 }, {
            opacity: 1,
            scale: 1,
            duration: 1.1 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            delay: 0.05,
        });

        gsap.fromTo(imageCardRef.current, { opacity: 0, x: 30 }, {
            opacity: 1,
            x: 0,
            duration: 0.8 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            delay: 0.6,
        });

        // Parallax effects
        gsap.to(glowRef.current, {
            y: () => window.innerHeight * 0.15,
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2,
            },
        });

        gsap.to(scrollHintRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom 60%',
                scrub: 0.8,
            },
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-bg-glow" id="heroGlow" ref={glowRef}></div>
            <div className="hero-content">
                <div className="hero-badge" id="heroBadge" ref={badgeRef}>
                    <span className="status-dot"></span> Available for new projects
                </div>
                <h1 className="hero-headline" id="heroHeadline" ref={headlineRef}>
                    I build <span className="highlight">high-performance</span> frontend systems & SaaS products
                </h1>
                <p className="hero-subhead" id="heroSubhead" ref={subheadRef}>
                    Full-stack developer specializing in scalable frontend architecture, conversion-driven booking platforms, and modern Web3 product experiences.
                </p>
                <div className="hero-actions" id="heroActions" ref={actionsRef}>
                    <Button as="a" href="#work" variant="primary">
                        View My Work <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                    <Button variant="outline" onClick={onContactClick}>
                        <i className="fa-solid fa-envelope"></i> Get In Touch
                    </Button>
                </div>
            </div>
            <div className="hero-image-card" ref={imageCardRef}>
                <img src={pfp} alt="bytesage pfp" />
            </div>
            <div className="scroll-hint" id="scrollHint" ref={scrollHintRef}>
                <span className="scroll-line"></span> Scroll to explore
            </div>
        </section>
    );
};

export default Hero;
