import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { EngineeringFeature } from "@/components/sections/EngineeringFeature";
import { TrainingPreview } from "@/components/sections/TrainingPreview";
import { EquipmentPreview } from "@/components/sections/EquipmentPreview";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Corporativo */}
      <HeroSection />

      {/* 2. Franja de Respaldo y Cifras Confirmadas */}
      <TrustSection />

      {/* 3. Las Tres Grandes Líneas de Negocio (01, 02, 03) */}
      <SolutionsGrid />

      {/* 4. Sección Destacada de Sistemas de Ingeniería */}
      <EngineeringFeature />

      {/* 5. Soluciones de Capacitación Empresarial */}
      <TrainingPreview />

      {/* 6. Dotación y Equipos de Seguridad */}
      <EquipmentPreview />

      {/* 7. Por Qué Trabajar con Todo Alturas */}
      <WhyUsSection />

      {/* 8. Proceso Comercial en 3 Pasos */}
      <ProcessSteps />

      {/* 9. Clientes y Casos de Experiencia */}
      <ProjectsSection />

      {/* 10. Preguntas Frecuentes */}
      <FaqSection />

      {/* 11. Gran CTA de Cotización Final */}
      <FinalCtaSection />
    </>
  );
}
