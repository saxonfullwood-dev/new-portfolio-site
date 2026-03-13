import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code, PenTool, Globe, Star } from 'lucide-react';

const Card = ({ children, className, style }) => (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={className}
        style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '2rem',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            ...style
        }}
    >
        {children}
    </motion.div>
);

const AboutSection = () => {
    return (
        <section id="about-section" style={{
            minHeight: '100vh',
            width: '100%',
            padding: '8rem 5% 4rem', // Top padding for navbar clear
            position: 'relative',
            zIndex: 5,
            fontFamily: "'Inter', sans-serif",
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className="about-grid">

                {/* 1. Hero / Picture Over Text -- Spans 8 columns */}
                <Card className="col-span-8" style={{ gridColumn: 'span 8', gridRow: 'span 2', position: 'relative', minHeight: '500px', alignItems: 'flex-start', justifyContent: 'flex-end' }}>

                    {/* Background Big Text */}
                    <div className="about-hero-text-big" style={{
                        position: 'absolute',
                        top: '5%',
                        left: '2%',
                        fontSize: '13vw',
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 900,
                        lineHeight: 0.8,
                        color: 'rgba(255,255,255,0.05)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}>
                        ABOUT<br />ME
                    </div>

                    {/* Image */}
                    <div style={{
                        position: 'absolute',
                        right: '-5rem', // Push further right to minimize gap
                        bottom: '-2rem',
                        width: '80%', // Increased width to cover more text and fill space
                        height: '100%',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        // Removed paddingRight to close the gap
                    }}>
                        {/* Placeholder Image */}
                        <img
                            src="/saxon cover.png"
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'bottom right',
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                filter: 'grayscale(100%) contrast(1.1)',
                            }}
                        />
                    </div>

                    {/* Foreground Text */}
                    <div style={{ zIndex: 2, maxWidth: '60%', marginBottom: '2rem' }}>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', margin: '0 0 1rem' }}>
                            Saxon<br />Fullwood
                        </h2>
                        <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                            Part 1 Architect with a background in 3D art, music theory, and entrepreneurship. I merge technical precision with multisensory research to design spaces that build culture and community.
                        </p>
                    </div>
                </Card>


                {/* 2. Education -- Spans 4 columns, top right */}
                <Card className="col-span-4 card" style={{ gridColumn: 'span 4', gridRow: 'auto' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <GraduationCap size={20} /> Education
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>University of Gloucestershire</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>BA (Hons) Architecture</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>First-Class Honours Representative</div>
                        </div>
                    </div>
                </Card>

                {/* 3. Recognition -- Spans 4 columns, middle right */}
                <Card className="col-span-4 card" style={{ gridColumn: 'span 4', gridRow: 'auto' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award size={20} /> Recognition
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>First-Class Results</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>Consistent High Achievement</div>
                        </div>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Society President</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>UoG Architecture Society</div>
                        </div>
                    </div>
                </Card>


                {/* 4. Personal Statement -- Spans 8 columns */}
                <Card className="col-span-8 card" style={{ gridColumn: 'span 8', gridRow: 'auto' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Star size={20} /> Personal Statement
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.9, lineHeight: 1.7, fontSize: '0.95rem' }}>
                        <p>
                            Before studying architecture, I was already building worlds in other ways. As a 3D and character artist, as the founder of a playing card company, and as a long-time pianist. I love how a small shift can completely change what something feels like. These ideas and skills have been a powerful foundation for my studies.
                        </p>
                        <p>
                            When I realised I had the chance to pursue architecture properly, I threw myself into it. I’m now a Student Ambassador for RIBA Gloucestershire and President of the Architecture Society because I enjoy building with people as much as designing alone. I’ve consistently achieved first-class results across my modules. I’m looking for an opportunity to keep developing this direction, using strong visual and technical skills and research into multisensory experience.
                        </p>
                    </div>
                </Card>

                {/* 5. Interests -- Spans 4 columns */}
                <Card className="col-span-4 card" style={{ gridColumn: 'span 4', gridRow: 'auto', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Globe size={20} /> Interests
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', height: '100%', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', fontSize: '1.2rem' }}>🎹</div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Music Theory</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Long-time Pianist</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', fontSize: '1.2rem' }}>🧗‍♂️</div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Sport</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Climbing</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', fontSize: '1.2rem' }}>💻</div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>3D Modeling</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Character & World Design</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>Research Focus</div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Multisensory Experience</div>
                            </div>
                        </div>
                    </div>
                </Card>


                {/* 6. Experience (Detailed) -- Spans 8 columns */}
                <Card className="col-span-8 card" style={{ gridColumn: 'span 8', gridRow: 'auto' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Briefcase size={20} /> Experience
                    </h3>

                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {[
                            { year: '2024–Now', role: 'Student Ambassador', company: 'RIBA Gloucestershire' },
                            { year: '2017–23', role: 'Freelance', company: '3D Artist' },
                            { year: '2016–23', role: 'Founder', company: 'The Seers Playing Cards' },
                        ].map((job, i) => (
                            <div key={i} style={{ flex: 1, position: 'relative' }}>
                                <div style={{
                                    width: '12px', height: '12px', borderRadius: '50%',
                                    background: i === 0 ? 'white' : 'rgba(255,255,255,0.3)',
                                    marginBottom: '0.8rem'
                                }} />
                                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{job.year}</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>{job.role}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>{job.company}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
                        <div style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.4 }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'white' }}>RIBA AMBASSADOR</div>
                            Organised industry events and talks. Represented students to the professional community and promoted architectural culture.
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.4 }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'white' }}>FREELANCE 3D</div>
                            Interactive models for games and vis. Attention to anatomy, shape language, and iteration based on feedback.
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.4 }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'white' }}>THE SEERS PLAYING CARDS</div>
                            Concept to design system. Managed visual identity and consistent artwork for a real customer base.
                        </div>
                    </div>

                    <div style={{ marginTop: '1rem', fontSize: '0.75rem', opacity: 0.4, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '12px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
                        References available upon request.
                    </div>
                </Card>


                {/* 7. Skills -- Spans 4 columns */}
                <Card className="col-span-4 card" style={{ gridColumn: 'span 4', gridRow: 'auto' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <PenTool size={20} /> Skills
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'Rhino / Grasshopper',
                            'Revit / Autocad',
                            'Adobe Creative Suite',
                            'Sketching & Model Making',
                            '3D Character Art',
                            'Multisensory Research',
                            'Teamwork & Leadership',
                            'Strong Researcher',
                            'Form & Spatial Logic',
                            'Full UK Driver’s Licence'
                        ].map((skill) => (
                            <div key={skill} style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '0.5rem 0.8rem',
                                borderRadius: '10px',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
                                {skill}
                            </div>
                        ))}
                    </div>
                </Card>



            </div>
        </section>
    );
};

export default AboutSection;
