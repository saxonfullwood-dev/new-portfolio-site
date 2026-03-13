import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Instagram, FileText, ArrowUpRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href, isLink = false }) => (
    <motion.div
        whileHover={{ x: 10 }}
        style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem', cursor: isLink ? 'pointer' : 'default' }}
        onClick={() => isLink && href && window.open(href, '_blank')}
    >
        <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '1rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Icon size={24} color="white" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.2rem', fontFamily: "'Inter', sans-serif" }}>{label}</span>
            {isLink ? (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    {value} <ArrowUpRight size={16} opacity={0.5} />
                </a>
            ) : (
                <span style={{ fontSize: '1.2rem', fontWeight: 500, fontFamily: "'Outfit', sans-serif" }}>{value}</span>
            )}
        </div>
    </motion.div>
);

const ContactSection = () => {
    return (
        <section id="contact-section" style={{
            minHeight: '80vh',
            width: '100%',
            padding: '4rem 10%',
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', sans-serif",
        }}>
            <div className="contact-container">

                {/* Left Side - Big Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ flex: 1, minWidth: '300px' }}
                >
                    <h2 style={{
                        fontSize: '6rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: '2rem',
                        fontFamily: "'Outfit', sans-serif"
                    }}>
                        Get in<br />touch.
                    </h2>

                </motion.div>

                {/* Right Side - Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ flex: 1, minWidth: '300px' }}
                >
                    <ContactItem
                        icon={Phone}
                        label="Phone"
                        value="+44 7527152050"
                        href="tel:+447527152050"
                        isLink={true}
                    />

                    <ContactItem
                        icon={Mail}
                        label="Mail"
                        value="saxonfullwood@gmail.com"
                        href="mailto:saxonfullwood@gmail.com"
                        isLink={true}
                    />

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                        <motion.a
                            href="https://www.linkedin.com/in/saxon-fullwood-141442328/"
                            target="_blank"
                            whileHover={{ y: -5, color: '#0077b5' }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                        >
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                                <Linkedin size={24} />
                            </div>
                            <span style={{ fontWeight: 600 }}>LinkedIn</span>
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/saxonfullwood/"
                            target="_blank"
                            whileHover={{ y: -5, color: '#E1306C' }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                        >
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                                <Instagram size={24} />
                            </div>
                            <span style={{ fontWeight: 600 }}>Instagram</span>
                        </motion.a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            marginTop: '3rem',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '30px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        <FileText size={20} />
                        Download CV
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
