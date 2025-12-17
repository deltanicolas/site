"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Building2,
  Shield,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function ApplicazioniPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/guardian", label: "Guardian" },
    { href: "/matrix", label: "Matrix" },
    { href: "/applicazioni", label: "Applicazioni" },
    { href: "/contatti", label: "Contatti" },
  ];

  const civilApplications = [
    {
      icon: Building2,
      title: "Infrastrutture Critiche",
      description:
        "Protezione di centrali elettriche, impianti di trattamento acque, reti di telecomunicazioni e altre strutture essenziali.",
    },
    {
      icon: Globe,
      title: "Siti Industriali",
      description:
        "Sorveglianza perimetrale di stabilimenti produttivi, depositi petroliferi, zone industriali e aree di stoccaggio.",
    },
    {
      icon: Users,
      title: "Eventi Pubblici",
      description:
        "Sicurezza temporanea per concerti, manifestazioni sportive, eventi politici e grandi raduni.",
    },
    {
      icon: Shield,
      title: "Zone Sensibili",
      description:
        "Controllo di confini, porti, aeroporti, ambasciate e altre aree che richiedono massima sicurezza.",
    },
  ];

  const militaryApplications = [
    {
      icon: Shield,
      title: "Basi Operative",
      description:
        "Protezione perimetrale di basi militari, FOB (Forward Operating Base) e installazioni strategiche.",
    },
    {
      icon: Globe,
      title: "Zone di Conflitto",
      description:
        "Sorveglianza avanzata in aree di guerra, zone di peacekeeping e missioni internazionali.",
    },
    {
      icon: Building2,
      title: "Missioni Tattiche",
      description:
        "Deploy rapido per operazioni speciali, posti di comando mobili e zone di operazione temporanee.",
    },
    {
      icon: Users,
      title: "Force Protection",
      description:
        "Protezione di convoli, accampamenti militari e personale in zone ad alto rischio.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl"
            : "bg-gradient-to-r from-slate-900 to-slate-800"
        }`}
      >
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                alt="037 Tecnologia e Sicurezza"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="hidden lg:flex gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white text-lg font-medium transition-all duration-300 hover:text-blue-400 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Applicazioni
            </h1>
            <p className="text-2xl font-light leading-relaxed">
              I nostri sistemi servono settori civili e militari con soluzioni
              su misura
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Applicazioni Civili */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 text-center">
            Applicazioni Civili
          </h2>
          <p className="text-xl text-slate-700 mb-16 text-center max-w-4xl mx-auto">
            Applicazioni corporate per sistemi di recinzione virtuale al fine di
            garantire l'operatore e l'operato.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {civilApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applicazioni Militari */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 text-center">
            Applicazioni Militari
          </h2>
          <p className="text-xl text-slate-700 mb-16 text-center max-w-4xl mx-auto">
            Applicazioni in ambiti rischiosi per sistemi di sicurezza
            perimetrale, garantendo sempre la massima affidabilità.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {militaryApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl italic font-light mb-8 leading-relaxed">
              "Ogni individuo ha diritto alla vita, alla libertà e alla
              sicurezza della propria persona."
            </blockquote>
            <footer className="text-lg text-blue-300">
              — Dichiarazione Universale dei Diritti dell'Uomo, Articolo 3, 1948
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Hai un progetto specifico?
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed">
              Contattaci per discutere come Guardian e Matrix possono essere
              adattati alle tue esigenze particolari.
            </p>
            <a
              href="/contatti"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contattaci
              <ChevronRight
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
