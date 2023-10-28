/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./content/**/*.md", "./layouts/**/*.html"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						code: {
							padding: '.2em .4em',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}

