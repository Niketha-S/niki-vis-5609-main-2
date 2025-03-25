import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'  // 👈 Fixes 404 errors on routes like /A1
    }),
    prerender: {
      entries: ['*'] // Ensures all pages are prerendered
    },
    paths: {
      base: "/niki-vis-5609-main-2"  // 👈 Base path for GitHub Pages
    },
    appDir: "_app"
  }
};

export default config;
