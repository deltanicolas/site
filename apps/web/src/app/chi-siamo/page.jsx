"use client";

import Header from "../../components/Header";
import { ChevronRight, Target, Lightbulb, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ChiSiamoPage() {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                {t("about.heroTitle")}
              </h1>
              <p className="text-2xl font-light leading-relaxed">
                {t("about.heroSubtitle")}
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
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
              {t("about.valuesTitle")}
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("about.experienceTitle")}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t("about.experienceText")}
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("about.innovationTitle")}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t("about.innovationText")}
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("about.reliabilityTitle")}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t("about.reliabilityText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">
                {t("about.ctaTitle")}
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                {t("about.ctaText")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                    href="/guardian"
                    className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xl font-semibold transition-all"
                >
                  {t("about.ctaGuardian")}
                  <ChevronRight size={24} />
                </a>

                <a
                    href="/matrix"
                    className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-10 py-5 rounded-xl font-semibold border-2 border-white/30 transition-all"
                >
                  {t("about.ctaMatrix")}
                  <ChevronRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
