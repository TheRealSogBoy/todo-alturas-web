import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CLIENT_CASES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, ArrowRight, Info } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Experiencia Comprobada"
            title="Proyectos y clientes que confían en nuestras soluciones."
            highlightWord="confían"
            description="Empresas de primer nivel en sectores de agroindustria, construcción, retail y salud en las que hemos intervenido con formación o ingeniería."
          />

          <Link
            href="/proyectos"
            className="text-xs sm:text-sm font-bold text-[#FFDE3B] hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider self-start md:self-end border-b border-[#FFDE3B]/30 pb-1 hover:border-white transition-all"
          >
            <span>Ver detalle de experiencia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Client Cases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_CASES.map((item) => (
            <div
              key={item.id}
              className="bg-[#121212] border border-[#262626] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFDE3B]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#333] flex items-center justify-center text-[#FFDE3B]">
                  <Building2 className="w-6 h-6" />
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold uppercase text-white tracking-wide"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#FFDE3B] font-mono mt-0.5">
                    {item.sector}
                  </p>
                </div>

                <div className="pt-2 text-xs text-zinc-300">
                  <strong className="text-zinc-500 block text-[11px] uppercase tracking-wider mb-1">
                    Tipo de Intervención:
                  </strong>
                  {item.interventionType}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-zinc-500">
                <Info className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
