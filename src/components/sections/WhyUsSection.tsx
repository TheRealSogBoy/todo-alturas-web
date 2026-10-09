import React from "react";
import Image from "next/image";
import { TRUST_PILLARS } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetPath } from "@/lib/paths";

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Atmospheric Industrial Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-[#2B2B2B] shadow-2xl">
              <Image
                src={getAssetPath("/images/anchor-points.jpg")}
                alt="Operario industrial ejecutando inspección técnica de anclajes"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md border border-[#333] rounded-lg">
                <span className="text-[11px] font-mono text-[#FFDE3B] font-bold block uppercase">
                  Cero Accidentes como Meta Operativa
                </span>
                <p className="text-xs text-zinc-300 mt-1">
                  Protegemos la continuidad operativa de su empresa y la integridad de quienes ejecutan tareas críticas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Elaborate editorial pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionHeading
              eyebrow="Respaldo Corporativo"
              title="Por qué las empresas líderes eligen Todo Alturas."
              highlightWord="eligen"
              description="Combinamos la precisión de la ingeniería estructural con la pedagogía técnica en seguridad, respaldados por la trayectoria de dos décadas del Grupo Empresarial Eficaz."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-[#121212] border-l-2 border-[#FFDE3B] p-5 rounded-r-lg border-y border-r border-zinc-800/80 space-y-2 hover:bg-[#161616] transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#FFDE3B]">
                    {pillar.number}
                  </span>
                  <h3
                    className="text-lg font-bold uppercase text-white leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
