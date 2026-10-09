import React from "react";
import { PROCESS_STEPS } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProcessSteps() {
  return (
    <section className="py-20 bg-[#101010] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proceso Comercial B2B"
          title="Cómo contratar o cotizar con Todo Alturas."
          highlightWord="contratar"
          description="Un flujo ágil y estructurado para responder con celeridad a las necesidades técnicas y jurídicas de su compañía."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#141414] border border-[#2B2B2B] rounded-xl p-8 relative flex flex-col justify-between hover:border-[#FFDE3B]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-4xl font-extrabold text-[#FFDE3B]/90 font-mono"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {step.step}
                  </span>
                  <span className="w-8 h-0.5 bg-[#FFDE3B]/30"></span>
                </div>

                <h3
                  className="text-xl font-bold uppercase text-white tracking-wide"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] py-3 px-6 rounded shadow transition-all"
          >
            <span>Iniciar Solicitud de Cotización Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
