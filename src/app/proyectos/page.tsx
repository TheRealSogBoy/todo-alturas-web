import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLIENT_CASES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Building2, Info, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos y Casos de Experiencia",
  description:
    "Experiencia comprobada en seguridad industrial, líneas de vida y formación de brigadas para empresas como Mercacentro, Incauca, Torreón y Hospital Federico Lleras.",
};

export default function ProyectosPage() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 border-b border-[#222] bg-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
              TRAYECTORIA Y CAPACIDAD OPERATIVA
            </span>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Proyectos ejecutados con el respaldo de nuestro equipo técnico.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Intervenciones de ingeniería, suministro y capacitación para compañías de alta exigencia en agroindustria, construcción vertical, centros logísticos y salud pública.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Transparency Note */}
      <section className="py-8 bg-[#141414] border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-zinc-400">
            <Info className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Nota de Transparencia Corporativa:</strong> Los casos presentados a continuación corresponden a empresas con las que Todo Alturas ha ejecutado proyectos de ingeniería, formación técnica o suministro. Las fotografías y memorias detalladas de obra se incorporan progresivamente conforme a las autorizaciones de confidencialidad de cada cliente corporativo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Client Cases Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Empresas Atendidas"
          title="Casos destacados por sector industrial."
          highlightWord="sector"
          description="Soluciones a la medida de los retos operacionales de cada industria."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_CASES.map((item, idx) => (
            <article
              key={item.id}
              className="bg-[#121212] border border-[#262626] rounded-xl p-8 flex flex-col justify-between hover:border-[#FFDE3B]/50 transition-all group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#FFDE3B]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors tracking-wide"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#FFDE3B] font-mono">{item.sector}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-500 font-bold">CASO 0{idx + 1}</span>
                </div>

                <div className="space-y-3 pt-2 border-t border-zinc-800">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                      Alcance de la Intervención:
                    </span>
                    <p className="text-sm text-zinc-200 mt-1 leading-relaxed">
                      {item.interventionType}
                    </p>
                  </div>

                  <div className="p-3 bg-[#181818] rounded border border-zinc-800/80 text-xs text-zinc-400">
                    <span className="text-[10px] font-mono text-[#FFDE3B] uppercase tracking-wider block font-bold mb-1">
                      Estado de Documentación:
                    </span>
                    {item.note}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFDE3B]" />
                  Protocolo SST Validado
                </span>

                <Link
                  href="/contacto"
                  className="text-xs uppercase font-bold text-[#FFDE3B] hover:text-white inline-flex items-center gap-1 tracking-wider"
                >
                  <span>Consultar Solución Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <FinalCtaSection />
    </div>
  );
}
