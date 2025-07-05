import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // We can add custom theme extensions here later if needed,
      // for example, to match the --primary and --secondary colors from the original CSS.
      colors: {
        'brand-primary': '#00f0ff', // from :root --primary
        'brand-secondary': '#7928ca', // from :root --secondary
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], // Match original font
      },
    },
  },
  plugins: [],
};
export default config;
