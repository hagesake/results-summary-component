/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"light-red": "#ff5757",
				"orangey-yellow": " hsl(39, 100%, 56%)",
				"green-teal": " hsl(166, 100%, 37%)",
				"cobalt-blue": " hsl(234, 85%, 45%)",
				"btn-primary": "#373c5a",
				"light-slate-blue": "hsl(252, 100%, 67%)",
				"light-royal-blue": "hsl(241, 81%, 54%)",
				"violet-blue": "hsla(256, 72%, 46%, 1)",
				"persian-blue": "hsla(241, 72%, 46%, 0)",
			},
			fontFamily: {
				HankenGrotesk: ["Hanken Grotesk", "sans-serif"],
			},
		},
		screens: {
			mylg: "1440px",
		},
	},
	plugins: [],
};
