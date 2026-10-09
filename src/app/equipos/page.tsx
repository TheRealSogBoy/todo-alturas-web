import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetPath } from "@/lib/paths";
import {
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
  HardHat,
  Anchor,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dotación y Equipos de Seguridad Industrial Certificados",
  description:
    "Suministro corporativo de arneses de cuerpo completo, eslingas en Y con absorbedor, líneas retráctiles, cascos dieléctricos y conectores con certificación ANSI Z359 y EN.",
};

export default function EquiposPage() {
  const categories = [
    {
      id: "arneses",
      title: "Arneses de Cuerpo Completo",
      standards: "ANSI Z359.11 / CSA Z259.10",
      description:
        "Arneses ergonómicos de 1, 3 o 4 argollas en D (dorsal, esternal y laterales). Versiones multipropósito, para soldadura (Kevlar/Nomex), posicionamiento y modelos dieléctricos con recubrimiento no conductor hasta 9 kV.",
      specs: [
        "Capacidad probada para operario + herramientas hasta 140 kg (310 lb)",
        "Indicadores de impacto en reata dorsal para inspección rápida",
        "Hebillas de ajuste rápido pasantes o automáticas (quick release)",
        "Reatas de poliéster de alta tenacidad de 45 mm con costuras computarizadas",
      ],
    },
    {
      id: "eslingas",
      title: "Eslingas de Detención y Posicionamiento",
      standards: "ANSI Z359.13 / ANSI Z359.3",
      description:
        "Eslingas sencillas y en 'Y' (doble terminal) con paquete absorbedor de energía para limitar las fuerzas de detención por debajo de 900 lb (4 kN), y eslingas regulables para posicionamiento con argollas laterales.",
      specs: [
        "Ganchos de seguridad de doble seguro de 3/4\" o ganchos de escala de 2 1/4\" (57 mm)",
        "Resistencia de la compuerta del gancho de 3.600 lb (16 kN)",
        "Elongación controlada del absorbedor para mantener el factor de caída seguro",
        "Opciones en reata tubular elástica antigolpeteo o cuerda trenzada",
      ],
    },
    {
      id: "retractiles",
      title: "Dispositivos Retráctiles Anticaídas (SRL)",
      standards: "ANSI Z359.14 Clase 1 y Clase 2",
      description:
        "Líneas de vida autorretráctiles en cable de acero galvanizado o inoxidables desde 6 m hasta 30 m, y versiones personales compactas en cinta de 2 m a 3 m para anclaje a nivel de pies o superior.",
      specs: [
        "Freno centrífugo de accionamiento inmediato que reduce la distancia de caída libre",
        "Carcasa hermética de aluminio o tecnopolímero de alta resistencia al impacto",
        "Mosquetón giratorio con indicador de impacto en el terminal de conexión",
        "Modelos probados sobre bordes filosos (Leading Edge) cuando aplique",
      ],
    },
    {
      id: "cascos-proteccion",
      title: "Cascos Industriales para Alturas",
      standards: "ANSI Z89.1 Tipo II Clase E / EN 12492",
      description:
        "Cascos de protección craneal sin visera para campo visual vertical óptimo, suspensión de absorción multipunto y barboquejo reforzado de 4 puntos para retención garantizada en caso de caída.",
      specs: [
        "Aislamiento dieléctrico certificado hasta 20.000 voltios (Clase E)",
        "Ranuras laterales universales para acoplar protectores auditivos y pantallas faciales",
        "Rueda de ajuste tipo ratchet para tallas 52 cm a 63 cm",
        "Ventilación regulable en modelos para rescate y espacios exteriores",
      ],
    },
    {
      id: "conectores",
      title: "Mosquetones, Poleas y Conectores de Anclaje",
      standards: "ANSI Z359.12 / EN 362",
      description:
        "Conectores forjados en acero aleado o duraluminio con cierre automático de 3 pasos (Triple Lock), poleas sencillas y dobles para rescate, placas multianclaje y bandas tie-off.",
      specs: [
        "Resistencia longitudinal mínima de 5.000 lb (22.2 kN)",
        "Resistencia de compuerta ensayada a 3.600 lb",
        "Tratamiento anticorrosión galvanizado o anodizado para ambientes salinos",
        "Cierre automático que evita aperturas involuntarias por vibración",
      ],
    },
    {
      id: "lineas-cuerda",
      title: "Cuerdas Semi-estáticas y Líneas Temporales",
      standards: "EN 1891 Tipo A / NFPA 1983",
      description:
        "Cuerdas de bajo coeficiente de estiramiento (10.5 mm - 12 mm) para líneas de vida verticales temporales, sistemas de acceso por cuerdas, descensores autofrenantes y bloqueadores de rescate.",
      specs: [
        "Funda resistente a la abrasión con alma de poliamida continua",
        "Compatibilidad verificada con arrestadores de caída (tipo rope-grab)",
        "Terminales cosidos con guardacabo protector o nudos certificados",
        "Líneas de vida horizontales temporales portátiles en reata de fácil tensado",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 border-b border-[#222] bg-[#0E0E0E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/images/safety-equipment.jpg")}
            alt="Equipos de seguridad industrial y arneses certificados"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 rounded text-xs font-mono font-bold text-[#FFDE3B] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              SUMINISTRO CORPORATIVO CERTIFICADO
            </div>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Equipos de protección y rescate para operaciones de alto riesgo.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Dotación técnica para empresas y contratistas. Cada referencia se entrega con ficha técnica oficial, certificado de conformidad bajo normas ANSI Z359 / OSHA / EN y guía de inspección periódica.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#cotizar-equipos"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow inline-flex items-center gap-2"
              >
                <span>Cotizar Lote de Equipos B2B</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#catalogo-equipos"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-2 transition-colors"
              >
                <span>Ver Categorías Técnicas</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Quality Assurance Strip */}
      <section className="py-12 border-b border-[#222] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <FileCheck2 className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Trazabilidad Total</p>
                <p className="text-[11px] text-zinc-400">Números de serie y lotes trazables para carpetas SST</p>
              </div>
            </div>

            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Normas ANSI & EN</p>
                <p className="text-[11px] text-zinc-400">Equipos avalados sin sustitutos no conformes</p>
              </div>
            </div>

            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <Package className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Despachos Nacionales</p>
                <p className="text-[11px] text-zinc-400">Atención ágil para proyectos y paradas de planta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories Grid */}
      <section id="catalogo-equipos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portafolio de Equipos"
          title="Líneas de dotación técnica para protección contra caídas."
          highlightWord="dotación"
          description="Selección técnica de elementos individuales y colectivos adaptados a las condiciones de su industria."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFDE3B]/50 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#FFDE3B] bg-[#FFDE3B]/10 px-2 py-0.5 rounded border border-[#FFDE3B]/20 uppercase font-bold">
                    {cat.standards}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 font-bold">0{idx + 1}</span>
                </div>

                <h3
                  className="text-2xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {cat.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed">{cat.description}</p>

                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase font-bold">
                    Especificaciones Clave:
                  </span>
                  {cat.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE3B] shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800">
                <a
                  href="#cotizar-equipos"
                  className="w-full text-center py-2.5 px-3 rounded bg-[#1C1C1C] group-hover:bg-[#FFDE3B] text-zinc-300 group-hover:text-[#0B0B0B] text-xs font-bold uppercase tracking-wider block transition-colors"
                >
                  Cotizar esta Línea de Equipos
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="cotizar-equipos" className="py-20 bg-[#101010] border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            initialService="Suministro de Equipos de Seguridad y EPP"
            source="pagina_equipos"
          />
        </div>
      </section>
    </div>
  );
}
