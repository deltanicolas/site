"use client";

import Header from "../../components/Header";
import {
  Radar, Eye, Zap, Radio, Maximize2, Camera, Sun, Lock,
  ArrowRight, Download, Layers, ShieldCheck
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function GuardianPage() {
  const { t } = useTranslation();

  const features = [
    { key: "radar", icon: Radar },
    { key: "optics", icon: Eye },
    { key: "power", icon: Zap },
    { key: "mast", icon: Maximize2 },
    { key: "conn", icon: Radio },
    { key: "ai", icon: Camera },
    { key: "deterrence", icon: Sun },
    { key: "tamper", icon: Lock },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

        {/* ===================== 1. HERO ===================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-0"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">{t('guardian.hero.badge')}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                  Guardian <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">X-TEN</span>
                </h1>

                <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light max-w-xl border-l-4 border-blue-600 pl-6">
                  {t('guardian.hero.description')}
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a href="#specs" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg shadow-white/5">
                    {t('guardian.datasheet.title')} <ArrowRight size={18}/>
                  </a>
                  <a href="/contatti" className="inline-flex items-center gap-2 border border-slate-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors backdrop-blur-sm">
                    {t('common.cta.request_demo')}
                  </a>
                </div>
              </motion.div>

              <div className="lg:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <img
                    src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                    alt="Guardian X-Ten Tower"
                    className="relative z-10 w-full max-h-[650px] object-contain drop-shadow-2xl"
                />
                <div className="absolute top-10 right-10 bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-lg hidden md:block z-20">
                  <div className="text-slate-400 text-xs font-mono mb-1">{t('guardian.hero.tech_badge_label')}</div>
                  <div className="text-white text-xl font-bold font-mono">{t('guardian.hero.tech_badge_value')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 2. FEATURES ===================== */}
        <section className="py-24 bg-slate-50 relative border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Architettura del Sistema</h2>
                <p className="text-slate-600">
                  Non un semplice assemblaggio, ma un ecosistema ingegnerizzato. Ogni componente del Guardian è selezionato per la massima resilienza.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-300 px-3 py-1 rounded">System Overview</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`guardian.features.${feature.key}.title`)}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`guardian.features.${feature.key}.desc`)}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 3. DEEP DIVE ===================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-800/20 -skew-x-12 transform translate-x-20"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative">
                  <img
                      src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=2070"
                      alt="Optics Detail"
                      className="rounded-lg shadow-2xl border border-slate-700/50"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-lg border border-slate-600 shadow-xl max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <Layers className="text-blue-500" size={20}/>
                      <span className="font-bold text-sm">{t('guardian.deep_dive.card_badge')}</span>
                    </div>
                    <p className="text-xs text-slate-400">{t('guardian.deep_dive.card_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                  {t('guardian.deep_dive.badge')}
                </div>
                <h2 className="text-4xl font-bold mb-6">{t('guardian.deep_dive.title')}</h2>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-light">
                  {t('guardian.deep_dive.desc')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-700 pt-8">
                  <div>
                    <h4 className="text-white font-bold mb-1">{t('guardian.deep_dive.p1_title')}</h4>
                    <p className="text-sm text-slate-400">{t('guardian.deep_dive.p1_desc')}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{t('guardian.deep_dive.p2_title')}</h4>
                    <p className="text-sm text-slate-400">{t('guardian.deep_dive.p2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 4. COMPARISON ===================== */}
        <section className="py-24 bg-white relative" id="specs">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-70"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">{t('guardian.comparison.title')}</h2>
              <p className="text-slate-500 mt-3">{t('guardian.comparison.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Standard Version */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="mb-6">
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{t('guardian.comparison.base.badge')}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('guardian.comparison.base.title')}</h3>
                <p className="text-slate-500 mb-8 h-10">{t('guardian.comparison.base.desc')}</p>

                <div className="space-y-4 mb-10 border-t border-slate-100 pt-6">
                  {[1, 2, 3].map(i => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">{t(`guardian.comparison.base.p${i}`)}</span>
                        <span className="font-bold text-slate-900">{t(`guardian.comparison.base.v${i}`)}</span>
                      </div>
                  ))}
                </div>

                <a href="/contatti" className="block w-full text-center py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  {t('common.cta.request_quote')}
                </a>
              </div>

              {/* X-TEN Version */}
              <div className="bg-slate-900 text-white rounded-2xl p-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden transform md:-translate-y-4 border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>

                <div className="mb-6 flex justify-between items-center relative z-10">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{t('guardian.comparison.xten.badge')}</span>
                  <ShieldCheck className="text-blue-400" size={20}/>
                </div>

                <h3 className="text-2xl font-bold mb-2 relative z-10">{t('guardian.comparison.xten.title')}</h3>
                <p className="text-slate-400 mb-8 h-10 relative z-10">{t('guardian.comparison.xten.desc')}</p>

                <div className="space-y-4 mb-10 border-t border-slate-700 pt-6 relative z-10">
                  {[1, 2, 3].map(i => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">{t(`guardian.comparison.xten.p${i}`)}</span>
                        <span className="font-bold text-white">{t(`guardian.comparison.xten.v${i}`)}</span>
                      </div>
                  ))}
                </div>

                <a href="/contatti" className="block w-full text-center py-4 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-500 transition-colors shadow-lg relative z-10">
                  {t('common.cta.configure')}
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 5. DATASHEET ===================== */}
        <section className="py-20 bg-slate-100 border-t border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t('guardian.datasheet.title')}</h3>
                <p className="text-sm text-slate-500">{t('guardian.datasheet.subtitle')}</p>
              </div>
              <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded shadow-sm text-slate-700 font-bold text-sm hover:text-blue-600 hover:border-blue-400 transition-all">
                <Download size={16}/> {t('common.cta.download_pdf')}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div> {t('guardian.datasheet.col1')}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Footprint</span> <span className="font-medium text-slate-900">1200 x 1200 mm</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Altezza Chiuso</span> <span className="font-medium text-slate-900">2400 mm</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Peso Totale</span> <span className="font-medium text-slate-900">950 Kg</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Stabilizzazione</span> <span className="font-medium text-slate-900">4x Piedi Idraulici</span></li>
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div> {t('guardian.datasheet.col2')}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Input</span> <span className="font-medium text-slate-900">230V AC / Solar</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Batterie</span> <span className="font-medium text-slate-900">800Ah LiFePO4</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Connettività</span> <span className="font-medium text-slate-900">4G / 5G / Sat Ready</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Certificazione</span> <span className="font-medium text-slate-900">CE / IP66</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 6. CTA ===================== */}
        <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('guardian.cta.title')}</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
              {t('guardian.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contatti" className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-xl shadow-blue-900/20">
                {t('common.cta.request_quote')}
              </a>
              <a href="/contatti" className="border border-blue-400 bg-blue-800/30 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-600 transition-colors backdrop-blur-sm">
                {t('common.cta.contact')}
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="font-bold text-white text-lg">037</div>
            </div>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-white transition-colors">Guardian</a>
              <a href="#" className="hover:text-white transition-colors">Matrix</a>
              <a href="#" className="hover:text-white transition-colors">Supporto</a>
            </div>
            <div className="text-xs">&copy; {new Date().getFullYear()} 037 Technology. All rights reserved.</div>
          </div>
        </footer>
      </div>
  );
}