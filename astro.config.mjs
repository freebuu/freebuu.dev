import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://freebuu.dev',
  experimental: {
    assets: true
   },
  integrations: [tailwind()],
  vite: {
    build: {
        rollupOptions: {
            external: [
                "shiki/themes/hc_light.json"
            ],
        },
    },
  },
});