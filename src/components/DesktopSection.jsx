import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Folder,
    X,
    Minus,
    Square,
    FileImage
} from 'lucide-react';
import psIcon from './Icons/Adobe_Photoshop_CC_icon.svg.png';
import aiIcon from './Icons/Adobe_Illustrator_CC_icon.svg.png';
import idIcon from './Icons/Adobe_Indesign_CC_2026_icon.svg.png';
import adobeCCIcon from '/adobe cc.png';
import revitIcon from './Icons/revit.png';
import cadIcon from './Icons/autocad-logo-png_seeklogo-482394.png';
import rhinoIcon from './Icons/rhino.png';
// ghIcon not needed as removed from list
import wallpaper from './Icons/wp13280341.png';

// --- Data & Config ---

const APPS = [
    { 
        id: 'adobe-cc', 
        name: 'Creative Cloud', 
        icon: adobeCCIcon, 
        isImg: true, 
        type: 'app', 
        content: 'Adobe Creative Suite Gallery',
        projects: [
            {
                id: 'id-site-analysis',
                name: 'Site Analysis',
                softwareIcon: idIcon,
                image: '/Indesign/1.png',
                desc: 'A comprehensive site analysis project created in InDesign, detailing architectural context and environmental conditions across multiple spread layouts.',
                gallery: [
                    '/Indesign/1.png',
                    '/Indesign/2.png',
                    '/Indesign/3.png'
                ]
            },
            {
                id: 'ai-playing-cards',
                name: 'Playing Card Designs',
                softwareIcon: aiIcon,
                image: '/Illustrator/cards 1.jpeg',
                desc: 'Graphic design projects for various custom playing card decks, showing a selection of many designs developed in Adobe Illustrator with a focus on intricate line work and balanced composition.',
                gallery: [
                    '/Illustrator/cards 1.jpeg',
                    '/Illustrator/cards 2.jpeg',
                    '/Illustrator/cards 3.jpeg'
                ]
            },
            {
                id: 'ps-textured-elevation',
                name: 'Textured Elevation',
                softwareIcon: psIcon,
                image: '/Illustrator/photoshop.jpeg',
                desc: 'An architectural elevation drawing textured and post-processed in Adobe Photoshop to create a realistic material representation and atmospheric quality.',
                gallery: [
                    '/Illustrator/photoshop.jpeg'
                ]
            }
        ]
    },
    { 
        id: 'revit', 
        name: 'Revit', 
        icon: revitIcon, 
        isImg: true, 
        type: 'app', 
        content: 'BIM Models & Plans',
        projects: [
            {
                id: 'revit-stadium',
                name: 'Stadium Project',
                image: '/Revit/Stadium 1 (1).png',
                desc: 'A personal stadium project modelled in Revit and rendered using Cinema 4D to explore large-scale BIM coordination and atmospheric visualisation.',
                gallery: [
                    '/Revit/Stadium 1 (1).png',
                    '/Revit/Stadium 1 (2).png',
                    '/Revit/6.png'
                ]
            },
            {
                id: 'revit-hotel',
                name: 'Hotel',
                image: '/Revit/full hotel 3.png',
                desc: 'A comprehensive hotel development project mostly modeled in Revit, showcasing complex BIM coordination and building systems integration.',
                gallery: [
                    '/Revit/full hotel 3.png',
                    '/Revit/full hotel 4.png',
                    '/Revit/full hotel 2.png'
                ]
            },
            {
                id: 'revit-detail',
                name: 'Construction Detail',
                image: '/Revit/Construction detail.png',
                desc: 'A technical construction detail produced within Revit, demonstrating BIM-to-construction documentation capability.',
                gallery: [
                    '/Revit/Construction detail.png'
                ]
            }
        ]
    },
    { 
        id: 'cad', 
        name: 'AutoCAD', 
        icon: cadIcon, 
        isImg: true, 
        type: 'app', 
        content: 'Technical Drawings',
        projects: [
            {
                id: 'cad-hotel',
                name: 'Hotel Development',
                image: '/Autocad/hotel.png',
                desc: 'Technical development file showing comprehensive site planning and detailed hotel floor plans.',
                gallery: ['/Autocad/hotel.png']
            },
            {
                id: 'cad-details',
                name: 'Detail Drawings',
                image: '/Autocad/Details 1.png',
                desc: 'Precise technical detail drawings developed in AutoCAD to translate architectural concepts into buildable construction documentation.',
                gallery: [
                    '/Autocad/Details 1.png',
                    '/Autocad/Details 2.png'
                ]
            },
            {
                id: 'cad-sec-perspective',
                name: 'Section Perspective',
                image: '/Autocad/Sec perspective.png',
                desc: 'A technical two-point perspective section drawing developed in AutoCAD, merging orthographic precision with spatial depth.',
                gallery: [
                    '/Autocad/Sec perspective.png',
                    '/Autocad/Sec perspective 2.png'
                ]
            }
        ]
    },
    { 
        id: 'rhino', 
        name: 'Rhino', 
        icon: rhinoIcon, 
        isImg: true, 
        type: 'app', 
        content: '3D Form Studies',
        projects: [
            {
                id: 'rhino-gh-acoustic',
                name: 'Acoustic Simulation Script',
                image: '/Rhino/Grass 1.png',
                desc: 'A custom Grasshopper script developed to accurately simulate sound behavior and measure multiple acoustic parameters inside a digital model of a building.',
                gallery: [
                    '/Rhino/Grass 1.png',
                    '/Rhino/Grass 2.png',
                    '/Rhino/Grass 3.png',
                    '/Rhino/Grass 4.png',
                    '/Rhino/Grass 5.png'
                ]
            },
            {
                id: 'rhino-gh-mesh-facade',
                name: 'Mesh Facade Script',
                image: '/Rhino/next grass 1.png',
                desc: 'A Grasshopper script developed to generate and iterate complex mesh facade systems directly in Rhino.',
                gallery: [
                    '/Rhino/next grass 1.png',
                    '/Rhino/Next grass 2.png',
                    '/Rhino/Next Grass 3.png',
                    '/Rhino/Next Grass 4.png'
                ]
            },
            {
                id: 'rhino-barcelona-pavilion',
                name: 'Barcelona Pavilion',
                image: '/Rhino/barc 1.jpeg',
                desc: 'A 3D model of the Barcelona Pavilion, modeled and rendered natively within Rhino to explore architectural materiality and lighting.',
                gallery: [
                    '/Rhino/barc 1.jpeg',
                    '/Rhino/barc 2.jpeg',
                    '/Rhino/barc 3.jpeg'
                ]
            }
        ]
    },
];

const FOLDERS = [
    { id: 'old-work', name: 'Old Work', type: 'folder' },
    { id: 'uni-work', name: 'University Work', type: 'folder' },
    { id: 'personal-work', name: 'Personal Work', type: 'folder' },
];

const FILES = {
    'old-work': [
        { 
            id: 'ow-1', 
            name: 'Digital sculpting', 
            type: 'file', 
            image: '/Desktop_projects/108223256_182766129877193_2162135580172339906_n.jpg', 
            desc: 'Digital sculpting work from my previous role as a character artist. These projects were all created in ZBrush.',
            gallery: [
                '/Desktop_projects/108223256_182766129877193_2162135580172339906_n.jpg',
                '/Old proj/sculpt 1.jpg',
                '/Old proj/sculpt 2.jpg',
                '/Old proj/sculpt 3.jpg',
                '/Old proj/sculpt 4.jpeg',
                '/Old proj/new bear 1.jpg',
                '/Old proj/new bear 2.jpg'
            ]
        },
        {
            id: 'ow-3',
            name: 'Digital rendering',
            type: 'file',
            image: '/Old proj/Render.jpg',
            desc: 'A range of digital renders produced using various software including Cinema 4D, Maya, Octane, Vray and 3Ds Max.',
            gallery: [
                '/Old proj/Render.jpg',
                '/Old proj/render 1.jpg',
                '/Old proj/render 2.jpg',
                '/Old proj/render 3.jpg',
                '/Old proj/render 4.jpg',
                '/Old proj/render 5.jpg',
                '/Old proj/render 6.jpg'
            ]
        },
        {
            id: 'ow-4',
            name: 'Playing cards',
            type: 'file',
            image: '/Old proj/cards cover image.jpeg',
            desc: 'Designs for several custom decks of playing cards. These 3D renders were the primary material used to advertise the decks.',
            gallery: [
                '/Old proj/cards cover image.jpeg',
                '/Old proj/cards cover image 1.jpeg',
                '/Old proj/cards 1.jpeg',
                '/Old proj/cards 2.jpeg',
                '/Old proj/Cards 3.jpeg',
                '/Old proj/cards 4.jpeg',
                '/Old proj/cards 5.jpeg',
                '/Old proj/cards 6.jpeg',
                '/Old proj/cards 7.jpeg',
                '/Old proj/cards 8.jpeg'
            ]
        }
    ],
    'uni-work': [
        {
            id: 'uw-sustainability',
            name: 'Sustainability',
            type: 'file',
            image: '/Sustainibility/dc3441_76c23523afe04c53a2890a0bb66f754b~mv2.png',
            desc: 'This project shows one of my sustainable projects and a case study. The link below redirects to the full project website.',
            externalLink: 'https://s4309044.wixsite.com/architecture-technol'
        },
        {
            id: 'uw-model-making',
            name: 'Model making',
            type: 'file',
            image: '/Model making/physical model.png',
            desc: 'A selection of physical models created throughout university, exploring architectural form, structure and materiality.',
            gallery: [
                '/Model making/physical model.png',
                '/Model making/model facades.png',
                '/Model making/1.png',
                '/Model making/2.jpeg',
                '/Model making/3.jpeg',
                '/Model making/4.jpeg',
                '/Model making/5.png',
                '/Model making/20250521_184046.jpg',
                '/Model making/20250521_184139.jpg'
            ]
        },
        {
            id: 'uw-sketches',
            name: 'Sketches',
            type: 'file',
            image: '/Sketches/WhatsApp Image 2026-03-13 at 18.10.535.jpeg',
            desc: 'An assortment of architectural sketches and hand-drawings produced during my time at university.',
            gallery: [
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.535.jpeg',
                '/Sketches/4.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.53.jpeg',
                '/Sketches/8.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.537.jpeg',
                '/Sketches/1.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.5310.jpeg',
                '/Sketches/5.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.532.jpeg',
                '/Sketches/2.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.533.jpeg',
                '/Sketches/7.jpeg',
                '/Sketches/3.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.534.jpeg',
                '/Sketches/9.jpeg',
                '/Sketches/6.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.539.jpeg',
                '/Sketches/WhatsApp Image 2026-03-13 at 18.10.536.jpeg'
            ]
        }
    ],
    'personal-work': [
        {
            id: 'pw-photography',
            name: 'Photography',
            type: 'file',
            image: '/Photography/1.jpeg',
            desc: 'A collection of some of my favourite photos taken over the years, exploring light, composition and urban textures.',
            gallery: [
                '/Photography/1.jpeg',
                '/Photography/2.jpeg',
                '/Photography/3.jpeg',
                '/Photography/4.jpeg',
                '/Photography/5.jpeg',
                '/Photography/6.jpeg'
            ]
        },
        {
            id: 'pw-tudor-house',
            name: 'Tudor House',
            type: 'file',
            image: '/Tudor house/EF4746BC-C64C-4202-A20F-9973E4AA0E7C.jpeg',
            desc: 'A high school project featuring physical models of a Tudor-style house, exploring traditional architectural forms and textures.',
            gallery: [
                '/Tudor house/EF4746BC-C64C-4202-A20F-9973E4AA0E7C.jpeg',
                '/Tudor house/0E49D798-64BE-4FBE-A5F2-716C43BA5B5F.jpeg',
                '/Tudor house/80CC9384-C48D-41C0-8FA0-C8AE814FABE5.jpeg',
                '/Tudor house/993AFCA8-BCFC-4D81-BB22-C840ECCAEEFF.jpeg',
                '/Tudor house/A61E7BCE-6A2F-4065-9F5B-5E0004EE4D07.jpeg',
                '/Tudor house/B157D52F-F38B-430B-B51F-6DC7B0DA2534.jpeg',
                '/Tudor house/D8CD9021-911B-4724-A9CF-E6C5C0D4A533.jpeg',
                '/Tudor house/D9EE4501-54A2-4BA5-B85C-72CA11042AF4.jpeg'
            ]
        },
        {
            id: 'pw-garden-workshop',
            name: 'Garden Workshop',
            type: 'file',
            image: '/Villa/Cover image.jpeg',
            desc: 'A design for a garden workshop produced before starting university. The final project was eventually built, as shown in the photographs.',
            gallery: [
                '/Villa/Cover image.jpeg',
                '/Villa/1.jpeg',
                '/Villa/2.jpeg',
                '/Villa/3.jpeg',
                '/Villa/4.jpeg',
                '/Villa/5.jpeg'
            ]
        },
        {
            id: 'pw-silver-bangle',
            name: 'Silver Bangle',
            type: 'file',
            image: '/Bangle/1.jpeg',
            desc: 'A bespoke bangle design, hand-cast in silver to explore organic forms and material craft.',
            gallery: [
                '/Bangle/1.jpeg',
                '/Bangle/3.jpeg',
                '/Bangle/4.jpeg',
                '/Bangle/5.jpeg'
            ]
        },
        {
            id: 'pw-ensuite-renovation',
            name: 'Ensuite Renovation',
            type: 'file',
            image: '/Ensuite/1.jpeg',
            desc: 'A series of interior renders produced to test material and design choices for an ensuite renovation.',
            gallery: [
                '/Ensuite/1.jpeg',
                '/Ensuite/2.jpeg',
                '/Ensuite/3.jpeg',
                '/Ensuite/4.jpeg',
                '/Ensuite/5.jpeg',
                '/Ensuite/6.jpeg',
                '/Ensuite/7.jpeg',
                '/Ensuite/8.jpeg'
            ]
        }
    ],
};

// --- Components ---

const Window = ({ window, onClose, onMinimize, isActive, onFocus }) => {
    const isApp = window.type === 'app';
    const isImage = window.type === 'file';

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
                position: 'absolute',
                top: isApp ? '10%' : '15%',
                left: isApp ? '15%' : '20%',
                width: isImage ? '600px' : '700px',
                height: isImage ? 'auto' : '500px',
                backgroundColor: 'rgba(32, 32, 32, 0.85)',
                backdropFilter: 'blur(20px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                zIndex: isActive ? 50 : 10,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                maxWidth: '90vw',
                maxHeight: '80vh',
            }}
            onMouseDown={onFocus}
        >
            {/* Title Bar */}
            <div className="window-header" style={{
                height: '40px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'grab'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>
                    {window.isImg ? (
                        <img src={window.icon} alt="icon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                    ) : window.type === 'file' && window.content && !window.content.includes('placeholder') ? (
                        <img src={window.content} alt="icon" style={{ width: '16px', height: '16px', objectFit: 'cover', borderRadius: '2px' }} />
                    ) : (
                        window.icon && <window.icon size={16} color={window.color || 'white'} />
                    )}
                    {window.title}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={(e) => { e.stopPropagation(); onMinimize(window.id); }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.7 }}><Minus size={16} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.7 }}><Square size={14} /></button>
                    <button onClick={(e) => { e.stopPropagation(); onClose(window.id); }} style={{ background: 'none', border: 'none', color: '#ff5f57', cursor: 'pointer' }}><X size={16} /></button>
                </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, overflow: 'auto', padding: '1rem', color: 'white' }}>
                {window.type === 'folder' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                        {FILES[window.dataId]?.map(file => (
                            <div
                                key={file.id}
                                onClick={() => window.openFile(file)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                {file.image && !file.image.includes('placeholder') ? (
                                    <div style={{
                                        width: '48px', height: '48px',
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        marginBottom: '4px',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                    }}>
                                        <img src={file.image} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ) : (
                                    <FileImage size={48} color="#4CC2FF" strokeWidth={1} />
                                )}
                                <span style={{ fontSize: '0.8rem', textAlign: 'center', wordBreak: 'break-word', marginTop: '0.25rem' }}>{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {window.type === 'app' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                            {window.isImg ? (
                                <img src={window.icon} alt="icon" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
                            ) : (
                                <window.icon size={64} color={window.color} />
                            )}
                            <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>{window.title}</h2>
                            <p style={{ opacity: 0.7 }}>{window.content}</p>
                        </div>
                        
                        {/* Projects Grid if exists, otherwise placeholder */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem', width: '100%' }}>
                            {window.projects ? window.projects.map(project => (
                                <div 
                                    key={project.id} 
                                    onClick={() => window.openProject(project)}
                                    style={{ 
                                        aspectRatio: '16/9', 
                                        background: project.image ? `url("${project.image}") center/cover` : 'rgba(255,255,255,0.1)', 
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                                >
                                    <div style={{ 
                                        position: 'absolute', 
                                        bottom: 0, 
                                        left: 0, 
                                        right: 0, 
                                        padding: '0.5rem', 
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', 
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <span>{project.name}</span>
                                        {project.softwareIcon && (
                                            <img src={project.softwareIcon} alt="software" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                                        )}
                                    </div>
                                </div>
                            )) : (
                                [1, 2, 3].map(i => (
                                    <div key={i} style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                                ))
                            )}
                        </div>
                    </div>
                )}

                {window.type === 'file' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '0' }}>
                           <div 
                             id={`viewer-${window.id}`}
                             style={{
                                flex: 1,
                                background: `url("${window.content}") center/contain no-repeat`,
                                backgroundColor: 'black',
                                borderRadius: '4px',
                                minHeight: '300px'
                            }} />
                            
                            {window.gallery && (
                                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                    {window.gallery.map((img, idx) => (
                                        <div 
                                            key={idx}
                                            onClick={() => {
                                                document.getElementById(`viewer-${window.id}`).style.backgroundImage = `url("${img}")`;
                                            }}
                                            style={{
                                                width: '80px', height: '60px', flexShrink: 0,
                                                background: `url("${img}") center/cover`,
                                                borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div style={{ 
                            padding: '1rem', 
                            background: 'rgba(255,255,255,0.05)', 
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem' 
                        }}>
                            <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{window.description}</p>
                            {window.externalLink && (
                                <a 
                                    href={window.externalLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#4CC2FF',
                                        color: 'black',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        width: 'fit-content',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
                                >
                                    Open Project Website
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const DesktopIcon = ({ icon: Icon, label, onClick, color }) => (
    <div
        onClick={onClick}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            width: '80px',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '4px',
            color: 'white',
            textAlign: 'center'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        <Icon size={40} color={color || '#FFD060'} fill={color ? 'none' : '#FFD060'} strokeWidth={1.5} />
        <span style={{ fontSize: '0.8rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>{label}</span>
    </div>
);

const TaskbarItem = ({ icon: Icon, isImg, isActive, onClick, color, isOpen }) => (
    <div
        onClick={onClick}
        style={{
            height: '40px',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => !isActive && (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
        onMouseLeave={(e) => !isActive && (e.currentTarget.style.backgroundColor = 'transparent')}
    >
        {isImg ? (
            <img src={Icon} alt="app" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
        ) : (
            <Icon size={24} color={color} />
        )}
        {isOpen && (
            <div style={{
                position: 'absolute',
                bottom: '-4px',
                width: '6px',
                height: '3px',
                backgroundColor: isActive ? '#4CC2FF' : 'rgba(255,255,255,0.5)',
                borderRadius: '2px'
            }} />
        )}
    </div>
);

const DesktopSection = () => {
    const [windows, setWindows] = useState([]);
    const [activeWindowId, setActiveWindowId] = useState(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openWindow = (id, type, title, data = {}) => {
        if (windows.find(w => w.id === id)) {
            setActiveWindowId(id);
            setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: false } : w));
            return;
        }

        const newWindow = {
            id,
            type, // 'folder', 'app', 'file'
            title,
            isMinimized: false,
            zIndex: windows.length + 1,
            ...data
        };

        setWindows([...windows, newWindow]);
        setActiveWindowId(id);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(w => w.id !== id));
        if (activeWindowId === id) {
            setActiveWindowId(windows.length > 1 ? windows[windows.length - 2].id : null);
        }
    };

    const minimizeWindow = (id) => {
        setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: true } : w));
        setActiveWindowId(null);
    };

    const focusWindow = (id) => {
        setActiveWindowId(id);
        // Optional: Reordering for Z-index logic if complex overkill for now
    };

    const handleOpenFile = (file) => {
        openWindow(file.id, 'file', file.name, {
            content: file.image,
            description: file.desc,
            icon: FileImage,
            gallery: file.gallery,
            externalLink: file.externalLink
        });
    };

    return (
        <section id="desktop-section" style={{
            minHeight: '100vh',
            width: '100%',
            padding: '4rem 5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="desktop-container" style={{
                background: `url(${wallpaper}) center/cover`,
                backgroundColor: '#0f172a',
            }}>
                {/* Wallpaper Overlay Removed */}


                {/* Desktop Area */}
                <div className="desktop-content">
                    {FOLDERS.map(folder => (
                        <DesktopIcon
                            key={folder.id}
                            icon={Folder}
                            label={folder.name}
                            onClick={() => openWindow(folder.id, 'folder', folder.name, {
                                dataId: folder.id,
                                openFile: handleOpenFile,
                                icon: Folder
                            })}
                        />
                    ))}
                </div>

                {/* Windows Container */}
                <div className="desktop-windows-layer">
                    <AnimatePresence>
                        {windows.map(w => !w.isMinimized && (
                            <div key={w.id} style={{ pointerEvents: 'auto', display: 'contents' }}>
                                <Window
                                    window={w}
                                    onClose={closeWindow}
                                    onMinimize={minimizeWindow}
                                    isActive={w.id === activeWindowId}
                                    onFocus={() => focusWindow(w.id)}
                                />
                            </div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Taskbar */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    background: 'rgba(32, 32, 32, 0.75)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    zIndex: 100
                }}>
                    {/* Windows Start Button Placeholder */}
                    <div style={{ marginRight: '1rem', cursor: 'pointer', opacity: 0.9 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                            {[1, 2, 3, 4].map(i => <div key={i} style={{ width: '10px', height: '10px', background: '#00A4EF' }} />)}
                        </div>
                    </div>

                    {APPS.map(app => (
                        <TaskbarItem
                            key={app.id}
                            icon={app.icon}
                            isImg={app.isImg}
                            color={app.color}
                            isOpen={windows.some(w => w.id === app.id)}
                            isActive={activeWindowId === app.id}
                            onClick={() => {
                                if (windows.some(w => w.id === app.id && !w.isMinimized && activeWindowId === app.id)) {
                                    minimizeWindow(app.id);
                                } else {
                                    openWindow(app.id, 'app', app.name, { 
                                        icon: app.icon, 
                                        isImg: app.isImg, 
                                        content: app.content,
                                        projects: app.projects,
                                        openProject: (p) => handleOpenFile({ id: p.id, name: p.name, image: p.image, desc: p.desc, gallery: p.gallery })
                                    });
                                }
                            }}
                        />
                    ))}

                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 0.5rem' }} />

                    {/* Open Folders in Taskbar */}
                    {windows.filter(w => w.type === 'folder' || w.type === 'file').map(w => (
                        <TaskbarItem
                            key={w.id}
                            icon={w.type === 'file' ? FileImage : Folder}
                            color={w.type === 'file' ? '#4CC2FF' : '#FFD060'}
                            isOpen={true}
                            isActive={activeWindowId === w.id}
                            onClick={() => {
                                if (activeWindowId === w.id && !w.isMinimized) {
                                    minimizeWindow(w.id);
                                } else {
                                    focusWindow(w.id);
                                    if (w.isMinimized) {
                                        setWindows(windows.map(win => win.id === w.id ? { ...win, isMinimized: false } : win));
                                    }
                                }
                            }}
                        />
                    ))}

                    {/* Clock & System Tray */}
                    <div className="desktop-clock" style={{
                        position: 'absolute',
                        right: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        fontSize: '0.75rem',
                        color: 'white',
                        opacity: 0.9
                    }}>
                        <div style={{ fontWeight: 500 }}>
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div style={{ fontSize: '0.7rem' }}>
                            {time.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DesktopSection;
