import React from 'react';
import { User, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ textColor = 'white', customStyle = {} }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar-container" style={{ color: textColor, ...customStyle }}>
            <div className="navbar-links">
                <a href="#projects"
                    onClick={(e) => { e.preventDefault(); handleNavigation('hero-section'); }}
                    style={{ color: textColor, textDecoration: 'none' }}>Projects</a>
                <a href="#about"
                    onClick={(e) => { e.preventDefault(); handleNavigation('about-section'); }}
                    style={{ color: textColor, textDecoration: 'none', opacity: 0.8 }}>About</a>
                <a href="#desktop-section"
                    onClick={(e) => { e.preventDefault(); handleNavigation('desktop-section'); }}
                    style={{ color: textColor, textDecoration: 'none', opacity: 0.8 }}>My Desktop</a>
                <a href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavigation('contact-section'); }}
                    style={{ color: textColor, textDecoration: 'none', opacity: 0.8 }}>Contact</a>
            </div>

            <div className="navbar-user" style={{ color: textColor }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>
                    <User size={18} />
                    <span style={{ fontSize: '0.75rem' }}>Saxon Fullwood</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
