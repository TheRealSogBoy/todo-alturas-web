import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, FileCheck2, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="bg-[#070707] border-t border-[#1F1F1F] text-zinc-400 text-sm">
      {/* Top Banner / Quality Seal */}
      <div className="border-b border-[#1A1A1A] py-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#FFDE3B]" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">
                  Cumplimiento Normativo
                </p>
                <p className="text-xs text-zinc-400">
                  Resolución 4272 de 2021 & Resolución 0491 de 2020
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5 text-[#FFDE3B]" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">
                  Verificación de Certificados
                </p>
                <a
                  href={SITE_CONFIG.officialCertificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFDE3B] hover:underline flex items-center gap-1"
                >
                  Consultar autenticidad de diplomas en línea
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#FFDE3B]/10 border border-[#FFDE3B]/30 flex items-center justify-center shrink-0">
                <span className="font-black text-xs text-[#FFDE3B]">20+</span>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">
                  Grupo Empresarial Eficaz
                </p>
                <p className="text-xs text-zinc-400">
                  Más de dos décadas de solidez corporativa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo-todo-alturas.png"
                alt="Todo Alturas"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empresa especializada en capacitación técnica, diseño e instalación de sistemas de
              ingeniería contra caídas y suministro de equipos certificados para operaciones de alto
              riesgo.
            </p>
            <div className="pt-2 text-xs text-zinc-500">
              Perteneciente al <strong className="text-zinc-300">{SITE_CONFIG.parentGroup}</strong>.
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-l-2 border-[#FFDE3B] pl-2">
              Líneas de Negocio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/ingenieria" className="hover:text-[#FFDE3B] transition-colors">
                  Sistemas de Ingeniería
                </Link>
              </li>
              <li>
                <Link href="/capacitaciones" className="hover:text-[#FFDE3B] transition-colors">
                  Capacitación y Cursos
                </Link>
              </li>
              <li>
                <Link href="/equipos" className="hover:text-[#FFDE3B] transition-colors">
                  Equipos de Seguridad
                </Link>
              </li>
              <li>
                <Link href="/soluciones" className="hover:text-[#FFDE3B] transition-colors">
                  Portafolio Integral B2B
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-[#FFDE3B] transition-colors">
                  Casos de Experiencia
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate / Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-l-2 border-[#FFDE3B] pl-2">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-[#FFDE3B] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/nosotros#grupo-eficaz" className="hover:text-[#FFDE3B] transition-colors">
                  Grupo Empresarial Eficaz
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.officialCertificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFDE3B] transition-colors flex items-center gap-1 text-[#FFDE3B]"
                >
                  Portal de Certificados
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#FFDE3B] transition-colors">
                  Solicitud de Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact by Region */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-l-2 border-[#FFDE3B] pl-2">
              Atención Comercial
            </h4>

            {/* Ibagué */}
            <div className="bg-[#141414] p-3 rounded border border-[#242424] space-y-1">
              <p className="text-white font-bold text-xs flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#FFDE3B]" />
                Sede Ibagué
              </p>
              <a
                href={`tel:${SITE_CONFIG.contacts.ibague.phoneRaw}`}
                className="text-xs text-zinc-300 hover:text-[#FFDE3B] block font-mono"
              >
                {SITE_CONFIG.contacts.ibague.phone}
              </a>
              <p className="text-[11px] text-zinc-500">
                Ingeniería · Espacios Confinados · Formación Industrial
              </p>
            </div>

            {/* Bogotá */}
            <div className="bg-[#141414] p-3 rounded border border-[#242424] space-y-1">
              <p className="text-white font-bold text-xs flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#FFDE3B]" />
                Sede Bogotá
              </p>
              <a
                href={`tel:${SITE_CONFIG.contacts.bogota.phoneRaw}`}
                className="text-xs text-zinc-300 hover:text-[#FFDE3B] block font-mono"
              >
                {SITE_CONFIG.contacts.bogota.phone}
              </a>
              <p className="text-[11px] text-zinc-500">Formación y Certificación en Alturas</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-[#1C1C1C] flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            © 2026 Todo Alturas. Todos los derechos reservados. Miembro del{" "}
            <span className="text-zinc-400">{SITE_CONFIG.parentGroup}</span>.
          </p>
          <div className="flex items-center space-x-6">
            <span>Colombia</span>
            <span className="text-zinc-700">·</span>
            <span>Seguridad y Salud en el Trabajo</span>
            <span className="text-zinc-700">·</span>
            <span>Resolución 4272/2021</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
