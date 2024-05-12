import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  /* defino el modo de renderizado, la opción static es por defecto, si necesito que se renderice por servidor debo colocar en la página que la necesita export const prerender = false */
  integrations: [tailwind(), react()],
  jsx: 'react'
});