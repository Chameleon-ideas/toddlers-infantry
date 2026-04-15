import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'v5fsrvv1', // Placeholder Project ID (can be updated later)
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
