import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICE_LINES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Portafolio Integral"
            title="Soluciones integrales para la seguridad de tu operación."
            highlightWord="seguridad"
            description="Tres líneas de servicio articuladas para blindar su empresa técnica, jurídica y operativamente contra accidentes por caídas y riesgos críticos."
          />

          <Link
            href="/soluciones"
            className="text-xs sm:text-sm font-bold text-[#FFDE3B] hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider self-start md:self-end border-b border-[#FFDE3B]/30 pb-1 hover:border-white transition-all"
          >
            <span>Ver detalle de todas las soluciones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 High Impact Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_LINES.map((line) => (
            <article
              key={line.id}
              className="bg-[#121212] border border-[#262626] rounded-xl overflow-hidden flex flex-col group hover:border-[#FFDE3B]/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Photo Block with Number Badge */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={line.image}
                  alt={line.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>

                {/* Industrial Number Tag */}
                <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 backdrop-blur-sm border border-[#333] px-3 py-1 rounded text-xs font-mono font-bold text-[#FFDE3B]">
                  {line.number}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3
                    className="text-2xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {line.title}
                  </h3>

                  <p className="text-xs text-[#FFDE3B] font-medium mt-1 uppercase tracking-wider">
                    {line.tagline}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {line.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2 border-t border-zinc-800/80 pt-4">
                    {line.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#FFDE3B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800/60">
                  <Link
                    href={line.href}
                    className="w-full bg-[#1A1A1A] group-hover:bg-[#FFDE3B] text-zinc-200 group-hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded text-center inline-flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Conocer Servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
