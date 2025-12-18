"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowLeft, MapPin, ScanFace, Sun, Moon } from "lucide-react";
import Header from "../../components/Header"; // Assumo che il tuo Header gestisca il tema o sia trasparente

export default function SecurityNotFoundUnified() {
  // Stato per gestire il tema: true = DARK, false = LIGHT
  const [isDark, setIsDark] = useState(true);
  const [time, setTime] = useState("");

  // --- FISICA DEL "GUARDIAN AI TRACKER" ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Imposta centro iniziale
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e) => {
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

  // --- CLASSI DINAMICHE ---
  // Definisco qui le varianti per mantenere il JSX pulito
  const theme = {
    bg: isDark ? "bg-slate-950" : "bg-slate-100",
    text: isDark ? "text-white" : "text-slate-900",
    grid: isDark
        ? "bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] opacity-[0.03]"
        : "bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] opacity-[0.4]",
    vignette: isDark
        ? "bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"
        : "bg-[radial-gradient(circle_at_center,#ffffff_0%,#cbd5e1_100%)] opacity-70",
    hudText: isDark ? "text-slate-500" : "text-slate-600",
    hudBorder: isDark ? "border-slate-800" : "border-slate-300",
    boundingBox: isDark ? "border-blue-500/10 bg-blue-500/5 mix-blend-screen" : "border-blue-500/30 bg-blue-500/5",
    titleGradient: isDark ? "from-white to-slate-700" : "from-slate-900 to-slate-400",
    cardBg: isDark ? "bg-slate-900/60 border-blue-500/10" : "bg-white/60 border-blue-500/20",
    button: isDark
        ? "bg-white text-slate-950 hover:bg-blue-600 hover:text-white"
        : "bg-slate-900 text-white hover:bg-blue-600",
    iconBg: isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
  };

  return (
      <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans relative overflow-hidden flex flex-col items-center justify-center select-none transition-colors duration-500`}>
        <Header />

        {/* --- LAYER 1: SFONDO & CRT SCANLINE --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Griglia Tecnica */}
          <div className={`absolute inset-0 bg-[size:50px_50px] transition-opacity duration-500 ${theme.grid}`} />

          {/* Vignettatura */}
          <div className={`absolute inset-0 transition-colors duration-500 ${theme.vignette}`} />

          {/* LINEA DI SCANSIONE (CRT) */}
          <motion.div
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent z-10 pointer-events-none"
          />
        </div>

        {/* --- LAYER 2: HUD INFORMATIVO --- */}
        <div className={`absolute inset-0 z-20 p-8 md:p-12 pointer-events-none flex flex-col justify-between font-mono text-[10px] uppercase tracking-widest transition-colors duration-500 ${theme.hudText}`}>

          {/* Top Left */}
          <div className={`flex flex-col gap-1 border-l pl-4 transition-colors duration-500 ${theme.hudBorder}`}>
            <span className="text-blue-500 font-bold">Guardian_AI v.4.0</span>
            <span>Mode: {isDark ? "NIGHT_VISION" : "DAYLIGHT_SENSOR"}</span>
          </div>

          {/* Top Right + THEME TOGGLE (Pointer events auto per cliccare il bottone) */}
          <div className={`text-right border-r pr-4 pointer-events-auto flex flex-col items-end gap-4 transition-colors duration-500 ${theme.hudBorder}`}>

            {/* Tasto Toggle Tema */}
            <button
                onClick={() => setIsDark(!isDark)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300 ${isDark ? 'border-slate-700 bg-slate-900/50 hover:bg-slate-800' : 'border-slate-300 bg-white/50 hover:bg-white'}`}
            >
              {isDark ? <Moon size={12} className="text-blue-400"/> : <Sun size={12} className="text-amber-500"/>}
              <span className="text-[9px] font-bold">{isDark ? "DARK" : "LIGHT"}</span>
            </button>

            <div>
              <p>REC_TIME</p>
              <p className={`text-sm animate-pulse font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{time}</p>
            </div>
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

        {/* --- LAYER 3: AI CAMERA TRACKER --- */}
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        >
          <div className={`w-64 h-64 relative backdrop-blur-[1px] transition-colors duration-300 ${theme.boundingBox}`}>
            {/* Angoli */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-500" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-500" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-500" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-500" />

            {/* Info Tag */}
            <div className="absolute -top-6 left-0 flex gap-2">
              <div className="bg-blue-600 text-white text-[9px] font-mono px-2 py-0.5 font-bold">OBJ: HUMAN</div>
              <div className={`text-blue-400 text-[9px] font-mono px-2 py-0.5 border border-blue-500/30 ${isDark ? 'bg-blue-900/80' : 'bg-blue-100 text-blue-700'}`}>
                CONFIDENCE: 99.8%
              </div>
            </div>

            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
              <div className="absolute w-full h-[1px] bg-blue-500/50 top-1/2" />
              <div className="absolute h-full w-[1px] bg-blue-500/50 left-1/2" />
            </div>

            {/* Coordinate */}
            <div className={`absolute -bottom-5 right-0 text-[8px] font-mono px-1 border border-blue-500/20 ${isDark ? 'text-blue-400 bg-slate-900/80' : 'text-blue-700 bg-white/90'}`}>
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
            <div className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden transition-colors duration-500 ${theme.iconBg}`}>
              <ScanFace size={32} className={`relative z-10 opacity-80 ${isDark ? 'text-white' : 'text-slate-700'}`} strokeWidth={1.5} />
              <motion.div
                  animate={{ top: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-blue-500/50 blur-[2px] z-0"
              />
            </div>

            <h1 className={`text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b tracking-tighter mb-2 opacity-25 select-none transition-all duration-500 ${theme.titleGradient}`}>
              404
            </h1>

            <h2 className={`text-2xl md:text-3xl font-light uppercase tracking-[0.2em] mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Zona <span className="font-bold text-blue-500">Non Mappata</span>
            </h2>

            <div className="h-px w-16 bg-blue-500/50 mx-auto mb-6" />

            <div className={`p-8 rounded-lg backdrop-blur-md transition-colors duration-500 ${theme.cardBg}`}>
              <p className={`text-sm md:text-base font-light leading-relaxed font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <span className="text-blue-500 font-bold mr-2">&gt;&gt; ANALISI COMPLETA:</span>
                Il Guardian ha rilevato un tentativo di accesso a un settore inesistente.
                <br className="my-2 block" />
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
                className={`group inline-flex items-center gap-3 px-8 py-3 rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] ${theme.button}`}
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