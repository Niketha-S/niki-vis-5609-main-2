import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'  // 👈 This makes `/A1` and `/A2` work on GitHub Pages!
    }),
    paths: {
      base: "/niki-vis-5609-main-2" // 👈 Set base path for GitHub Pages
    }
  }
};

export default config;
