import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import DesktopSection from '../components/DesktopSection';
import ContactSection from '../components/ContactSection';
import { items } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Home() {
    const [activeId, setActiveId] = useState(1);
    const activeItem = items.find(item => item.id === activeId);
    const navigate = useNavigate();
    const location = useLocation();
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;
        const scrollAmount = window.innerWidth * 0.85; // Roughly the width of one card on mobile
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const sectionId = location.state.scrollTo;
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="app-container" style={{
            backgroundColor: activeItem ? activeItem.color : '#691e1e',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            overflowX: 'hidden', // Allow vertical scroll, hide horizontal
            transition: 'background-color 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fontFamily: "'Inter', sans-serif",
            color: 'white'
        }}>
            <Navbar />

            <section id="hero-section" className="hero-section">

                {/* Left Content - Loud and Minimal */}
                <div className="hero-left-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ width: '100%' }}
                        >
                            <h1 className="hero-title">
                                {activeItem.title.split(' ').map((word, i) => (
                                    <span key={i} style={{ display: 'block' }}>{word}</span>
                                ))}
                            </h1>

                            <div style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                opacity: 0.8,
                                marginBottom: '3rem',
                                letterSpacing: '1px',
                                lineHeight: 1.8,
                                borderLeft: '2px solid rgba(255,255,255,0.3)',
                                paddingLeft: '1rem'
                            }}>
                                {activeItem.university && <div style={{ marginBottom: '0.5rem' }}>{activeItem.university}</div>}
                                {activeItem.module && <div>{activeItem.module}</div>}
                                {activeItem.year && <div>{activeItem.year}</div>}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                                {activeItem.links && activeItem.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.href}
                                        target={link.href.startsWith('/') ? "_self" : "_blank"}
                                        rel={link.href.startsWith('/') ? "" : "noopener noreferrer"}
                                        onClick={(e) => {
                                            if (link.href.startsWith('/')) {
                                                e.preventDefault();
                                                navigate(link.href);
                                            }
                                        }}
                                        style={{
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            letterSpacing: '1px',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderBottom: i === 0 ? '2px solid white' : 'none',
                                            paddingBottom: i === 0 ? '4px' : '0',
                                            opacity: i === 0 ? 1 : 0.6,
                                            transition: 'opacity 0.2s'
                                        }}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel */}
                <div className="carousel-container">
                    <button
                        className="carousel-arrow left"
                        onClick={() => scrollCarousel('left')}
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="hero-carousel" ref={carouselRef}>
                        {items.map((item) => {
                            const isActive = item.id === activeId;
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => setActiveId(item.id)}
                                    initial={{ borderRadius: 100 }}
                                    animate={{
                                        width: isActive ? 500 : 80, // Expanded width vs Shrink width
                                        height: isActive ? 600 : 400,
                                        borderRadius: isActive ? 40 : 100,
                                        opacity: isActive ? 1 : 0.4,
                                        filter: isActive ? 'brightness(1)' : 'brightness(0.5) grayscale(0.5)'
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 24
                                    }}
                                    className="carousel-card" // Added class for easier targeting
                                    style={{
                                        minWidth: isActive ? 500 : 80, // Force width to respect flex layout
                                        background: `url("${item.image}") center/cover no-repeat`,
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: isActive ? '0 30px 60px -10px rgba(0, 0, 0, 0.6)' : 'none'
                                    }}
                                >
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                padding: '2rem',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <h3 style={{
                                                margin: 0,
                                                fontSize: '2.5rem',
                                                fontFamily: "'Outfit', sans-serif",
                                                lineHeight: 1.1
                                            }}>
                                                {item.title}
                                            </h3>

                                            <p style={{
                                                margin: '0.5rem 0 1rem',
                                                fontSize: '1rem',
                                                opacity: 0.9,
                                                fontWeight: 500
                                            }}>
                                                {item.cardSubtitle}
                                            </p>

                                            {item.description && <p style={{
                                                margin: '0 0 2rem',
                                                fontSize: '0.95rem',
                                                opacity: 0.8,
                                                lineHeight: 1.6,
                                                maxWidth: '90%'
                                            }}>
                                                {item.description}
                                            </p>}

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const viewFullLink = item.links.find(l => l.text === "VIEW FULL PROJECT");
                                                    if (viewFullLink) navigate(viewFullLink.href);
                                                }}
                                                style={{
                                                    background: 'white',
                                                    color: 'black',
                                                    border: 'none',
                                                    padding: '1rem 2rem',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 700,
                                                    borderRadius: '30px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    cursor: 'pointer',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                Enter Project <ArrowRight size={16} />
                                            </button>

                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    <button
                        className="carousel-arrow right"
                        onClick={() => scrollCarousel('right')}
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </section>

            {/* About Section */}
            <AboutSection />

            {/* Desktop Section */}
            <DesktopSection />

            {/* Contact Section */}
            <ContactSection />

        </div >
    );
}

export default Home;
