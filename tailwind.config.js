/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '17.5rem',
        md: '3rem',
        lg: '17.5rem',
        xl: '17.5rem',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%'
      }
    },
    colors: {
      'primary': '#2F384E',
      'secondary': '#EEC458',
      'gray': '#52677C',
      'dark': '#000',
      'white': '#fff',
      'black': '#000',
    },
    backgroundColor: {
      'gray': '#F5F8FA',
      'light': '#fff',
      'dark': '#000',
      'secondary': '#EEC458'
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}
