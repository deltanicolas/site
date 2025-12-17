"use client";

import Header from "../../components/Header";
import {
  Monitor,
  Users,
  Maximize,
  Cpu,
  Network,
  Database,
  Activity,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function MatrixPage() {
  const features = [
    {
      icon: Monitor,
      title: "Centrale di Controllo",
      description:
        "Sistema di gestione centralizzato per il monitoraggio di tutte le unità Guardian",
    },
    {
      icon: Users,
      title: "Singolo Operatore",
      description:
        "Gestione efficiente di più Guardian con un solo operatore qualificato",
    },
    {
      icon: Maximize,
      title: "Shelter 20ft/40ft",
      description:
        "Moduli abitabili da 20 o 40 piedi per adattarsi alle diverse esigenze operative",
    },
    {
      icon: Cpu,
      title: "Tecnologia Avanzata",
      description:
        "Hardware e software di ultima generazione per il controllo in tempo reale",
    },
    {
      icon: Network,
      title: "Multi-Guardian",
      description:
        "Coordinamento simultaneo di più unità Guardian per copertura estesa",
    },
    {
      icon: Database,
      title: "Gestione Dati",
      description:
        "Archiviazione e analisi centralizzata di tutti i dati di sorveglianza",
    },
    {
      icon: Activity,
      title: "Monitoraggio Real-Time",
      description:
        "Visualizzazione live di tutte le informazioni da sensori e telecamere",
    },
    {
      icon: ShieldCheck,
      title: "Affidabilità",
      description:
        "Sistema ridondante e backup per garantire operatività continua",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8">MATRIX</h1>
              <p className="text-2xl font-light leading-relaxed mb-8">
                Centrale di controllo shelter per sistemi di sorveglianza
                perimetrale multi-Guardian
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
                src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                alt="Matrix Control System"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 text-xl">
              <p>
                <strong>Matrix</strong> è uno shelter da{" "}
                <strong>20ft./40ft. abitabile</strong>, costituisce la centrale
                di controllo di un sistema di sorveglianza perimetrale
                multi-Guardian che consente di estendere a volontà l'area e la
                zona di impiego con l'ausilio di{" "}
                <strong>un solo operatore</strong>.
              </p>
              <p>
                È un <strong>concentrato assoluto di tecnologia</strong> che
                permette il controllo centralizzato di più unità Guardian per
                coprire aree estese con massima efficienza operativa. Ogni
                Matrix può coordinare simultaneamente diverse unità Guardian,
                creando una rete di sicurezza perimetrale scalabile e altamente
                efficace.
              </p>
              <p>
                La soluzione Matrix rappresenta l'evoluzione naturale del
                sistema Guardian, permettendo di creare infrastrutture di
                sicurezza complesse e integrate per la protezione di aree di
                qualsiasi dimensione.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
            Come Funziona
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Installazione
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Lo shelter Matrix viene posizionato nell'area centrale di
                controllo. Le unità Guardian vengono distribuite nei punti
                strategici del perimetro.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Coordinamento
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Matrix si connette a tutte le unità Guardian, creando una rete
                di sorveglianza integrata con comunicazione bidirezionale in
                tempo reale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Controllo
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Un singolo operatore monitora e gestisce l'intero sistema dalla
                centrale, con accesso a tutti i dati e possibilità di intervento
                immediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Vantaggi del Sistema Matrix
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Scalabilità</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Estendi la copertura di sicurezza aggiungendo unità Guardian
                senza limiti, mantenendo il controllo centralizzato da un'unica
                postazione.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Efficienza</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Riduzione drastica del personale necessario: un solo operatore
                può gestire aree che richiederebbero molteplici squadre di
                sorveglianza.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Flessibilità</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Shelter trasportabili e configurabili per adattarsi a qualsiasi
                scenario operativo, da installazioni permanenti a missioni
                temporanee.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Intelligence</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Analisi centralizzata dei dati provenienti da tutte le fonti per
                intelligence avanzata e decisioni informate in tempo reale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Crea la tua rete di sicurezza perimetrale
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed">
              Contattaci per progettare un sistema Matrix personalizzato sulle
              tue esigenze specifiche.
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
                href="/guardian"
                className="group inline-flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-xl"
              >
                Scopri Guardian
                <ChevronRight
                  className="transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

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
