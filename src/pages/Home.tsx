import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import Work from '../components/sections/Work';
import Experience from '../components/sections/Experience';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Stats from '../components/sections/Stats';
import Blog from '../components/sections/Blog';
import FAQSection from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { useTheme } from '../hooks/useTheme';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useModal } from '../hooks/useModal';

const Home: React.FC = () => {
    const { toggleTheme } = useTheme();
    const sectionIds = ['hero', 'about', 'tech', 'work', 'experience', 'services', 'blog', 'faq', 'contact'];
    const { scrolled, activeSection } = useScrollPosition(sectionIds);
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen: isProjectOpen, modalData: projectData, openModal: openProject, closeModal: closeProject } = useModal();
    const { isOpen: isContactOpen, openModal: openContact, closeModal: closeContact } = useModal();

    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
    const handleMenuClose = () => setIsMenuOpen(false);

    return (
        <>
            <div className="noise-overlay"></div>
            
            <Navbar 
                onThemeToggle={toggleTheme} 
                onMenuToggle={handleMenuToggle} 
                activeSection={activeSection}
                scrolled={scrolled}
            />
            
            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />

            <main>
                <Hero onContactClick={() => openContact()} />
                <About />
                <Work onProjectClick={openProject} />
                <TechStack />
                <Experience />
                <Services onServiceClick={() => openContact()} />
                <Process />
                <Testimonials />
                <Stats />
                <Blog />
                <FAQSection />
                <Contact onContactClick={() => openContact()} />
            </main>

            <Footer />

            {/* Project Modal */}
            <Modal isOpen={isProjectOpen} onClose={closeProject}>
                {projectData && (
                    <>
                        <span className="modal-tag">{projectData.tag}</span>
                        <h3>{projectData.title}</h3>
                        <p>{projectData.desc}</p>
                        <div className="tech-tags">
                            {projectData.tech.map((t: string) => <span key={t}>{t}</span>)}
                        </div>
                        {projectData.link && projectData.link !== '#' && (
                            <Button as="a" href={projectData.link} target="_blank" variant="outline" style={{ display: 'inline-flex' }}>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Site
                            </Button>
                        )}
                    </>
                )}
            </Modal>

            {/* Contact Modal */}
            <Modal isOpen={isContactOpen} onClose={closeContact}>
                <span className="modal-tag">Get In Touch</span>
                <h3>Let's connect</h3>
                <p>The form is currently disabled. Please reach out via any of my socials below — I'm most active on Telegram and Twitter.</p>
                <div className="social-links-grid">
                    <a href="https://github.com/bytesage012" className="social-link-item" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon"><i className="fa-brands fa-github"></i></div>
                        <div className="social-info">
                            <span className="social-name">GitHub</span>
                            <span className="social-handle">@bytesage012</span>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square arrow"></i>
                    </a>
                    <a href="https://x.com/bytesage012" className="social-link-item" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon"><i className="fa-brands fa-x-twitter"></i></div>
                        <div className="social-info">
                            <span className="social-name">Twitter / X</span>
                            <span className="social-handle">@bytesage012</span>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square arrow"></i>
                    </a>
                    <a href="https://t.me/bytesage013" className="social-link-item" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon"><i className="fa-solid fa-paper-plane"></i></div>
                        <div className="social-info">
                            <span className="social-name">Telegram</span>
                            <span className="social-handle">@bytesage013</span>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square arrow"></i>
                    </a>
                    <a href="mailto:bytesage012@gmail.com" className="social-link-item">
                        <div className="social-icon"><i className="fa-solid fa-envelope"></i></div>
                        <div className="social-info">
                            <span className="social-name">Email</span>
                            <span className="social-handle">bytesage012@gmail.com</span>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square arrow"></i>
                    </a>
                </div>
            </Modal>
        </>
    );
};

export default Home;
