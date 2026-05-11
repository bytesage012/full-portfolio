import React from 'react';

interface NavbarProps {
    onThemeToggle: () => void;
    onMenuToggle: () => void;
    activeSection: string;
    scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, onMenuToggle, activeSection, scrolled }) => {
    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'tech', label: 'Stack' },
        { id: 'work', label: 'Work' },
        { id: 'experience', label: 'Experience' },
        { id: 'services', label: 'Services' },
        { id: 'blog', label: 'Insights' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
            <div className="nav-inner">
                <a href="#hero" className="nav-logo">Bytesage<span className="logo-accent">.</span></a>
                <ul className="nav-links" id="navLinks">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`} 
                                className={activeSection === link.id ? 'active' : ''}
                                data-section={link.id}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav-actions">
                    <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">
                        <i className="fa-solid fa-moon"></i>
                        <i className="fa-solid fa-sun"></i>
                    </button>
                    <button className="nav-hamburger" onClick={onMenuToggle} aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
