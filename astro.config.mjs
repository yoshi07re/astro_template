import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.jp',
  server: { port: 9999 },
  integrations: [tailwind(), sitemap(), react(), alpinejs()],
});
