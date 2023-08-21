import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://freebuu.dev',
  experimental: {
    assets: true
   },
  integrations: [tailwind()]
});