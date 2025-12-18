"use client";

import Header from "../../components/Header";
import {
  Shield,
  Radar,
  Eye,
  Zap,
  Radio,
  Camera,
  Sun,
  Lock,
  ChevronRight,
  ArrowRight,
  Maximize2,
  Cpu,
  BarChart as ChartBar,
  Server
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function GuardianPage() {
  const { t } = useTranslation();

  const features = [
    { icon: Radar, title: "Radar Integrato", description: t("guardian.features.Radar Integrato") },
    { icon: Eye, title: "Visione Termica", description: t("guardian.features.Visione Termica") },
    { icon: Zap, title: "Autoalimentato", description: t("guardian.features.Autoalimentato") },
    { icon: Maximize2, title: "Altezza 13 metri", description: t("guardian.features.Altezza 13 metri") },
    { icon: Radio, title: "Connettività Propria", description: t("guardian.features.Connettività Propria") },
    { icon: Camera, title: "Dual Use Tech", description: t("guardian.features.Dual Use Technologies") },
    { icon: Sun, title: "Illuminazione LED", description: t("guardian.features.Illuminazione LED") },
    { icon: Lock, title: "Inaccessibile", description: t("guardian.features.Compatto e Inaccessibile") },
  ];

  return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* --- HERO SECTION: PRODUCT REVEAL --- */}
        <section className="relative pt-32 lg:pt-48 pb-24 bg-slate-900 overflow-hidden">
          {/* Background Overlay HUD */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 border border-blue-500/30 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 border border-blue-500/20 rounded-full animate-reverse-spin" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  Heavy Duty Surveillance Unit
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 italic tracking-tighter leading-none">
                  GUARDIAN <span className="text-blue-500 italic">X-TEN</span>
                </h1>
                <p className="text-2xl text-slate-400 font-light leading-relaxed mb-10 max-w-xl italic">
                  {t("guardian.hero.subtitle")}
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                      href="/contatti"
                      className="group relative flex items-center gap-3 bg-blue-600 text-white font-bold px-10 py-5 rounded-xl transition-all hover:bg-blue-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]"
                  >
                    {t("guardian.hero.cta")}
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
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-transparent rounded-3xl blur-2xl opacity-20" />
                <img
                    src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                    alt="Guardian X-Ten"
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-white/10"
                />
                {/* Technical Tag Overlay */}
                <div className="absolute top-10 -right-4 z-20 bg-slate-900 border border-white/10 p-4 rounded-xl backdrop-blur-xl hidden md:block">
                  <p className="text-blue-500 font-mono text-xs mb-1">MAX_HEIGHT</p>
                  <p className="text-white font-black text-2xl tracking-tighter italic">13.00 METERS</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- TECH SPECS DASHBOARD --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-start italic">
                <div className="lg:col-span-2 space-y-8 text-2xl leading-relaxed text-slate-700 font-light">
                  <p className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left uppercase font-medium text-slate-900">
                    {t("guardian.description.p1")}
                  </p>
                  <p>{t("guardian.description.p2")}</p>
                  <p>{t("guardian.description.p3")}</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">Technical Datasheet</h4>
                  <ul className="space-y-4 font-mono text-sm uppercase">
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-400">Deployment</span>
                      <span className="text-slate-900 font-bold">Fast-Rapid</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-400">Optics</span>
                      <span className="text-slate-900 font-bold">4K + Thermal</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-400">Mast</span>
                      <span className="text-slate-900 font-bold">Hydraulic</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-400">Weight</span>
                      <span className="text-slate-900 font-bold">750 KG</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE FEATURES MODULAR GRID --- */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
                {t("guardian.features.Title")}
              </h2>
              <div className="h-1.5 w-32 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                  <div
                      key={index}
                      className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-blue-600 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter italic">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors italic">
                      {feature.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE COMPARISON --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-slate-900 italic tracking-tighter">{t("guardian.versions.Title")}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              {/* Version 1: Standard */}
              <div className="p-12 lg:p-16 bg-white flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Base Configuration</span>
                  <h3 className="text-5xl font-black text-slate-900 mb-8 italic tracking-tighter">GUARDIAN</h3>
                  <p className="text-slate-600 text-lg mb-8 italic leading-relaxed">{t("guardian.versions.guardian.description")}</p>
                  <ul className="space-y-4 mb-10">
                    {t("guardian.versions.guardian.features", { returnObjects: true }).map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {f}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Version 2: X-TEN (Highlighted) */}
              <div className="p-12 lg:p-16 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 px-6 py-2 font-black text-[10px] uppercase tracking-widest -rotate-0">
                  Top Performance
                </div>
                <div>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4 block">Advanced Configuration</span>
                  <h3 className="text-5xl font-black text-white mb-8 italic tracking-tighter">X-TEN SERIES</h3>
                  <p className="text-slate-300 text-lg mb-8 italic leading-relaxed">{t("guardian.versions.guardian_x_ten.description")}</p>
                  <ul className="space-y-4 mb-10">
                    {t("guardian.versions.guardian_x_ten.features", { returnObjects: true }).map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-blue-100 font-medium">
                          <Zap size={14} className="text-blue-400" /> {f}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-32 bg-slate-900 text-white relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 leading-none">
              {t("guardian.cta.title")}
            </h2>
            <p className="text-2xl text-slate-400 mb-12 max-w-2xl mx-auto italic font-light">
              {t("guardian.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contatti" className="bg-blue-600 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-900/40">
                {t("guardian.cta.buttons.consult")}
              </a>
              <a href="/matrix" className="bg-transparent border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all italic">
                {t("guardian.cta.buttons.matrix")}
              </a>
            </div>
          </div>
        </section>

        {/* --- FOOTER (Coerente) --- */}
        <footer className="bg-slate-950 text-white py-20 border-t border-white/5 font-mono uppercase text-xs">
          <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
            <img
                src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                alt="037 Logo"
                className="h-8 opacity-50"
            />
            <div className="flex gap-10 text-slate-500">
              <a href="/chi-siamo" className="hover:text-white transition-colors">About_Us</a>
              <a href="/applicazioni" className="hover:text-white transition-colors">Sector_Applications</a>
              <a href="/contatti" className="hover:text-white transition-colors">Secure_Contact</a>
            </div>
            <p className="text-slate-600">&copy; {new Date().getFullYear()} // 037_TECNOLOGIA_SICUREZZA</p>
          </div>
        </footer>
      </div>
  );
}