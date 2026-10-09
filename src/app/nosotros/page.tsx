import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, TRUST_PILLARS } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { getAssetPath } from "@/lib/paths";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Trayectoria y Respaldo",
  description:
    "Conoce a Todo Alturas, empresa especializada en soluciones de seguridad industrial perteneciente al Grupo Empresarial Eficaz con más de 20 años de experiencia.",
};

export default function NosotrosPage() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 border-b border-[#222] bg-[#0F0F0F] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/images/hero-industrial.jpg")}
            alt="Nosotros - Todo Alturas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
              IDENTIDAD Y RESPALDO EMPRESARIAL
            </span>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Compromiso técnico con la vida de los trabajadores en Colombia.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Somos la unidad especializada en ingeniería contra caídas, formación técnica y seguridad industrial del{" "}
              <strong className="text-white font-semibold">{SITE_CONFIG.parentGroup}</strong>, aportando soluciones sólidas que mitigan el riesgo operativo.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Group Feature */}
      <section id="grupo-eficaz" className="py-20 bg-[#121212] border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#2D2D2D] shadow-2xl">
                <Image
                  src={getAssetPath("/images/rescue-operations.jpg")}
                  alt="Operaciones de alto riesgo y rescate técnico"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-[#333] rounded-lg">
                  <span className="text-xs font-mono text-[#FFDE3B] font-bold block uppercase">
                    Grupo Empresarial Eficaz
                  </span>
                  <p className="text-xs text-zinc-300 mt-1">
                    Más de dos décadas impulsando la productividad y seguridad en Colombia.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
                <Building2 className="w-4 h-4" />
                RESPALDO INSTITUCIONAL
              </div>

              <h2
                className="text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Más de 20 años de solidez empresarial respaldan nuestra operación.
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Todo Alturas nace para dar una respuesta contundente a las necesidades críticas de prevención y protección en trabajos de alto riesgo. Respaldados por la trayectoria de más de 20 años del <strong>Grupo Empresarial Eficaz</strong>, combinamos experiencia en gestión empresarial con el rigor de la ingeniería estructural y las normas vigentes de seguridad ocupacional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="p-4 bg-[#181818] rounded border border-zinc-800 space-y-1">
                  <span className="text-xs font-mono font-bold text-[#FFDE3B] uppercase block">
                    Enfoque Normativo
                  </span>
                  <p className="text-xs text-zinc-400">
                    Alineación total con la Resolución 4272/2021 de MinTrabajo y normativas internacionales ANSI/OSHA.
                  </p>
                </div>

                <div className="p-4 bg-[#181818] rounded border border-zinc-800 space-y-1">
                  <span className="text-xs font-mono font-bold text-[#FFDE3B] uppercase block">
                    Cobertura Regional
                  </span>
                  <p className="text-xs text-zinc-400">
                    Centros de formación en Ibagué y Bogotá, con capacidad de despliegue de ingeniería a nivel nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-8 space-y-4">
            <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#FFDE3B]">
              <Target className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Nuestra Misión
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Brindar a las empresas colombianas soluciones técnicas e integrales de seguridad industrial —a través de la formación práctica, la ingeniería estructural contra caídas y la dotación de equipos certificados— preservando la vida de los trabajadores y garantizando la tranquilidad jurídica y operativa de nuestros clientes.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#262626] rounded-xl p-8 space-y-4">
            <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#FFDE3B]">
              <Eye className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Nuestra Visión
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Consolidarnos como el referente técnico y aliado estratégico preferido por las principales industrias, constructoras y empresas de servicios del país en gestión de riesgos en alturas y espacios confinados, reconocidos por nuestra precisión de ingeniería y calidad académica.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-[#101010] border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pilares Operacionales"
            title="La filosofía de trabajo que nos guía."
            highlightWord="filosofía"
            description="Valores y directrices que definen cada visita técnica, curso dictado e instalación entregada."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((p) => (
              <div
                key={p.number}
                className="bg-[#141414] border border-[#2B2B2B] rounded-xl p-6 space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#FFDE3B]">{p.number}</span>
                <h4
                  className="text-xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <FinalCtaSection />
    </div>
  );
}
