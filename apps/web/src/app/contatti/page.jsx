"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContattiPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Errore durante l'invio del messaggio");
      }

      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormStatus({ loading: false, success: false, error: error.message });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navLinks = [
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/guardian", label: "Guardian" },
    { href: "/matrix", label: "Matrix" },
    { href: "/applicazioni", label: "Applicazioni" },
    { href: "/contatti", label: "Contatti" },
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
            <h1 className="text-6xl md:text-7xl font-bold mb-8">Contattaci</h1>
            <p className="text-2xl font-light leading-relaxed">
              Siamo qui per rispondere alle tue domande e trovare la soluzione
              perfetta per le tue esigenze
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Invia un Messaggio
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-400"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-400"
                    placeholder="mario.rossi@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-400"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-400 resize-none"
                    placeholder="Descrivi le tue esigenze di sicurezza..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {formStatus.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Invia Messaggio
                    </>
                  )}
                </button>
                {formStatus.success && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center font-medium">
                    ✓ Messaggio inviato con successo! Ti contatteremo presto.
                  </div>
                )}
                {formStatus.error && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center font-medium">
                    ✗ {formStatus.error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                I Nostri Contatti
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={26} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@037tecnologia.it"
                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      info@037tecnologia.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={26} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Telefono
                    </h3>
                    <a
                      href="tel:+390212345678"
                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      +39 02 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={26} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Sede
                    </h3>
                    <p className="text-slate-700 text-lg">Italia</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Orari di Apertura</h3>
                <div className="space-y-2 text-lg">
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato - Domenica: Chiuso</p>
                </div>
              </div>
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
