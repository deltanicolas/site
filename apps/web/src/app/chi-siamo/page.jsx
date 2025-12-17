"use client";

import Header from "../../components/Header";
import { ChevronRight, Target, Lightbulb, Shield } from "lucide-react";

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">Chi Siamo</h1>
            <p className="text-2xl font-light leading-relaxed">
              Oltre vent'anni di esperienza nell'innovazione al servizio della
              sicurezza
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 text-xl">
              <p>
                Oltre vent'anni di esperienza nel mondo della sicurezza, la
                continua ricerca di materiali e soluzioni innovative, l'impegno
                nell'analisi e controllo territoriale: questi i fondamenti di{" "}
                <strong>037 Tecnologia e Sicurezza</strong>.
              </p>
              <p>
                Le tecnologie applicate alla ricerca sono alla base di{" "}
                <strong>Guardian</strong>, soluzione brevettata e unica nel suo
                genere: dispositivi alimentati o autoalimentati, dinamici,
                flessibili e completamente autosufficienti, prodotti in due
                versioni:
                <strong> Guardian</strong> e <strong>Guardian X-Ten</strong>.
              </p>
              <p>
                037 Tecnologia e Sicurezza si pone oggi tra i leader mondiali
                nello sviluppo di progetti ad-hoc per una clientela di alto
                profilo, con soluzioni tecniche innovative che ridefiniscono gli
                standard della sicurezza perimetrale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
            I Nostri Valori
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Esperienza
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Oltre vent'anni nel settore della sicurezza ci permettono di
                offrire soluzioni consolidate e affidabili.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Innovazione
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Ricerca costante di materiali e tecnologie all'avanguardia per
                soluzioni sempre più efficaci.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Affidabilità
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Sistemi brevettati e testati che garantiscono la massima
                sicurezza in ogni condizione operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img
              src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
              alt="037 Tecnologia"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Scopri le Nostre Soluzioni
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              Esplora Guardian e Matrix, le nostre tecnologie brevettate per la
              sicurezza perimetrale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/guardian"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Scopri Guardian
                <ChevronRight
                  className="transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </a>
              <a
                href="/matrix"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 border-2 border-white/30"
              >
                Scopri Matrix
                <ChevronRight
                  className="transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </a>
            </div>
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
