import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',   // Ensure static site is output to `build/`
			assets: 'build',
			fallback: 'index.html' // Required for GitHub Pages
		}),
		paths: {
			base: process.env.BASE_PATH || "/niki-vis-5609-main-2" // Set correct base path
		}
	}
};

export default config;

