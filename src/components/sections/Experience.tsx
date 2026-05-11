import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { EXPERIENCE } from '../../utils/constants';

const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        if (items) {
            items.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 24 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6 * dur,
                    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                    delay: i * 0.1,
                });
            });
        }
    }, []);

    return (
        <section className="section" id="experience" ref={sectionRef}>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="section-title">Professional journey</h2>
            <div className="timeline" ref={timelineRef}>
                {EXPERIENCE.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <span className="timeline-date">{item.date}</span>
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-company">{item.company}</div>
                        <p className="timeline-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
