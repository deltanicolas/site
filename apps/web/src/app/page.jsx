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
import "../i18n";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
            <img
                src="https://ucarecdn.com/942e5f47-06cc-41e9-bb3c-475f47748d8f/-/format/auto/"
                alt="Security Technology"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white px-6 max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              {t("home.hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl mb-12 font-light whitespace-pre-line">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                  href="/chi-siamo"
                  className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
              >
                {t("home.hero.ctaMore")}
                <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={24}
                />
              </a>
              <a
                  href="/contatti"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl border-2 border-white/30 text-lg"
              >
                {t("home.hero.ctaContact")}
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
                {t("home.about.title")}
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-10">
                {t("home.about.text")}
              </p>
              <a
                  href="/chi-siamo"
                  className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
              >
                {t("home.about.link")}
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
              {t("home.solutions.title")}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Guardian */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                      src="https://ucarecdn.com/711fe9c4-8ff2-490b-8953-f1e7f0829851/-/format/auto/"
                      alt="Guardian X-TEN"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                    {t("home.solutions.guardian.title")}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                    {t("home.solutions.guardian.description")}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Radar className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">
                      {t("home.solutions.guardian.features.radar")}
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Eye className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">
                      {t("home.solutions.guardian.features.thermal")}
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Zap className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">
                      {t("home.solutions.guardian.features.power")}
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Shield className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">
                      {t("home.solutions.guardian.features.height")}
                    </span>
                    </div>
                  </div>
                  <a
                      href="/guardian"
                      className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {t("home.solutions.guardian.link")}
                    <ChevronRight
                        className="transition-transform group-hover/link:translate-x-1"
                        size={20}
                    />
                  </a>
                </div>
              </div>

              {/* Guardian NRG */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img
                      src="https://ucarecdn.com/3a971e0f-2a5e-46a6-95d1-97a35bb0cca1/-/format/auto/"
                      alt="Guardian NRG"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                    {t("home.solutions.nrg.title")}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                    {t("home.solutions.nrg.description")}
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-slate-600">
                      • {t("home.solutions.nrg.points.one")}
                    </p>
                    <p className="text-slate-600">
                      • {t("home.solutions.nrg.points.two")}
                    </p>
                    <p className="text-slate-600">
                      • {t("home.solutions.nrg.points.three")}
                    </p>
                  </div>
                  <a
                      href="/matrix"
                      className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {t("home.solutions.nrg.link")}
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

        {/* Applicazioni */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              {t("home.applications.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  {t("home.applications.civil.title")}
                </h3>
                <p className="text-lg opacity-90">
                  {t("home.applications.civil.text")}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  {t("home.applications.military.title")}
                </h3>
                <p className="text-lg opacity-90">
                  {t("home.applications.military.text")}
                </p>
              </div>
            </div>
            <div className="text-center">
              <a
                  href="/applicazioni"
                  className="group inline-flex items-center gap-2 font-semibold text-lg"
              >
                {t("home.applications.link")}
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl text-slate-700 mb-10">
              {t("home.cta.text")}
            </p>
            <a
                href="/contatti"
                className="group inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-xl font-semibold"
            >
              {t("home.cta.button")}
              <ArrowRight size={24} />
            </a>
          </div>
        </section>
      </div>
  );
}
