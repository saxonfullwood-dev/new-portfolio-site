import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const NourishHub = () => {
    return (
        <div className="project-page" style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#000' }}>
            <Navbar textColor="black" customStyle={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '2rem 3rem' }} />

            <div className="project-content" style={{ maxWidth: '1600px', margin: '0 auto', paddingTop: '8rem', paddingBottom: '4rem' }}>
                <header className="project-header" style={{ display: 'grid', gridTemplateColumns: '40% 60%', padding: '0 3rem 6rem', gap: '4rem', minHeight: '80vh', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontFamily: "'Inter', sans-serif", fontWeight: 500, lineHeight: 0.9, color: '#000', marginBottom: '1rem', letterSpacing: '-2px' }}
                            >
                                Nourish<br />Hub
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                style={{ fontSize: '1.5rem', fontWeight: 400, color: '#666', marginBottom: '2rem', maxWidth: '400px', lineHeight: 1.4 }}
                            >
                                A public destination for everyday wellbeing
                            </motion.p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{ background: '#000', color: '#fff', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Academic</span>
                                <span style={{ background: '#fff', color: '#000', border: '1px solid #e5e5e5', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>2025</span>
                                <span style={{ background: '#fff', color: '#000', border: '1px solid #e5e5e5', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Second Year</span>
                            </div>
                            <a 
                                href="https://drive.google.com/file/d/10YKENe2yBY2QbLvndfIu-zlU2vOBbKke/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ 
                                    display: 'inline-block', 
                                    marginTop: '2rem', 
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
                            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>About</h3>
                            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#444', textTransform: 'uppercase' }}>
                                Nourish Cheltenham is a public wellness and food-focused building designed as a social destination rather than a closed facility. The proposal blends movement, learning, eating, and outdoor space into a single continuous experience — using landscape, circulation, and atmosphere to make wellbeing feel communal, accessible, and enjoyable.
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Nourish hub/new axon no scale.png" alt="Nourish Hub hero" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </header>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Nourish hub/1.png" alt="Concept" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>01 — CONCEPT</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>A building you move <br /> through like a landscape</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The core idea is to treat the project as an extension of the public realm: instead of separating floors into isolated plates, the design uses flowing circulation and a soft, continuous roof form to connect spaces and guide people naturally through the building. The architecture aims to feel open and inviting — more like a public park that becomes a building, rather than a building with a park added onto it.
                        </p>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>02 — DESIGN MOVE</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>One continuous system: <br /> roof, route, and structure</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The defining move is the project’s continuous spatial loop. The roof and circulation work together to create rhythm and coherence — a single system that shapes the external identity and also controls the internal experience. This allows the building to feel legible: you always understand where you are, where you’re going, and how the different programmes relate.
                        </p>
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Nourish hub/4.png" alt="Design Move" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>03 — DRAWINGS</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0' }}>Plans and section</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The plans show how the scheme is organised around a central open space with a clear public edge, while the section demonstrates the depth of the experience — double-height moments, visual connection between levels, and a route that supports both movement and pause. This keeps the project grounded as real architecture, not just a formal gesture.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Nourish hub/ground.png" alt="Ground Plan" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Nourish hub/front sec.png" alt="Front Section" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Nourish hub/3.png" alt="Programme" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>04 — PROGRAMME</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>Food + movement + learning, <br /> stitched together</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Rather than treating functions as separate departments, the programme is designed to overlap. Social food spaces sit alongside movement and learning areas so that wellbeing is framed as a shared lifestyle: eating, gathering, cooking, moving, and spending time outdoors all become part of a single narrative.
                        </p>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>05 — EXPERIENCE</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>Interior atmosphere <br /> and public character</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The visual approach focuses on how the building feels in use: light, openness, and strong connection between inside and outside. Key moments include the central interior volume, the stair/route as a social feature, and ground-level spaces designed for everyday public use rather than specialist membership culture.
                        </p>
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Nourish hub/2Scene 9.png" alt="Experience" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 4rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>06 — OUTCOME</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0' }}>A public destination <br /> for everyday wellbeing</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            Nourish Cheltenham proposes a building that makes health and community feel casual and inviting. The final outcome combines a strong architectural identity with a clear spatial logic — using a continuous route, an accessible programme mix, and a public landscape approach to create a civic atmosphere.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', height: '450px' }}>
                            <img src="/Nourish hub/5.png" alt="Outcome 1" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', height: '450px' }}>
                            <img src="/Nourish hub/Scene 33.png" alt="Outcome 2" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', height: '450px' }}>
                            <img src="/Nourish hub/2Scene 6_1.png" alt="Outcome 3" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default NourishHub;
