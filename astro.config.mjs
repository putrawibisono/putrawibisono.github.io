import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://putrawibisono.com',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/design-preview'),
    }),
    {
      name: 'exclude-design-preview-from-prod',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          if (process.env.INCLUDE_DESIGN_PREVIEW !== 'true') {
            const previewDir = new URL('./design-preview/', dir);
            const previewPath = fileURLToPath(previewDir);
            if (fs.existsSync(previewPath)) {
              fs.rmSync(previewPath, { recursive: true, force: true });
            }
          }
        },
      },
    },
  ],
  build: {
    format: 'directory',
  },
});
