import type { Lang } from '../i18n/ui';

/*
  FUENTE ÚNICA DE SKILLS
  ----------------------
  Todo lo que aparece como chip en el sitio sale de este archivo:
    - la sección Skills muestra estas categorías completas
    - las tarjetas de proyectos solo pueden usar skills que existan aquí

  Para agregar una skill nueva: añádela a la categoría que corresponda.
  Queda disponible automáticamente en las tarjetas.

  `as const` convierte los textos en tipos literales, así TypeScript sabe
  exactamente cuáles skills son válidas (ver el tipo SkillId más abajo).
*/
export const skillCategories = [
  {
    id: 'languages',
    label: { es: 'Lenguajes', en: 'Languages' },
    skills: ['Python', 'SQL', 'VBScript', 'JavaScript'],
  },
  {
    id: 'orchestration',
    label: { es: 'Orquestación y Automatización', en: 'Orchestration & Automation' },
    skills: ['Apache Airflow', 'Selenium', 'Playwright', 'Robocorp', 'UiPath', 'OCR', 'ETL'],
  },
  {
    id: 'data-processing',
    label: { es: 'Procesamiento de Datos', en: 'Data Processing' },
    skills: ['Pandas', 'BeautifulSoup'],
  },
  {
    id: 'devops',
    label: { es: 'DevOps', en: 'DevOps' },
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub'],
  },
  {
    id: 'databases',
    label: { es: 'Bases de Datos', en: 'Databases' },
    skills: ['PostgreSQL'],
  },
  {
    id: 'frameworks',
    label: { es: 'Frameworks Web', en: 'Web Frameworks' },
    skills: ['Django'],
  },
  {
    id: 'integrations',
    label: { es: 'Integraciones', en: 'Integrations' },
    skills: ['SAP'],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  label: Record<Lang, string>;
  skills: readonly string[];
}>;

// Unión de todas las skills válidas: 'Python' | 'SQL' | 'Docker' | ...
export type SkillId = (typeof skillCategories)[number]['skills'][number];

const validSkills: ReadonlySet<string> = new Set(
  skillCategories.flatMap((category) => category.skills as readonly string[]),
);

/*
  Validación en tiempo de ejecución.
  TypeScript avisa en el editor, pero Astro NO frena el build por errores de
  tipos. Por eso, además, esta función lanza un error real: si una tarjeta usa
  una skill que no está en la lista, el build (y el servidor de desarrollo) fallan.
*/
export function assertSkills(skills: readonly string[], usedIn: string): void {
  const unknown = skills.filter((skill) => !validSkills.has(skill));
  if (unknown.length > 0) {
    throw new Error(
      `[skills] "${unknown.join('", "')}" no existe(n) en src/data/skills.ts (usado en: ${usedIn}). ` +
        `Agrégala(s) primero a la sección Skills. Skills válidas: ${[...validSkills].join(', ')}.`,
    );
  }
}
