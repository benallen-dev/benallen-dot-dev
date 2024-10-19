/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./content/**/*.md", "./layouts/**/*.html", "./layouts/*.html"],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							padding: '.1em .2em',
							fontWeight: '400',
							backgroundColor: theme('colors.stone.950'),
							borderRadius: theme('borderRadius.DEFAULT'),
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}

