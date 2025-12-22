"use client";

import React from "react";
import { ArrowLeft, ShieldCheck, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
    // Data odierna per "Ultimo aggiornamento"
    const lastUpdate = new Date().toLocaleDateString("it-IT", {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-slate-50 py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header e Tasto Back */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft size={18} /> Torna alla Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Informativa Privacy & Termini d'Uso
                    </h1>
                    <p className="text-slate-500">
                        Ultimo aggiornamento: {lastUpdate}
                    </p>
                </div>

                {/* Contenuto Legale */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 space-y-10">

                    {/* Sezione 1: Premessa */}
                    <section>
                        <div className="flex items-center gap-3 mb-4 text-blue-700">
                            <ShieldCheck size={28} />
                            <h2 className="text-2xl font-bold">1. Titolare del Trattamento</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR).
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Il Titolare del trattamento dei dati è: <br />
                            <strong>037 Tech S.r.l.</strong> (o Ragione Sociale)<br />
                            Indirizzo: Via Esempio 123, 00100 Città (PROV)<br />
                            P.IVA: 00000000000<br />
                            Email di contatto: <a href="mailto:info@037.tech" className="text-blue-600 underline">info@037.tech</a>
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Sezione 2: Dati Trattati */}
                    <section>
                        <div className="flex items-center gap-3 mb-4 text-blue-700">
                            <FileText size={28} />
                            <h2 className="text-2xl font-bold">2. Tipologia di Dati Trattati</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-3 text-slate-600 leading-relaxed">
                            <li>
                                <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito o la compilazione del form di contatto comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva (es. Nome, Azienda, Telefono).
                            </li>
                            <li>
                                <strong>Cookie:</strong> Questo sito <u>NON utilizza cookie di profilazione</u> o tracciamento commerciale. Vengono utilizzati esclusivamente cookie tecnici strettamente necessari al funzionamento della navigazione, per i quali non è richiesto il consenso.
                            </li>
                        </ul>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Sezione 3: Finalità */}
                    <section>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">3. Finalità e Base Giuridica</h3>
                        <p className="text-slate-600 leading-relaxed">
                            I dati personali forniti dagli utenti sono utilizzati al solo fine di eseguire il servizio o la prestazione richiesta (rispondere a richieste di informazioni, preventivi, supporto tecnico). La base giuridica del trattamento è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6 comma 1 lett. b del GDPR).
                        </p>
                    </section>

                    {/* Sezione 4: Conservazione */}
                    <section>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">4. Conservazione dei Dati</h3>
                        <p className="text-slate-600 leading-relaxed">
                            I dati verranno conservati per il periodo strettamente necessario a gestire la richiesta dell'utente. Qualora non si instauri un rapporto commerciale continuativo, i dati verranno cancellati entro 12 mesi dall'ultimo contatto.
                        </p>
                    </section>

                    <hr className="border-slate-100" />

                    {/* Sezione 5: SCARICO RESPONSABILITA' (DISCLAIMER) */}
                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-4 text-red-700">
                            <Scale size={28} />
                            <h2 className="text-2xl font-bold">5. Limitazione di Responsabilità</h2>
                        </div>
                        <div className="text-slate-600 space-y-4 text-sm leading-relaxed text-justify">
                            <p>
                                <strong>5.1 Accuratezza delle Informazioni:</strong> Sebbene 037 Tech si impegni a fornire informazioni accurate e aggiornate relative ai prodotti (es. Guardian-NRG, Matrix), non si garantisce l'assenza di errori, inesattezze o omissioni nei contenuti pubblicati sul sito. Le specifiche tecniche possono variare senza preavviso.
                            </p>
                            <p>
                                <strong>5.2 Uso del Form Contatti:</strong> L'utente si assume la piena responsabilità civile e penale per i dati forniti tramite il form di contatto. 037 Tech declina ogni responsabilità per l'inserimento di dati falsi, inesatti o appartenenti a terzi senza autorizzazione.
                            </p>
                            <p>
                                <strong>5.3 Sicurezza Informatica:</strong> Pur adottando le misure di sicurezza standard (protocollo HTTPS), 037 Tech non può garantire che il sito sia privo di virus o altri componenti dannosi derivanti da attacchi informatici esterni. L'utente è invitato a dotarsi di adeguati sistemi antivirus.
                            </p>
                            <p>
                                <strong>5.4 Link Esterni:</strong> Questo sito potrebbe contenere link a siti terzi. 037 Tech non è responsabile per le politiche sulla privacy o i contenuti di tali siti.
                            </p>
                        </div>
                    </section>

                    {/* Sezione 6: Diritti Utente */}
                    <section>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">6. Diritti dell'Interessato</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            In ogni momento, Lei potrà esercitare, ai sensi degli artt. 15-22 del GDPR, il diritto di:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
                            <li>Chiedere la conferma dell'esistenza o meno dei propri dati personali;</li>
                            <li>Ottenere le indicazioni circa le finalità del trattamento, le categorie dei dati personali, i destinatari o le categorie di destinatari a cui i dati personali sono stati o saranno comunicati e, quando possibile, il periodo di conservazione;</li>
                            <li>Ottenere la rettifica e la cancellazione dei dati;</li>
                            <li>Ottenere la limitazione del trattamento.</li>
                        </ul>
                        <p className="text-slate-600">
                            Per esercitare tali diritti può rivolgersi al Titolare scrivendo a: <strong>info@037.tech</strong>
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}