import React from "react";
import Link from "next/link";
import { COURSES } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Clock, Award, ShieldAlert, Users2 } from "lucide-react";

export function TrainingPreview() {
  // Show key 4 courses on Home
  const featuredCourses = COURSES.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Formación & Certificación"
            title="Capacitación normativa para cuadrillas y directivos."
            highlightWord="directivos"
            description="Cursos dictados en centros avalados por entrenadores certificados conforme a la Resolución 4272 de 2021 y normas vigentes para trabajo en alturas y espacios confinados."
          />

          <Link
            href="/capacitaciones"
            className="text-xs sm:text-sm font-bold text-[#FFDE3B] hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider self-start md:self-end border-b border-[#FFDE3B]/30 pb-1 hover:border-white transition-all"
          >
            <span>Ver catálogo completo de cursos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Corporate Notice Banner */}
        <div className="mb-10 bg-[#161616] border border-[#2D2D2D] rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <Users2 className="w-6 h-6 text-[#FFDE3B] shrink-0 mt-1" />
            <div>
              <p className="font-bold text-white text-sm uppercase tracking-wide">
                ¿Necesitas capacitar cuadrillas de 5 a 50+ trabajadores?
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Ofrecemos planes corporativos para empresas con cronogramas flexibles, sedes en Ibagué y Bogotá, o en sus instalaciones industriales.
              </p>
            </div>
          </div>
          <Link
            href="/contacto?servicio=capacitacion_empresarial"
            className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded shrink-0 whitespace-nowrap"
          >
            Cotizar Plan Empresarial
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#121212] border border-[#262626] rounded-xl p-6 flex flex-col justify-between hover:border-[#FFDE3B]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFDE3B] bg-[#FFDE3B]/10 px-2.5 py-1 rounded border border-[#FFDE3B]/20">
                    {course.category === "alturas" ? "Alturas Res. 4272" : "Seguridad Técnica"}
                  </span>
                  {course.duration && (
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {course.duration.split(" ")[0]} hrs
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-bold uppercase text-white group-hover:text-[#FFDE3B] transition-colors leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {course.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="pt-2 text-[11px] text-zinc-500 border-t border-zinc-800">
                  <strong className="text-zinc-300 block mb-0.5">Dirigido a:</strong>
                  {course.targetRole}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800/60">
                <Link
                  href={`/contacto?curso=${encodeURIComponent(course.title)}`}
                  className="w-full text-center py-2.5 px-3 rounded bg-[#1A1A1A] group-hover:bg-[#FFDE3B] text-zinc-300 group-hover:text-[#0B0B0B] text-xs font-bold uppercase tracking-wider block transition-colors"
                >
                  Cotizar Curso
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
