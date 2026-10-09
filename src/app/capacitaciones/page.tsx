"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { getAssetPath } from "@/lib/paths";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
  Building,
  GraduationCap,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function CapacitacionesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todos los Cursos" },
    { id: "alturas", label: "Trabajo en Alturas (Res. 4272)" },
    { id: "confinados", label: "Espacios Confinados (Res. 0491)" },
    { id: "especializada", label: "Formación Especializada" },
  ];

  const filteredCourses =
    selectedCategory === "todas"
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 border-b border-[#222] bg-[#0F0F0F] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/images/industrial-training.jpg")}
            alt="Capacitación y formación técnica en trabajo seguro en alturas"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 rounded text-xs font-mono font-bold text-[#FFDE3B] uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              CENTRO DE ENTRENAMIENTO & CAPACITACIÓN INDUSTRIAL
            </div>

            <h1
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Cursos avalados para trabajadores y coordinadores de alto riesgo.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Programas conforme a la Resolución 4272 de 2021 del Ministerio de Trabajo y Resolución 0491 de 2020 para espacios confinados. Certificación verificable en línea y planes a la medida de su empresa.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#cotizar-capacitacion"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow inline-flex items-center gap-2"
              >
                <span>Cotizar Capacitación para Cuadrillas</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://todoenalturas.com/certificados/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 hover:border-zinc-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-2 transition-colors"
              >
                <span>Consultar Certificados Emitidos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Features Strip */}
      <section className="py-12 border-b border-[#222] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Aval MinTrabajo</p>
                <p className="text-[11px] text-zinc-400">Entrenamiento con validez jurídica y técnica</p>
              </div>
            </div>

            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <Building className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Sedes en Ibagué y Bogotá</p>
                <p className="text-[11px] text-zinc-400">Pistas de entrenamiento con torres y simuladores</p>
              </div>
            </div>

            <div className="p-4 bg-[#181818] rounded-lg border border-[#2B2B2B] flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#FFDE3B] shrink-0" />
              <div>
                <p className="font-bold text-white text-xs uppercase">Verificación Online 24/7</p>
                <p className="text-[11px] text-zinc-400">Descarga directa de diplomas con código único</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Course Catalog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Catálogo Académico"
            title="Programas de formación disponibles para su empresa."
            highlightWord="formación"
            description="Selecciona la categoría de interés para revisar alcances, perfiles ocupacionales y requisitos documentales."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase font-mono px-4 py-2.5 rounded transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#FFDE3B] text-[#0B0B0B] font-bold shadow"
                    : "bg-[#181818] text-zinc-400 hover:text-white border border-[#2B2B2B]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFDE3B]/50 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#FFDE3B] bg-[#FFDE3B]/10 px-2 py-0.5 rounded border border-[#FFDE3B]/20 font-bold">
                    {course.category === "alturas"
                      ? "Res. 4272/2021"
                      : course.category === "confinados"
                      ? "Res. 0491/2020"
                      : "Especializado"}
                  </span>

                  {course.duration ? (
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FFDE3B]" />
                      {course.duration}
                    </span>
                  ) : (
                    <span className="text-[10px] text-zinc-500 font-mono italic">
                      Duración modular
                    </span>
                  )}
                </div>

                <h3
                  className="text-2xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {course.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {course.description}
                </p>

                <div className="p-3 bg-[#1A1A1A] rounded border border-zinc-800 text-xs">
                  <span className="text-[11px] font-mono text-zinc-400 block uppercase font-bold mb-0.5">
                    Perfil Ocupacional:
                  </span>
                  <span className="text-zinc-300">{course.targetRole}</span>
                </div>

                {course.requirements && course.requirements.length > 0 && (
                  <div className="space-y-1 text-xs text-zinc-400">
                    <span className="text-[11px] font-mono text-zinc-500 block uppercase font-bold">
                      Requisitos de ingreso:
                    </span>
                    {course.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3 h-3 text-[#FFDE3B] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                )}

                {course.durationNote && (
                  <div className="flex items-start gap-1.5 text-[11px] text-zinc-500 italic">
                    <AlertTriangle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{course.durationNote}</span>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800">
                <a
                  href="#cotizar-capacitacion"
                  className="w-full text-center py-2.5 px-3 rounded bg-[#1C1C1C] group-hover:bg-[#FFDE3B] text-zinc-300 group-hover:text-[#0B0B0B] text-xs font-bold uppercase tracking-wider block transition-colors"
                >
                  Cotizar para Empresa
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="cotizar-capacitacion" className="py-20 bg-[#101010] border-t border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            initialService="Capacitación y Formación en Alturas"
            source="pagina_capacitaciones"
          />
        </div>
      </section>
    </div>
  );
}
