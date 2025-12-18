"use client";

import {
  Shield,
  Radar,
  Eye,
  Zap,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe,
  Settings,
  MessageSquare,
  Lock,
  Target,
  BarChart3
} from "lucide-react";
import Header from "../components/Header";
import "../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // Opzionale: per rendere lo scroll fluido

export default function HomePage() {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* 1. HERO SECTION (Impatto) */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
            <img
                src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
                alt="Security Technology"
                className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter uppercase">
                {t("home.hero.title")}
              </h1>
              <p className="text-2xl md:text-3xl mb-12 font-light whitespace-pre-line text-slate-200">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/chi-siamo" className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 text-lg">
                  {t("home.hero.ctaMore")}
                  <ChevronRight className="transition-transform group-hover:translate-x-1" size={24} />
                </a>
                <a href="/contatti" className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 border-2 border-white/30 text-lg">
                  {t("home.hero.ctaContact")}
                  <ArrowRight size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* 2. STATS BAR (Fiducia immediata) */}
        <div className="bg-slate-900 border-y border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Copertura Area</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Monitoraggio Attivo</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-1">0.1s</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Latenza Risposta</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-1">A.I.</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Rilevamento Intelligente</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CHI SIAMO PREVIEW (Storytelling) */}
        <section className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">L'eccellenza nella sicurezza</span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                  {t("home.about.title")}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {t("home.about.text")}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-blue-600 mt-1" />
                    <span className="font-semibold text-slate-800">Certificazioni Internazionali</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="text-blue-600 mt-1" />
                    <span className="font-semibold text-slate-800">Precisione Millimetrica</span>
                  </div>
                </div>
                <a href="/chi-siamo" className="group inline-flex items-center gap-2 text-blue-600 font-bold text-lg">
                  Scopri la nostra storia <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl -rotate-3"></div>
                <img
                    src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
                    className="relative rounded-2xl shadow-2xl z-10 object-cover h-[500px] w-full"
                    alt="037 Team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. CORE VALUES (Il "Perché noi") */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Perché scegliere la nostra tecnologia</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Cpu size={40} />, title: "Hardware Custom", desc: "Progettiamo internamente i sensori per garantire prestazioni inarrivabili sul mercato." },
                { icon: <Lock size={40} />, title: "Cyber-Security", desc: "Ogni flusso video è criptato con standard militari per la massima riservatezza." },
                { icon: <Globe size={40} />, title: "Supporto Globale", desc: "Operiamo in tutta Italia con team di pronto intervento e assistenza remota 24/7." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                    <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SOLUTIONS GRID (Prodotti Flagship) */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-20 text-center tracking-tight">
              Le Nostre Soluzioni
            </h2>

            <div className="flex flex-col gap-24 max-w-7xl mx-auto">
              {/* Guardian - Alternato a sinistra */}
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-3/5 group relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                      src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                      alt="Guardian X-TEN"
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-2/5">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <div className="w-8 h-[2px] bg-blue-600"></div> PRODUCT SERIES
                  </div>
                  <h3 className="text-5xl font-bold text-slate-900 mb-6 italic tracking-tighter">GUARDIAN X-TEN</h3>
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                    {t("home.solutions.guardian.description")}
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 font-medium text-slate-600 border-b border-slate-100 pb-2">
                      <Radar className="text-blue-600" size={20} /> Radar Integrato a 360°
                    </div>
                    <div className="flex items-center gap-3 font-medium text-slate-600 border-b border-slate-100 pb-2">
                      <Eye className="text-blue-600" size={20} /> Ottiche Termiche ad alta risoluzione
                    </div>
                  </div>
                  <a href="/guardian" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors inline-block">
                    Specifiche Tecniche
                  </a>
                </div>
              </div>

              {/* Matrix - Alternato a destra */}
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="lg:w-3/5 group relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                      src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                      alt="Guardian NRG"
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-2/5">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <div className="w-8 h-[2px] bg-blue-600"></div> OFF-GRID SYSTEM
                  </div>
                  <h3 className="text-5xl font-bold text-slate-900 mb-6 italic tracking-tighter">GUARDIAN NRG</h3>
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                    La soluzione autosufficiente per aree remote. Alimentazione solare e connettività satellitare garantita.
                  </p>
                  <div className="space-y-4 mb-10">
                    <p className="text-slate-600">• {t("home.solutions.nrg.points.one")}</p>
                    <p className="text-slate-600">• {t("home.solutions.nrg.points.two")}</p>
                    <p className="text-slate-600">• {t("home.solutions.nrg.points.three")}</p>
                  </div>
                  <a href="/matrix" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors inline-block">
                    Configura Matrix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. APPLICAZIONI (Verticali) */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 italic tracking-tighter">Settori Operativi</h2>
                <p className="text-xl text-slate-400">Dalle infrastrutture critiche alla sicurezza urbana, le nostre unità sono progettate per resistere a ogni scenario.</p>
              </div>
              <a href="/applicazioni" className="border-b-2 border-blue-500 pb-2 font-bold hover:text-blue-400 transition-colors">Vedi tutti i casi d'uso</a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
                <Shield className="text-blue-500 mb-8" size={48} />
                <h3 className="text-3xl font-bold mb-6 italic">Ambito Civile e Industriale</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Protezione di cantieri, depositi logistici ed eventi ad alta densità. Installazione rapida in meno di 60 minuti.</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
                <Target className="text-red-500 mb-8" size={48} />
                <h3 className="text-3xl font-bold mb-6 italic">Difesa e Sicurezza Nazionale</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Supporto per basi operative, confini e monitoraggio territoriale con protocolli di trasmissione criptati.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. IL NOSTRO PROCESSO (UX/Confidence) */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Dalla consulenza all'installazione</h2>
              <p className="text-slate-500 uppercase tracking-widest font-bold text-sm">Quattro step per la tua sicurezza</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <MessageSquare />, step: "01", title: "Analisi", desc: "Sopralluogo tecnico e valutazione dei rischi." },
                { icon: <Settings />, step: "02", title: "Configurazione", desc: "Scelta dell'hardware e del software ottimale." },
                { icon: <Shield />, step: "03", title: "Deploy", desc: "Installazione e collaudo sul campo." },
                { icon: <BarChart3 />, step: "04", title: "Supporto", desc: "Monitoraggio remoto e manutenzione proattiva." }
              ].map((item, i) => (
                  <div key={i} className="relative text-center">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                      {item.icon}
                    </div>
                    <span className="text-5xl font-black text-slate-100 absolute top-0 right-10 z-0">{item.step}</span>
                    <h4 className="text-xl font-bold mb-2 relative z-10">{item.title}</h4>
                    <p className="text-slate-500 text-sm relative z-10">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ (SEO & Chiarezza) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Domande Frequenti</h2>
            <div className="space-y-6">
              {[
                { q: "Qual è l'autonomia delle unità Guardian?", a: "Le nostre unità NRG sono completamente autosufficienti grazie a pannelli solari ad alta efficienza e batterie al litio di grado industriale." },
                { q: "È possibile integrare il sistema con sale operative esistenti?", a: "Certamente. Il nostro software supporta i principali protocolli ONVIF e può essere interfacciato con ogni centro di controllo." },
                { q: "Quanto tempo richiede l'installazione?", a: "Le unità Guardian sono mobili e pronte all'uso. Il set-up standard richiede meno di un'ora dal momento dell'arrivo sul sito." }
              ].map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="text-lg font-bold mb-2 text-slate-900">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA (L'obiettivo) */}
        <section className="py-32 bg-blue-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">
              PRONTO A PROTEGGERE IL TUO FUTURO?
            </h2>
            <p className="text-2xl mb-12 opacity-90 font-light max-w-2xl mx-auto italic">
              Contatta i nostri esperti per una consulenza tecnica personalizzata.
            </p>
            <a
                href="/contatti"
                className="inline-flex items-center gap-4 bg-white text-blue-600 px-16 py-8 rounded-2xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-2xl"
            >
              RICHIEDI UN PREVENTIVO <ArrowRight size={28} />
            </a>
          </div>
        </section>

        {/* 10. FOOTER (Professionale) */}
        <footer className="bg-slate-950 text-white py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-2">
                <img
                    src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                    alt="037 Tecnologia e Sicurezza"
                    className="h-14 w-auto mb-8"
                />
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  037 è sinonimo di innovazione tattica. Sviluppiamo tecnologie di sorveglianza per chi non accetta compromessi sulla sicurezza.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-8 border-b border-blue-500 w-fit pb-2">Navigazione</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a href="/chi-siamo" className="hover:text-blue-400 transition-colors">Visione Aziendale</a></li>
                  <li><a href="/guardian" className="hover:text-blue-400 transition-colors">Guardian Series</a></li>
                  <li><a href="/matrix" className="hover:text-blue-400 transition-colors">Matrix NRG</a></li>
                  <li><a href="/contatti" className="hover:text-blue-400 transition-colors">Lavora con noi</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-8 border-b border-blue-500 w-fit pb-2">Contatti</h4>
                <ul className="space-y-4 text-slate-400 italic">
                  <li>Headquarters: Italia</li>
                  <li>Email: info@037tecnologia.it</li>
                  <li>Tel: +39 02 1234 5678</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-12 flex flex-col md:row justify-between items-center gap-6 text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} 037 Tecnologia e Sicurezza. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}