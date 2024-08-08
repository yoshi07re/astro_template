import type { Config } from 'tailwindcss';

const config: Config = {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      fontFamily: {
        jp: ['Noto Sans JP'],
      },
      margin: {
        'block-trim': 'calc((1em - 1lh) / 2)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
