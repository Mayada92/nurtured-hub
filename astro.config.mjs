// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  output: 'static',
  // For GitHub Pages deployment
  site: 'https://mayada92.github.io',
  base: '/nurtured-hub',
});
