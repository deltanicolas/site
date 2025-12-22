"use client";

import {
  ShieldCheck, ArrowRight, Radar, Lock, Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import baseMilitar from "../../images/camionMilitare.jpg"

export default function ApplicazioniPage() {
  const { t } = useTranslation();

  const applications = [
    {
      key: "infra",
      img: baseMilitar,
    },
    {
      key: "construction",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070",
    },
    {
      key: "logistics",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
    },
    {
      key: "events",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070",
    }
  ];

  const defenseApps = [
    { key: "force", icon: ShieldCheck },
    { key: "border", icon: Radar },
    { key: "rapid", icon: Zap },
    { key: "asset", icon: Lock }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

        {/* ===================== 1. HERO SECTION ===================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
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
              {t('applications_page.hero.badge')}
            </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                {t('applications_page.hero.title_line1')} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                {t('applications_page.hero.title_line2')}
              </span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                {t('applications_page.hero.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===================== 2. CIVIL & INDUSTRIAL ===================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('applications_page.civil.title')}</h2>
                <p className="text-slate-500 max-w-xl">
                  {t('applications_page.civil.desc')}
                </p>
              </div>
              <a href="/contatti" className="hidden md:flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                {t('applications_page.civil.link')} <ArrowRight size={18}/>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                  <div key={index} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img
                          src={app.img}
                          alt={t(`applications_page.civil.items.${app.key}.cat`)}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{t(`applications_page.civil.items.${app.key}.cat`)}</h3>
                      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                        {t(`applications_page.civil.items.${app.key}.desc`)}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {[1, 2, 3].map((i) => (
                            <span key={i} className="text-xs font-bold uppercase tracking-wide text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">
                              {t(`applications_page.civil.items.${app.key}.f${i}`)}
                        </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 3. DEFENSE & SECURITY ===================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-900/20 to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              <div className="md:w-1/3">
                <div className="inline-block p-3 bg-blue-600 rounded-lg mb-6">
                  <ShieldCheck size={32} className="text-white"/>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('applications_page.defense.title')}</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: t('applications_page.defense.desc')}}></p>
                <a href="/contatti" className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                  {t('applications_page.defense.link')} <ArrowRight size={16}/>
                </a>
              </div>

              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                {defenseApps.map((item, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors">
                      <div className="text-blue-500 mb-4">
                        <item.icon size={28}/>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(`applications_page.defense.items.${item.key}.title`)}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{t(`applications_page.defense.items.${item.key}.desc`)}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 4. QUOTE ===================== */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-8">
              <span className="text-6xl text-slate-200 font-serif leading-none">“</span>
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif text-slate-800 leading-relaxed mb-8">
              {t('applications_page.quote.text')}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-slate-300"></div>
              <cite className="text-sm font-bold text-slate-500 uppercase tracking-widest not-italic">
                {t('applications_page.quote.author')}
              </cite>
              <div className="h-px w-12 bg-slate-300"></div>
            </div>
          </div>
        </section>

        {/* ===================== 5. CTA ===================== */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-blue-700 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('applications_page.cta.title')}</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    {t('applications_page.cta.desc')}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a href="/contatti" className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                    {t('applications_page.cta.btn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
  );
}