import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://kalynbeach-com.netlify.app',
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});