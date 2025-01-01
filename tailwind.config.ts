import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        btncolor: '#FF5151',
      },
      boxShadow: {
        'custom-inner': 'inset 2.78px 2.78px 3.06px rgba(0, 0, 0, 0.25)',
        'custom-large': '8.33px 8.33px 11.11px 5.56px rgba(0, 0, 0, 0.25)', // Replace the RGBA value with your desired color.
      },
    },
  },
  plugins: [nextui(), MyClass],
} satisfies Config;
