module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rd: {
          blue: '#0052CC',
          blueLight: '#4C9AFF',
          text: '#172B4D',
          textSecondary: '#6B778C',
          textAlt: '#212429',
          bgLight: '#f1f3f5',
          surfaceLight: '#FFFFFF',
          border: '#E1E5EA',

          bgDark: '#0F1115',
          surfaceDark: '#111827',
          textDark: '#F9FAFB',
          textDarkSecondary: '#D1D5DB',
          borderDark: '#374151',
        },
      },

      backgroundImage: {
        'rd-light-gradient':
          'linear-gradient(to bottom, #00cde0, #53ccdf, #76cbdd, #90cad9, #a6c9d4)',

        'rd-dark-gradient':
          'linear-gradient(to bottom, #0a2539, #122b3a, #1c303b, #26353c, #303a3d)',
      },

      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
