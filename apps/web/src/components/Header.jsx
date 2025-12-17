"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
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
          {/* Logo - più grande */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
              alt="037 Tecnologia e Sicurezza"
              className="h-20 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
            />
          </a>

          {/* Desktop Navigation - link più grandi */}
          <div className="hidden lg:flex gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white text-xl font-semibold transition-all duration-300 hover:text-blue-400 group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10 scale-95 group-hover:scale-100"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-3 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
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
                className="text-white text-xl font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-3 hover:shadow-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
