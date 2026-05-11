import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-col">
                    <h4>Bytesage</h4>
                    <p>Full‑Stack Web3 Engineer & Creative Developer based in Amsterdam. Building performant, secure, and beautiful decentralized applications.</p>
                </div>
                <div className="footer-col">
                    <h4>Navigation</h4>
                    <a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a>
                </div>
                <div className="footer-col">
                    <h4>Services</h4>
                    <a href="#services">Web3 dApps</a><a href="#services">Smart Contracts</a><a href="#services">Back‑end APIs</a><a href="#services">Design Systems</a>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <div className="footer-socials">
                        <a href="https://github.com/bytesage012" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://x.com/bytesage012" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://t.me/bytesage013" aria-label="Telegram" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-paper-plane"></i></a>
                        <a href="mailto:bytesage012@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; {new Date().getFullYear()} Bytesage. All rights reserved.</span>
                <span>Crafted with <i className="fa-solid fa-heart" style={{ color: 'var(--color-accent-primary)' }}></i> and obsessive attention to detail</span>
            </div>
        </footer>
    );
};

export default Footer;
