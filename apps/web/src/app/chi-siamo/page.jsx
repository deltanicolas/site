"use client";

import Header from "../../components/Header";
import {
  ChevronRight,
  Target,
  Lightbulb,
  Shield,
  History,
  Users,
  Zap,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ChiSiamoPage() {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* --- HERO SECTION: Identità Tattica --- */}
        <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
          {/* Pattern di sfondo tecnico */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#00f0ff30_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
              >
              <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                Deep Tech & Security
              </span>
                <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">
                  {t("about.heroTitle")}
                </h1>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-slate-400 max-w-2xl">
                  {t("about.heroSubtitle")}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Elemento grafico decorativo */}
          <div className="absolute top-1/2 right-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent to-blue-500 hidden lg:block" />
        </section>

        {/* --- PHILOSOPHY SECTION: Lo Storytelling --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-3xl rotate-2 transition-transform group-hover:rotate-0" />
                <img
                    src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
                    alt="Tech office"
                    className="relative rounded-2xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Anni di Innovazione</p>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-slate-900 italic tracking-tight">
                  Oltre la semplice sorveglianza.
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                  <p className="border-l-4 border-blue-600 pl-6 italic">{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-600">
                      <History size={20} />
                    </div>
                    <span className="text-sm font-bold uppercase text-slate-800">Evoluzione Continua</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-600">
                      <Users size={20} />
                    </div>
                    <span className="text-sm font-bold uppercase text-slate-800">Team Certificato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUES SECTION: I Pilastri --- */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">
                {t("about.valuesTitle")}
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card Valore 1 */}
              <div className="group bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tighter italic">
                    {t("about.experienceTitle")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {t("about.experienceText")}
                  </p>
                </div>
              </div>

              {/* Card Valore 2 */}
              <div className="group bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tighter italic">
                    {t("about.innovationTitle")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {t("about.innovationText")}
                  </p>
                </div>
              </div>

              {/* Card Valore 3 */}
              <div className="group bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tighter italic">
                    {t("about.reliabilityTitle")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {t("about.reliabilityText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VISION SECTION: Quote Motivazionale --- */}
        <section className="py-32 bg-slate-900 text-center relative">
          <div className="container mx-auto px-6">
            <Zap className="text-blue-500 mx-auto mb-8 animate-pulse" size={48} />
            <h2 className="text-4xl md:text-6xl font-light text-white max-w-5xl mx-auto leading-tight italic">
              "La nostra missione è ridefinire il concetto di <span className="text-blue-500 font-bold">sicurezza invisibile</span> attraverso l'intelligenza artificiale e l'eccellenza meccanica."
            </h2>
            <p className="mt-12 text-blue-500 font-bold uppercase tracking-[0.4em] text-sm italic">— Board of Directors, 037</p>
          </div>
        </section>

        {/* --- CTA SECTION: Conversione --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_30px_60px_-12px_rgba(37,99,235,0.45)]">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 skew-x-12 translate-x-1/4" />

              <div className="relative z-10 max-w-2xl text-center lg:text-left">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter">
                  {t("about.ctaTitle")}
                </h2>
                <p className="text-xl text-blue-100 font-light italic">
                  {t("about.ctaText")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                <a href="/guardian" className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-black px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105">
                  {t("about.ctaGuardian")}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/matrix" className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold border-2 border-white/30 transition-all hover:scale-105">
                  {t("about.ctaMatrix")}
                  <ChevronRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <img
                    src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                    alt="037 Tecnologia e Sicurezza"
                    className="h-10 w-auto mb-8"
                />
                <p className="text-slate-400 text-lg max-w-sm italic leading-relaxed">
                  Evoluzione tecnologica e protezione perimetrale avanzata. Progettato e coordinato in Italia.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6 text-blue-500 uppercase tracking-widest">Contatti</h4>
                <ul className="space-y-3 text-slate-400 italic">
                  <li>info@037tecnologia.it</li>
                  <li>+39 02 1234 5678</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6 text-blue-500 uppercase tracking-widest">Area Legale</h4>
                <ul className="space-y-3 text-slate-400 italic">
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-10 text-center text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} 037 Tecnologia e Sicurezza. Tutti i diritti riservati.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}