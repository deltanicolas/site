import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Atom, Zap, MousePointer2, RotateCw } from 'lucide-react';

export default function QuantumConvergence() {
    const canvasRef = useRef(null);

    // GAME STATE
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isHoveringNode, setIsHoveringNode] = useState(false);

    // Lore Stages
    const stages = [
        { id: 1, label: "ELEMENTARY CHARGE", symbol: "e" },
        { id: 2, label: "PLANCK ACTION", symbol: "ℏ" },
        { id: 3, label: "LIGHT SPEED", symbol: "c" },
        { id: 4, label: "FINE STRUCTURE", symbol: "α" }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // --- 1. CONFIGURAZIONE TARGET LEVEL ---
        const generateTextTargets = (lvl) => {
            const vCanvas = document.createElement('canvas');
            vCanvas.width = width;
            vCanvas.height = height;
            const vCtx = vCanvas.getContext('2d');

            vCtx.fillStyle = '#fff';
            vCtx.textAlign = 'center';
            vCtx.textBaseline = 'middle';

            const cx = width / 2;
            const cy = height / 2;
            const scale = Math.min(width, height) * 0.0015;

            if (lvl === 1) {
                vCtx.font = `italic bold ${300 * scale}px "Times New Roman"`;
                vCtx.fillText("e", cx, cy);
            } else if (lvl === 2) {
                vCtx.font = `italic bold ${300 * scale}px "Times New Roman"`;
                vCtx.fillText("ℏ", cx, cy);
            } else if (lvl === 3) {
                vCtx.font = `italic bold ${300 * scale}px "Times New Roman"`;
                vCtx.fillText("c", cx, cy);
            } else if (lvl === 4) {
                const eqSize = 180 * scale;
                vCtx.font = `italic ${eqSize}px "Times New Roman"`;
                vCtx.fillText("α =", cx - (eqSize * 1.5), cy);
                vCtx.font = `italic ${eqSize * 0.8}px "Times New Roman"`;
                vCtx.fillText("e²", cx + (eqSize * 0.8), cy - (eqSize * 0.6));
                vCtx.fillRect(cx, cy - 10, eqSize * 2.5, 6);
                vCtx.fillText("ℏc", cx + (eqSize * 0.8), cy + (eqSize * 0.8));
            }

            const pData = vCtx.getImageData(0, 0, width, height).data;
            const targets = [];
            const density = 5;
            for(let y=0; y<height; y+=density) {
                for(let x=0; x<width; x+=density) {
                    if(pData[(y*width + x)*4 + 3] > 128) {
                        targets.push({x, y});
                    }
                }
            }
            return targets;
        };

        // --- 2. GESTIONE NODO ENERGETICO ---
        const generateRandomNode = () => ({
            x: Math.random() * (width * 0.6) + (width * 0.2),
            y: Math.random() * (height * 0.6) + (height * 0.2),
            radius: 40
        });

        let activeNode = generateRandomNode();

        // --- 3. PARTICLE ENGINE ---
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 5;
                this.vy = (Math.random() - 0.5) * 5;
                this.size = Math.random() * 2 + 0.5;
                this.color = '#3b82f6';
                this.target = null;
            }

            assignTarget(targets, index) {
                this.target = targets[index % targets.length];
            }

            update(mouse, isCharging, progress, globalLevel) {
                if (isCharging && this.target) {
                    // MODE: ASSEMBLE
                    const tx = this.target.x;
                    const ty = this.target.y;
                    const dtx = tx - this.x;
                    const dty = ty - this.y;

                    const speed = 0.05 + (progress * 0.001);
                    this.vx += dtx * speed;
                    this.vy += dty * speed;
                    this.vx *= 0.80;
                    this.vy *= 0.80;

                    const dist = Math.sqrt(dtx*dtx + dty*dty);
                    if (dist < 5) {
                        this.x = tx + (Math.random() - 0.5);
                        this.y = ty + (Math.random() - 0.5);
                        this.color = progress > 80 ? '#ffffff' : '#60a5fa';
                        if (globalLevel === 4 && progress > 90) this.color = '#fbbf24';
                    } else {
                        this.color = '#3b82f6';
                    }

                } else {
                    // MODE: CHAOS
                    this.vx += (Math.random() - 0.5) * 0.8;
                    this.vy += (Math.random() - 0.5) * 0.8;

                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distMouse = Math.sqrt(dx*dx + dy*dy);
                    if (distMouse < 150) {
                        const force = (150 - distMouse) / 150;
                        this.vx -= (dx/distMouse) * force * 2;
                        this.vy -= (dy/distMouse) * force * 2;
                    }

                    this.vx *= 0.95;
                    this.vy *= 0.95;
                    this.color = '#1e293b';
                }

                this.x += this.vx;
                this.y += this.vy;
            }

            draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.size, this.size);
                ctx.fill();
            }
        }

        let particles = Array.from({ length: 2500 }, () => new Particle());
        let currentTargets = generateTextTargets(1);
        particles.forEach((p, i) => p.assignTarget(currentTargets, i));

        // --- INTERACTION ---
        let mouse = { x: -1000, y: -1000 };
        let isMouseDown = false;
        let loopProgress = 0;
        let loopLevel = 1;

        const handleMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            const dist = Math.hypot(mouse.x - activeNode.x, mouse.y - activeNode.y);
            setIsHoveringNode(dist < activeNode.radius + 20);
        };
        const handleDown = () => isMouseDown = true;
        const handleUp = () => isMouseDown = false;

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchstart', handleDown);
        window.addEventListener('touchend', handleUp);

        // --- RENDER LOOP ---
        const render = () => {
            // FIX SCIA: Usiamo 0.9 di opacità invece di 0.3.
            // Questo copre quasi completamente il frame precedente, lasciando solo una micro-scia.
            ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
            ctx.fillRect(0, 0, width, height);

            // LOGICA CARICA
            const distToNode = Math.hypot(mouse.x - activeNode.x, mouse.y - activeNode.y);
            const isCharging = isMouseDown && (distToNode < activeNode.radius + 30);

            if (isCharging) {
                loopProgress = Math.min(loopProgress + 0.6, 100);
            } else {
                loopProgress = Math.max(loopProgress - 2, 0);
            }
            setProgress(loopProgress);

            // DISEGNO NODO
            const pulse = Math.sin(Date.now() * 0.005) * 5;

            ctx.beginPath();
            ctx.arc(activeNode.x, activeNode.y, activeNode.radius + 10 + pulse, 0, Math.PI * 2);
            ctx.fillStyle = isCharging ? `rgba(255, 255, 255, 0.05)` : `rgba(59, 130, 246, 0.05)`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(activeNode.x, activeNode.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = isCharging ? '#ffffff' : '#3b82f6';
            ctx.shadowBlur = isCharging ? 30 : 15;
            ctx.shadowColor = isCharging ? '#ffffff' : '#3b82f6';
            ctx.fill();
            ctx.shadowBlur = 0;

            if (loopProgress > 0) {
                ctx.beginPath();
                ctx.arc(activeNode.x, activeNode.y, activeNode.radius, -Math.PI/2, (-Math.PI/2) + (Math.PI * 2 * (loopProgress/100)));
                ctx.strokeStyle = loopLevel === 4 ? '#fbbf24' : '#60a5fa';
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            if (isCharging) {
                ctx.beginPath();
                ctx.moveTo(activeNode.x, activeNode.y);
                ctx.lineTo(width/2 + (Math.random()-0.5)*100, height/2 + (Math.random()-0.5)*100);
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // PARTICELLE
            particles.forEach(p => {
                p.update(mouse, isCharging, loopProgress, loopLevel);
                p.draw(ctx);
            });

            // COSTELLAZIONE (Lines)
            if (loopProgress > 75) {
                ctx.beginPath();
                ctx.strokeStyle = loopLevel === 4 ? 'rgba(251, 191, 36, 0.15)' : 'rgba(96, 165, 250, 0.15)';
                ctx.lineWidth = 0.5;
                for (let i = 0; i < particles.length; i += 15) {
                    const p1 = particles[i];
                    const p2 = particles[(i + 5) % particles.length];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    if (dx*dx + dy*dy < 2500) {
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        const triggerLevelChange = (nextLvl) => {
            loopLevel = nextLvl;
            loopProgress = 0;
            currentTargets = generateTextTargets(nextLvl);
            activeNode = generateRandomNode();
            particles.forEach((p, i) => {
                p.vx = (Math.random() - 0.5) * 30;
                p.vy = (Math.random() - 0.5) * 30;
                p.assignTarget(currentTargets, i);
            });
        };
        canvas.triggerLevelChange = triggerLevelChange;

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchstart', handleDown);
            window.removeEventListener('touchend', handleUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100 && !isFinished) {
            if (level < 4) {
                const timer = setTimeout(() => {
                    setLevel(prev => prev + 1);
                    canvasRef.current.triggerLevelChange(level + 1);
                }, 500);
                return () => clearTimeout(timer);
            } else {
                setIsFinished(true);
            }
        }
    }, [progress, level, isFinished]);

    return (
        <div className="relative w-full h-screen bg-slate-950 overflow-hidden select-none">
            <div
                className={`fixed pointer-events-none z-50 transition-transform duration-100 ${isHoveringNode ? "scale-150" : "scale-100"}`}
                style={{
                    left: 0, top: 0,
                    transform: `translate(calc(var(--mouse-x) - 50%), calc(var(--mouse-y) - 50%))`
                }}
            />

            {/* Script per il tracking del mouse CSS (per UI custom se voluta, qui opzionale) */}
            <script dangerouslySetInnerHTML={{__html: `
                document.addEventListener('mousemove', e => {
                    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
                    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
                });
            `}} />

            <canvas ref={canvasRef} className="absolute inset-0 z-0 cursor-crosshair" />

            {/* UI HUD */}
            <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between">

                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Atom size={16} className={progress > 0 ? "animate-spin-slow" : ""} />
                            <span className="text-xs font-mono font-bold tracking-widest uppercase">
                                Sequence {level}/4: {stages[level-1].label}
                            </span>
                        </div>
                        <p className="text-[10px] text-cyan-500/40 font-mono">
                            QUANTUM CHARGE: {progress.toFixed(0)}%
                        </p>
                    </div>
                </div>

                {/* Hint Fluttuante */}
                <AnimatePresence>
                    {!isFinished && progress < 10 && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute top-3/4 left-1/2 -translate-x-1/2 text-center"
                        >
                            <div className="flex flex-col items-center gap-2 text-cyan-500/50 animate-bounce">
                                <MousePointer2 size={24} />
                                <p className="text-[10px] font-mono tracking-widest uppercase bg-black/50 px-2 py-1 rounded">
                                    Cerca il nodo & Tieni Premuto
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Barre Progresso */}
                {!isFinished && (
                    <div className="w-full max-w-xl mx-auto">
                        <div className="flex gap-1 h-1 w-full opacity-50">
                            {[1, 2, 3, 4].map(step => (
                                <div key={step} className="flex-1 bg-slate-900 rounded-full overflow-hidden relative">
                                    {step < level && <div className="absolute inset-0 bg-cyan-600" />}
                                    {step === level && (
                                        <motion.div
                                            className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                                            style={{ width: `${progress}%` }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Schermata Finale */}
            <AnimatePresence>
                {isFinished && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center pointer-events-auto"
                    >
                        <div className="relative w-full max-w-4xl p-8 text-center">
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className="inline-block mb-6 p-6 rounded-full bg-yellow-500/10 border border-yellow-500/30 shadow-[0_0_60px_rgba(234,179,8,0.3)]"
                            >
                                <Zap size={48} className="text-yellow-400" />
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
                                1 / 137
                            </h1>

                            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-10 font-mono">
                                ALPHA CONSTANT RECONSTRUCTED.<br/>
                                Il codice dell'universo è stato riscritto.
                            </p>

                            <div className="flex justify-center gap-6">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white"
                                >
                                    <span className="flex items-center gap-2"><RotateCw size={14}/> Reset</span>
                                </button>
                                <Link
                                    to="/"
                                    className="px-10 py-3 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                >
                                    Enter System
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}