import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

import { getAssetPath } from "@/lib/paths";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#0B0B0B] overflow-hidden border-b border-[#222]">
      {/* Background Industrial Image with Gradual Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/images/hero-industrial.jpg")}
          alt="Operaciones industriales de alto riesgo y trabajo seguro en alturas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-[1.02] transition-transform duration-1000"
        />
        {/* Gradients to guarantee 100% contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Eyebrow with Engineering Accent */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#FFDE3B] inline-block animate-pulse"></span>
              <span className="text-[#FFDE3B] font-bold">INGENIERÍA</span>
              <span className="text-zinc-600">·</span>
              <span>FORMACIÓN</span>
              <span className="text-zinc-600">·</span>
              <span>SEGURIDAD INDUSTRIAL</span>
            </div>

            {/* Main H1 Title */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.02]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Capacitación, ingeniería y protección para{" "}
              <span className="text-[#FFDE3B] relative inline-block">
                operaciones de alto riesgo.
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FFDE3B]/30 hidden sm:block"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Acompañamos a las empresas con formación especializada conforme a la{" "}
              <strong className="text-white font-semibold">Resolución 4272 de 2021</strong>, sistemas certificados
              de protección contra caídas y dotación técnica integral para operaciones seguras.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contacto"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-base px-8 py-4 rounded shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center justify-center gap-3 uppercase tracking-wider group"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/soluciones"
                className="bg-transparent hover:bg-white/10 text-white border border-zinc-700 hover:border-zinc-500 font-bold text-base px-8 py-4 rounded transition-all duration-200 inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Explorar Soluciones</span>
              </Link>
            </div>

            {/* Trust Highlights under CTA */}
            <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFDE3B] shrink-0" />
                <span>Respaldo Grupo Empresarial Eficaz (20+ años)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFDE3B] shrink-0" />
                <span>Normas Res. 4272 / Res. 0491 MinTrabajo</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#FFDE3B] shrink-0" />
                <span>Sistemas de ingeniería certificados</span>
              </div>
            </div>
          </div>

          {/* Side Graphic / Metric Card for Engineering Trust */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#141414]/90 backdrop-blur-md border border-[#2B2B2B] p-6 rounded-xl space-y-6 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFDE3B]/5 rounded-bl-full pointer-events-none"></div>

              <div className="border-b border-zinc-800 pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
                  Enfoque Corporativo B2B
                </span>
                <h3
                  className="text-xl font-bold uppercase text-white mt-1"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Seguridad Operacional Integral
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-[#1A1A1A] rounded border border-zinc-800">
                  <div className="flex justify-between items-center text-zinc-300 font-semibold mb-1">
                    <span>Sistemas de Ingeniería</span>
                    <span className="text-[#FFDE3B]">Líneas de Vida</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">
                    Diseño, cálculo estructural y anclajes certificados para cubiertas y puentes grúa.
                  </p>
                </div>

                <div className="p-3 bg-[#1A1A1A] rounded border border-zinc-800">
                  <div className="flex justify-between items-center text-zinc-300 font-semibold mb-1">
                    <span>Capacitación Continua</span>
                    <span className="text-[#FFDE3B]">Res. 4272</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">
                    Entrenamiento para brigadas de contratistas, coordinadores y jefes de área.
                  </p>
                </div>

                <div className="p-3 bg-[#1A1A1A] rounded border border-zinc-800">
                  <div className="flex justify-between items-center text-zinc-300 font-semibold mb-1">
                    <span>Equipos de Protección</span>
                    <span className="text-[#FFDE3B]">ANSI / EN</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">
                    Arneses, eslingas de detención, retráctiles y cascos industriales certificados.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="w-full bg-[#1F1F1F] hover:bg-[#FFDE3B] hover:text-[#0B0B0B] text-white text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider transition-colors"
                >
                  Hablar con un Ingeniero Asesor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
