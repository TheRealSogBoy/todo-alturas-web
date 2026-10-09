import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAssetPath } from "@/lib/paths";
import {
  Ruler,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Wrench,
  Layers,
  ArrowRight,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sistemas de Ingeniería Contra Caídas",
  description:
    "Diseño, suministro, instalación y recertificación de líneas de vida horizontales, verticales, puntos de anclaje de 5000 lb, barandas técnicas y redes de seguridad.",
};

export default function IngenieriaPage() {
  const engineeringSolutions = [
    {
      title: "Líneas de Vida Horizontales",
      norm: "ANSI Z359.6 / EN 795 Clase C",
      desc: "Sistemas flexibles en cable de acero inoxidable (316/304) o rieles rígidos para cubiertas metálicas, marquesinas, puentes grúa y zonas de carga y descarga de carrotanques.",
      highlights: [
        "Capacidad multiusuario (2 a 4 operarios simultáneos)",
        "Absorbedor de energía de deformación controlada",
        "Pasaje continuo sin desconexión mediante carretillas deslizantes",
        "Cálculo de catenaria y flecha para tiro libre disponible",
      ],
    },
    {
      title: "Líneas de Vida Verticales",
      norm: "ANSI Z359.16 / EN 353-1/2",
      desc: "Sistemas de protección permanente para ascenso seguro en escaleras de gato, torres de telecomunicaciones, chimeneas y silos industriales.",
      highlights: [
        "Cable de acero galvanizado o inoxidable con tensiómetro",
        "Dispositivo anticaídas deslizante (freno de bloqueo instantáneo)",
        "Guías intermedias antichicotazo para intemperie",
        "Fácil conexión directa a la argolla esternal del arnés",
      ],
    },
    {
      title: "Puntos de Anclaje Certificados",
      norm: "Res. 4272/2021 / ANSI Z359.18 (5.000 lb)",
      desc: "Anclajes estructurales fijos, móviles y químicos probados a 22.2 kN para mantenimiento de fachadas, cubiertas y tareas de suspensión y rescate.",
      highlights: [
        "Fijación química con resinas epóxicas de alto desempeño en concreto",
        "Fijación mecánica mediante contraplacas en perfilería de acero",
        "Ensayo de tracción in situ (Pull-out test) calibrado",
        "Plaqueta metálica de trazabilidad y fecha de inspección",
      ],
    },
    {
      title: "Barandas Técnicas de Seguridad Colectiva",
      norm: "OSHA 1910.29 / Res. 4272/2021",
      desc: "Sistemas de protección pasiva perimetral autoportantes o ancladas que eliminan el riesgo de caída sin necesidad de que el trabajador porte arnés.",
      highlights: [
        "Construcción en aluminio naval o acero galvanizado en caliente",
        "Resistencia a carga puntual horizontal de 200 lb (890 N)",
        "Rodapié incorporado para retención de herramientas",
        "Opciones autoportantes que no perforan la impermeabilización",
      ],
    },
    {
      title: "Redes de Seguridad y Protección Colectiva",
      norm: "EN 1263-1",
      desc: "Redes tipo S y tipo V para retención de caídas de personas y contención de escombros en obras de edificación e infraestructura.",
      highlights: [
        "Malla de poliamida o polipropileno de alta tenacidad",
        "Cuerdas perimetrales de amarre ensayadas",
        "Instalación de horcas y soportes estructurales",
        "Protección para huecos de ascensor y frentes abiertos",
      ],
    },
    {
      title: "Auditoría, Inspección y Recertificación Anual",
      norm: "Inspección Anual Obligatoria",
      desc: "Revisión técnica de sistemas de protección preexistentes para validar su integridad estructural, desgaste por intemperie y vigencia operativa.",
      highlights: [
        "Pruebas de torque y tensión de cables",
        "Revisión de corrosión, fisuración y deformación de anclajes",
        "Emisión de dictamen técnico firmado por ingeniero calificado",
        "Actualización del dossier técnico para auditorías SST/ARL",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 border-b border-[#222] bg-[#0E0E0E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/images/engineering-structure.jpg")}
            alt="Ingeniería contra caídas y líneas de vida"
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
              <Ruler className="w-3.5 h-3.5" />
              INGENIERÍA ESTRUCTURAL CONTRA CAÍDAS
            </div>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Sistemas de ingeniería que transforman cubiertas y plantas en zonas seguras.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Diseño estructural, memoria de cálculo, pruebas de carga y montaje certificado de líneas de vida y puntos de anclaje bajo normas ANSI Z359 y la Resolución 4272 de 2021.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#formulario-ingenieria"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow inline-flex items-center gap-2"
              >
                <span>Cotizar Proyecto de Ingeniería</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#soluciones-tecnicas"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-2 transition-colors"
              >
                <span>Ver Soluciones Técnicas</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process & Technical Guarantees */}
      <section className="py-16 border-b border-[#222] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#FFDE3B]">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-white text-sm tracking-wide">
                  Memoria de Cálculo Estructural
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Cada sistema cuenta con modelación de esfuerzos, tensión residual, flecha de impacto y cálculo de resistencia del soporte base firmado por ingeniero.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#FFDE3B]">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-white text-sm tracking-wide">
                  Ensayos de Tracción In Situ
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Realizamos pruebas de arrancamiento (Pull-out test) con manómetro certificado para garantizar los 5.000 lb requeridos por anclaje.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#FFDE3B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-white text-sm tracking-wide">
                  Dossier Técnico Completo
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Entrega de manual de usuario, certificados de calidad de materiales, plano as-built y ficha de registro para auditorías del Ministerio de Trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Detailed Grid */}
      <section id="soluciones-tecnicas" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Catálogo de Ingeniería"
          title="Sistemas y soluciones de protección pasiva y activa."
          highlightWord="activa"
          description="Soluciones técnicas dimensionadas según el tipo de cubierta, material portante y frecuencia de acceso operativo de su instalación."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringSolutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFDE3B]/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#FFDE3B] bg-[#FFDE3B]/10 px-2 py-0.5 rounded border border-[#FFDE3B]/20 uppercase">
                    {sol.norm}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 font-bold">0{idx + 1}</span>
                </div>

                <h3
                  className="text-2xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {sol.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">{sol.desc}</p>

                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  {sol.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE3B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800">
                <a
                  href="#formulario-ingenieria"
                  className="w-full text-center py-2.5 px-3 rounded bg-[#1C1C1C] group-hover:bg-[#FFDE3B] text-zinc-300 group-hover:text-[#0B0B0B] text-xs font-bold uppercase tracking-wider block transition-colors"
                >
                  Cotizar esta Solución
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="formulario-ingenieria" className="py-20 bg-[#101010] border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            initialService="Sistemas de Ingeniería Contra Caídas"
            source="pagina_ingenieria"
          />
        </div>
      </section>
    </div>
  );
}
