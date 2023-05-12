import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercelServerless from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://kalynbeach-com.vercel.app/',
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  output: 'server',
  adapter: vercelServerless({
    analytics: true
  })
});