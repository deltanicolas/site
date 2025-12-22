"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-slate-400 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">

                    {/* Colonna Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-black text-white block mb-4">037</span>
                        <p className="text-slate-400">{t('footer.description')}</p>
                    </div>

                    {/* Colonna Prodotti */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
                            {t('footer.col_products')}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    {t('footer.items.guardian')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Guardian-NRG
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    {t('footer.items.cloud')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Colonna Supporto */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
                            {t('footer.col_support')}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    {t('footer.items.docs')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    {t('footer.items.assistance')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    {t('footer.items.faq')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Colonna Contatti */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
                            {t('footer.col_contacts')}
                        </h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>info@037.tech</li>
                            <li>+39 02 123 4567</li>
                            <li>{t('footer.location')}</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright e Privacy */}
                <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-xs text-slate-500">
                    <p>{t('footer.rights')}</p>
                    <div className="flex gap-4">
                        <a href="/privacy" className="hover:text-slate-300 transition-colors">
                            {t('footer.privacy')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}