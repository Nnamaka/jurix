import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tc': '#7D6E83',
        'sdb': '#D0B8A8',
        'hov': '#DFD3C3',
        'bod': '#F8EDE3'
      },
    },
  },
  plugins: [],
}
export default config
