"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import squareLogo from "../images/SquareLogo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "it" ? "en" : "it");
  };

  const navLinks = [
    { href: "/chi-siamo", label: t("header.nav.about") },
    { href: "/guardian", label: t("header.nav.guardian") },
    { href: "/matrix", label: t("header.nav.matrix") },
    { href: "/applicazioni", label: t("header.nav.applications") },
  ];

  return (
      <>
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                isScrolled
                    ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "py-6 bg-transparent"
            }`}
        >
          <div className="container mx-auto px-6 flex items-center justify-between">

            {/* --- LOGO AREA --- */}
            <Link to="/" className="relative flex items-center group">
              <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={squareLogo}
                  alt="037 Logo"
                  className={`transition-all duration-500 object-contain ${
                      isScrolled ? "h-10" : "h-14"
                  }`}
              />
              <div className="ml-4 hidden sm:flex flex-col border-l border-white/20 pl-4">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter leading-none mb-1">
                    {t('common.status.system_status')}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      {t('common.status.active_node')}
                  </span>
                </div>
              </div>
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      to={link.href}
                      className="relative px-5 py-2 text-sm font-bold text-white/70 uppercase tracking-widest transition-all hover:text-white group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
              ))}
            </nav>

            {/* --- ACTIONS --- */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-[11px] font-black text-white/50 hover:text-blue-400 transition-colors border border-white/10 px-3 py-1.5 rounded-md bg-white/5"
              >
                <Globe size={14} />
                {i18n.language.toUpperCase()}
              </button>

              <Link
                  to="/contatti"
                  className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                <ShieldCheck size={16} className="group-hover:rotate-12 transition-transform" />
                {t("header.nav.contact")}
              </Link>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative z-[110] p-2 text-white bg-white/5 rounded-lg border border-white/10"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* --- MOBILE OVERLAY --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-0 z-[90] bg-slate-950 flex flex-col p-8 pt-32 lg:hidden"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <nav className="relative z-10 flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                      <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-black text-white uppercase italic tracking-tighter hover:text-blue-500 transition-colors block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                  ))}

                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                  >
                    <Link
                        to="/contatti"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl font-black text-blue-500 uppercase italic tracking-tighter block"
                    >
                      {t("header.nav.contact")}
                    </Link>
                  </motion.div>
                </nav>

                <div className="mt-auto relative z-10 flex flex-col gap-8">
                  <div className="h-[1px] bg-white/10 w-full" />
                  <button
                      onClick={toggleLanguage}
                      className="flex items-center justify-between text-white font-bold uppercase tracking-widest text-sm"
                  >
                    <span className="opacity-50 underline">{t('common.status.change_lang')}</span>
                    <span className="bg-blue-600 px-4 py-2 rounded-lg">{i18n.language === "it" ? "English" : "Italiano"}</span>
                  </button>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">
                    {t('common.status.secure_connection')} <br />
                    Node_ID: 037_Main_Server
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}