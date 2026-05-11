import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        gsap.fromTo(visualRef.current, { opacity: 0, x: -30 }, {
            opacity: 1,
            x: 0,
            duration: 0.75 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true,
            },
        });

        gsap.fromTo(textRef.current, { opacity: 0, x: 30 }, {
            opacity: 1,
            x: 0,
            duration: 0.75 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true,
            },
        });

        // Counters
        const counterItems = countersRef.current?.querySelectorAll('[data-count]');
        if (counterItems) {
            gsap.to({}, {
                scrollTrigger: {
                    trigger: countersRef.current,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        counterItems.forEach((el) => {
                            const target = parseInt(el.getAttribute('data-count') || '0', 10);
                            const obj = { value: 0 };
                            gsap.to(obj, {
                                value: target,
                                duration: 1.6 * dur,
                                ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                onUpdate: () => {
                                    el.textContent = Math.round(obj.value).toString();
                                },
                            });
                        });
                    },
                },
            });
        }
    }, []);

    return (
        <section className="section" id="about" ref={sectionRef}>
            <SectionLabel>About Me</SectionLabel>
            <div className="about-grid">
                <div className="about-visual-wrap" ref={visualRef}>
                    <div className="about-visual-inner">
                        <div className="about-shape"></div>
                    </div>
                </div>
                <div className="about-text" ref={textRef}>
                    <h2>Conversion-focused development for modern brands</h2>
                    <p className="about-body">
                        I'm Bytesage, a full-stack developer focused on building polished, functional interfaces that bridge the gap between complex requirements and intuitive user experiences.
                    </p>
                    <p className="about-body">
                        From multi-step booking systems to AI-driven SaaS dashboards, I prioritize performance, accessibility, and clean code. I work directly with founders to translate product vision into production-ready platforms.
                    </p>
                    <div className="about-meta-row" ref={countersRef}>
                        <div className="about-meta-item">
                            <span className="meta-number" data-count="3">0</span>
                            <span className="meta-label">Years Freelance</span>
                        </div>
                        <div className="about-meta-item">
                            <span className="meta-number" data-count="40">0</span>
                            <span className="meta-label">Projects Shipped</span>
                        </div>
                        <div className="about-meta-item">
                            <span className="meta-number" data-count="100">0</span>
                            <span className="meta-label">Lighthouse Score</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
