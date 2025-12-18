"use client";

import Header from "../../components/Header";
import {
  Sun,
  BatteryCharging,
  Zap,
  Move,
  Wifi,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Leaf,
  Wind,
  Settings,
  Unplug
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function GuardianNRGPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sun,
      title: "Solar Powered",
      description: "Pannelli fotovoltaici ad alta efficienza integrati per ricarica continua."
    },
    {
      icon: BatteryCharging,
      title: "Lithium Core",
      description: "Batterie al litio di ultima generazione per un'autonomia notturna estesa."
    },
    {
      icon: Move,
      title: "Ultra-Portable",
      description: "Design compatto e leggero, trasportabile su piccoli rimorchi o pick-up."
    },
    {
      icon: Unplug,
      title: "Off-Grid Ready",
      description: "Funzionamento al 100% indipendente dalla rete elettrica fissa."
    },
    {
      icon: Wifi,
      title: "Mesh Network",
      description: "Connettività wireless criptata per monitoraggio remoto costante."
    },
    {
      icon: Leaf,
      title: "Zero Emission",
      description: "Operatività silenziosa e rispettosa dell'ambiente, ideale per parchi o eventi."
    },
    {
      icon: ShieldCheck,
      title: "Rapid Deploy",
      description: "Configurazione e attivazione del perimetro in meno di 10 minuti."
    },
    {
      icon: Settings,
      title: "Smart Management",
      description: "Software di gestione energetica per ottimizzare i consumi in base al meteo."
    },
  ];

  return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* --- HERO SECTION: THE ENERGY REVOLUTION --- */}
        <section className="relative pt-32 lg:pt-48 pb-24 bg-slate-900 overflow-hidden">
          {/* Background Overlay con Grid Solare */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Next-Gen Energy Independence
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 italic tracking-tighter leading-none">
                  GUARDIAN <span className="text-blue-500 italic">NRG</span>
                </h1>
                <p className="text-2xl text-slate-400 font-light leading-relaxed mb-10 max-w-xl italic">
                  Sicurezza perimetrale ad alta tecnologia, alimentata dal sole. Il Guardian NRG è la soluzione agile e autosufficiente per ogni scenario.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                      href="/contatti"
                      className="group relative flex items-center gap-3 bg-blue-600 text-white font-bold px-10 py-5 rounded-xl transition-all hover:bg-blue-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]"
                  >
                    Richiedi Specifiche NRG
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-600 to-transparent rounded-3xl blur-2xl opacity-20" />
                <img
                    src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                    alt="Guardian NRG System"
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Technical Tag Overlay */}
                <div className="absolute -bottom-6 -left-4 z-20 bg-slate-900 border border-white/10 p-6 rounded-xl backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Zap className="text-emerald-400 animate-bounce" size={32} />
                    <div>
                      <p className="text-emerald-500 font-mono text-xs mb-1">ENERGY_STATUS</p>
                      <p className="text-white font-black text-xl tracking-tighter italic">100% AUTONOMOUS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- VISION & UTILITY SECTION --- */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center italic">
                <div className="relative">
                  <div className="text-[12rem] font-black text-slate-50 absolute -top-20 -left-10 z-0 select-none">NRG</div>
                  <div className="relative z-10 space-y-8 text-2xl leading-relaxed text-slate-700 font-light">
                    <p className="uppercase font-medium text-slate-900">
                      Il <strong>Guardian NRG</strong> rappresenta la sintesi perfetta tra mobilità e potenza. Progettato per chi necessita di una protezione di alto livello in contesti privi di infrastrutture elettriche.
                    </p>
                    <p>
                      Dotato di una base di ricarica intelligente con <strong>batterie al litio ad alta densità</strong>, il sistema accumula energia durante il giorno tramite pannelli solari ripiegabili per garantire un'operatività h24, senza sosta.
                    </p>
                    <p>
                      La sua struttura ridotta lo rende ideale per la protezione di cantieri mobili, eventi temporanei o monitoraggio agricolo avanzato.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm"><Sun className="text-blue-600" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tighter italic">Full Solar Support</h4>
                      <p className="text-slate-500 text-sm">Ricarica integrata anche in condizioni di scarsa luminosità.</p>
                    </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm"><BatteryCharging className="text-blue-600" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tighter italic">Lithium Intelligence</h4>
                      <p className="text-slate-500 text-sm">Cicli di vita raddoppiati rispetto alle batterie standard.</p>
                    </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm"><Move className="text-blue-600" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tighter italic">Easy Transport</h4>
                      <p className="text-slate-500 text-sm">Movimentazione rapida senza mezzi pesanti speciali.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES GRID: MODULAR & TECHNICAL --- */}
        <section className="py-32 bg-slate-950 relative overflow-hidden">
          {/* Cerchio decorativo radiale */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-4 leading-none">
                Core <span className="text-blue-500">Technology</span>
              </h2>
              <p className="text-slate-500 font-mono text-xs tracking-[0.5em] uppercase">Architecture and Components</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                  <div
                      key={index}
                      className="group bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-slate-900 transition-all duration-500 hover:border-blue-500/50"
                  >
                    <div className="w-14 h-14 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:scale-110">
                      <feature.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed italic group-hover:text-slate-200">
                      {feature.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HOW IT DEPLOYS: STEP BY STEP --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter mb-6">RAPID OFF-GRID DEPLOYMENT</h2>
              <p className="text-xl text-slate-500 italic">Tre fasi per l'indipendenza totale.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Linea connettiva */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -z-0" />

              {[
                { step: "01", title: "Transport", desc: "Posiziona NRG nel punto desiderato tramite un normale gancio di traino." },
                { step: "02", title: "Activate", desc: "I pannelli solari si aprono e il sistema avvia il check delle batterie al litio." },
                { step: "03", title: "Shield", desc: "Il perimetro è attivo. Monitora tutto via cloud tramite la rete Mesh proprietaria." }
              ].map((item, idx) => (
                  <div key={idx} className="relative z-10 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
                    <span className="text-6xl font-black text-blue-600/10 absolute top-4 left-1/2 -translate-x-1/2">{item.step}</span>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 italic tracking-tight relative z-10">{item.title}</h4>
                    <p className="text-slate-600 italic relative z-10 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-none">
              READY TO GO <span className="text-blue-500">OFF-GRID?</span>
            </h2>
            <p className="text-2xl text-slate-400 mb-12 max-w-2xl mx-auto italic font-light leading-relaxed">
              Scopri come il sistema Guardian NRG può rivoluzionare la sicurezza delle tue installazioni remote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contatti" className="bg-blue-600 px-12 py-6 rounded-2xl font-black text-xl text-white hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-900/40">
                Richiedi Preventivo NRG
              </a>
              <a href="/guardian" className="bg-transparent border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-xl text-white hover:bg-white/10 transition-all italic">
                Guarda Modello X-TEN
              </a>
            </div>
          </div>
        </section>

        {/* --- FOOTER TECNICO --- */}
        <footer className="bg-slate-950 text-white py-20 border-t border-white/5 font-mono uppercase text-[10px] tracking-widest">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 opacity-60">
            <div className="flex items-center gap-4 italic">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              NRG_SYSTEM_ACTIVE // STABLE_POWER
            </div>
            <div className="flex gap-10">
              <a href="/chi-siamo" className="hover:text-blue-400 transition-colors underline decoration-blue-500/30">Privacy_Protocol</a>
              <a href="/contatti" className="hover:text-blue-400 transition-colors underline decoration-blue-500/30">Direct_Access</a>
            </div>
            <p>&copy; 037_TECNOLOGIA // {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
  );
}