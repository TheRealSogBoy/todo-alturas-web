"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  FileCheck2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { getAssetPath } from "@/lib/paths";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#141414] border-b border-[#262626] text-xs text-zinc-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFDE3B] inline-block animate-pulse"></span>
              {SITE_CONFIG.parentGroup} · Más de 20 años de experiencia
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFDE3B]" />
              Conforme a Resolución 4272 de 2021 & Res. 0491 de 2020
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${SITE_CONFIG.contacts.ibague.phoneRaw}`}
              className="hover:text-[#FFDE3B] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#FFDE3B]" />
              Ibagué: {SITE_CONFIG.contacts.ibague.phone}
            </a>
            <a
              href={`tel:${SITE_CONFIG.contacts.bogota.phoneRaw}`}
              className="hover:text-[#FFDE3B] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#FFDE3B]" />
              Bogotá: {SITE_CONFIG.contacts.bogota.phone}
            </a>
            <a
              href={SITE_CONFIG.officialCertificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFDE3B] font-semibold hover:underline flex items-center gap-1"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Consultar Certificados
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-2xl py-3"
            : "bg-[#0B0B0B] border-b border-[#1F1F1F] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={getAssetPath("/images/logo-todo-alturas.png")}
                  alt="Todo Alturas - Logotipo Oficial"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Inicio
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <Link
                  href="/soluciones"
                  className={`px-3.5 py-2 text-sm font-medium rounded inline-flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/soluciones") ||
                    pathname === "/ingenieria" ||
                    pathname === "/capacitaciones" ||
                    pathname === "/equipos"
                      ? "text-[#FFDE3B] bg-white/5 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Soluciones
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      solutionsDropdownOpen ? "rotate-180 text-[#FFDE3B]" : ""
                    }`}
                  />
                </Link>

                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-[#141414] border border-[#2D2D2D] rounded-lg shadow-2xl p-2 space-y-1">
                      <Link
                        href="/ingenieria"
                        className="block p-3 rounded-md hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-sm font-bold text-white group-hover:text-[#FFDE3B] flex items-center justify-between">
                          Sistemas de Ingeniería
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Líneas de vida, puntos de anclaje, barandas y redes de seguridad.
                        </p>
                      </Link>

                      <Link
                        href="/capacitaciones"
                        className="block p-3 rounded-md hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-sm font-bold text-white group-hover:text-[#FFDE3B] flex items-center justify-between">
                          Capacitaciones y Formación
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Cursos avalados en alturas, espacios confinados y brigadas SST.
                        </p>
                      </Link>

                      <Link
                        href="/equipos"
                        className="block p-3 rounded-md hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-sm font-bold text-white group-hover:text-[#FFDE3B] flex items-center justify-between">
                          Equipos de Seguridad
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Dotación técnica certificada: arneses, eslingas, retráctiles y cascos.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/ingenieria"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/ingenieria"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Ingeniería
              </Link>

              <Link
                href="/capacitaciones"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/capacitaciones"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Capacitaciones
              </Link>

              <Link
                href="/proyectos"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/proyectos"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Proyectos
              </Link>

              <Link
                href="/nosotros"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/nosotros"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === "/contacto"
                    ? "text-[#FFDE3B] bg-white/5 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Contacto
              </Link>
            </nav>

            {/* Right Action: Primary B2B CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/contacto"
                className="bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-bold text-sm px-5 py-2.5 rounded shadow-sm hover:shadow transition-all inline-flex items-center gap-2 uppercase tracking-wide"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contacto"
                className="bg-[#FFDE3B] text-[#0B0B0B] font-bold text-xs px-3 py-1.5 rounded uppercase"
              >
                Cotizar
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFDE3B]"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0F0F] border-b border-[#262626] px-4 pt-4 pb-6 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5 rounded"
            >
              Inicio
            </Link>
            <Link
              href="/soluciones"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5 rounded"
            >
              Todas las Soluciones
            </Link>
            <div className="pl-4 border-l border-[#2E2E2E] space-y-2 py-1">
              <Link
                href="/ingenieria"
                className="block text-sm text-zinc-300 hover:text-[#FFDE3B]"
              >
                • Sistemas de Ingeniería
              </Link>
              <Link
                href="/capacitaciones"
                className="block text-sm text-zinc-300 hover:text-[#FFDE3B]"
              >
                • Formación y Cursos
              </Link>
              <Link
                href="/equipos"
                className="block text-sm text-zinc-300 hover:text-[#FFDE3B]"
              >
                • Equipos de Seguridad
              </Link>
            </div>
            <Link
              href="/proyectos"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5 rounded"
            >
              Proyectos
            </Link>
            <Link
              href="/nosotros"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5 rounded"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/5 rounded"
            >
              Contacto
            </Link>

            <div className="pt-4 border-t border-[#262626] space-y-3">
              <a
                href={SITE_CONFIG.officialCertificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#FFDE3B] font-semibold"
              >
                <FileCheck2 className="w-4 h-4" />
                Consultar Certificados en Línea
              </a>
              <Link
                href="/contacto"
                className="w-full bg-[#FFDE3B] text-[#0B0B0B] font-bold text-center py-3 rounded block uppercase tracking-wider text-sm"
              >
                Solicitar Cotización Empresarial
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
