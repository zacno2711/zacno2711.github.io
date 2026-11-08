import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;
type LList = Record<Lang, readonly string[]>;

const experience: ReadonlyArray<{ title: L; org: L; period: L; bullets: LList }> = [
  {
    title: { es: 'Data & Automation Developer', en: 'Data & Automation Developer' },
    org: { es: 'Data Finanzas', en: 'Data Finanzas' },
    period: { es: 'Feb 2024 – Presente', en: 'Feb 2024 – Present' },
    bullets: {
      es: [
        'Lideré el ciclo de vida completo de proyectos de ingesta y orquestación de datos, desde la planificación arquitectónica y desarrollo técnico en Python hasta el despliegue containerizado y monitoreo continuo.',
        'Diseñé e implementé pipelines de automatización en Apache Airflow, optimizando la infraestructura y flujos de trabajo para escalar la capacidad del sistema de 10 a más de 100 instancias simultáneas.',
        'Construí canalizaciones de automatización robustas y mantenibles, reduciendo la intervención manual y asegurando una alta confiabilidad del sistema.',
      ],
      en: [
        'Led the full lifecycle of data ingestion and orchestration projects, from architecture planning and Python development to containerized deployment and continuous monitoring.',
        'Designed and implemented automation pipelines using Apache Airflow, improving infrastructure and workflows to increase system capacity from 10 to over 100 simultaneous instances.',
        'Built reliable and maintainable automation pipelines, reducing manual work and ensuring high system reliability.',
      ],
    },
  },
  {
    title: {
      es: 'Python Developer – Data Integration (Prácticas)',
      en: 'Python Developer – Data Integration (Internship)',
    },
    org: { es: 'Maaji', en: 'Maaji' },
    period: { es: 'May 2023 – Nov 2023', en: 'May 2023 – Nov 2023' },
    bullets: {
      es: [
        'Brindé soporte y mantenimiento a bots de automatización encargados de la transferencia y transformación de datos.',
        'Colaboré en la mejora de soluciones RPA para aumentar la eficiencia y reducir la carga de trabajo manual.',
      ],
      en: [
        'Provided support and maintenance for automation bots responsible for data transfer and transformation.',
        'Collaborated on improving RPA solutions to increase efficiency and reduce manual workload.',
      ],
    },
  },
];

const education: ReadonlyArray<{ title: L; org: L; period: L }> = [
  {
    title: { es: 'Ingeniería en Desarrollo de Software', en: 'Software Development Engineering' },
    org: {
      es: 'ITM (Instituto Tecnológico Metropolitano) – Medellín, Colombia',
      en: 'ITM (Metropolitan Technological Institute) – Medellín, Colombia',
    },
    period: { es: '2026 – Presente (en curso)', en: '2026 – Present (in progress)' },
  },
  {
    title: { es: 'Técnico como Desarrollador de Software', en: 'Technical Degree in Software Development' },
    org: { es: 'Cesde – Medellín, Colombia', en: 'Cesde – Medellín, Colombia' },
    period: { es: 'Completado en 2023', en: 'Completed in 2023' },
  },
];

const certifications: ReadonlyArray<L> = [
  { es: 'Gestión de Proyectos Ágiles en Jira (Scrum & Kanban)', en: 'Agile Project Management with Jira (Scrum & Kanban)' },
  { es: 'Especialización en Programación con Python – Platzi', en: 'Python Programming Specialization – Platzi' },
  { es: 'Introducción al Desarrollo Backend – Platzi', en: 'Introduction to Backend Development – Platzi' },
  { es: 'Formación Certificada en UiPath – UiPath Academy', en: 'UiPath Certified Training – UiPath Academy' },
  { es: 'Certificación en Robocorp', en: 'Robocorp Certification' },
];

// Devuelve todo el contenido ya en el idioma pedido
export function getResume(lang: Lang) {
  return {
    experience: experience.map((e) => ({
      title: e.title[lang],
      org: e.org[lang],
      period: e.period[lang],
      bullets: e.bullets[lang],
    })),
    education: education.map((e) => ({
      title: e.title[lang],
      org: e.org[lang],
      period: e.period[lang],
    })),
    certifications: certifications.map((c) => c[lang]),
  };
}
