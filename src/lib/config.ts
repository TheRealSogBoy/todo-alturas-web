/**
 * Centralized Configuration for Todo Alturas
 * Grupo Empresarial Eficaz - Seguridad Industrial, Formación Técnica y Sistemas de Ingeniería
 */

import { getAssetPath } from "./paths";

export interface ContactLocation {
  city: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  specialties: string[];
  addressPendingNote: string;
  address?: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  parentGroup: string;
  groupExperienceYears: number;
  officialCertificateUrl: string; // Destination URL from current site
  contacts: {
    ibague: ContactLocation;
    bogota: ContactLocation;
  };
  navigation: Array<{
    label: string;
    href: string;
    children?: Array<{ label: string; href: string; description: string }>;
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Todo Alturas",
  tagline: "Capacitación, ingeniería y protección para operaciones de alto riesgo",
  parentGroup: "Grupo Empresarial Eficaz",
  groupExperienceYears: 20,
  officialCertificateUrl: "https://todoenalturas.com/certificados/", // Conserva el destino real
  contacts: {
    ibague: {
      city: "Ibagué",
      phone: "+57 316 449 7712",
      phoneRaw: "573164497712",
      whatsappUrl: "https://wa.me/573164497712",
      specialties: [
        "Sistemas de ingeniería contra caídas",
        "Espacios confinados",
        "Formación industrial especializada",
        "Soluciones integrales y equipos",
      ],
      addressPendingNote: "Dirección de sede sujeta a confirmación oficial",
      email: "contacto@todoenalturas.com", // Pendiente validación final
    },
    bogota: {
      city: "Bogotá",
      phone: "+57 314 482 9292",
      phoneRaw: "573144829292",
      whatsappUrl: "https://wa.me/573144829292",
      specialties: ["Formación y certificación en alturas"],
      addressPendingNote: "Dirección de sede sujeta a confirmación oficial",
      email: "bogota@todoenalturas.com", // Pendiente validación final
    },
  },
  navigation: [
    { label: "Inicio", href: "/" },
    {
      label: "Soluciones",
      href: "/soluciones",
      children: [
        {
          label: "Sistemas de Ingeniería",
          href: "/ingenieria",
          description: "Líneas de vida, puntos de anclaje, barandas y redes de seguridad.",
        },
        {
          label: "Formación Industrial",
          href: "/capacitaciones",
          description: "Cursos de alturas conforme a Res. 4272/2021 y espacios confinados.",
        },
        {
          label: "Equipos de Seguridad",
          href: "/equipos",
          description: "Arneses, eslingas, cascos, conectores y líneas certificadas.",
        },
      ],
    },
    { label: "Ingeniería", href: "/ingenieria" },
    { label: "Capacitaciones", href: "/capacitaciones" },
    { label: "Equipos", href: "/equipos" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export interface ServiceLine {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  items: string[];
}

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: "capacitacion",
    number: "01",
    title: "Formación y Capacitación Industrial",
    tagline: "Programas avalados para trabajadores y coordinadores de alto riesgo",
    description:
      "Entrenamiento práctico y normativo conforme a la Resolución 4272 de 2021 y estándares para espacios confinados, rescate y tareas de alto riesgo.",
    image: getAssetPath("/images/industrial-training.jpg"),
    href: "/capacitaciones",
    items: [
      "Trabajo seguro en alturas (Básico, Avanzado, Reentrenamiento)",
      "Coordinador de trabajo seguro en alturas",
      "Jefe de área y supervisión SST",
      "Espacios confinados: entrante, vigía, supervisor y administrador",
      "Rescate vertical, trabajo en caliente y herramientas",
    ],
  },
  {
    id: "ingenieria",
    number: "02",
    title: "Sistemas de Ingeniería Contra Caídas",
    tagline: "Diseño, suministro, montaje e inspección de sistemas certificados",
    description:
      "Ingeniería de detalle para protección permanente y temporal en cubiertas, fachadas, estructuras industriales y líneas de producción.",
    image: getAssetPath("/images/engineering-lifelines.jpg"),
    href: "/ingenieria",
    items: [
      "Instalación de puntos de anclaje fijos y móviles",
      "Diseño e instalación de líneas de vida horizontales y verticales",
      "Sistemas de barandas de seguridad y pasarelas técnicas",
      "Redes de seguridad y detención de caídas",
      "Inspección periódica, recertificación y mantenimiento",
    ],
  },
  {
    id: "equipos",
    number: "03",
    title: "Soluciones Integrales y Equipos de Seguridad",
    tagline: "Dotación técnica certificada para protección personal y posicionamiento",
    description:
      "Suministro de elementos de protección individual y colectiva certificados bajo normas ANSI/OSHA/EN para contratistas y plantas de producción.",
    image: getAssetPath("/images/safety-equipment.jpg"),
    href: "/equipos",
    items: [
      "Arneses de cuerpo completo multipropósito y dieléctricos",
      "Eslingas de restricción, posicionamiento y detención de caídas",
      "Retráctiles anticaídas y absorbedores de impacto",
      "Cascos industriales dieléctricos con barboquejo",
      "Mosquetones, poleas, conectores y líneas de vida en cuerda/cable",
    ],
  },
];

export interface Course {
  id: string;
  category: "alturas" | "confinados" | "especializada";
  title: string;
  targetRole: string;
  duration?: string;
  durationNote?: string;
  requirements?: string[];
  description: string;
  normativeReference?: string;
}

export const COURSES: Course[] = [
  {
    id: "alturas-operativo",
    category: "alturas",
    title: "Trabajador Autorizado en Alturas",
    targetRole: "Operarios, técnicos y contratistas que ejecutan labores sobre 2.0m",
    duration: "32 horas (teórico-práctico)",
    requirements: ["Cédula de ciudadanía o extranjería", "Concepto médico de aptitud laboral para trabajo en alturas vigente", "Afiliación a ARL vigente"],
    description:
      "Formación integral para el uso seguro de sistemas de acceso y protección contra caídas conforme a la Resolución 4272 de 2021.",
    normativeReference: "Resolución 4272 de 2021 MinTrabajo",
  },
  {
    id: "alturas-reentrenamiento",
    category: "alturas",
    title: "Reentrenamiento en Trabajo Seguro en Alturas",
    targetRole: "Trabajadores previamente certificados que requieren renovación anual",
    duration: "8 horas (teórico-práctico)",
    requirements: ["Certificado previo en alturas", "Concepto médico de aptitud vigente", "Afiliación a ARL"],
    description:
      "Actualización obligatoria anual de competencias, nuevas directrices y repaso de destrezas de autorrescate y uso de EPP.",
    normativeReference: "Resolución 4272 de 2021 MinTrabajo",
  },
  {
    id: "alturas-coordinador",
    category: "alturas",
    title: "Coordinador de Trabajo en Alturas",
    targetRole: "Supervisores, inspectores SST y responsables técnicos de obra",
    duration: "80 horas",
    requirements: ["Certificado previo como trabajador en alturas", "Experiencia mínima documentada", "Concepto de aptitud médica"],
    description:
      "Capacitación para identificar peligros en el sitio, inspeccionar sistemas de ingeniería y avalar permisos de trabajo de alto riesgo.",
    normativeReference: "Resolución 4272 de 2021 MinTrabajo",
  },
  {
    id: "alturas-jefe-area",
    category: "alturas",
    title: "Jefe de Área para Trabajo en Alturas",
    targetRole: "Líderes de producción, administradores y directivos que toman decisiones operativas",
    duration: "8 horas (teórico)",
    requirements: ["Rol administrativo o de jefatura en la empresa"],
    description:
      "Enfoque legal, responsabilidades civiles y penales, asignación de recursos y estructura del programa de prevención y protección contra caídas.",
    normativeReference: "Resolución 4272 de 2021",
  },
  {
    id: "confinados-entrante",
    category: "confinados",
    title: "Trabajador Entrante a Espacios Confinados",
    targetRole: "Personal que ingresa a tanques, silos, túneles, pozos o reactores",
    durationNote: "Duración sujeta a confirmación en programa empresarial",
    requirements: ["Aptitud médica para espacios confinados", "ARL vigente"],
    description:
      "Protocolos de ingreso, uso de equipos de respiración, lectura básica de detectores y procedimientos de comunicación.",
    normativeReference: "Resolución 0491 de 2020",
  },
  {
    id: "confinados-vigia",
    category: "confinados",
    title: "Vigía de Espacios Confinados",
    targetRole: "Personal apostado en el exterior encargado de monitoreo continuo y alerta de rescate",
    durationNote: "Duración sujeta a confirmación en programa empresarial",
    requirements: ["Mayoría de edad", "Afiliación a ARL vigente"],
    description:
      "Supervisión perimetral, control de ingreso/egreso, monitoreo atmosférico continuo y activación del plan de emergencia.",
    normativeReference: "Resolución 0491 de 2020",
  },
  {
    id: "confinados-supervisor",
    category: "confinados",
    title: "Supervisor de Trabajo en Espacios Confinados",
    targetRole: "Inspectores y coordinadores SST con potestad de autorizar permisos de entrada",
    durationNote: "Duración sujeta a confirmación en programa empresarial",
    requirements: ["Experiencia técnica previa en SST o mantenimiento"],
    description:
      "Evaluación de riesgos, aislamiento de energías peligrosas (LOTO), ventilación y validación de planes de rescate.",
    normativeReference: "Resolución 0491 de 2020",
  },
  {
    id: "confinados-administrador",
    category: "confinados",
    title: "Administrador del Programa de Espacios Confinados",
    targetRole: "Gerentes HSEQ, directores de planta e ingenieros de seguridad",
    durationNote: "Duración sujeta a confirmación en programa empresarial",
    requirements: ["Rol de liderazgo SST o ingeniería"],
    description:
      "Estructuración documental, auditoría del programa empresarial y selección técnica de equipos de rescate y monitoreo.",
    normativeReference: "Resolución 0491 de 2020",
  },
  {
    id: "rescate-vertical",
    category: "especializada",
    title: "Rescate Vertical y Autorrescate Técnico",
    targetRole: "Brigadas de emergencia, técnicos de alturas e inspectores",
    durationNote: "Módulos de 16h a 40h según nivel de brigada",
    requirements: ["Certificación vigente en alturas", "Condición física adecuada"],
    description:
      "Sistemas de poleas, polipastos mecánicos, descenso controlado de víctimas y evacuación en torres o estructuras complejas.",
  },
  {
    id: "trabajo-caliente",
    category: "especializada",
    title: "Seguridad en Trabajo en Caliente",
    targetRole: "Soldadores, operarios de oxicorte y supervisores de área",
    durationNote: "Jornadas teórico-prácticas a la medida empresarial",
    requirements: ["Afiliación a ARL"],
    description:
      "Prevención de incendios, atmósfera inflamable, pantallas de protección y protocolos de permisos de fuego.",
  },
  {
    id: "herramientas-electricas",
    category: "especializada",
    title: "Manejo Seguro de Herramientas Eléctricas y de Poder",
    targetRole: "Cuadrillas operativas, operarios de mantenimiento y montaje",
    durationNote: "Capacitación modular para empresas",
    requirements: ["Personal operativo vinculado"],
    description:
      "Aislamiento, inspección preoperacional, uso correcto de guardas y prevención de atrapamientos y descargas.",
  },
  {
    id: "maquinaria-pesada",
    category: "especializada",
    title: "Seguridad Operacional en Maquinaria Pesada",
    targetRole: "Operadores de elevadores tijera, manlift, retroexcavadoras y montacargas",
    durationNote: "Según tipo de maquinaria y flota empresarial",
    requirements: ["Licencia de conducción si aplica", "Aptitud médica"],
    description:
      "Operación segura de plataformas elevadoras móviles de personal (PEMP) y equipos de izaje en frentes industriales.",
  },
];

export interface ClientCase {
  id: string;
  name: string;
  sector: string;
  interventionType: string;
  status: "verified_mention" | "pending_case_study";
  note: string;
}

// Clientes mencionados por la empresa - Diseñados sin testimonios ni estadísticas inventadas
export const CLIENT_CASES: ClientCase[] = [
  {
    id: "mercacentro",
    name: "Mercacentro",
    sector: "Retail y Centros de Distribución",
    interventionType: "Sistemas de protección contra caídas y formación de brigadas",
    status: "verified_mention",
    note: "Ficha técnica y galería fotográfica en proceso de consolidación corporativa.",
  },
  {
    id: "incauca",
    name: "Incauca",
    sector: "Agroindustria y Procesamiento",
    interventionType: "Capacitación técnica en espacios confinados y trabajo en alturas",
    status: "verified_mention",
    note: "Proyecto técnico empresarial bajo estándares de seguridad agroindustrial.",
  },
  {
    id: "torreon",
    name: "Torreón",
    sector: "Construcción y Desarrollo Inmobiliario",
    interventionType: "Líneas de vida temporales, barandas técnicas y certificación de cuadrillas",
    status: "verified_mention",
    note: "Intervenciones integrales en frentes de obra vertical.",
  },
  {
    id: "hospital-federico-lleras",
    name: "Hospital Federico Lleras",
    sector: "Infraestructura Hospitalaria y Salud",
    interventionType: "Puntos de anclaje para mantenimiento de fachadas y cubiertas",
    status: "verified_mention",
    note: "Adecuación técnica para operaciones seguras de mantenimiento locativo.",
  },
];

export const TRUST_PILLARS = [
  {
    number: "01",
    title: "Enfoque de Ingeniería de Detalle",
    description:
      "No comercializamos soluciones genéricas. Evaluamos la física estructural, los tiros libres de caída y las condiciones operativas de cada planta o edificación.",
  },
  {
    number: "02",
    title: "Formación Rigurosa y Avalada",
    description:
      "Nuestros centros y entrenadores operan bajo el marco normativo colombiano (Res. 4272/2021 y Res. 0491/2020), asegurando validez jurídica y técnica para su empresa.",
  },
  {
    number: "03",
    title: "Respaldo Grupo Empresarial Eficaz",
    description:
      "Más de 20 años de trayectoria empresarial del grupo respaldan nuestra solidez contractual, capacidad financiera y cumplimiento en proyectos industriales complejos.",
  },
  {
    number: "04",
    title: "Solución Llave en Mano para Empresas",
    description:
      "Acompañamiento 360°: diagnóstico inicial, diseño e instalación de ingeniería, suministro de equipos certificados y capacitación a su personal operativo.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Levantamiento de Requerimientos",
    description:
      "Su equipo SST o de operaciones nos indica la necesidad: líneas de vida, cursos para cuadrillas o dotación técnica especializada.",
  },
  {
    step: "02",
    title: "Evaluación Técnica y Diagnóstico",
    description:
      "Nuestros ingenieros y especialistas revisan los planos, estructuras o perfiles ocupacionales para determinar la solución precisa y normativa.",
  },
  {
    step: "03",
    title: "Propuesta Comercial y Ejecución",
    description:
      "Presentamos una cotización formal detallada y programamos la instalación, auditoría o jornadas de formación con total trazabilidad.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "¿Cómo solicita una empresa la cotización de cursos para sus cuadrillas?",
    a: "A través de nuestro formulario empresarial o vía WhatsApp indicando el número aproximado de trabajadores, sedes y cursos requeridos. Generamos propuesta formal corporativa con cronogramas flexibles.",
  },
  {
    q: "¿Los sistemas de ingeniería contra caídas se entregan certificados?",
    a: "Sí. Toda instalación de líneas de vida o puntos de anclaje incluye memoria de cálculo firmada por ingeniero calificado, pruebas de tracción según aplique y dossier de certificación para auditorías de ARL o MinTrabajo.",
  },
  {
    q: "¿Dónde consultan los trabajadores o empresas los certificados emitidos?",
    a: "Mantenemos habilitada la plataforma oficial de verificación y descarga directa en línea a través del enlace de 'Consultar Certificados' en la cabecera del sitio.",
  },
  {
    q: "¿Tienen cobertura para atención en varias regiones de Colombia?",
    a: "Contamos con sedes operativas en Ibagué y Bogotá para formación y despachos, y ejecutamos proyectos de ingeniería e instalaciones industriales a nivel nacional.",
  },
];
