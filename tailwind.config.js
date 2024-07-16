/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'instaborne': "url('/assets/instaborne.jpeg')",
        '629_securite': "url('/assets/629_securite.png')",
        'fwdmovement': "url('/assets/fwdmovement.png')",
        'natyf': "url('/assets/natyf.png')",
        'promutuel': "url('/assets/promutuel.png')",
      },
    },
  },
  plugins: [
  ],
}
