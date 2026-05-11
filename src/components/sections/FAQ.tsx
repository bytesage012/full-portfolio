import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SectionLabel from '../common/SectionLabel';
import { FAQ } from '../../utils/constants';

const FAQSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dur = prefersReducedMotion ? 0.05 : 1;

        const items = listRef.current?.querySelectorAll('.faq-item');
        if (items) {
            items.forEach((el, i) => {
                gsap.fromTo(el, { opacity: 0, y: 16 }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.45 * dur,
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

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section" id="faq" ref={sectionRef}>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-list" ref={listRef}>
                {FAQ.map((item, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
