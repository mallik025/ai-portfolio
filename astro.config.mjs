import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mallik025.github.io',
  base: '/ai-portfolio',
  integrations: [tailwind()],
});
