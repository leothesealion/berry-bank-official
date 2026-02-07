import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Berry Red - Primary
        berry: {
          DEFAULT: '#9E1916',
          50: '#F9E6E6',
          100: '#F2CCCC',
          200: '#E59999',
          300: '#D86666',
          400: '#CB3333',
          500: '#9E1916',
          600: '#7E1412',
          700: '#5F0F0D',
          800: '#3F0A09',
          900: '#200504',
        },
        // Growth Green - Accent
        growth: {
          DEFAULT: '#16A075',
          50: '#E6F7F2',
          100: '#CCEFE5',
          200: '#99DFCC',
          300: '#66CFB2',
          400: '#33BF99',
          500: '#16A075',
          600: '#12805E',
          700: '#0D6046',
          800: '#09402F',
          900: '#042017',
        },
        // Background Void - Dark Mode Default
        void: {
          DEFAULT: '#0B0B0B',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1A1A1A',
          700: '#0B0B0B',
          800: '#050505',
          900: '#000000',
        },
        // Text Mist
        mist: {
          DEFAULT: '#FAFAFA',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#A3A3A3',
          600: '#737373',
          700: '#525252',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-mplus)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(158, 25, 22, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(158, 25, 22, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
