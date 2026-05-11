import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../common/Button';

interface ContactProps {
    onContactClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, {
            opacity: 1,
            y: 0,
            duration: 0.7 * dur,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 88%',
                once: true,
            },
        });
    }, []);

    return (
        <section className="section" id="contact">
            <div className="trust-markers">
                <div className="marker"><i className="fa-solid fa-bolt"></i> Fast Turnaround</div>
                <div className="marker"><i className="fa-solid fa-globe"></i> Remote Worldwide</div>
                <div className="marker"><i className="fa-solid fa-mobile-screen"></i> Responsive-First</div>
                <div className="marker"><i className="fa-solid fa-gauge-high"></i> Performance-Focused</div>
                <div className="marker status"><span className="status-dot"></span> Available for freelance</div>
            </div>
            <div className="contact-cta-card" ref={cardRef}>
                <h2>Ready to launch your next platform?</h2>
                <p>I'm currently accepting select frontend and full‑stack projects. Let's discuss how we can build something exceptional together.</p>
                <Button variant="primary" onClick={onContactClick}>
                    <i className="fa-solid fa-rocket"></i> Book a project discussion
                </Button>
            </div>
        </section>
    );
};

export default Contact;
