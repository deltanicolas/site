"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Send, Loader2,
  CheckCircle2, Globe, Users,
  Briefcase, Wrench, ArrowRight
} from "lucide-react";
import Header from "../../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContattiPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    department: "sales",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ department: "sales", name: "", company: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: "Errore durante l'invio." });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">

        {/* ===================== 1. HERO Istituzionale ===================== */}
        <section className="relative pt-32 pb-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('contact.hero.title')} <span className="text-blue-500">{t('contact.hero.title_accent')}</span>
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                {t('contact.hero.desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===================== 2. ROUTING CARDS ===================== */}
        <section className="relative -mt-12 z-20 pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">

              {/* SALES CARD */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition-all group cursor-pointer"
                   onClick={() => document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})}>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.cards.sales.title')}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {t('contact.cards.sales.desc')}
                </p>
                <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('contact.cards.sales.link')} <ArrowRight size={16}/>
              </span>
              </div>

              {/* SUPPORT CARD */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-400 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-slate-600 group-hover:text-white transition-colors">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.cards.support.title')}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {t('contact.cards.support.desc')}
                </p>
                <a href="mailto:support@037.tech" className="text-slate-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-blue-600">
                  {t('contact.cards.support.link')} <ArrowRight size={16}/>
                </a>
              </div>

              {/* PARTNER CARD */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-900 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.cards.partner.title')}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {t('contact.cards.partner.desc')}
                </p>
                <a href="mailto:partners@037.tech" className="text-slate-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-blue-600">
                  {t('contact.cards.partner.link')} <ArrowRight size={16}/>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 3. MAIN FORM SECTION ===================== */}
        <section className="py-20 bg-slate-50" id="contact-form">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16">

              {/* Left: Quick Info */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('contact.form.title')}</h2>
                  <p className="text-slate-500 leading-relaxed">
                    {t('contact.form.desc')}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{t('contact.form.offices')}</h4>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">037 Technology S.r.l.</p>
                      <p className="text-slate-500 text-sm">Via dell'Innovazione 1, Milano<br/>20100, Italia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <Phone size={18} className="text-slate-400"/>
                    <a href="tel:+39020000000" className="text-slate-900 font-medium hover:text-blue-600">+39 02 1234 5678</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-slate-400"/>
                    <a href="mailto:info@037.tech" className="text-slate-900 font-medium hover:text-blue-600">info@037.tech</a>
                  </div>
                </div>

                {/* Map */}
                <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-900">
                  <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                      className="opacity-40 w-full h-full object-cover"
                      alt="Global Map"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <Globe className="text-blue-400 mb-2" size={32}/>
                    <h4 className="text-white font-bold">{t('contact.form.global_map')}</h4>
                  </div>
                </div>
              </div>

              {/* Right: The Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.dept')}</label>
                      <div className="relative">
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 font-medium"
                        >
                          <option value="sales">{t('contact.form.options.sales')}</option>
                          <option value="support">{t('contact.form.options.support')}</option>
                          <option value="marketing">{t('contact.form.options.marketing')}</option>
                          <option value="partners">{t('contact.form.options.partners')}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.name')} *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.company')}</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.email')} *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.phone')}</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.form.labels.message')} *</label>
                      <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus.loading || formStatus.success}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus.loading ? (
                          <Loader2 className="animate-spin" />
                      ) : formStatus.success ? (
                          <> {t('contact.form.success_title')} <CheckCircle2 size={20}/></>
                      ) : (
                          <> {t('contact.form.submit')} <Send size={18} /></>
                      )}
                    </button>

                    <AnimatePresence>
                      {formStatus.success && (
                          <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="bg-green-50 text-green-800 p-4 rounded-lg text-sm border border-green-200 flex items-start gap-3"
                          >
                            <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0"/>
                            <div>
                              <strong>{t('contact.form.success_title')}</strong>
                              <p>{t('contact.form.success_msg')}</p>
                            </div>
                          </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="text-xs text-slate-400 text-center">
                      {t('contact.form.privacy')}
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-bold text-white text-lg">037</div>
            <div className="flex gap-8 font-medium">
              <a href="/prodotti" className="hover:text-white transition-colors">{t('footer.col_products')}</a>
              <a href="/chi-siamo" className="hover:text-white transition-colors">{t('header.nav.about')}</a>
              <a href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            </div>
            <div className="text-xs">&copy; {new Date().getFullYear()} 037 Technology.</div>
          </div>
        </footer>
      </div>
  );
}