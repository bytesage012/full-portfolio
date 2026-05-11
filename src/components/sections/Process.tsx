import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { PROCESS } from '../../utils/constants';

const Process: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const steps = stepsRef.current?.querySelectorAll('.process-step');
        if (steps) {
            steps.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 24 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55 * dur,
                    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                    delay: i * 0.08,
                });
            });
        }
    }, []);

    return (
        <section className="section" id="process" ref={sectionRef}>
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="section-title">Built for speed and clarity</h2>
            <div className="process-steps" ref={stepsRef}>
                {PROCESS.map((step, index) => (
                    <div key={index} className="process-step">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
