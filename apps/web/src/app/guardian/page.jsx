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
} from "lucide-react";

export default function GuardianPage() {
  const features = [
    {
      icon: Radar,
      title: "Radar Integrato",
      description:
        "Sistema radar avanzato per rilevamento perimetrale con copertura a 360°",
    },
    {
      icon: Eye,
      title: "Visione Termica",
      description:
        "Telecamere termiche intelligenti per visione notturna e rilevamento anomalie",
    },
    {
      icon: Zap,
      title: "Autoalimentato",
      description:
        "Sistema energetico autonomo con pannelli solari e batterie ad alta capacità",
    },
    {
      icon: Shield,
      title: "Altezza 13 metri",
      description:
        "Colonna telescopica che raggiunge 13m di altezza in pochi secondi",
    },
    {
      icon: Radio,
      title: "Connettività Propria",
      description:
        "Sistema di comunicazione indipendente per trasmissione dati in tempo reale",
    },
    {
      icon: Camera,
      title: "Dual Use Technologies",
      description:
        "Memorizzazione e razionalizzazione dati per intelligence locale e remota",
    },
    {
      icon: Sun,
      title: "Illuminazione LED",
      description:
        "Fari LED ad alta potenza per illuminazione perimetrale completa",
    },
    {
      icon: Lock,
      title: "Compatto e Inaccessibile",
      description:
        "Base protetta e inaccessibile, resistente a manomissioni e condizioni estreme",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8">GUARDIAN</h1>
              <p className="text-2xl font-light leading-relaxed mb-8">
                Stazione tecnologica mobile brevettata per la sicurezza
                perimetrale di aree estese
              </p>
              <a
                href="/contatti"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Richiedi Informazioni
                <ChevronRight
                  className="transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                alt="Guardian X-Ten"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 text-xl">
              <p>
                <strong>Guardian</strong> è una stazione tecnologica mobile con
                energia e connettività propria, compatta e inaccessibile dalla
                cui base si eleva una colonna telescopica che può raggiungere i{" "}
                <strong>13 metri di altezza in pochi secondi</strong>.
              </p>
              <p>
                Sulla sommità sono pronte e operative{" "}
                <strong>telecamere termiche intelligenti</strong>,{" "}
                <strong>radar</strong> e <strong>fari a LED</strong> che
                permettono di vedere, sentire e memorizzare informazioni per
                l'intelligence locale e remota, e razionalizzare e trasmettere
                dati a più settori della sicurezza (
                <strong>Dual Use Technologies</strong>).
              </p>
              <p>
                Guardian è una innovazione tecnologica{" "}
                <strong>brevettata</strong> e completamente integrata per la
                sicurezza perimetrale di aree estese che fornisce funzionalità
                di sorveglianza pronte all'uso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
            Caratteristiche Tecniche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Versions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
            Versioni Disponibili
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-10 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">GUARDIAN</h3>
              <p className="text-lg leading-relaxed mb-6">
                Versione standard con alimentazione esterna. Ideale per
                installazioni permanenti o semi-permanenti con accesso alla rete
                elettrica.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>Alimentazione da rete elettrica</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>Colonna telescopica 13m</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>Sistema completo di sorveglianza</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">GUARDIAN X-TEN</h3>
              <p className="text-lg leading-relaxed mb-6">
                Versione autoalimentata completamente autonoma. Perfetta per
                zone remote, missioni temporanee e situazioni senza
                infrastrutture energetiche.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mt-2"></div>
                  <span>Pannelli solari integrati</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mt-2"></div>
                  <span>Batterie ad alta capacità</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mt-2"></div>
                  <span>Autonomia estesa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mt-2"></div>
                  <span>Installazione rapida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Scopri come Guardian può proteggere le tue aree
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              Contattaci per una consulenza personalizzata e per conoscere tutte
              le specifiche tecniche.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contatti"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Richiedi Consulenza
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
