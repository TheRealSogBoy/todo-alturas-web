import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_LINES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, HardHat, Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "Portafolio de Soluciones B2B",
  description:
    "Soluciones integrales de seguridad industrial para empresas colombianas: sistemas de ingeniería contra caídas, formación y capacitación técnica, y equipos certificados.",
};

export default function SolucionesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    capacitacion: <HardHat className="w-6 h-6 text-[#FFDE3B]" />,
    ingenieria: <Wrench className="w-6 h-6 text-[#FFDE3B]" />,
    equipos: <ShieldCheck className="w-6 h-6 text-[#FFDE3B]" />,
  };

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 border-b border-[#222] bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
              PORTAFOLIO INTEGRAL DE SERVICIOS
            </span>
            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Soluciones diseñadas para proteger la vida y la continuidad operacional.
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              En Todo Alturas integramos ingeniería estructural, formación pedagógica de alto nivel y suministro de dotación certificada para que su empresa cumpla la normatividad con los más altos estándares técnicos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Detailed Stack */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SERVICE_LINES.map((line, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={line.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#2B2B2B] shadow-2xl">
                  <Image
                    src={line.image}
                    alt={line.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 border border-[#333] px-3.5 py-1 rounded text-xs font-mono font-bold text-[#FFDE3B]">
                    LÍNEA {line.number}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#181818] border border-[#333] flex items-center justify-center shrink-0">
                    {iconMap[line.id] || <Cog className="w-6 h-6 text-[#FFDE3B]" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      Categoría Corporativa
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl font-extrabold uppercase text-white"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {line.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-[#FFDE3B] font-medium uppercase tracking-wide">
                  {line.tagline}
                </p>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {line.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-zinc-800">
                  <span className="text-xs uppercase font-mono text-zinc-400 block font-bold">
                    Alcance de la línea:
                  </span>
                  {line.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FFDE3B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={line.href}
                    className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded shadow inline-flex items-center gap-2"
                  >
                    <span>Ver Detalles y Opciones</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contacto?servicio=${encodeURIComponent(line.title)}`}
                    className="text-xs uppercase font-bold tracking-wider text-zinc-400 hover:text-white py-3.5 px-4"
                  >
                    Cotizar Directamente
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA Final */}
      <FinalCtaSection />
    </div>
  );
}
