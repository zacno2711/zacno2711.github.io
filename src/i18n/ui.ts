// Idiomas disponibles. Para agregar uno nuevo: añádelo aquí y en `ui`.
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

// Diccionario de textos. Cada clave debe existir en TODOS los idiomas.
export const ui = {
  es: {
    'meta.title': 'Juan Pablo Zapata | Data & Automation Developer',
    'nav.label': 'Secciones',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.portfolio': 'Portafolio',
    'nav.resume': 'Experiencia',
    'nav.contact': 'Contacto',

    'sidebar.role': 'Data & Automation Developer',
    'sidebar.email': 'Correo',
    'sidebar.phone': 'Teléfono',
    'sidebar.location': 'Ubicación',
    'sidebar.locationValue': 'Medellín, Colombia',
    'sidebar.theme': 'Tema',
    'sidebar.themeAria': 'Cambiar entre tema claro y oscuro',
    'sidebar.language': 'Idioma',
    'sidebar.languageAria': 'Cambiar idioma a inglés',

    'about.title': 'Sobre mí',
    'about.text':
      'Desarrollador de Software y Datos con más de 3 años de experiencia, especializado en el diseño, desarrollo e ingesta de pipelines de datos a gran escala y flujos de automatización complejos.',
    'skills.title': 'Habilidades',
    'portfolio.title': 'Portafolio',
    'portfolio.sample.title': 'Proyecto de ejemplo (tarjeta de prueba)',
    'portfolio.sample.description':
      'Tarjeta temporal para probar el diseño. Aquí irá una descripción corta del problema, la solución y el resultado del proyecto.',
    'resume.title': 'Experiencia',
    'contact.title': 'Contacto',
    'common.soon': 'Próximamente.',
  },
  en: {
    'meta.title': 'Juan Pablo Zapata | Data & Automation Developer',
    'nav.label': 'Sections',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',

    'sidebar.role': 'Data & Automation Developer',
    'sidebar.email': 'Email',
    'sidebar.phone': 'Phone',
    'sidebar.location': 'Location',
    'sidebar.locationValue': 'Medellín, Colombia',
    'sidebar.theme': 'Theme',
    'sidebar.themeAria': 'Switch between light and dark theme',
    'sidebar.language': 'Language',
    'sidebar.languageAria': 'Switch language to Spanish',

    'about.title': 'About',
    'about.text':
      'Software and Data Developer with over 3 years of experience, specializing in the design, development, and ingestion of large-scale data pipelines and complex automation workflows.',
    'skills.title': 'Skills',
    'portfolio.title': 'Portfolio',
    'portfolio.sample.title': 'Sample project (test card)',
    'portfolio.sample.description':
      'Temporary card to test the design. A short description of the problem, the solution and the result will go here.',
    'resume.title': 'Resume',
    'contact.title': 'Contact',
    'common.soon': 'Coming soon.',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

// Devuelve una función t('clave') que entrega el texto en el idioma pedido.
// Si falta la clave en ese idioma, cae al idioma por defecto.
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

// Dada la URL actual, devuelve la misma página en el otro idioma.
// /es/ -> /en/    /es/proyectos/x -> /en/proyectos/x
export function getAlternateUrl(pathname: string, target: Lang): string {
  return pathname.replace(/^\/(es|en)(?=\/|$)/, `/${target}`);
}
