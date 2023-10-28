/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./content/**/*.md", "./layouts/**/*.html"],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							padding: '.2em .4em',
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

