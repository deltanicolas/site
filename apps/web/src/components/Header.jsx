"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "it" ? "en" : "it");
  };

  const navLinks = [
    { href: "/chi-siamo", label: t("home.header.about") },
    { href: "/guardian", label: t("Guardian XTEN") },
    { href: "/matrix", label: t("Guardian NRG") },
    { href: "/applicazioni", label: t("home.header.application") },
    { href: "/contatti", label: t("home.header.contact") },
  ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                  ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl"
                  : "bg-gradient-to-r from-slate-900 to-slate-800"
          }`}
      >
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                  src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                  alt="037 Tecnologia e Sicurezza"
                  className="h-20 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      className="relative text-white text-xl font-semibold transition-all duration-300 hover:text-blue-400 group py-2"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
              ))}

              {/* 🔥 Bottone lingua */}
              <button
                  onClick={toggleLanguage}
                  className="ml-6 px-4 py-2 rounded-lg border border-white/40 text-white hover:bg-white/20 transition-all duration-300"
              >
                {i18n.language === "it" ? "EN" : "IT"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-3 hover:bg-white/20 rounded-xl transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
              className={`lg:hidden overflow-hidden transition-all duration-500 ${
                  mobileMenuOpen ? "max-h-96 mt-8" : "max-h-0"
              }`}
          >
            <div className="flex flex-col gap-4 pb-6">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white text-xl font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    {link.label}
                  </a>
              ))}

              {/* Bottone lingua mobile */}
              <button
                  onClick={toggleLanguage}
                  className="mx-6 mt-4 px-4 py-3 rounded-xl border border-white/40 text-white hover:bg-white/20 transition"
              >
                {i18n.language === "it" ? "Switch to English" : "Passa a Italiano"}
              </button>
            </div>
          </div>
        </nav>
      </header>
  );
}
