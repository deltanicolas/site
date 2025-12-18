"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ShieldAlert, ArrowLeft, Radar, Zap } from "lucide-react";
import Header from "../../components/Header";

export default function SecurityNotFound() {
  const [time, setTime] = useState("");
  // Riferimento per l'oggetto audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mouse tracking con fisica "Spring" per un movimento fluido
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    // --- LOGICA AUDIO ALLARME ---
    // Carichiamo un suono di allarme elettronico/tech
    const alarmSoundUrl = "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";
    audioRef.current = new Audio(alarmSoundUrl);
    audioRef.current.volume = 0.2; // Volume al 20%
    audioRef.current.loop = false; // Solo un segnale di attivazione (cambia in true per loop continuo)

    const playAlarm = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Audio bloccato dal browser: richiede interazione utente.");
        });
      }
    };

    // Esegui l'allarme dopo un brevissimo delay dall'ingresso
    const audioTimeout = setTimeout(playAlarm, 400);

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
      clearTimeout(audioTimeout);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [mouseX, mouseY]);

  return (
      <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden flex flex-col items-center justify-center select-none selection:bg-blue-500 selection:text-white">
        <Header />

        {/* --- LAYER 1: GRID TECNICA --- */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
        </div>

        {/* --- LAYER 2: HUD DI SORVEGLIANZA (CORNER ANGLES) --- */}
        <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none z-20">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="border-l-2 border-t-2 border-blue-600 w-16 h-16 rounded-tl-sm" />
              <div className="bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded text-[10px] font-mono text-blue-400">
                SIGNAL: LOST_PACKET_404
              </div>
            </div>
            <div className="text-right font-mono">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-1">Live_Telemetry</p>
              <p className="text-3xl font-black italic tracking-tighter text-white">{time}</p>
              <div className="flex items-center justify-end gap-2 mt-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">System Online</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="border-l-2 border-b-2 border-slate-700 w-16 h-16 rounded-bl-sm" />
            <div className="text-[10px] space-y-1 font-mono uppercase tracking-tighter opacity-30 text-slate-500">
              <p>LAT: 137.137° N | LON: 3.7137° E</p>
              <p>037_CORE_REVISION: 4.2</p>
            </div>
            <div className="border-r-2 border-b-2 border-slate-700 w-16 h-16 rounded-br-sm" />
          </div>
        </div>

        {/* --- LAYER 3: IL MIRINO (037 RETICLE) --- */}
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-40 hidden lg:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Cerchi rotanti */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full"
            />
            {/* Assi */}
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

            <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />

            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] px-2 py-0.5 font-black italic tracking-widest uppercase">
              Searching_Node...
            </div>
          </div>
        </motion.div>

        {/* --- CONTENUTO CENTRALE --- */}
        <div className="relative z-10 text-center px-6">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
          >
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500">
              <ShieldAlert size={48} className="animate-pulse" />
            </div>

            <h1 className="text-[15rem] leading-none font-black tracking-tighter text-white opacity-[0.03] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
              404
            </h1>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white leading-none">
                NODO <span className="text-blue-500">NON TROVATO</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg md:text-xl italic font-light leading-relaxed">
                Il sistema di scansione non ha rilevato nessuna risorsa all'indirizzo richiesto. Il perimetro è sicuro, ma questa zona è vuota.
              </p>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
                to="/"
                className="group relative flex items-center justify-center gap-3 bg-blue-600 text-white font-black px-10 py-5 rounded-2xl transition-all hover:bg-blue-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] italic uppercase text-sm tracking-widest"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
              Rientra alla base
            </Link>
            <div className="flex items-center gap-3 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
              <Radar size={14} className="text-blue-500" />
              Scansione in corso...
            </div>
          </motion.div>
        </div>

        {/* Footer tecnico HUD */}
        <div className="absolute bottom-12 left-0 w-full px-12 hidden md:block">
          <div className="flex justify-between items-end border-t border-white/5 pt-6 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600 italic">
            <div className="space-y-1">
              <p>Error_Code: ERR_LOCAL_INTRUSION_NULL</p>
              <p>Protocol_Status: Encrypted_Session</p>
            </div>
            <div className="text-right space-y-1">
              <p>037_TECNOLOGIA_SICUREZZA</p>
              <p className="text-blue-500/50">All systems operational</p>
            </div>
          </div>
        </div>
      </div>
  );
}