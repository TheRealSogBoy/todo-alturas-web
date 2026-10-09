import React, { Suspense } from "react";
import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SITE_CONFIG } from "@/lib/config";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileCheck2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto & Cotización Empresarial",
  description:
    "Comunícate con Todo Alturas para cotizar líneas de vida, cursos de alturas para empresas y dotación técnica. Sedes en Ibagué y Bogotá.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="py-16 lg:py-20 border-b border-[#222] bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
              CANAL DE ATENCIÓN CORPORATIVO
            </span>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Conversemos sobre el requerimiento de tu empresa.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Diligencia el formulario para recibir una propuesta formal vía WhatsApp o correo electrónico, o comunícate directamente con nuestras sedes técnicas en Ibagué y Bogotá.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Quote Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="text-zinc-500">Cargando formulario...</div>}>
              <QuoteForm source="pagina_contacto" />
            </Suspense>
          </div>

          {/* Right Column: Contact Cards by City */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] border border-[#262626] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FFDE3B]" />
                  <h2
                    className="text-2xl font-bold uppercase text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Sede {SITE_CONFIG.contacts.ibague.city}
                  </h2>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#FFDE3B]/10 text-[#FFDE3B] px-2 py-0.5 rounded border border-[#FFDE3B]/30 font-bold">
                  Ingeniería & Formación
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono uppercase block text-[11px] font-bold">
                    Línea Directa / WhatsApp:
                  </span>
                  <a
                    href={`tel:${SITE_CONFIG.contacts.ibague.phoneRaw}`}
                    className="text-base font-bold text-white hover:text-[#FFDE3B] transition-colors font-mono block mt-0.5"
                  >
                    {SITE_CONFIG.contacts.ibague.phone}
                  </a>
                </div>

                <div>
                  <span className="text-zinc-500 font-mono uppercase block text-[11px] font-bold">
                    Especialidades Atendidas:
                  </span>
                  <ul className="mt-1 space-y-1 text-zinc-300">
                    {SITE_CONFIG.contacts.ibague.specialties.map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FFDE3B]"></span>
                        {sp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500 italic block">
                    * {SITE_CONFIG.contacts.ibague.addressPendingNote}
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.contacts.ibague.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1F1F1F] hover:bg-[#FFDE3B] hover:text-[#0B0B0B] text-zinc-200 text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat con Sede Ibagué</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sede Bogotá */}
            <div className="bg-[#121212] border border-[#262626] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FFDE3B]" />
                  <h2
                    className="text-2xl font-bold uppercase text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Sede {SITE_CONFIG.contacts.bogota.city}
                  </h2>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#FFDE3B]/10 text-[#FFDE3B] px-2 py-0.5 rounded border border-[#FFDE3B]/30 font-bold">
                  Centro de Alturas
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono uppercase block text-[11px] font-bold">
                    Línea Directa / WhatsApp:
                  </span>
                  <a
                    href={`tel:${SITE_CONFIG.contacts.bogota.phoneRaw}`}
                    className="text-base font-bold text-white hover:text-[#FFDE3B] transition-colors font-mono block mt-0.5"
                  >
                    {SITE_CONFIG.contacts.bogota.phone}
                  </a>
                </div>

                <div>
                  <span className="text-zinc-500 font-mono uppercase block text-[11px] font-bold">
                    Especialidades Atendidas:
                  </span>
                  <ul className="mt-1 space-y-1 text-zinc-300">
                    {SITE_CONFIG.contacts.bogota.specialties.map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FFDE3B]"></span>
                        {sp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500 italic block">
                    * {SITE_CONFIG.contacts.bogota.addressPendingNote}
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.contacts.bogota.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1F1F1F] hover:bg-[#FFDE3B] hover:text-[#0B0B0B] text-zinc-200 text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat con Sede Bogotá</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Certificate Verification Box */}
            <div className="bg-[#141414] border border-[#2B2B2B] rounded-xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-8 h-8 text-[#FFDE3B] shrink-0" />
                <div>
                  <p className="font-bold text-white text-xs uppercase">
                    ¿Buscas validar un certificado existente?
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Consulta el portal oficial de verificación de diplomas.
                  </p>
                </div>
              </div>
              <a
                href={SITE_CONFIG.officialCertificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] hover:bg-[#333] text-white text-xs font-bold px-3.5 py-2 rounded shrink-0 uppercase tracking-wide border border-zinc-700"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
