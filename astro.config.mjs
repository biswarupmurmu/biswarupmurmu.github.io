// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_BASE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: SITE_BASE_URL,
	integrations: [mdx(), sitemap()],
});
