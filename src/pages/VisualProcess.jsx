import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Navbar from '../components/Navbar';

const VisualProcess = () => {
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        { src: "/AD5621_portfolio_images/02_Overview.png", alt: "Overview" },
        { src: "/AD5621_portfolio_images/03_Illustrator_Final.png", alt: "Illustrator Final" },
        { src: "/AD5621_portfolio_images/04_Barcelona_Render_1.jpg", alt: "Barcelona Render 1" },
        { src: "/AD5621_portfolio_images/05_Barcelona_Render_2.jpg", alt: "Barcelona Render 2" },
        { src: "/AD5621_portfolio_images/93 DONE I also created daylight versions by flipping the gradient and changing the blending mode.png", alt: "Daylight Version" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_2.jpeg", alt: "Project Image 2" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_3.jpeg", alt: "Project Image 3" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_4.jpeg", alt: "Project Image 4" },
        { src: "/AD5621_portfolio_images/day 3.png", alt: "Day Study 3" },
        { src: "/AD5621_portfolio_images/day6.png", alt: "Day Study 6" },
        { src: "/AD5621_portfolio_images/final realistic image.png", alt: "Final Realistic Image" },
        { src: "/AD5621_portfolio_images/TM_02_p073.jpg", alt: "Twinmotion 02" },
        { src: "/AD5621_portfolio_images/TM_06_p112.jpg", alt: "Twinmotion 06" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_8.jpeg", alt: "Project Image 8" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_9.jpeg", alt: "Project Image 9" },
        { src: "/AD5621_portfolio_images/AD5621_S4309044_10.jpeg", alt: "Project Image 10" },
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const navigateImage = (direction) => {
        setCurrentImageIndex((prev) => {
            let newIndex = prev + direction;
            if (newIndex < 0) newIndex = galleryImages.length - 1;
            if (newIndex >= galleryImages.length) newIndex = 0;
            return newIndex;
        });
    };

    return (
        <div className="project-page" style={{
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            fontFamily: "'Inter', sans-serif",
            color: '#000'
        }}>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }}
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
                            style={{ position: 'absolute', left: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <div style={{ maxWidth: '90%', maxHeight: '90%', position: 'relative' }}>
                            <img
                                src={galleryImages[currentImageIndex].src}
                                alt={galleryImages[currentImageIndex].alt}
                                style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
                            />
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
                            style={{ position: 'absolute', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <button
                            onClick={() => setLightboxOpen(false)}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navbar */}
            <Navbar
                textColor="black"
                customStyle={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem 3rem'
                }}
            />

            {/* Main Content Container */}
            <div className="project-content" style={{ maxWidth: '1600px', margin: '0 auto', paddingTop: '8rem', paddingBottom: '4rem' }}>

                {/* Hero Section */}
                <header className="project-header" style={{
                    display: 'grid',
                    gridTemplateColumns: '40% 60%',
                    padding: '0 3rem 6rem',
                    gap: '4rem',
                    minHeight: '80vh',
                    alignItems: 'center'
                }}>
                    {/* Left Column: Text */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                style={{
                                    fontSize: 'clamp(3rem, 5vw, 6rem)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                    lineHeight: 0.9,
                                    color: '#000',
                                    marginBottom: '1rem',
                                    letterSpacing: '-2px'
                                }}
                            >
                                Visual<br />Process
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 400,
                                    color: '#666',
                                    marginBottom: '2rem',
                                    maxWidth: '400px',
                                    lineHeight: 1.4
                                }}
                            >
                                A workflow study: <br /> Illustrator → Rhino → Twinmotion
                            </motion.p>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{
                                    background: '#000',
                                    color: '#fff',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>
                                    Academic
                                </span>
                                <span style={{
                                    background: '#fff',
                                    color: '#000',
                                    border: '1px solid #e5e5e5',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>
                                    2025
                                </span>
                                <span style={{
                                    background: '#fff',
                                    color: '#000',
                                    border: '1px solid #e5e5e5',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>
                                    Second Year
                                </span>
                            </div>

                            <a
                                href="https://drive.google.com/file/d/1UQkjrwFs4shF2BWzkqL8H3jRrXyk3bm0/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '2rem',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    textDecoration: 'underline',
                                    color: '#000',
                                    cursor: 'pointer'
                                }}
                            >
                                DOWNLOAD FULL PROJECT PDF ↗
                            </a>
                        </div>

                        <div style={{ maxWidth: '90%' }}>
                            <h3 style={{
                                fontSize: '0.8rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                marginBottom: '1rem',
                                textTransform: 'uppercase'
                            }}>About</h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                color: '#444',
                                fontFamily: "'Inter', sans-serif",
                                textTransform: 'uppercase'
                            }}>
                                This module was designed to teach us to use Rhino, Grasshopper, the Adobe suite, and twinmotion. We were restricted to only these softwares. It developed my representation pipeline with a strong emphasis on <strong>stylised visualisation</strong>—using Twinmotion to control colour, contrast, lighting, and mood. The outputs focus on image-making as communication. Not just rendering a model, but creating a consistent graphic identity across scenes.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div style={{
                        width: '100%',
                        height: '80vh',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img
                            src="/AD5621_portfolio_images/01_Hero.png"
                            alt="Visual Process Hero"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            onError={(e) => { e.target.src = '/api/placeholder/1200/1600' }}
                        />
                    </div>
                </header>

                {/* 01 - TWINMOTION */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>01 — TWINMOTION</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Stylisation as a <br /> Design Language
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The strongest outcome of this work is the Twinmotion style: bold palettes, controlled lighting, and deliberate atmosphere. I treated each view like a composed frame—balancing legibility, depth, and material response so the scene reads instantly, even when it’s highly stylised.
                        </p>
                    </div>

                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {[
                            "/AD5621_portfolio_images/93 DONE I also created daylight versions by flipping the gradient and changing the blending mode.png",
                            "/AD5621_portfolio_images/AD5621_S4309044_4.jpeg",
                            "/AD5621_portfolio_images/day 3.png",
                            "/AD5621_portfolio_images/day6.png"
                        ].map((src, i) => (
                            <div key={i} style={{ height: '300px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`Twinmotion Style ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 02 - ATMOSPHERE */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>02 — ATMOSPHERE</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            Note on <br /> Atmosphere
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Rather than aiming for realism, I prioritised <strong>readability and mood</strong>: clear silhouettes, controlled highlights, and a strong separation of foreground / midground / background. This let the architecture stay clean while still feeling cinematic and intentional.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {[
                            "/AD5621_portfolio_images/AD5621_S4309044_3.jpeg",
                            "/AD5621_portfolio_images/TM_02_p073.jpg",
                            "/AD5621_portfolio_images/02_Overview.png"
                        ].map((src, i) => (
                            <div key={i} style={{ height: '300px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`Atmosphere ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 03 - SUPPORTING WORK */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>03 — SUPPORTING WORK</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            The Pipeline <br /> Behind the Images
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The supporting outputs show the workflow that enables the stylisation: clean base modelling, controlled geometry, and graphic/diagram skill that feeds into visualisation.
                        </p>
                    </div>

                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/AD5621_portfolio_images/AD5621_S4309044_5.jpeg" alt="Illustrator Work" style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#ffffff' }} />
                        </div>
                        <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/AD5621_portfolio_images/AD5621_S4309044_6.jpeg" alt="Green Roof Axon" style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#ffffff' }} />
                        </div>
                        <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/AD5621_portfolio_images/AD5621_S4309044_7.jpeg" alt="Barcelona Render" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                {/* 04 - SELECTED OUTCOMES (GALLERY) */}
                <section className="project-section" style={{ padding: '0 3rem 4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>04 — OUTCOMES</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Selected Works
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666' }}>
                            This collection shows a range of outputs, but all sit under the same goal: strong architectural communication through a consistent visual identity.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="project-gallery" style={{ columns: '2', columnGap: '2rem' }}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => openLightbox(index)}
                                style={{ breakInside: 'avoid', marginBottom: '2rem', borderRadius: '20px', overflow: 'hidden', cursor: 'zoom-in', position: 'relative', background: '#ffffff' }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute', top: '10px', right: '10px',
                                    background: 'rgba(0,0,0,0.5)', color: 'white',
                                    borderRadius: '50%', padding: '0.5rem', pointerEvents: 'none'
                                }}>
                                    <ZoomIn size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

        </div>
    );
};

export default VisualProcess;
