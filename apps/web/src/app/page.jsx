"use client";

import {
  Shield,
  Radar,
  Eye,
  Zap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
          <img
            src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
            alt="Tecnologia di Sicurezza"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            037 Tecnologia
            <br />e Sicurezza
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light">
            Oltre vent'anni di esperienza nell'innovazione
            <br className="hidden md:block" />
            al servizio della sicurezza
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/chi-siamo"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
            >
              Scopri di più
              <ChevronRight
                className="transition-transform group-hover:translate-x-1"
                size={24}
              />
            </a>
            <a
              href="/contatti"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl border-2 border-white/30 text-lg"
            >
              Contattaci
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={24}
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Chi Siamo
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-10">
              Oltre vent'anni di esperienza nel mondo della sicurezza, la
              continua ricerca di materiali e soluzioni innovative, l'impegno
              nell'analisi e controllo territoriale: questi i fondamenti di{" "}
              <strong>037 Tecnologia e Sicurezza</strong>.
            </p>
            <a
              href="/chi-siamo"
              className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
            >
              Leggi la nostra storia
              <ChevronRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Guardian & Matrix Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-16 text-center">
            Le Nostre Soluzioni
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Guardian Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                  alt="Guardian X-Ten"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <h3 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                  GUARDIAN
                </h3>
              </div>
              <div className="p-8">
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  Stazione tecnologica mobile con colonna telescopica fino a 13m
                  di altezza. Equipaggiata con telecamere termiche intelligenti,
                  radar e sistemi di illuminazione avanzati.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Radar className="text-blue-600" size={20} />
                    <span className="text-sm font-medium">Radar Integrato</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Eye className="text-blue-600" size={20} />
                    <span className="text-sm font-medium">Visione Termica</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Zap className="text-blue-600" size={20} />
                    <span className="text-sm font-medium">Autoalimentato</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Shield className="text-blue-600" size={20} />
                    <span className="text-sm font-medium">Altezza 13m</span>
                  </div>
                </div>
                <a
                  href="/guardian"
                  className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Scopri Guardian
                  <ChevronRight
                    className="transition-transform group-hover/link:translate-x-1"
                    size={20}
                  />
                </a>
              </div>
            </div>

            {/* Matrix Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                  alt="Matrix System"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <h3 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                  MATRIX
                </h3>
              </div>
              <div className="p-8">
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  Centrale di controllo shelter da 20ft./40ft. abitabile.
                  Coordina sistemi multi-Guardian per estendere l'area di
                  sorveglianza con un solo operatore.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">
                      Controllo centralizzato multi-Guardian
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">
                      Shelter abitabile 20ft./40ft.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">
                      Gestione con singolo operatore
                    </p>
                  </div>
                </div>
                <a
                  href="/matrix"
                  className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Scopri Matrix
                  <ChevronRight
                    className="transition-transform group-hover/link:translate-x-1"
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applicazioni Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Applicazioni
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <h3 className="text-3xl font-bold mb-4">Civili</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Protezione di infrastrutture critiche, siti industriali, eventi
                pubblici e zone sensibili.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <h3 className="text-3xl font-bold mb-4">Militari</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Protezione di basi operative, zone di conflitto e missioni
                tattiche.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/applicazioni"
              className="group inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-300 transition-colors"
            >
              Vedi tutti i dettagli
              <ChevronRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Pronto a proteggere il tuo territorio?
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed">
              Contattaci per una consulenza personalizzata e scopri come le
              nostre soluzioni possono garantire la massima sicurezza per le tue
              esigenze.
            </p>
            <a
              href="/contatti"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
            >
              Contattaci Ora
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={24}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                alt="037 Tecnologia e Sicurezza"
                className="h-12 w-auto mb-6"
              />
              <p className="text-slate-400 leading-relaxed">
                Leader nell'innovazione per la sicurezza perimetrale
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Link Rapidi</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="/chi-siamo"
                    className="hover:text-white transition-colors"
                  >
                    Chi Siamo
                  </a>
                </li>
                <li>
                  <a
                    href="/guardian"
                    className="hover:text-white transition-colors"
                  >
                    Guardian
                  </a>
                </li>
                <li>
                  <a
                    href="/matrix"
                    className="hover:text-white transition-colors"
                  >
                    Matrix
                  </a>
                </li>
                <li>
                  <a
                    href="/applicazioni"
                    className="hover:text-white transition-colors"
                  >
                    Applicazioni
                  </a>
                </li>
                <li>
                  <a
                    href="/contatti"
                    className="hover:text-white transition-colors"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Contatti</h4>
              <ul className="space-y-3 text-slate-400">
                <li>info@037tecnologia.it</li>
                <li>+39 02 1234 5678</li>
                <li>Italia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} 037 Tecnologia e Sicurezza.
              Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
