"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

interface QuoteFormProps {
  initialService?: string;
  source?: string;
}

export function QuoteForm({ initialService = "", source = "general" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    city: "",
    phone: "",
    email: "",
    service: initialService || "Sistemas de Ingeniería Contra Caídas",
    workerCount: "",
    message: "",
    dataConsent: false,
  });

  const [submittedViaWhatsapp, setSubmittedViaWhatsapp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.phone || !formData.email) {
      setError("Por favor completa los campos obligatorios marcados con *");
      return;
    }

    if (!formData.dataConsent) {
      setError("Debes aceptar la autorización de tratamiento de datos.");
      return;
    }

    setError(null);

    // Build structured WhatsApp message for commercial routing
    const textMessage = `*SOLICITUD DE COTIZACIÓN B2B — TODO ALTURAS*
----------------------------------------
*Nombre:* ${formData.name}
*Empresa:* ${formData.company}
*Cargo:* ${formData.role || "No especificado"}
*Ciudad:* ${formData.city || "No especificada"}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Línea / Servicio:* ${formData.service}
*Trabajadores estimados:* ${formData.workerCount || "N/A"}
*Requerimiento técnico:*
${formData.message || "Solicito contacto comercial para propuesta técnica."}
----------------------------------------
(Enviado desde portal web Todo Alturas)`;

    const encoded = encodeURIComponent(textMessage);
    const targetPhone = formData.service.includes("Sistemas de Ingeniería") || formData.service.includes("Espacios")
      ? SITE_CONFIG.contacts.ibague.phoneRaw
      : SITE_CONFIG.contacts.bogota.phoneRaw;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encoded}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmittedViaWhatsapp(true);
  };

  return (
    <div className="bg-[#121212] border border-[#262626] rounded-xl p-6 sm:p-8 relative shadow-2xl">
      <div className="flex items-center justify-between pb-6 border-b border-[#222]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFDE3B] font-bold">
            Formulario Comercial B2B
          </span>
          <h3
            className="text-2xl font-extrabold uppercase text-white mt-1"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Solicitar Cotización Empresarial
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-[11px] text-zinc-500 block">Enrutamiento inmediato</span>
          <span className="text-xs font-semibold text-zinc-300">Ibagué · Bogotá · Nacional</span>
        </div>
      </div>

      {submittedViaWhatsapp && (
        <div className="mt-4 p-4 bg-[#FFDE3B]/10 border border-[#FFDE3B]/40 rounded-lg flex items-start gap-3 text-sm text-zinc-200">
          <CheckCircle2 className="w-5 h-5 text-[#FFDE3B] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">¡Mensaje preparado con éxito!</p>
            <p className="text-xs text-zinc-400 mt-1">
              Se abrió una conversación directa en WhatsApp con nuestro asesor técnico. Si no se abrió la ventana, puedes hacer clic de nuevo o comunicarte a nuestras líneas directas.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-950/40 border border-red-500/40 rounded flex items-center gap-2 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Nombre de Contacto *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Ing. Carlos Rodríguez"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Empresa / Razón Social *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Constructora Andina S.A.S"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Cargo u Operación (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej. Coordinador SST / Jefe de Compras"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Ciudad del Proyecto / Sede *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Bogotá, Ibagué, Cali, etc."
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Teléfono / WhatsApp de Contacto *
            </label>
            <input
              type="tel"
              required
              placeholder="Ej. +57 310 000 0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Correo Electrónico Corporativo *
            </label>
            <input
              type="email"
              required
              placeholder="Ej. compras@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Servicio o Línea de Interés *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFDE3B] transition-colors"
            >
              <option value="Sistemas de Ingeniería Contra Caídas">
                Sistemas de Ingeniería (Líneas de vida / Anclajes)
              </option>
              <option value="Capacitación y Formación en Alturas">
                Capacitación y Formación en Alturas (Res. 4272)
              </option>
              <option value="Espacios Confinados">
                Espacios Confinados (Res. 0491)
              </option>
              <option value="Formación Especializada (Rescate, Caliente, etc.)">
                Formación Especializada (Rescate, Trabajo en Caliente)
              </option>
              <option value="Suministro de Equipos de Seguridad y EPP">
                Suministro de Equipos de Seguridad y EPP
              </option>
              <option value="Solución Integral 360° para Empresas">
                Solución Integral 360° para Empresas
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
              Número Aprox. de Trabajadores (Si aplica)
            </label>
            <input
              type="text"
              placeholder="Ej. Cuadrilla de 12 personas"
              value={formData.workerCount}
              onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
              className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
            Detalle del Requerimiento o Proyecto
          </label>
          <textarea
            rows={3}
            placeholder="Describe brevemente el alcance: número de metros de línea de vida, tipo de estructura, fechas tentativas para cursos..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#181818] border border-[#2D2D2D] rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFDE3B] transition-colors"
          />
        </div>

        <div className="pt-1">
          <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.dataConsent}
              onChange={(e) => setFormData({ ...formData, dataConsent: e.target.checked })}
              className="mt-0.5 rounded bg-[#181818] border-zinc-700 text-[#FFDE3B] focus:ring-[#FFDE3B]"
            />
            <span>
              Autorizo el tratamiento de mis datos de contacto exclusivamente para recibir la propuesta comercial y seguimiento de Todo Alturas (Ley 1581 de 2012).
            </span>
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] font-extrabold uppercase py-3.5 px-6 rounded transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm tracking-wider"
          >
            <Send className="w-4 h-4" />
            <span>Generar Solicitud de Cotización vía WhatsApp</span>
          </button>
          <p className="text-[11px] text-center text-zinc-500 mt-2">
            Respuesta prioritaria en horario hábil por nuestro equipo de ingeniería y formación.
          </p>
        </div>
      </form>
    </div>
  );
}
