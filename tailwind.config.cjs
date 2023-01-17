/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
        'night': {
          700: 'hsl(220, 21%, 8%)', // '#11141A'
          800: 'hsl(0, 0%, 8%)', // '#141414'
          900: 'hsl(20, 11%, 5%)' // '#0F0D0C'
        },
      },
		},
	},
	plugins: [],
}
