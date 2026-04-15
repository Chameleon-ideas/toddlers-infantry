import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'z81qmmi3',
      dataset: 'production',
      apiVersion: '2025-01-28',
      useCdn: true,
      stega: {
        enabled: false,
        studioUrl: '/admin',
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      include: ['gsap', 'lenis', 'gsap/ScrollTrigger'],
    },
  },
});
