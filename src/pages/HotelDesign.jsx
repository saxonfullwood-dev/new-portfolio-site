import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Navbar from '../components/Navbar';

const HotelDesign = () => {
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        { src: "/LadbrookeHotel_curated_images_part3/p39_img_180.jpeg", alt: "Exterior Stylised Render" },
        { src: "/LadbrookeHotel_curated_images_part3/p40_img_183.jpeg", alt: "Aerial Context Render" },
        { src: "/LadbrookeHotel_curated_images_part3/p25_img_098.png", alt: "Key Section" },
        { src: "/LadbrookeHotel_curated_images_part3/p22_img_062.png", alt: "Ground Floor Public Edge" },
        { src: "/LadbrookeHotel_curated_images_part3/p44_img_194.png", alt: "Interior Leisure Render" },
        { src: "/LadbrookeHotel_curated_images_part3/p47_img_211.png", alt: "Detail Façade Render" },
        { src: "/LadbrookeHotel_curated_images_part3/p54_img_239.jpeg", alt: "Physical Model Overall" },
        { src: "/LadbrookeHotel_curated_images_part3/p60_img_266.jpeg", alt: "Physical Model Detail" },
        { src: "/LadbrookeHotel_curated_images_part3/p33_img_166.png", alt: "Room Bay Logic" },
        { src: "/LadbrookeHotel_curated_images_part3/p34_img_174.jpeg", alt: "Typical Floor Plan" },
        { src: "/LadbrookeHotel_curated_images_part3/p48_img_217.png", alt: "Atmospheric Render" },
        { src: "/LadbrookeHotel_curated_images_part3/p05_img_006.jpeg", alt: "Context Texture" },
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
                                Ladbrooke<br />Hotel
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
                                A destination building in Digbeth: <br /> Guest accommodation + public leisure.
                            </motion.p>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{
                                    background: '#000', color: '#fff', padding: '0.4rem 1.2rem',
                                    borderRadius: '50px', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700, textTransform: 'uppercase'
                                }}>
                                    Academic
                                </span>
                                <span style={{
                                    background: '#fff', color: '#000', border: '1px solid #e5e5e5',
                                    padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem',
                                    fontFamily: "'Inter', sans-serif", fontWeight: 700, textTransform: 'uppercase'
                                }}>
                                    2024
                                </span>
                                <span style={{
                                    background: '#fff', color: '#000', border: '1px solid #e5e5e5',
                                    padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem',
                                    fontFamily: "'Inter', sans-serif", fontWeight: 700, textTransform: 'uppercase'
                                }}>
                                    Third Year
                                </span>
                            </div>
                            <a
                                href="https://drive.google.com/file/d/1HJ9giSMZi5Tti3qw5ZravPCa4X8dwPez/view?usp=sharing"
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
                                fontSize: '0.8rem', fontFamily: "'Inter', sans-serif", fontWeight: 700,
                                marginBottom: '1rem', textTransform: 'uppercase'
                            }}>About</h3>
                            <p style={{
                                fontSize: '0.9rem', lineHeight: 1.6, color: '#444', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase'
                            }}>
                                The Ladbrooke Hotel proposes a new destination building in Digbeth that combines guest accommodation with public and leisure programmes. The project is designed to sit confidently within Digbeth’s industrial character—working with the area’s texture, grain, and culture rather than smoothing it out. Alongside the architectural planning, I developed a stylised visual language to communicate the proposal: simplified materials, graphic entourage, controlled colour, and atmosphere that makes the scheme readable and distinctive at a glance.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        width: '100%', height: '80vh', borderRadius: '20px', overflow: 'hidden', position: 'relative'
                    }}>
                        <img
                            src="/LadbrookeHotel_curated_images_part3/front facade.jpeg"
                            alt="Ladbrooke Hotel Hero"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onMouseOver={(e) => e.target.src = "/LadbrookeHotel_curated_images_part3/p39_img_180.jpeg"}
                            onMouseOut={(e) => e.target.src = "/LadbrookeHotel_curated_images_part3/front facade.jpeg"}
                        />
                    </div>
                </header>

                {/* 01 - CONTEXT */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>01 — CONTEXT</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Digbeth as texture <br /> + identity
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Digbeth’s value isn’t “clean” urbanism—it’s personality: layered surfaces, industrial scale, and cultural activity. I used this as a design driver, aiming for an architecture that feels like it belongs in the district while still reading as a new landmark with a clear public edge.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {[
                            "/LadbrookeHotel_curated_images_part3/p21_img_049.jpeg",
                            "/LadbrookeHotel_curated_images_part3/p32_img_156.jpeg",
                            "/LadbrookeHotel_curated_images_part3/p34_img_174.jpeg"
                        ].map((src, i) => (
                            <div key={i} style={{ height: '300px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`Context ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 02 - PROGRAMME */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>02 — PROGRAMME</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            A hotel that also <br /> works for locals
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The proposal is organised as a hotel first, but extends into a broader leisure offer—so it operates as a public destination as well as accommodation. Public-facing spaces anchor the ground level, while wellness and activity programmes create a second identity beyond “rooms only”.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            "/LadbrookeHotel_curated_images_part3/new_local_1.png",
                            "/LadbrookeHotel_curated_images_part3/new_local_2.jpg",
                            "/LadbrookeHotel_curated_images_part3/new_local_3.jpg",
                            "/LadbrookeHotel_curated_images_part3/new_local_4.jpg"
                        ].map((src, i) => (
                            <div key={i} style={{ height: '250px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`Programme ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 03 - MASSING + SECTION */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>03 — MASSING + SECTION</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            A big building that <br /> still feels navigable
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Rather than treating the scheme as a single monolithic stack, the section strategy breaks the experience into readable moments—moving from public, to leisure, to accommodation. This makes the building feel legible and human even at a larger scale.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {[
                            "/LadbrookeHotel_curated_images_part3/new_plan_1.png",
                            "/LadbrookeHotel_curated_images_part3/new_plan_2.png"
                        ].map((src, i) => (
                            <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`Massing ${i}`} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04 - SYSTEM + REPEATABILITY */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>04 — SYSTEM + REPEATABILITY</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            Room + bay logic
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            To keep the project believable, I developed a repeatable room and bay logic—so the design reads as something that could actually be built, coordinated, and rationalised, not just visualised.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        {[
                            "/LadbrookeHotel_curated_images_part3/p54_img_239.jpeg",
                            "/LadbrookeHotel_curated_images_part3/new_room_logic_2.png"
                        ].map((src, i) => (
                            <div key={i} style={{ height: '400px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <img src={src} alt={`System ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 05 - VISUALISATION */}
                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>05 — FABRIC + FAÇADE</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0' }}>
                            A new envelope that <br /> still feels like Digbeth
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Rather than relying on visualisation style, the project’s identity comes from the façade system: a repeatable rhythm that gives the building depth, shadow, and a strong street presence. I developed the outer skin as a mediator between the hotel’s internal order (rooms + corridors + cores) and Digbeth’s messy, high-texture context—so the building reads as bold and contemporary, but still grounded in the district’s industrial language.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <div style={{ height: '400px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/front facade.jpeg" alt="Exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ height: '400px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/p39_img_180.jpeg" alt="Aerial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ height: '400px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/p59_img_264.jpeg" alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ height: '400px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/p60_img_266.jpeg" alt="Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                {/* 06 - PHYSICAL MODEL */}
                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            background: '#000', color: '#fff', padding: '0.2rem 0.6rem',
                            fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", borderRadius: '4px'
                        }}>06 — PHYSICAL MODEL</span>
                        <h2 style={{ fontSize: '3rem', fontFamily: "'Inter', sans-serif", lineHeight: 1, margin: '1.5rem 0 2rem' }}>
                            Testing rhythm and <br /> depth in real light
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The physical model helped test façade depth, repetition, and corner reading. Photographing it under strong light made it easier to judge whether the envelope felt intentional and rhythmic rather than flat or accidental.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div style={{ height: '300px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/new_model_1.png" alt="Model Overall" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ height: '300px', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/LadbrookeHotel_curated_images_part3/new_model_2.png" alt="Model Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>


            </div>

        </div>
    );
};

export default HotelDesign;
