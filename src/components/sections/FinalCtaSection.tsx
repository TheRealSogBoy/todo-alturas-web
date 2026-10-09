import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] relative overflow-hidden border-t border-[#222]">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFDE3B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#141414] to-[#1C1C1C] border border-[#333] rounded-2xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top Yellow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFDE3B]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                CONVERSEMOS SOBRE LA SEGURIDAD DE SU EMPRESA
              </span>

              <h2
                className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                La seguridad de tu operación comienza con una{" "}
                <span className="text-[#FFDE3B]">solución adecuada.</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Permita que nuestros ingenieros evalúen sus requerimientos de líneas de vida, puntos de anclaje, dotación o capacitación de cuadrillas bajo las directrices del Ministerio de Trabajo.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/contacto"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded text-center shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Solicitar Cotización Empresarial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.contacts.ibague.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#242424] hover:bg-[#2F2F2F] text-white border border-[#383838] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FFDE3B]" />
                <span>Contactar Asesor por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
