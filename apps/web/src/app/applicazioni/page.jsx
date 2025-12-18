"use client";

import Header from "../../components/Header";
import {
  Building2, ShieldCheck, Users, Globe, ChevronRight,
  ArrowRight, Radar, Lock, Zap, Target, Truck, Ship, Plane
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ApplicazioniPage() {
  const { t } = useTranslation();

  const applications = [
    {
      category: "Infrastrutture Critiche",
      img: "https://images.unsplash.com/photo-1565514020125-02753229b9f7?auto=format&fit=crop&q=80&w=2070", // Power plant / Industry
      desc: "Protezione perimetrale per centrali elettriche, impianti idrici e nodi di telecomunicazione.",
      features: ["Rilevamento intrusioni", "Termiche h24", "Integrazione SCADA"]
    },
    {
      category: "Cantieri & Costruzioni",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070", // Construction site
      desc: "Monitoraggio stato avanzamento lavori (SAL) e prevenzione furti materiali e attrezzature.",
      features: ["Time-lapse 4K", "Deterrenza attiva", "Controllo accessi"]
    },
    {
      category: "Logistica & Trasporti",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070", // Logistics
      desc: "Sicurezza per aree di stoccaggio merci, porti, interporti e parcheggi mezzi pesanti.",
      features: ["Lettura targhe (LPR)", "Tracciamento flussi", "Anti-scavalcamento"]
    },
    {
      category: "Grandi Eventi",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070", // Event / Crowd
      desc: "Gestione della folla e sicurezza pubblica per concerti, manifestazioni e fiere temporanee.",
      features: ["Conta persone", "Analisi densità", "Deploy rapido"]
    }
  ];

  const defenseApps = [
    { icon: ShieldCheck, title: "Force Protection", desc: "Difesa perimetrale di basi operative avanzate (FOB) e accampamenti temporanei." },
    { icon: Radar, title: "Border Control", desc: "Sorveglianza confini a lungo raggio con radar e termiche integrate." },
    { icon: Zap, title: "Rapid Response", desc: "Unità autonome elitrasportabili per scenari di crisi immediata." },
    { icon: Lock, title: "Asset Defense", desc: "Protezione di depositi munizioni, hangar e infrastrutture strategiche." }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

        {/* ===================== 1. HERO SECTION (Immersive) ===================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
          {/* Immagine di sfondo evocativa (City/Infrastructure) */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
            <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                alt="Urban Infrastructure"
                className="w-full h-full object-cover grayscale opacity-50"
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Scenari Operativi
            </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Proteggiamo ogni <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                ambiente critico.
              </span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                Le soluzioni 037 sono modulari e scalabili. Progettate per adattarsi alle esigenze specifiche del settore Civile, Industriale e Difesa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===================== 2. CIVIL & INDUSTRIAL (Card Grid with Images) ===================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Settore Civile & Industriale</h2>
                <p className="text-slate-500 max-w-xl">
                  Sicurezza attiva per la continuità del business e la protezione degli asset.
                </p>
              </div>
              <a href="/contatti" className="hidden md:flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                Parla con un esperto di settore <ArrowRight size={18}/>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                  <div key={index} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img
                          src={app.img}
                          alt={app.category}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{app.category}</h3>
                      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                        {app.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {app.features.map((feat, i) => (
                            <span key={i} className="text-xs font-bold uppercase tracking-wide text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">
                          {feat}
                        </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 3. DEFENSE & SECURITY (Dark Tech Section) ===================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Background tecnico */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-900/20 to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              <div className="md:w-1/3">
                <div className="inline-block p-3 bg-blue-600 rounded-lg mb-6">
                  <ShieldCheck size={32} className="text-white"/>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Difesa & <br/>Gov.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Soluzioni <strong>Dual-Use</strong> ingegnerizzate per operare in teatri non permissivi.
                  Standard MIL-STD e crittografia avanzata per la protezione delle informazioni.
                </p>
                <a href="/contatti" className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                  Accesso Area Riservata <ArrowRight size={16}/>
                </a>
              </div>

              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                {defenseApps.map((item, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors">
                      <div className="text-blue-500 mb-4">
                        {item.icon === ShieldCheck ? <ShieldCheck size={28}/> :
                            item.icon === Radar ? <Radar size={28}/> :
                                item.icon === Zap ? <Zap size={28}/> : <Lock size={28}/>}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 4. QUOTE (Elegant & Institutional) ===================== */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-8">
              <span className="text-6xl text-slate-200 font-serif leading-none">“</span>
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif text-slate-800 leading-relaxed mb-8">
              Ogni individuo ha diritto alla vita, alla libertà e alla sicurezza della propria persona.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-slate-300"></div>
              <cite className="text-sm font-bold text-slate-500 uppercase tracking-widest not-italic">
                Dichiarazione Universale dei Diritti Umani, Art. 3
              </cite>
              <div className="h-px w-12 bg-slate-300"></div>
            </div>
          </div>
        </section>

        {/* ===================== 5. CTA (Consultancy) ===================== */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-blue-700 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Progetti su misura?</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Il nostro team di ingegneri analizza la planimetria e le criticità del tuo sito per sviluppare un piano di sicurezza personalizzato.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a href="/contatti" className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                    Richiedi Studio di Fattibilità
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="font-bold text-white text-lg">037</div>
            </div>
            <div className="flex gap-8 font-medium">
              <a href="/guardian" className="hover:text-white transition-colors">Prodotti</a>
              <a href="/applicazioni" className="text-white">Applicazioni</a>
              <a href="/contatti" className="hover:text-white transition-colors">Contatti</a>
            </div>
            <div className="text-xs">&copy; {new Date().getFullYear()} 037 Technology.</div>
          </div>
        </footer>
      </div>
  );
}