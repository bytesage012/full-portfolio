import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { SERVICES } from '../../utils/constants';

interface ServicesProps {
    onServiceClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const cards = gridRef.current?.querySelectorAll('.service-card');
        if (cards) {
            cards.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 28 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55 * dur,
                    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                    delay: i * 0.06,
                });
            });
        }
    }, []);

    return (
        <section className="section" id="services" ref={sectionRef}>
            <SectionLabel>Services</SectionLabel>
            <h2 className="section-title">How I help startups grow</h2>
            <p className="section-subtitle">Scalable frontend systems, SaaS architecture, and conversion-focused experiences.</p>
            <div className="services-grid" ref={gridRef}>
                {SERVICES.map((service) => (
                    <div 
                        key={service.id} 
                        className="service-card" 
                        data-service={service.id}
                        onClick={onServiceClick}
                    >
                        <i className={service.icon}></i>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
