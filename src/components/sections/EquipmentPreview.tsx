import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EquipmentPreview() {
  const categories = [
    {
      title: "Arneses de Cuerpo Completo",
      desc: "Multipropósito de 4 argollas, dieléctricos, para posicionamiento y rescate con certificación ANSI Z359.11.",
    },
    {
      title: "Eslingas y Absorbedores",
      desc: "Eslingas dobles en 'Y' con paquete de absorción de choque, eslingas de posicionamiento regulables y de restricción.",
    },
    {
      title: "Líneas de Vida Retráctiles",
      desc: "Dispositivos retráctiles en cable de acero galvanizado y cinta de alta tenacidad con carcasas de polímero de alto impacto.",
    },
    {
      title: "Cascos Industriales y Conectores",
      desc: "Cascos dieléctricos Tipo II Clase E con barboquejo de 4 puntos y mosquetones de acero/aluminio con triple seguro (3.600 lb en compuerta).",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#101010] border-t border-[#222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information and Categories */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Equipos Certificados"
              title="Dotación técnica y elementos de protección certificados."
              highlightWord="certificados"
              description="Suministramos elementos de protección individual y colectiva rigurosamente probados para soportar las exigencias más severas de la industria colombiana, sin improvisaciones."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#141414] border border-[#262626] rounded-lg space-y-2 hover:border-[#FFDE3B]/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFDE3B]"></span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      {cat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/equipos"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow inline-flex items-center justify-center gap-2"
              >
                <span>Explorar Catálogo de Equipos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto?servicio=equipos"
                className="text-xs uppercase font-bold tracking-wider text-zinc-300 hover:text-white py-3.5 px-4 text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Solicitar cotización por volumen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: High Quality Product Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#2D2D2D] shadow-2xl">
              <Image
                src="/images/safety-equipment.jpg"
                alt="Equipos de seguridad certificados para trabajo en alturas"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-[#333] rounded-lg">
                <span className="text-[11px] font-mono text-[#FFDE3B] font-bold block uppercase">
                  Garantía & Ficha Técnica
                </span>
                <p className="text-xs text-zinc-300 mt-1">
                  Cada lote incluye certificado de conformidad de fabricante y manual de inspección técnica preoperacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
