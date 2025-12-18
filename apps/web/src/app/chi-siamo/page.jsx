"use client";

import Header from "../../components/Header";
import {
  Settings, PenTool, Wrench, Layers,
  ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ChiSiamoPage() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
        <Header />

        {/* ===================== 1. HERO SECTION (Immersive & Centrata) ===================== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">

          {/* Immagine di sfondo (Engineering/Assembly) */}
          <div className="absolute inset-0 z-0">
            {/* Overlay scuro per leggibilità */}
            <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
            <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
                alt="Engineering Assembly"
                className="w-full h-full object-cover grayscale opacity-40"
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
              {/* Badge */}
              <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  System Integrator
                </span>

              {/* Titolone */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
                Ideazione & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                    Assemblaggio.
                  </span>
              </h1>

              {/* Sottotitolo */}
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                Non siamo un semplice rivenditore. 037 seleziona le migliori tecnologie globali e le integra in soluzioni uniche, progettate per rispondere a esigenze specifiche.
              </p>

              {/* Tasto CTA Hero */}
              <div className="flex justify-center">
                <a href="#workflow" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                  Il Nostro Metodo <ArrowRight size={18}/>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== 2. IL METODO (Workflow) ===================== */}
        <section className="py-24 bg-slate-50 relative border-b border-slate-200" id="workflow">
          {/* Griglia tecnica leggera sfondo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Dal Concetto alla Realtà</h2>
              <p className="text-slate-600 text-lg">
                Il nostro valore aggiunto è nella capacità di unire componenti eterogenei in un sistema organico e funzionale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* STEP 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Ideazione</h3>
                <p className="text-slate-500 leading-relaxed">
                  Analizziamo lo scenario operativo e disegniamo la configurazione ideale, scegliendo i sensori e le ottiche più adatte al caso d'uso specifico.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Wrench size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Assemblaggio</h3>
                <p className="text-slate-500 leading-relaxed">
                  Integriamo le componenti hardware nei nostri chassis, curando cablaggi, alimentazione e dissipazione per garantire la massima affidabilità.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Settings size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Configurazione</h3>
                <p className="text-slate-500 leading-relaxed">
                  Programmiamo il software e calibriamo i sistemi di analisi video affinché l'hardware lavori in perfetta sinergia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 3. DEEP DIVE (Sezione Scura) ===================== */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Decoro laterale */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-800/20 -skew-x-12 transform translate-x-20"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">

              {/* Immagine Tecnica */}
              <div className="lg:w-1/2 order-2 lg:order-1 relative">
                <div className="relative bg-slate-800 p-1 rounded-xl border border-slate-700 shadow-2xl">
                  <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
                      alt="Technical Integration"
                      className="rounded-lg opacity-80"
                  />
                  {/* Overlay Informativo */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-600 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-1">
                      <Layers className="text-blue-500" size={18}/>
                      <span className="font-bold text-sm">Hardware Agnostic</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Non siamo legati a un singolo brand. Scegliamo solo il meglio per il tuo progetto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testo */}
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Philosophy
                </div>
                <h2 className="text-4xl font-bold mb-6">L'arte dell'integrazione.</h2>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-light">
                  Creare un sistema di sicurezza complesso richiede più della somma delle parti.
                  Richiede la conoscenza profonda di come ogni sensore, telecamera e modulo di trasmissione dialoga con gli altri.
                  <br/><br/>
                  Noi di 037 ci poniamo come unico interlocutore tecnico, trasformando tecnologie disparate in una soluzione "chiavi in mano", pronta all'uso.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4. OPERATIONAL AREAS ===================== */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Settori di Intervento</h2>
              <p className="text-slate-500 mt-2">Le nostre integrazioni trovano applicazione dove l'affidabilità è critica.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Cantieri Complessi', 'Eventi Pubblici', 'Aree Industriali', 'Logistica Portuale'].map((sector, i) => (
                  <div key={i} className="group relative h-40 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center justify-center overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all">
                    <CheckCircle2 className="text-slate-300 mb-3 group-hover:text-blue-500 transition-colors" size={24}/>
                    <span className="font-bold text-slate-700 text-lg group-hover:text-blue-600 transition-colors z-10">{sector}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 5. CTA (Brand Blue) ===================== */}
        <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          {/* Forme decorative */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Costruiamo la tua soluzione.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Hai un'esigenza specifica che richiede un assemblaggio custom? Parliamone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contatti" className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-xl">
                Contattaci Ora
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">037</span>
            </div>
            <div className="flex gap-8 font-medium">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/contatti" className="hover:text-white transition-colors">Contatti</a>
            </div>
            <div className="text-xs">&copy; {new Date().getFullYear()} 037 Technology.</div>
          </div>
        </footer>
      </div>
  );
}