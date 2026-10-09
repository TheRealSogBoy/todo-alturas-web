"use client";

import React from "react";
import Link from "next/link";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function MobileFloatingCta() {
  return (
    <aside
      aria-label="Acciones rápidas móviles"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-t border-[#262626] p-2.5 px-4 flex items-center gap-2.5 shadow-2xl"
    >
      <a
        href={SITE_CONFIG.contacts.ibague.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] border border-[#333] text-white py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageSquareText className="w-4 h-4 text-[#FFDE3B]" />
        <span>WhatsApp Asesor</span>
      </a>

      <Link
        href="/contacto"
        className="flex-1 bg-[#FFDE3B] hover:bg-[#E5C730] text-[#0B0B0B] py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>Cotizar B2B</span>
      </Link>
    </aside>
  );
}
