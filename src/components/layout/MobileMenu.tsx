import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'tech', label: 'Tech Stack' },
        { id: 'work', label: 'Work' },
        { id: 'experience', label: 'Experience' },
        { id: 'services', label: 'Services' },
        { id: 'blog', label: 'Insights' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
            {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={onClose} data-section={link.id}>
                    {link.label}
                </a>
            ))}
        </div>
    );
};

export default MobileMenu;
