import React from "react";
import { ShieldCheck, Building2, Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function TrustSection() {
  return (
    <section className="bg-[#101010] border-b border-[#222] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          {/* Stat 1 */}
          <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-[#FFDE3B]" />
            </div>
            <div>
              <p
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                20+ AÑOS
              </p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Grupo Empresarial Eficaz
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Solidez operativa y respaldo contractual
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 sm:pt-0 sm:px-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#FFDE3B]" />
            </div>
            <div>
              <p
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                RES. 4272
              </p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Marco Legal Colombiano
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Entrenamiento avalado por MinTrabajo
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 sm:pt-0 sm:px-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#FFDE3B]" />
            </div>
            <div>
              <p
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                INGENIERÍA
              </p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Sistemas Certificados
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Líneas de vida con cálculo estructural
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="pt-4 sm:pt-0 sm:px-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#FFDE3B]" />
            </div>
            <div>
              <p
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                ATENCIÓN B2B
              </p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Cuadrillas y Contratistas
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Planes corporativos a la medida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
