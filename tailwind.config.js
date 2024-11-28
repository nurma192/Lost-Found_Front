const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/(listbox|divider).js"
	],
	theme: {
		extend: {
			fontFamily: {
				'cera': ['"Cera Pro Regular"', 'sans-serif'], // Use "Cera Pro" as the base font family
			},
		},
	},
	plugins: [nextui()],
};
