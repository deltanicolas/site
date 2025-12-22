"use client";

import Header from "../../components/Header";
import {
  Sun, BatteryCharging, Zap, Move, Wifi, ShieldCheck,
  ArrowRight, Leaf, Settings, Unplug,
  Download, BarChart3, Layers, Thermometer
} from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

export default function GuardianNRGPage() {
  const { t } = useTranslation();

  const features = [
    { key: "solar", icon: Sun },
    { key: "graphene", icon: Zap },
    { key: "bms", icon: Settings },
    { key: "offgrid", icon: Unplug },
    { key: "telemetry", icon: Wifi },
    { key: "emissions", icon: Leaf },
    { key: "armor", icon: ShieldCheck },
    { key: "trailer", icon: Move },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-900 selection:text-white">

        {/* ===================== 1. HERO SECTION ===================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-0"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                    <Zap size={12} className="text-emerald-400 fill-emerald-400" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">{t('matrix.hero.badge')}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                  Guardian <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">NRG</span>
                </h1>

                <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light max-w-xl border-l-4 border-emerald-600 pl-6">
                  <Trans i18nKey="matrix.hero.description">
                    L'unità energetica mobile definitiva. Accumulatori al <strong>Grafene</strong> per prestazioni superiori in climi estremi e ricarica ultra-rapida.
                  </Trans>
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a href="#datasheet" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg shadow-white/5">
                    {t('matrix.datasheet.title')} <ArrowRight size={18}/>
                  </a>
                  <a href="/contatti" className="inline-flex items-center gap-2 border border-slate-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors backdrop-blur-sm">
                    {t('common.cta.request_quote')}
                  </a>
                </div>
              </motion.div>

              <div className="lg:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
                <img
                    src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                    alt="Guardian NRG Unit"
                    className="relative z-10 w-full max-h-[600px] object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-10 -left-10 bg-slate-800/90 backdrop-blur border border-slate-700 p-6 rounded-lg hidden md:block z-20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-full text-emerald-400">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-mono uppercase">Efficiency</div>
                      <div className="text-white text-xl font-bold font-mono">{t('matrix.hero.efficiency_badge')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 2. SYSTEM ARCHITECTURE ===================== */}
        <section className="py-24 bg-slate-50 relative border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Energy Ecosystem</h2>
                <p className="text-slate-600">
                  {t('matrix.hero.description')}
                </p>
              </div>
              <div className="hidden md:block">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-300 px-3 py-1 rounded">Power Overview</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`matrix.features.${feature.key}.title`)}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`matrix.features.${feature.key}.desc`)}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 3. DEEP DIVE: GRAPHENE TECH ===================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-slate-800/20 skew-x-12 transform -translate-x-20"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">

              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 rounded text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                  {t('matrix.deep_dive.badge')}
                </div>
                <h2 className="text-4xl font-bold mb-6">{t('matrix.deep_dive.title')}</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg font-light">
                  <Trans i18nKey="matrix.deep_dive.desc_1">
                    Abbiamo superato i limiti del litio tradizionale. Il Guardian NRG integra accumulatori al <strong>Grafene-Polimero</strong> di grado aerospaziale.
                  </Trans>
                </p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {t('matrix.deep_dive.desc_2')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-700 pt-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer size={20} className="text-emerald-500"/>
                      <h4 className="text-white font-bold">{t('matrix.deep_dive.point_1_title')}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{t('matrix.deep_dive.point_1_desc')}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={20} className="text-emerald-500"/>
                      <h4 className="text-white font-bold">{t('matrix.deep_dive.point_2_title')}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{t('matrix.deep_dive.point_2_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 p-1">
                  <img
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070"
                      alt="Graphene Battery Tech"
                      className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500 hue-rotate-15"
                  />
                  <div className="absolute top-6 right-6 bg-emerald-600 text-white p-3 rounded shadow-lg text-center min-w-[100px]">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-[10px] uppercase tracking-wider">{t('matrix.deep_dive.safe_badge')}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4. DEPLOYMENT STEPS ===================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">{t('matrix.steps.title')}</h2>
              <p className="text-slate-500 mt-2">{t('matrix.steps.subtitle')}</p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-12">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 z-0"></div>

              {['s1', 's2', 's3'].map((stepKey, idx) => (
                  <div key={idx} className="relative z-10 text-center group">
                    <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 text-slate-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all duration-500 shadow-sm">
                      {`0${idx + 1}`}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`matrix.steps.${stepKey}.title`)}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed px-4">
                      {t(`matrix.steps.${stepKey}.desc`)}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 5. DATASHEET ===================== */}
        <section className="py-20 bg-slate-100 border-t border-slate-200" id="datasheet">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t('matrix.datasheet.title')}</h3>
                <p className="text-sm text-slate-500">Modello: Guardian NRG-Graphite</p>
              </div>
              <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded shadow-sm text-slate-700 font-bold text-sm hover:text-emerald-600 hover:border-emerald-500 transition-all">
                <Download size={16}/> {t('common.cta.download_pdf')}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {t('matrix.datasheet.col1_title')}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">AC Output</span> <span className="font-medium text-slate-900">230V @ 50Hz (Pure Sine)</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">DC Output</span> <span className="font-medium text-slate-900">12V / 24V / 48V</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Inverter</span> <span className="font-medium text-slate-900">3000W Continuo</span></li>
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div> {t('matrix.datasheet.col2_title')}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Pannelli Solari</span> <span className="font-medium text-slate-900">3x 400W (1200W Tot)</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Batterie</span> <span className="font-medium text-slate-900">Graphene Enhanced</span></li>
                    <li className="flex justify-between py-1 border-b border-slate-50"><span className="text-slate-500">Temp. Esercizio</span> <span className="font-medium text-slate-900">-30°C / +65°C</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 6. CTA ===================== */}
        <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-emerald-600/20 blur-[80px] rounded-full"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('matrix.cta.title')}</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              {t('matrix.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contatti" className="bg-emerald-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-xl shadow-emerald-900/30">
                {t('common.cta.request_quote')}
              </a>
              <a href="/guardian" className="border border-slate-500 bg-slate-800/50 text-white font-bold px-10 py-4 rounded-xl hover:bg-slate-700 transition-colors backdrop-blur-sm">
                Vedi Guardian X-TEN
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="font-bold text-white text-lg">037</div>
              <span className="text-xs bg-emerald-900 text-emerald-400 px-2 py-0.5 rounded">NRG Division</span>
            </div>
            <div className="flex gap-8 font-medium">
              <a href="/guardian" className="hover:text-white transition-colors">Guardian</a>
              <a href="/matrix" className="text-white">Matrix NRG</a>
              <a href="/contatti" className="hover:text-white transition-colors">{t('footer.col_support')}</a>
            </div>
            <div className="text-xs">&copy; {new Date().getFullYear()} 037 Technology.</div>
          </div>
        </footer>
      </div>
  );
}