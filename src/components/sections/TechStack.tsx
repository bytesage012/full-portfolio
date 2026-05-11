import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { TECH_STACK } from '../../utils/constants';

const TechStack: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const cards = cardsRef.current?.querySelectorAll('.tech-card');
        if (cards) {
            cards.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 20 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5 * dur,
                    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                    delay: i * 0.04,
                });
            });
        }
    }, []);

    return (
        <section className="section" id="tech" ref={sectionRef}>
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="section-title">Technologies I use</h2>
            <p className="section-subtitle">Modern full-stack tools focused on speed, scalability, and user experience.</p>
            <div className="tech-grid" ref={cardsRef}>
                {TECH_STACK.map((tech, index) => (
                    <div key={index} className="tech-card">
                        <i className={tech.icon}></i>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
