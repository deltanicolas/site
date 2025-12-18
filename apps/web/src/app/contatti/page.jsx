"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Shield, Loader2, Globe, Clock, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import { motion, AnimatePresence } from "framer-motion";

export default function ContattiPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Simulazione invio (sostituire con fetch reale se necessario)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: "Errore di connessione al server." });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />

        {/* --- HERO SECTION: TECHNICAL OVERLAY --- */}
        <section className="relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
              Communication_Node // 037_Connect
            </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 italic tracking-tighter leading-none uppercase">
                ENTRA IN <span className="text-blue-500">CONTATTO</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl mx-auto italic">
                I nostri specialisti sono pronti a configurare la tua rete di sicurezza perimetrale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT TERMINAL SECTION --- */}
        <section className="py-24 relative -mt-10 z-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* LEFT: Contact Information Tiles */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">E-Mail Access</p>
                      <a href="mailto:info@037tecnologia.it" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors italic">
                        info@037tecnologia.it
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Direct Line</p>
                      <a href="tel:+390212345678" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors italic">
                        +39 02 1234 5678
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-xl font-bold text-slate-900 italic">Italia</p>
                    </div>
                  </div>
                </div>

                {/* Status Display Card */}
                <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-[10px] font-mono text-slate-400">OPERATIONAL_HOURS</span>
                      <Clock size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between uppercase">
                        <span className="text-slate-500">Mon - Fri</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between uppercase text-red-500/70">
                        <span className="text-slate-500">Sat - Sun</span>
                        <span>Offline</span>
                      </div>
                    </div>
                  </div>
                  <Globe className="absolute -bottom-10 -right-10 text-white/5" size={200} />
                </div>
              </div>

              {/* RIGHT: The Terminal Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
                  <div className="mb-10 flex justify-between items-start">
                    <div>
                      <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">
                        Secure <span className="text-blue-600">Message</span>
                      </h2>
                      <p className="text-slate-500 italic mt-2">Compila il form per una consulenza tecnica.</p>
                    </div>
                    <Shield size={40} className="text-slate-100" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6 italic">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full_Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all font-bold placeholder:text-slate-300"
                            placeholder="Nome e Cognome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email_Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all font-bold placeholder:text-slate-300"
                            placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 italic">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone_Number</label>
                      <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all font-bold placeholder:text-slate-300"
                          placeholder="+39 000 000 0000"
                      />
                    </div>

                    <div className="space-y-2 italic">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Inquiry_Details</label>
                      <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all font-bold placeholder:text-slate-300 resize-none"
                          placeholder="Descrivi la tua esigenza (Cantiere, Militare, Eventi...)"
                      />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus.loading}
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-6 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] group italic active:scale-95"
                    >
                      {formStatus.loading ? (
                          <Loader2 className="animate-spin" />
                      ) : (
                          <>
                            <span>Transmitting_Data</span>
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                      )}
                    </button>

                    <AnimatePresence>
                      {formStatus.success && (
                          <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl text-center text-sm font-bold italic"
                          >
                            ✓ CONNESSIONE STABILITA: Messaggio inviato correttamente.
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </form>

                  {/* Cyber Decorative Lines */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 -mr-12 -mt-12 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER: MINIMALIST --- */}
        <footer className="bg-white py-16 border-t border-slate-100 font-mono uppercase text-[10px] tracking-widest">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <img
                src="https://ucarecdn.com/0d36fc5b-f9dc-4436-b52a-6e2074fbf859/-/format/auto/"
                alt="037 Logo"
                className="h-6 grayscale opacity-50"
            />
            <div className="flex gap-8 text-slate-400">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Server_Online
            </span>
              <span>Auth_Protocol_Active</span>
            </div>
            <p className="text-slate-400 italic">© 037_TECNOLOGIA // {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
  );
}