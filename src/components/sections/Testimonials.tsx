import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonials: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const cards = gridRef.current?.querySelectorAll('.testimonial-card');
        if (cards) {
            cards.forEach((el, i) => {
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
        <section className="section" id="testimonials" ref={sectionRef}>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="section-title">What founders say</h2>
            <div className="testimonials-grid" ref={gridRef}>
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-stars">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                            ))}
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">{testimonial.author}</div>
                        <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
