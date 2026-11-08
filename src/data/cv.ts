import type { Lang } from '../i18n/ui';

/*
  Los PDFs viven en public/cv/ y se copian tal cual al sitio.
  Para actualizar un CV: reemplaza el archivo conservando el MISMO nombre.
*/
export const cvFiles: Record<Lang, { href: string; filename: string }> = {
  es: {
    href: '/cv/Juan-Pablo-Zapata-CV-ES.pdf',
    filename: 'Juan-Pablo-Zapata-CV-ES.pdf',
  },
  en: {
    href: '/cv/Juan-Pablo-Zapata-CV-EN.pdf',
    filename: 'Juan-Pablo-Zapata-CV-EN.pdf',
  },
};
