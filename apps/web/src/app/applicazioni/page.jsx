"use client";

import Header from "../../components/Header";
import {
  Building2,
  Shield,
  Users,
  Globe,
  ChevronRight,
  ArrowRight,
  Radar,
  Lock,
  Zap,
  Target
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ApplicazioniPage() {
  const { t } = useTranslation();

  const civilApplications = [
    {
      icon: Building2,
      title: "Infrastrutture Critiche",
      description: "Protezione di centrali elettriche, impianti idrici e reti di telecomunicazioni con sistemi di recinzione virtuale invisibile.",
    },
    {
      icon: Globe,
      title: "Poli Industriali",
      description: "Sorveglianza perimetrale di stabilimenti produttivi e zone di stoccaggio merci ad alto valore.",
    },
    {
      icon: Users,
      title: "Grandi Eventi",
      description: "Sicurezza temporanea ad alto impatto per concerti, manifestazioni e raduni pubblici in spazi aperti.",
    },
    {
      icon: Target,
      title: "Zone Sensibili",
      description: "Controllo accessi e monitoraggio costante per porti, aeroporti e sedi diplomatiche.",
    },
  ];

  const militaryApplications = [
    {
      icon: Shield,
      title: "Basi Operative",
      description: "Protezione perimetrale di FOB (Forward Operating Base) e installazioni strategiche in territori ostili.",
    },
    {
      icon: Radar,
      title: "Zone di Conflitto",
      description: "Sorveglianza avanzata AI-driven per missioni di peacekeeping e monitoraggio confini.",
    },
    {
      icon: Zap,
      title: "Missioni Tattiche",
      description: "Deploy rapido per posti di comando mobili e zone di operazione temporanee senza rete elettrica.",
    },
    {
      icon: Lock,
      title: "Force Protection",
      description: "Sistemi anti-intrusione per la protezione di convogli e personale in aree ad alto rischio.",
    },
  ];

  return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">
              Operational Scenarios
            </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">
                SETTORI DI <span className="text-blue-500">IMPIEGO</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-slate-400 leading-relaxed italic">
                Dalla protezione di asset industriali alla difesa di obiettivi strategici nazionali.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- CIVIL APPLICATIONS (White Style) --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter uppercase mb-6">
                  Ambito <span className="text-blue-600 font-light">Civile</span>
                </h2>
                <p className="text-xl text-slate-500 italic font-light">
                  Recinzioni virtuali e sistemi AI per garantire la continuità operativa del business e la sicurezza delle persone.
                </p>
              </div>
              <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-slate-100 mb-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {civilApplications.map((app, index) => (
                  <div
                      key={index}
                      className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform">
                      <app.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">
                      {app.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed italic">
                      {app.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MILITARY APPLICATIONS (Dark Style) --- */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          {/* Pattern radar decorativo */}
          <div className="absolute top-1/2 right-0 w-1/2 h-full bg-[repeating-conic-gradient(from_0deg,#3b82f610_0deg_10deg,transparent_10deg_20deg)] opacity-20 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-end mb-20 gap-8 text-right">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-6">
                  Ambito <span className="text-blue-500 font-light">Militare</span>
                </h2>
                <p className="text-xl text-slate-400 italic font-light">
                  Affidabilità estrema in condizioni critiche. Tecnologia "Dual-Use" progettata per la protezione delle forze.
                </p>
              </div>
              <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-white/10 mb-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
              {militaryApplications.map((app, index) => (
                  <div
                      key={index}
                      className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-blue-600 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                      <app.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter uppercase">
                      {app.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-white/80 text-lg leading-relaxed italic transition-colors">
                      {app.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- QUOTE SECTION: THE MISSION --- */}
        <section className="py-40 bg-white text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <span className="text-blue-600 text-6xl font-serif mb-8 block opacity-20">"</span>
              <blockquote className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter leading-tight mb-12 uppercase">
                Ogni individuo ha diritto alla vita, alla libertà e alla sicurezza della propria persona.
              </blockquote>
              <div className="h-[2px] w-24 bg-blue-600 mx-auto mb-6" />
              <footer className="text-sm font-mono tracking-widest text-slate-400 uppercase">
                Articolo 3 // Dichiarazione Universale dei Diritti dell'Uomo
              </footer>
            </div>
          </div>
        </section>

        {/* --- CTA: CUSTOM SOLUTIONS --- */}
        <section className="pb-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 uppercase">
                  Hai un progetto <span className="text-blue-500">Specifico?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto italic font-light">
                  Le nostre unità Guardian e NRG sono modulari. Contattaci per una consulenza tecnica su misura per il tuo scenario operativo.
                </p>
                <a
                    href="/contatti"
                    className="inline-flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 px-12 py-6 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/20"
                >
                  RICHIEDI CONSULENZA
                  <ArrowRight size={24} />
                </a>
              </div>
              {/* Elemento grafico HUD decorativo */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[20px] border-white/5 rounded-full" />
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
            <div>
              <img
                  src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                  alt="037 Logo"
                  className="h-8 mb-8"
              />
              <p className="text-slate-500 italic text-sm">Leader nell'innovazione per la sicurezza perimetrale attraverso sistemi autonomi AI-driven.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 col-span-2 uppercase font-black text-[10px] tracking-widest">
              <div className="space-y-4">
                <p className="text-blue-500">Navigazione</p>
                <a href="/chi-siamo" className="block hover:text-blue-400">Company_Profile</a>
                <a href="/guardian" className="block hover:text-blue-400">Guardian_XTEN</a>
                <a href="/matrix" className="block hover:text-blue-400">Guardian_NRG</a>
              </div>
              <div className="space-y-4">
                <p className="text-blue-500">Contatti</p>
                <p className="text-slate-400">info@037tecnologia.it</p>
                <p className="text-slate-400">+39 02 1234 5678</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}