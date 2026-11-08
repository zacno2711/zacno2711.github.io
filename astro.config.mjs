// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL final del sitio. Al llamarse el repo zacno2711.github.io no hace falta `base`.
  site: 'https://zacno2711.github.io',

  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true, // /es/ y /en/ (las dos llevan prefijo)
      redirectToDefaultLocale: false, // la raíz "/" la redirigimos nosotros en src/pages/index.astro
    },
  },
});
