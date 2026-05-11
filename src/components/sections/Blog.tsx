import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { BLOG } from '../../utils/constants';

const Blog: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const cards = gridRef.current?.querySelectorAll('.blog-card');
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
        <section className="section" id="blog" ref={sectionRef}>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="section-title">Latest articles & thoughts</h2>
            <div className="blog-grid" ref={gridRef}>
                {BLOG.map((post, index) => (
                    <div key={index} className="blog-card">
                        <div className="blog-img">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-info">
                            <span className="blog-date">{post.date}</span>
                            <h4 className="blog-title">{post.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
