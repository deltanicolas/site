"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Eye, ArrowLeft, MapPin, ShieldCheck, ScanFace } from "lucide-react";
import Header from "../../components/Header";

export default function SecurityNotFound() {
  const [time, setTime] = useState("");

  // --- FISICA DEL "GUARDIAN AI TRACKER" ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring leggermente più rigido per dare l'idea di un servo-motore di telecamera
  const springConfig = { damping: 30, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('it-IT', { hour12: false }));
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  return (
      <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden flex flex-col items-center justify-center select-none">
        <Header />

        {/* --- LAYER 1: SFONDO & CRT SCANLINE --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Griglia millimetrata tecnica */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />

          {/* LINEA DI SCANSIONE (CRT EFFECT) */}
          <motion.div
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent z-10 pointer-events-none"
          />
        </div>

        {/* --- LAYER 2: HUD INFORMATIVO --- */}
        <div className="absolute inset-0 z-20 p-8 md:p-12 pointer-events-none flex flex-col justify-between text-slate-500 font-mono text-[10px] uppercase tracking-widest">
          {/* Top Left */}
          <div className="flex flex-col gap-1 border-l border-slate-800 pl-4">
            <span className="text-blue-500 font-bold">Guardian_AI v.4.0</span>
            <span>Object_Detection: ON</span>
          </div>

          {/* Top Right */}
          <div className="text-right border-r border-slate-800 pr-4">
            <p>REC_TIME</p>
            <p className="text-white text-sm animate-pulse">{time}</p>
          </div>

          {/* Bottom Left */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Camera_037 [LIVE]</span>
          </div>

          {/* Bottom Right */}
          <div className="text-right">
            <p>Anomaly_Detected</p>
            <p>Tracking_ID: <span className="text-blue-500 font-bold">#USR_404</span></p>
          </div>
        </div>

        {/* --- LAYER 3: AI CAMERA TRACKER (Il Bounding Box) --- */}
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        >
          {/* BOUNDING BOX (Stile Computer Vision) */}
          <div className="w-64 h-64 relative border border-blue-500/10 bg-blue-500/5 backdrop-blur-[1px]">

            {/* Angoli del Box (Brackets) */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-500" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-500" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-500" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-500" />

            {/* Info Tag Superiore */}
            <div className="absolute -top-6 left-0 flex gap-2">
              <div className="bg-blue-600 text-white text-[9px] font-mono px-2 py-0.5 font-bold">
                OBJ: HUMAN
              </div>
              <div className="bg-blue-900/80 text-blue-300 text-[9px] font-mono px-2 py-0.5 border border-blue-500/30">
                CONFIDENCE: 99.8%
              </div>
            </div>

            {/* Crosshair Centrale */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
              <div className="absolute w-full h-[1px] bg-blue-500/50 top-1/2" />
              <div className="absolute h-full w-[1px] bg-blue-500/50 left-1/2" />
            </div>

            {/* Linee tratteggiate verso il centro (Focus) */}
            <div className="absolute top-1/2 left-2 right-2 h-[1px] border-t border-dashed border-blue-500/30" />
            <div className="absolute left-1/2 top-2 bottom-2 w-[1px] border-l border-dashed border-blue-500/30" />

            {/* Etichetta Inferiore */}
            <div className="absolute -bottom-5 right-0 text-[8px] font-mono text-blue-400 bg-slate-900/80 px-1 border border-blue-500/20">
              X: {sx.get().toFixed(0)} Y: {sy.get().toFixed(0)}
            </div>
          </div>
        </motion.div>


        {/* --- CONTENUTO CENTRALE --- */}
        <div className="relative z-30 text-center px-6 max-w-2xl mx-auto">

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
          >
            {/* Icona Centrale */}
            <div className="mx-auto mb-6 w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden">
              <ScanFace size={32} className="text-white relative z-10 opacity-80" strokeWidth={1.5} />

              {/* Effetto scansione interna icona */}
              <motion.div
                  animate={{ top: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-blue-500/50 blur-[2px] z-0"
              />
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-700 tracking-tighter mb-2 opacity-20 select-none">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.2em] mb-6">
              Zona <span className="font-bold text-blue-500">Non Mappata</span>
            </h2>

            <div className="h-px w-16 bg-blue-500/50 mx-auto mb-6" />

            <div className="bg-slate-900/60 border border-blue-500/10 p-8 rounded-lg backdrop-blur-md">
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed font-mono">
                <span className="text-blue-500 font-bold mr-2">&gt;&gt; ANALISI COMPLETA:</span>
                Il Guardian ha rilevato un tentativo di accesso a un settore inesistente.
                <br className="my-2 block" />
                <span className="text-white font-medium">
                        Nessun problema. Il sistema rileva ogni intrusione, anche la più piccola.
                    </span>
              </p>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
          >
            <Link
                to="/"
                className="group inline-flex items-center gap-3 px-8 py-3 bg-white text-slate-950 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <MapPin size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Torna al Percorso Sicuro</span>
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
  );
}