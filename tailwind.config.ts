import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightBlue: '#F3F6FB',
        coral: '#FF6752',
        gold: '#FEB53A',
        darkOrange: '#D65C15',
        blue: '#4487FF',
        gray: '#707070',
        yellow: '#FFE530',
        softOrange: '#FFCC55',
        white: '#FFFFFF',
        semiTransparentBlue: '#4487FF57',
        lightPurpleOverlay: '#2C1DAD29',
        lightGray: '#F8F8F8',
        shadowBlack: '#00000029',
        mediumGray: '#808080',
        translucentCoral: '#FD68454D',
        lavender: '#A89EFF',
        purpleOverlay: '#3220CE29',
        brightOrange: '#FD6845',
        semiOpaquePurple: '#3220CE80',
        vividOrange: '#FE6845',
      },
    },
  },
  plugins: [],
} satisfies Config;
