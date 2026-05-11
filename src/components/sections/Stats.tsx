import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { STATS } from '../../utils/constants';

const Stats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const items = rowRef.current?.querySelectorAll('.stat-item');
        if (items) {
            items.forEach((el, i) => {
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
                    delay: i * 0.08,
                });
            });
        }

        const numbers = rowRef.current?.querySelectorAll('.stat-number');
        if (numbers) {
            gsap.to({}, {
                scrollTrigger: {
                    trigger: rowRef.current,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        numbers.forEach((el) => {
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
        <section className="section" id="stats" ref={sectionRef}>
            <SectionLabel>Real Metrics</SectionLabel>
            <h2 className="section-title">Measured by results</h2>
            <div className="stats-row" ref={rowRef}>
                {STATS.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <span className="stat-number" data-count={stat.count}>0</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
