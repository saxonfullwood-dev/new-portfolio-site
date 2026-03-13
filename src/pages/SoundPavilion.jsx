import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CymaticSimulation from '../components/CymaticSimulation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Navbar from '../components/Navbar';

const SoundPavilion = () => {
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        { src: "/Sound pavilion Front.jpeg", alt: "Final Pavilion Front View" },
        { src: "/Sound pavilion images/Renders/Screenshot 2026-02-18 131034.png", alt: "Pavilion Interaction" },
        { src: "/Sound pavilion images/Renders/Screenshot 2026-02-18 131001.png", alt: "Internal Atmosphere" },
        { src: "/Sound pavilion images/Renders/Screenshot 2026-02-18 131139.png", alt: "Side Elevation Render" },
        { src: "/Sound pavilion images/Model/whole 3.png", alt: "Physical Model Overview" },
        { src: "/Sound pavilion images/Model/part 2.png", alt: "Model Detail" },
        { src: "/Sound pavilion images/Drawings of pavilion/Screenshot 2026-02-18 130934.png", alt: "Detailed Plan" },
        { src: "/Sound pavilion images/Drawings of pavilion/Scan_20240106 (2).png", alt: "Pavilion Drawing 1" },
        { src: "/Sound pavilion images/Drawings of pavilion/Scan_20240106 (3).png", alt: "Pavilion Drawing 2" },
        { src: "/Sound pavilion images/Drawings of pavilion/Screenshot 2026-02-18 130852.png", alt: "Pavilion Section" },
        { src: "/Sound pavilion images/Model/whole 2.png", alt: "Model Overview 2" },
        { src: "/Sound pavilion images/Drawings/Scan_20231229 (15).png", alt: "Plan Derivation Scan" }
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
            {/* Navbar */}
            <Navbar
                textColor="black"
                customStyle={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem 3rem' // Match existing padding if desired, Navbar default is 2rem 4rem
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
                                Sound<br />Pavilion
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
                                Architecture as a <br /> playable soundscape
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
                                    2023
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
                                    First Year
                                </span>
                            </div>

                            <a
                                href="https://drive.google.com/file/d/1UQDSVnONt_MZ3C4Z5RUTDLpbkqFYo1Uj/view?usp=sharing"
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
                                A speculative, site-specific proposal exploring how sound can be generated, visualised, and experienced through architectural form. This was my first ever architecture project and my first studio project. All drawings were required to be hand-drawn.
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
                            src="/Sound pavilion Front.jpeg"
                            alt="Sound Pavilion Hero"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            onError={(e) => { e.target.src = '/api/placeholder/1200/1600' }}
                        />
                    </div>
                </header>

                {/* 1) Merged Concept & Iteration - Layout Revised (No Apple) */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>01 — PROCESS</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            From Fruit<br />to Form
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '1.5rem' }}>
                            I started by abstracting an apple through volume, texture, negative space, reflection, and shadow. Cutting and rearranging it quickly produced new internal structures and unexpected silhouettes—forms I could explain back to the original object, even when they became visually unrecognisable.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Using these studies as a starting point, I developed a fast cycle of sketches and collages. Each iteration fed the next: a contour became a spatial idea, a texture became a circulation cue, and a shadow became a structure. Translating these drawings into physical models helped me test the ideas in 3D.
                        </p>
                    </div>

                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {/* Abstract Collage (Tall) */}
                        <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Sound pavilion images/abstract collage opf ideas.png" alt="Abstract Collage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Model Sketches (Tall) */}
                        <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Sound pavilion images/model development sketches.png" alt="Model Sketches" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Models (Wide) */}
                        <div style={{ gridColumn: 'span 2', height: '300px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Sound pavilion images/models 1.png" alt="Model Studies" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                {/* 2) Seeing differently */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>02 — PHOTOGRAPHY</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Shadow as a <br /> Moving Drawing
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Photography became a design tool rather than documentation. By changing viewpoint, distance, and lighting, the same object produced entirely different readings. This stage set up a key theme: shadow as a moving drawing, and light as a way to “play” the form.
                        </p>
                    </div>
                    <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff', marginBottom: '2rem' }}>
                        <img src="/Sound pavilion images/photography 6.png" alt="Abstract Photography" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {['photography 1.png', 'photography 2.png', 'photography 3.png', 'photography 7.png'].map((img, i) => (
                            <div key={i} style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={`/Sound pavilion images/${img}`} alt={`Light Study ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3) Pivot to sound */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Sound pavilion images/new_core_idea.jpg?v=2" alt="The Core Idea" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>03 — PIVOT TO SOUND</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            The Core Idea
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Recurring patterns began to resemble sound visualisations: waveforms, cymatic structures, resonant forms, and rhythmic repetition. I gathered precedents around how sound can be represented physically and spatially, then committed to sound as the project’s core generator.
                        </p>
                    </div>
                </section>

                {/* 4) Cymatics */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>04 — CYMATICS</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Turning Notes <br /> into Geometry
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Cymatics became the bridge between concept and form. I built a Chladni plate and tested the patterns created by vibrating sound through salt. To tie the pavilion to the church context, I used notes from <strong>G major (G, B, D)</strong>.
                        </p>
                    </div>

                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Left: Simulation */}
                        <div>
                            <div style={{ border: '1px solid #eee', borderRadius: '20px', padding: '2rem', background: '#ffffff' }}>
                                <CymaticSimulation />
                                <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                                    <em>Interactive: explore how different frequencies organise matter into geometry. <br /> Toggle G, B, D and view the composite pattern.</em>
                                </p>
                            </div>
                        </div>

                        {/* Right: Real photos */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
                                <img src="/Sound pavilion images/plate 1 1940hz B.png" alt="B Note" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
                                <img src="/Sound pavilion images/plate 2 2307 Hz d.png" alt="D Note" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
                                <img src="/Sound pavilion images/plate 3 3079 hz G.png" alt="G Note" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
                                <img src="/Sound pavilion images/cymatic comapred to church windows.png" alt="Cymatic Study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5) Plan */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>05 — PLAN</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            Pattern → Plan
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The composite cymatic pattern gave me more than a texture—it suggested a spatial order. The recurring circular logic aligned with ideas of circumambulation and contemplation, and it offered a plan structure that could encourage slow movement.
                        </p>
                    </div>
                    <div style={{ height: '500px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Sound pavilion images/Drawings/Scan_20231229 (9).png" alt="Plan Derivation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </section>

                {/* 6) Instrument - Image Changed */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>06 — INSTRUMENT</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Architecture as Instrument
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The proposal includes seating, sheltered rain elements, wind chimes made from recycled organ pipes, and a central playable drum/steel pan feature.
                        </p>
                    </div>

                    <div style={{ height: '700px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff', marginBottom: '4rem' }}>
                        {/* Switched to Elevation with Labels as requested */}
                        <img src="/Sound pavilion images/Drawings/Scan_20231229 (11).png" alt="Elevation Drawing with Labels" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Videos */}
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/9RHctvxua4I"
                                title="Sound Pavilion – Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ borderRadius: '20px' }}
                            ></iframe>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                                <em>Experiment 1 — cymbal syncopation informing rhythm and counterpoint.</em>
                            </p>
                        </div>
                        <div>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/v6tXXaTydnU"
                                title="Sound Pavilion – Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ borderRadius: '20px' }}
                            ></iframe>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                                <em>Experiment 2 — a preview of the pavilion’s tuned rain sound.</em>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7) Atmosphere */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ height: '600px', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Sound pavilion images/Model/part 1.png" alt="Acrylic Model" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>07 — ATMOSPHERE</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            Atmosphere that <br /> Changes Over Time
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            To test the pavilion’s atmospheric behaviour, I built an acrylic scale model and studied how light passes through layered sheets. The shadows it produced became part of the architecture: complex patterns fell across the ground and onto people moving through the space.
                        </p>
                    </div>
                </section>

                {/* 8) Final Outcome - Lightbox Gallery */}
                <section className="project-section" style={{ padding: '0 3rem 4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>08 — OUTCOME</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Final Proposal
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666' }}>
                            Click on any image to view details
                        </p>
                    </div>

                    {/* Masonry-style Grid */}
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

                {/* Reflection section is removed as requested */}

            </div>

        </div>
    );
};

export default SoundPavilion;
