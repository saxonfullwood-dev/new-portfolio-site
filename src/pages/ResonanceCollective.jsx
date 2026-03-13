import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const ResonanceCollective = () => {
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
                                Resonance<br />Collective
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                style={{ fontSize: '1.5rem', fontWeight: 400, color: '#666', marginBottom: '2rem', maxWidth: '400px', lineHeight: 1.4 }}
                            >
                                A home should not silence music
                            </motion.p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{ background: '#000', color: '#fff', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Academic</span>
                                <span style={{ background: '#fff', color: '#000', border: '1px solid #e5e5e5', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>2025</span>
                                <span style={{ background: '#fff', color: '#000', border: '1px solid #e5e5e5', padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Second Year</span>
                            </div>
                        </div>

                        <div style={{ maxWidth: '90%' }}>
                            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>About</h3>
                            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#444', textTransform: 'uppercase' }}>
                                The Resonance Collective is a cohousing proposal built around a simple idea: a home should not silence music — it should support it. The project treats sound as a design driver, using acoustic logic to balance rehearsal and performance with privacy and rest. The result is a community where creative life is supported both socially and spatially, through a clear hierarchy of shared and private spaces.
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/new_001.png" alt="Resonance collective hero" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </header>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Resonance_Collective/concept_diagram.png" alt="Concept" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>01 — CONCEPT</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>A home should not <br /> silence music</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            This project is designed for musicians and creative households who need both togetherness and retreat. Rather than isolating everyone into separate units, the scheme is organised around shared culture: listening, playing, gathering, and living with sound as an everyday condition. The architectural identity comes from this tension — calm domestic spaces paired with moments designed for energy and expression.
                        </p>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>02 — SOUND-LED STRATEGY</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>Using interference to <br /> place quiet living zones</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The masterplan is generated from sound. I used interference logic to identify calmer zones for housing and to direct more active communal spaces toward areas where the scheme can be confident and outward-facing. This keeps the community’s musical life central, while reducing unnecessary impact at the edges.
                        </p>
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff', margin: '0 auto', width: 'fit-content' }}>
                        <img src="/Resonance_Collective/quiet_living_zones.png" alt="Strategy" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto', display: 'block' }} />
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>03 — THE HOMES</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0' }}>A repeatable system with <br /> a wave-roof identity</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The housing is developed as a repeatable family of units with a shared architectural language. The wave-like roof profile connects the domestic buildings back to the project’s musical theme, while also giving the scheme a consistent silhouette across the site. Internally, the homes are organised with clear privacy gradients so they can support both hosting and quiet practice.
                        </p>
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Resonance_Collective/site section.png" alt="The Homes" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>04 — UNIT TYPES</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0' }}>1-, 2-, and 3-bed variants</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The proposal resolves into a clear set of unit types that share the same underlying system while adapting to different household sizes. Plans and sections demonstrate how the homes work spatially across levels, and axonometric/exploded views show how the form is built up logically from a simple starting volume into the final roofed house.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                         <div style={{ borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}><img src="/Resonance_Collective/front elevation 1-50.png" alt="1-bed" style={{width: '100%', height: 'auto', display: 'block'}} /></div>
                         <div style={{ borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}><img src="/Resonance_Collective/rear elevation.png" alt="2-bed" style={{width: '100%', height: 'auto', display: 'block'}} /></div>
                         <div style={{ borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}><img src="/Resonance_Collective/3 bed axon new.png" alt="3-bed" style={{width: '100%', height: 'auto', display: 'block'}} /></div>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                        <img src="/Resonance_Collective/pavilion front new.png" alt="Community House" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>05 — COMMUNITY HOUSE</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0 2rem' }}>Sound-to-form: the shared <br />building as the symbol</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The community house is generated directly from sound — translating musical waveforms into architectural form. It becomes the scheme’s cultural anchor: a space for gathering, rehearsal, and performance, and the clearest moment where the project’s concept becomes legible as architecture rather than just narrative.
                        </p>
                    </div>
                </section>

                <section className="project-section" style={{ padding: '0 3rem 4rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span style={{ background: '#000', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.7rem', borderRadius: '4px' }}>06 — FINAL PROPOSAL</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1, margin: '1.5rem 0' }}>The resolved scheme</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                            The final proposal brings the strategy, housing system, and community building together into a coherent whole. The scheme is presented through a concise final set: overall plan, key drawings, and final visuals that communicate how the community looks, works, and feels.
                        </p>
                    </div>
                    <div className="inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Resonance_Collective/Image1_010.png" alt="Final Proposal 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Resonance_Collective/Image1_011.png" alt="Final Proposal 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Resonance_Collective/new_002.png" alt="Final Proposal 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#ffffff' }}>
                            <img src="/Resonance_Collective/new.png" alt="Final Proposal 4" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ResonanceCollective;
