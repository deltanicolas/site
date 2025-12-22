"use client";

import {
  ShieldCheck, ArrowRight,
  Cpu, Globe, Building2, HardHat,
  Zap, Server, LayoutGrid, Radio,
  CheckCircle2, Box, BarChart3, ChevronRight
} from "lucide-react";
import Header from "../components/Header";
import "../i18n";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useTranslation();

  // Animazioni discrete per un feeling corporate
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Dati per la sezione Applicazioni (chiavi di traduzione invece di testo fisso)
  const applicationItems = [
    { key: "construction", icon: <HardHat className="w-6 h-6"/>, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" },
    { key: "events", icon: <Globe className="w-6 h-6"/>, img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=2070" },
    { key: "logistics", icon: <Box className="w-6 h-6"/>, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070" },
    { key: "utilities", icon: <Zap className="w-6 h-6"/>, img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070" },
  ];

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

        {/* ===================== 1. HERO SECTION ===================== */}
        <section className="relative h-screen min-h-[700px] flex items-center bg-slate-900 overflow-hidden">

          {/* Immagine Sfondo */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/50 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

            <img
                src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
                alt="Advanced Security Infrastructure"
                className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-20">
            <motion.div
                initial="hidden" animate="visible" variants={fadeInUp}
                className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                {t('home.hero.badge')}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                {t('home.hero.title_line1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  {t('home.hero.title_line2')}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                {t('home.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/prodotti" className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50">
                  {t('home.hero.cta_explore')}
                  <ChevronRight size={18} />
                </a>
                <a href="/contatti" className="inline-flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all">
                  {t('home.hero.cta_contact')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== 2. STATS & RELIABILITY BAR ===================== */}
        <div className="bg-white border-b border-slate-200 relative z-30 -mt-2 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-slate-900 mb-1">IP67</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{t('home.stats.ip67')}</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{t('home.stats.uptime')}</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-slate-900 mb-1">Hybrid</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{t('home.stats.hybrid')}</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-slate-900 mb-1">Cloud</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{t('home.stats.cloud')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 3. PRODUCT ECOSYSTEM ===================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">

            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('home.ecosystem.header.title')}</h2>
                <p className="text-slate-500 max-w-xl text-lg">
                  {t('home.ecosystem.header.subtitle')}
                </p>
              </div>
              <a href="/prodotti" className="hidden md:flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all mt-6 md:mt-0">
                {t('home.ecosystem.header.link')} <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">

              {/* CARD 1: GUARDIAN */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                  <div>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                      {t('home.ecosystem.cards.guardian.badge')}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{t('home.ecosystem.cards.guardian.title')}</h3>
                    <p className="text-slate-600 max-w-sm font-medium">{t('home.ecosystem.cards.guardian.desc')}</p>
                  </div>
                  <a href="/guardian" className="inline-flex items-center gap-2 font-bold text-slate-900 bg-white px-5 py-2.5 rounded-lg shadow-sm w-fit hover:bg-blue-600 hover:text-white transition-colors">
                    {t('home.ecosystem.cards.guardian.cta')} <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-3/5 h-4/5 z-10">
                  <img
                      src="https://images.unsplash.com/photo-1563205764-5d595ed058d6?auto=format&fit=crop&q=80&w=2070"
                      alt="Guardian Mobile Unit"
                      className="w-full h-full object-cover object-center rounded-tl-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CARD 2: MATRIX */}
              <div className="relative group overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 p-8 z-20 h-full flex flex-col">
                  <Zap className="text-yellow-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">{t('home.ecosystem.cards.matrix.title')}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {t('home.ecosystem.cards.matrix.desc')}
                  </p>
                  <a href="/matrix" className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors w-fit">
                    {t('home.ecosystem.cards.matrix.cta')}
                  </a>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
                    alt="Technology Detail"
                    className="absolute right-0 bottom-0 w-2/3 h-2/3 object-cover opacity-20 mix-blend-overlay"
                />
              </div>

              {/* CARD 3: VMS/SOFTWARE */}
              <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 p-8 z-20">
                  <LayoutGrid className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('home.ecosystem.cards.software.title')}</h3>
                  <p className="text-slate-600 text-sm mb-4">{t('home.ecosystem.cards.software.desc')}</p>
                </div>
                <div className="absolute bottom-0 w-full h-1/2 overflow-hidden">
                  <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                      alt="Dashboard UI"
                      className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
                <a href="/software" className="absolute inset-0 z-30"></a>
              </div>

              {/* CARD 4: RADAR & IOT */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-blue-50 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center">
                <div className="w-full md:w-1/2 p-8 z-20 relative">
                  <div className="flex items-center gap-2 text-blue-700 font-bold mb-4">
                    <Radio size={24} />
                    <span>{t('home.ecosystem.cards.tech.badge')}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('home.ecosystem.cards.tech.title')}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t('home.ecosystem.cards.tech.desc')}
                  </p>
                  <span className="text-slate-900 text-sm font-bold underline decoration-blue-400 decoration-2 underline-offset-4">
                    {t('home.ecosystem.cards.tech.link')}
                  </span>
                </div>
                <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
                  <img
                      src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2070"
                      alt="Sensor Technology"
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-transparent"></div>
                </div>
                <a href="/tecnologia" className="absolute inset-0 z-30"></a>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4. TRUE VALUE PROPOSITION ===================== */}
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              <div className="lg:w-1/2">
                <h4 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4">{t('home.value_prop.subtitle')}</h4>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('home.value_prop.title_main')}<br/>
                  <span className="text-slate-400">{t('home.value_prop.title_accent')}</span>
                </h2>

                {/* Utilizzo <Trans> qui perché il JSON contiene il testo che deve essere
                   interpolato con il tag <strong>.
                   Le stringhe nel file JSON devono corrispondere al contenuto qui sotto.
                */}
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  <Trans i18nKey="home.value_prop.description">
                    Non ci limitiamo a fornire componenti. 037 <strong>progetta l'architettura</strong> che fa dialogare le migliori tecnologie globali.
                    Selezioniamo sensori e ottiche top di gamma e li integriamo nel nostro chassis proprietario, alimentati dai nostri sistemi energetici.
                  </Trans>
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Box size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t('home.value_prop.feature_hw.title')}</h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {t('home.value_prop.feature_hw.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t('home.value_prop.feature_sw.title')}</h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {t('home.value_prop.feature_sw.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl border border-slate-700 opacity-80" alt="Detail 1"/>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <span className="text-3xl font-bold text-blue-500">98%</span>
                      <p className="text-xs text-slate-400 uppercase mt-2 font-bold">{t('home.value_prop.stats.false_alarms')}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <span className="text-3xl font-bold text-white">EU</span>
                      <p className="text-xs text-slate-400 uppercase mt-2 font-bold">{t('home.value_prop.stats.compliance')}</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl border border-slate-700 opacity-80" alt="Detail 2"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 5. APPLICATIONS ===================== */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">{t('home.applications.title')}</h2>
              <p className="text-slate-500 mt-2">{t('home.applications.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {applicationItems.map((item, i) => (
                  <div key={i} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all">
                    <img src={item.img} alt={t(`home.applications.items.${item.key}`)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full bg-gradient-to-t from-slate-900/90 to-transparent">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit mb-3">{item.icon}</div>
                      {/* Traduzione dinamica basata sulla chiave definita nell'array sopra */}
                      <h3 className="font-bold text-xl">{t(`home.applications.items.${item.key}`)}</h3>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 6. CTA & FOOTER ===================== */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">{t('home.cta_section.title')}</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              {t('home.cta_section.description')}
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contatti" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-xl">
                {t('home.cta_section.btn_consult')}
              </a>
              <a href="tel:+39000000000" className="border border-blue-400 bg-blue-700/50 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                {t('home.cta_section.btn_call')}
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-600 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-1">
                <span className="text-2xl font-black text-slate-900 block mb-4">037</span>
                <p>{t('footer.description')}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">{t('footer.col_products')}</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.guardian')}</a></li>
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.matrix')}</a></li>
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.cloud')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">{t('footer.col_support')}</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.docs')}</a></li>
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.assistance')}</a></li>
                  <li><a href="#" className="hover:text-blue-600">{t('footer.items.faq')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">{t('footer.col_contacts')}</h4>
                <ul className="space-y-2">
                  <li>info@037.tech</li>
                  <li>+39 02 123 4567</li>
                  <li>{t('footer.location')}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-8 flex justify-between items-center text-xs text-slate-400">
              <p>{t('footer.rights')}</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-600">{t('footer.privacy')}</a>
                <a href="#" className="hover:text-slate-600">{t('footer.cookies')}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}