import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetPath } from "@/lib/paths";

export function EngineeringFeature() {
  return (
    <section className="py-20 lg:py-28 bg-[#101010] border-y border-[#222] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDE3B]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Photography with Blueprint Grid Details */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#2D2D2D] shadow-2xl">
              <Image
                src={getAssetPath("/images/engineering-structure.jpg")}
                alt="Montaje de sistemas de ingeniería y líneas de vida en cubierta industrial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent"></div>

              {/* Technical Measurement Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-[#333] rounded-lg">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FFDE3B] font-bold flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5" />
                    NORMATIVA ANSI Z359 & EN 795
                  </span>
                  <span className="text-zinc-400">Certificación Técnica</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1">
                  Memorias de cálculo, pruebas de carga estática y dinámica avaladas por ingenieros calculistas.
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FFDE3B] text-[#0B0B0B] p-4 rounded-lg shadow-xl font-mono text-xs font-bold items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>MONTAJE EN TODO EL PAÍS</span>
            </div>
          </div>

          {/* Right Column: Text & Engineering Solutions */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Sistemas de Ingeniería"
              title="Protección anticaídas diseñada con rigor estructural."
              highlightWord="estructural"
              description="Diseñamos, suministramos, instalamos y certificamos sistemas permanentes y temporales que garantizan la vida de sus operarios en cubiertas, fachadas, grúas y naves industriales."
            />

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#141414] rounded-lg border border-[#262626] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Líneas de Vida Horizontales y Verticales
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    En cable de acero inoxidable y rieles rígidos para cubiertas metálicas, muros de concreto o estructuras metálicas con absorbedores de energía.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#141414] rounded-lg border border-[#262626] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Puntos de Anclaje Fijos y Móviles (5.000 lb)
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Instalación química o mecánica con ensayos de tracción in situ conforme a las exigencias normativas vigentes.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#141414] rounded-lg border border-[#262626] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Barandas Técnicas y Redes de Seguridad
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Sistemas de protección pasiva perimetral para contención en obras de construcción y zonas de mantenimiento en plantas.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#141414] rounded-lg border border-[#262626] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Inspección Anual y Recertificación Técnica
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Auditoría de sistemas preexistentes, emisión de concepto técnico y trazabilidad para carpetas HSEQ.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contacto?servicio=ingenieria"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow inline-flex items-center justify-center gap-2"
              >
                <span>Cotizar Proyecto de Ingeniería</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/ingenieria"
                className="text-xs uppercase font-bold tracking-wider text-zinc-300 hover:text-white py-3.5 px-4 text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Ver especificaciones técnicas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
