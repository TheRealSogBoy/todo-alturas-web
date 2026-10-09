"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#101010] border-y border-[#222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resolución de Dudas"
          title="Preguntas frecuentes de empresas y contratistas."
          highlightWord="frecuentes"
          description="Aclaraciones sobre procesos de certificación, cotización de cuadrillas, instalación de ingeniería y validez normativa."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02]"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FFDE3B] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#222]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
