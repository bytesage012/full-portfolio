import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { PROJECTS } from '../../utils/constants';

interface WorkProps {
    onProjectClick: (project: any) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const cards = gridRef.current?.querySelectorAll('.project-card');
        if (cards) {
            cards.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 40 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7 * dur,
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
        <section className="section" id="work" ref={sectionRef}>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="section-title">Projects that demonstrate full‑stack depth</h2>
            <p className="section-subtitle">A selection of decentralized apps, APIs, and performant interfaces.</p>
            <div className="projects-grid" ref={gridRef}>
                {PROJECTS.map((project) => (
                    <article 
                        key={project.id} 
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                        onClick={() => onProjectClick(project)}
                    >
                        <div className="project-image-wrap">
                            <img src={project.image} alt={`${project.title} screenshot`} />
                        </div>
                        <div className="project-info">
                            <span className="project-tag">{project.tag}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.shortDesc}</p>
                            <span className="project-link-text">
                                View case study <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Work;
