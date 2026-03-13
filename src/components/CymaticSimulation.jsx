import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

const CymaticSimulation = () => {
    const canvasRef = useRef(null);
    const [frequency, setFrequency] = useState(5); // Roughly maps to complexity
    const [amplitude, setAmplitude] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const requestRef = useRef();

    // Chladni pattern parameters
    const tRef = useRef(0);

    const draw = (ctx, width, height) => {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const t = tRef.current;

        const n = 1 + frequency * 0.5;
        const m = 2 + frequency * 0.2;

        const vib = isPlaying ? Math.sin(t * 10) * 0.05 : 0;

        // Keep the PLATE dark (Black Chladni Plate)
        const bgColor = { r: 20, g: 20, b: 30 }; // Dark blue/grey background
        const sandColor = { r: 240, g: 230, b: 200 }; // White/Gold tint sand

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const nx = (x / width) * 2 - 1;
                const ny = (y / height) * 2 - 1;

                const val = Math.cos((n + vib) * Math.PI * nx) * Math.cos((m - vib) * Math.PI * ny) -
                    Math.cos((m - vib) * Math.PI * nx) * Math.cos((n + vib) * Math.PI * ny);

                const intensity = Math.abs(val);
                const threshold = 0.15 / (amplitude * 0.8 + 0.2);

                let r, g, b, a;

                if (intensity < threshold) {
                    const noise = Math.random() * 50;
                    r = sandColor.r + noise;
                    g = sandColor.g + noise;
                    b = sandColor.b + noise;
                    a = 255;

                    const alpha = 1 - (intensity / threshold);
                    a = 255 * alpha;
                } else {
                    r = bgColor.r;
                    g = bgColor.g;
                    b = bgColor.b;
                    a = 255;
                }

                const index = (x + y * width) * 4;
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
                data[index + 3] = a;
            }
        }
        ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
        if (isPlaying) {
            tRef.current += 0.02;
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                draw(ctx, canvas.width, canvas.height);
            }
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                draw(ctx, canvas.width, canvas.height);
            }
            cancelAnimationFrame(requestRef.current);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isPlaying, frequency, amplitude]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            draw(ctx, canvas.width, canvas.height);
        }
    }, [])

    return (
        <div style={{
            background: 'transparent', // Transparent to blend with white page
            borderRadius: '24px',
            padding: '1rem', // Reduced padding since we don't need a heavy container
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '100%',
        }}>
            <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Generative Chladni Plate</h3>
                <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6, fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>
                    Adjust frequency to visualise how sound organises matter into geometric standing waves.
                </p>
            </div>

            <div style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)', // Darker shadow for the plate itself to pop
                border: '1px solid #333' // Subtle darker border for the plate
            }}>
                <canvas
                    ref={canvasRef}
                    width={300}
                    height={300}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#000', fontSize: '0.8rem', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        <span>Frequency Complexity</span>
                        <span>{frequency.toFixed(1)} Hz</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.1"
                        value={frequency}
                        onChange={(e) => setFrequency(parseFloat(e.target.value))}
                        style={{
                            width: '100%',
                            accentColor: '#000', // Black accent for white theme
                            cursor: 'pointer'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        style={{
                            background: isPlaying ? '#000' : '#fff',
                            color: isPlaying ? '#fff' : '#000',
                            border: '1px solid #000',
                            borderRadius: '50px',
                            padding: '0.8rem 2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            if (!isPlaying) e.target.style.background = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                            if (!isPlaying) e.target.style.background = '#fff';
                        }}
                    >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        {isPlaying ? 'Pause Vibration' : 'Activate Plate'}
                    </button>

                    <button
                        onClick={() => { setFrequency(Math.floor(Math.random() * 19) + 1); setIsPlaying(true); }}
                        style={{
                            background: 'transparent',
                            color: '#000',
                            border: '1px solid #ccc',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#000';
                            e.target.style.background = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = '#ccc';
                            e.target.style.background = 'transparent';
                        }}
                    >
                        <RefreshCw size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CymaticSimulation;
