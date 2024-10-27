/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-unused-vars
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-unused-vars
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	darkMode: "class",
	theme: {
		colors: {
			main: "#13132E"
		},
		extend: {
			fontSize: {
				sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
				md: ['1rem', { lineHeight: '1.5rem' }],      // 16px
				lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
				xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
			},
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			},
		},
	},
	plugins: [addVariablesForColors],
});


function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
